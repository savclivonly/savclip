import fs from 'fs';
import path from 'path';

const appDir = path.join(process.cwd(), 'src', 'app');
const entries = fs.readdirSync(appDir, { withFileTypes: true });

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  if (entry.name.startsWith('_') || entry.name.startsWith('[') || entry.name === 'api' || entry.name === 'share-target') {
    continue;
  }
  
  const pagePath = path.join(appDir, entry.name, 'page.tsx');
  if (!fs.existsSync(pagePath)) continue;
  
  let content = fs.readFileSync(pagePath, 'utf8');
  
  const metaIndex = content.indexOf('export async function generateMetadata');
  if (metaIndex !== -1) {
    const pageIndex = content.indexOf('export default', metaIndex);
    const metaBlock = pageIndex !== -1 ? content.substring(metaIndex, pageIndex) : content.substring(metaIndex);
    
    if (metaBlock.includes('locale') && !metaBlock.includes('const locale =') && !metaBlock.includes('const locale=')) {
      console.log(`Fixing generateMetadata in: ${entry.name}/page.tsx`);
      const openBracketIndex = content.indexOf('{', metaIndex);
      if (openBracketIndex !== -1) {
        content = content.substring(0, openBracketIndex + 1) + '\n  const locale = await getServerLocale();' + content.substring(openBracketIndex + 1);
        fs.writeFileSync(pagePath, content, 'utf8');
      }
    }
  }
}
console.log('Finished fixing metadata locales.');
