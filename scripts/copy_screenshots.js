const fs = require('fs');
const path = require('path');

const srcDir = '/Users/ramzan/.gemini/antigravity-ide/brain/1de39c39-9a6c-4062-a5ed-a88779b3edd7';
const destDir = '/Users/ramzan/Pictures/savclip/public/screenshots';

// Ensure destination exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const prefixMapping = {
  '01_homepage_': '01_homepage.png',
  '02_hero_section_': '02_hero_section.png',
  '03_download_input_': '03_download_input.png',
  '04_download_preview_': '04_download_preview.png',
  '05_instagram_downloader_': '05_instagram_downloader.png',
  '06_youtube_downloader_': '06_youtube_downloader.png',
  '07_tiktok_downloader_': '07_tiktok_downloader.png',
  '08_facebook_downloader_': '08_facebook_downloader.png',
  '09_x_downloader_': '09_x_downloader.png',
  '10_snapchat_downloader_': '10_snapchat_downloader.png',
  '11_telegram_downloader_': '11_telegram_downloader.png',
  '12_threads_downloader_': '12_threads_downloader.png',
  '13_pinterest_downloader_': '13_pinterest_downloader.png',
  '14_privacy_policy_': '14_privacy_policy.png',
  '15_terms_of_service_': '15_terms_of_service.png',
  '16_contact_us_': '16_contact_us.png'
};

try {
  const files = fs.readdirSync(srcDir);
  console.log(`Scanning brain directory: ${srcDir}`);
  
  // For each mapping, find the latest matching file
  for (const [prefix, destName] of Object.entries(prefixMapping)) {
    const matches = files.filter(f => f.startsWith(prefix) && f.endsWith('.png'));
    if (matches.length > 0) {
      // Sort matches descending to get latest
      matches.sort((a, b) => b.localeCompare(a));
      const latestMatch = matches[0];
      const srcPath = path.join(srcDir, latestMatch);
      const destPath = path.join(destDir, destName);
      
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${latestMatch} -> ${destName}`);
    } else {
      console.warn(`No match found for prefix: ${prefix}`);
    }
  }
  console.log('Finished copying screenshots successfully!');
} catch (error) {
  console.error('Error copying screenshots:', error);
}
