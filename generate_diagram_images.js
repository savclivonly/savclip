const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_DIR = '/Users/ramzan/Pictures/savclip';
const DIAGRAMS_HTML = path.join(PROJECT_DIR, 'diagrams.html');
const SCREENSHOTS_DIR = path.join(PROJECT_DIR, 'public/screenshots');
const CHROME_PATH = '"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"';

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

function parseDiagrams() {
  const content = fs.readFileSync(DIAGRAMS_HTML, 'utf-8');
  
  // Extract style block
  const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
  if (!styleMatch) {
    console.error('Error: Could not find <style> block in diagrams.html');
    process.exit(1);
  }
  const styleContent = styleMatch[1];

  const containers = [];
  for (let i = 1; i <= 12; i++) {
    const searchStr = `id="diagram-${i}"`;
    const startIdx = content.indexOf(searchStr);
    if (startIdx !== -1) {
      // Find starting `<div` before this id
      const startDiv = content.lastIndexOf('<div', startIdx);
      
      // Count balanced div tags
      let openDivs = 0;
      let currentIdx = startDiv;
      while (currentIdx < content.length) {
        if (content.substring(currentIdx, currentIdx + 4) === '<div') {
          openDivs++;
          currentIdx += 4;
        } else if (content.substring(currentIdx, currentIdx + 6) === '</div>') {
          openDivs--;
          currentIdx += 6;
          if (openDivs === 0) {
            const containerHtml = content.substring(startDiv, currentIdx);
            containers.push({ id: i, html: containerHtml });
            break;
          }
        } else {
          currentIdx++;
        }
      }
    }
  }

  console.log(`Found ${containers.length} diagram containers.`);

  for (const container of containers) {
    const tempHtmlPath = path.join(PROJECT_DIR, `temp_diagram_${container.id}.html`);
    const outputPngPath = path.join(SCREENSHOTS_DIR, `diagram_${container.id}.png`);

    const modifiedStyle = styleContent + `
      body {
          margin: 0;
          padding: 0;
          background-color: #1e293b;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 900px;
          height: 650px;
          overflow: hidden;
      }
      .diagram-container {
          margin: 0 !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          border: none !important;
          width: 900px !important;
          height: 650px !important;
      }
    `;

    const singleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>${modifiedStyle}</style>
</head>
<body>
  ${container.html}
</body>
</html>`;

    fs.writeFileSync(tempHtmlPath, singleHtml, 'utf-8');
    console.log(`Generating diagram_${container.id}.png from ${tempHtmlPath}...`);

    const cmd = `${CHROME_PATH} --headless --disable-gpu --no-sandbox --single-process --no-zygote --disable-gpu-sandbox --user-data-dir="${path.join(PROJECT_DIR, 'chrome-profile')}" --crash-dumps-dir="${path.join(PROJECT_DIR, 'chrome-profile', 'Crashpad')}" --disable-crash-reporter --screenshot="${outputPngPath}" --window-size=900,650 "file://${tempHtmlPath}"`;
    try {
      execSync(cmd, { stdio: 'inherit' });
      console.log(`Success: Saved to ${outputPngPath}`);
    } catch (err) {
      console.error(`Error generating diagram ${container.id}:`, err);
    } finally {
      if (fs.existsSync(tempHtmlPath)) {
        fs.unlinkSync(tempHtmlPath);
      }
    }
  }
}

parseDiagrams();
