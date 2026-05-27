import fs from 'fs';
import path from 'path';

const baseSeoDir = '/Users/ramzan/Pictures/savclip/src/data/seo';
const locales = ['en', 'pt', 'es', 'id', 'ar'];

const results = {};

for (const locale of locales) {
  const dirPath = path.join(baseSeoDir, locale);
  if (!fs.existsSync(dirPath)) {
    console.log(`Directory does not exist: ${dirPath}`);
    continue;
  }

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.ts'));
  results[locale] = [];

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Parse the faqs array using regex to see how many items are defined.
    // e.g. faqs = [ ... ]
    const faqsMatch = content.match(/export const faqs\s*=\s*\[([\s\S]*?)\];/);
    if (!faqsMatch) {
      results[locale].push({ file, count: 0 });
      continue;
    }

    const arrayContent = faqsMatch[1];
    // Count occurrences of "{ q:" or '"q":' or "q :"
    const qMatches = arrayContent.match(/(["']?q["']?\s*:)/g);
    const count = qMatches ? qMatches.length : 0;

    if (count < 3) {
      results[locale].push({ file, count });
    }
  }
}

for (const [locale, files] of Object.entries(results)) {
  console.log(`Locale: ${locale}`);
  if (files.length === 0) {
    console.log('  All files have at least 3 FAQs!');
  } else {
    for (const f of files) {
      console.log(`  - ${f.file}: Only ${f.count} FAQs`);
    }
  }
}
