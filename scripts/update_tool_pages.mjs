import fs from 'fs';
import path from 'path';

const appDir = path.join(process.cwd(), 'src', 'app');
const entries = fs.readdirSync(appDir, { withFileTypes: true });

let updatedCount = 0;

// Flexible regex to match generateMetadata signature up to const params = await props.params;
const metadataRegex = /export\s+async\s+function\s+generateMetadata\s*\(\s*props\s*:\s*{\s*params\s*:\s*Promise\s*<\s*{\s*locale\s*:\s*string\s*}\s*>\s*}\s*\)(?:\s*:\s*Promise\s*<\s*Metadata\s*>\s*)?{\s*const\s+params\s*=\s*await\s+props\.params\s*;/;

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  
  if (entry.name.startsWith('_') || entry.name.startsWith('[') || entry.name === 'api' || entry.name === 'share-target') {
    continue;
  }
  
  const pagePath = path.join(appDir, entry.name, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  const hasHardcodedLocale = content.includes("const locale = 'en';") || content.includes('const locale = "en";');
  const hasSeoAlternatesEn = content.includes("'en'") || content.includes('"en"');
  
  if (hasHardcodedLocale || hasSeoAlternatesEn) {
    console.log(`Processing: ${entry.name}/page.tsx`);
    
    // 1. Add import from "@/utils/locale-server" if not present
    if (!content.includes('getServerLocale')) {
      content = `import { getServerLocale } from "@/utils/locale-server";\n` + content;
    }
    
    // 2. Inject const locale inside generateMetadata safely after props.params
    if (metadataRegex.test(content)) {
      content = content.replace(metadataRegex, `export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const params = await props.params;
  const locale = await getServerLocale();`);
    }

    // 3. Replace const locale declarations in components
    content = content.replace(/const locale = 'en';/g, 'const locale = await getServerLocale();');
    content = content.replace(/const locale = "en";/g, 'const locale = await getServerLocale();');
    
    // 4. Replace 'en' in SEO calls
    content = content.replace(/(getToolSeoData\("[^"]+",\s*)'en'(\))/g, '$1locale$2');
    content = content.replace(/(getToolSeoData\("[^"]+",\s*)"en"(\))/g, '$1locale$2');
    content = content.replace(/(getToolSeoData\('[^']+',\s*)'en'(\))/g, '$1locale$2');
    content = content.replace(/(getToolSeoData\('[^']+',\s*)"en"(\))/g, '$1locale$2');
    
    content = content.replace(/(getSeoAlternates\("[^"]+",\s*)'en'(\))/g, '$1locale$2');
    content = content.replace(/(getSeoAlternates\("[^"]+",\s*)"en"(\))/g, '$1locale$2');
    content = content.replace(/(getSeoAlternates\('[^']+',\s*)'en'(\))/g, '$1locale$2');
    content = content.replace(/(getSeoAlternates\('[^']+',\s*)"en"(\))/g, '$1locale$2');
    
    fs.writeFileSync(pagePath, content, 'utf8');
    updatedCount++;
  }
}

console.log(`Updated ${updatedCount} files successfully.`);
