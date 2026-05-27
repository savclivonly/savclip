import fs from 'fs';
import path from 'path';

const baseDir = '/Users/ramzan/Pictures/savclip/src/app/[locale]';

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('<StructuredData')) {
        let updated = false;
        
        // Replace all <StructuredData tags that do not already contain 'locale=' prop
        const newContent = content.replace(/<StructuredData(?!\s+locale=)([\s\S]*?)\/>/g, (match) => {
          updated = true;
          // Insert locale={locale} right after <StructuredData
          return match.replace('<StructuredData', '<StructuredData locale={locale}');
        });

        if (updated) {
          fs.writeFileSync(fullPath, newContent, 'utf-8');
          console.log(`Updated page: ${fullPath}`);
        }
      }
    }
  }
}

processDirectory(baseDir);
console.log('Finished updating all page.tsx files!');
