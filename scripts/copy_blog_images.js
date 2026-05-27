const fs = require('fs');
const path = require('path');

const srcDir = '/Users/ramzan/.gemini/antigravity-ide/brain/49a0d2f7-63c3-4d3c-89e1-4cb31f124077';
const destDir = '/Users/ramzan/Pictures/savclip/public/images/blog';

// Ensure destDir exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const images = {
  'reels_guide_blog_1779817906827.png': 'reels-guide.png',
  'tiktok_guide_blog_1779817940760.png': 'tiktok-guide.png',
  'hashtags_guide_blog_1779817985195.png': 'hashtags-guide.png',
  'youtube_shorts_blog_1779818048844.png': 'youtube-shorts.png',
  'viral_reels_blog_1779818116472.png': 'viral-reels.png',
  'ig_bio_blog_1779818278898.png': 'ig-bio.png'
};

Object.entries(images).forEach(([srcName, destName]) => {
  const srcPath = path.join(srcDir, srcName);
  const destPath = path.join(destDir, destName);
  try {
    const data = fs.readFileSync(srcPath);
    fs.writeFileSync(destPath, data);
    console.log(`Successfully copied data of ${srcName} to ${destName}`);
  } catch (error) {
    console.error(`Failed to copy data of ${srcName}:`, error.message);
  }
});
