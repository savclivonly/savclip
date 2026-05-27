import fs from 'fs';
import path from 'path';
import vm from 'vm';

const seoDir = path.join(process.cwd(), 'src', 'data', 'seo');
const locales = ['en', 'pt', 'es', 'id', 'ar'];
const reportPath = path.join(process.cwd(), 'src', 'data', 'seo_audit_report.json');

function parseSeoFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const content = fs.readFileSync(filePath, 'utf8');
  const jsContent = content
    .replace(/export const/g, 'global.')
    .replace(/import type .*/g, '')
    .replace(/import .*/g, '');
  const context = { global: {} };
  vm.createContext(context);
  try {
    vm.runInContext(jsContent, context);
  } catch (err) {
    return null;
  }
  return context.global;
}

const enFiles = fs.readdirSync(path.join(seoDir, 'en')).filter(f => f.endsWith('.ts'));

const report = {
  reports: {},
  ogBugs: [],
  breadcrumbBugs: [],
  totalPagesCount: 95,
  seoFilesCount: enFiles.length
};

locales.forEach((locale) => {
  const missingFiles = [];
  const emptyMeta = [];
  const shortTitles = [];
  const longTitles = [];
  const shortDescs = [];
  const longDescs = [];
  const untranslated = [];
  const ok = [];

  enFiles.forEach((file) => {
    const slug = file.replace('.ts', '');
    const filePath = path.join(seoDir, locale, file);

    if (!fs.existsSync(filePath)) {
      missingFiles.push(slug);
      return;
    }

    const data = parseSeoFile(filePath);
    if (!data || !data.meta) {
      emptyMeta.push(slug);
      return;
    }

    const title = (data.meta.title || '').trim();
    const description = (data.meta.description || '').trim();

    let hasIssue = false;

    // Title checks
    if (!title) {
      emptyMeta.push(slug);
      hasIssue = true;
    } else if (title.length < 30) {
      shortTitles.push({
        slug,
        title,
        len: title.length
      });
      hasIssue = true;
    } else if (title.length > 70) {
      longTitles.push({
        slug,
        title,
        len: title.length
      });
      hasIssue = true;
    }

    // Description checks
    if (!description) {
      if (!hasIssue) emptyMeta.push(slug);
      hasIssue = true;
    } else if (description.length < 100) {
      shortDescs.push({
        slug,
        desc: description,
        len: description.length
      });
      hasIssue = true;
    } else if (description.length > 200) {
      longDescs.push({
        slug,
        desc: description,
        len: description.length
      });
      hasIssue = true;
    }

    // Translation checks
    if (locale !== 'en') {
      const enPath = path.join(seoDir, 'en', file);
      const enData = parseSeoFile(enPath);
      if (enData && enData.meta) {
        const enTitle = (enData.meta.title || '').trim();
        const enDesc = (enData.meta.description || '').trim();

        const titleSame = (title === enTitle && title.length > 0);
        const descSame = (description === enDesc && description.length > 0);

        if (titleSame || descSame) {
          untranslated.push({
            slug,
            titleSame,
            descSame,
            title,
            desc: description
          });
          hasIssue = true;
        }
      }
    }

    if (!hasIssue) {
      ok.push(slug);
    }
  });

  report.reports[locale] = {
    missingFiles,
    emptyMeta,
    shortTitles,
    longTitles,
    shortDescs,
    longDescs,
    untranslated,
    ok
  };
});

fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
console.log(`Successfully generated updated audit report at ${reportPath}`);
