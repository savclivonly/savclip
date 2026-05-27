const fs = require('fs');
const path = require('path');

const idDir = path.join(__dirname, '../src/data/seo/id');
const files = fs.readdirSync(idDir).filter(f => f.endsWith('.ts'));

const allowedWords = new Set([
  'savclip', 'mp3', 'mp4', 'hd', 'gif', 'pwa', 'url', 'dp', 'api', '3gpp', 'webm',
  'instagram', 'youtube', 'tiktok', 'facebook', 'snapchat', 'telegram', 'twitter', 'x'
]);

function hasEnglishWords(str) {
  if (typeof str !== 'string') return false;
  const words = str.match(/[a-zA-Z]+/g);
  if (!words) return false;
  
  for (let w of words) {
    const lw = w.toLowerCase();
    if (!allowedWords.has(lw) && lw.length > 2) {
      return true;
    }
  }
  return false;
}

const results = [];

for (let file of files) {
  const filePath = path.join(idDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract header object content
  const headerMatch = content.match(/export const header = \{([\s\S]*?)\};/);
  if (headerMatch) {
    const headerContent = headerMatch[1];
    const regex = /(?:\b(\w+)\b|"(.*?)"|'(.*?)')\s*:\s*(?:"(.*?)"|'(.*?)')/g;
    let match;
    while ((match = regex.exec(headerContent)) !== null) {
      const key = match[1] || match[2] || match[3];
      const val = match[4] || match[5];
      if (val && hasEnglishWords(val)) {
        results.push({ file, section: 'header', key, val });
      }
    }
  }

  // Extract meta object content
  const metaMatch = content.match(/export const meta = \{([\s\S]*?)\};/);
  if (metaMatch) {
    const metaContent = metaMatch[1];
    const regex = /(?:\b(\w+)\b|"(.*?)"|'(.*?)')\s*:\s*(?:"(.*?)"|'(.*?)')/g;
    let match;
    while ((match = regex.exec(metaContent)) !== null) {
      const key = match[1] || match[2] || match[3];
      const val = match[4] || match[5];
      if (val && hasEnglishWords(val)) {
        results.push({ file, section: 'meta', key, val });
      }
    }
  }
}

console.log(JSON.stringify(results, null, 2));
console.log(`Found ${results.length} properties with English values in Indonesian files.`);
