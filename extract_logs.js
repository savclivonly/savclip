const fs = require('fs');
const readline = require('readline');

const logPath = "/Users/ramzan/.gemini/antigravity-ide/brain/2ce854fe-69f0-447a-ac49-4142427057bd/.system_generated/logs/transcript_full.jsonl";

async function processLog() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (!line.trim()) continue;
    try {
      const data = JSON.parse(line);
      const stepIndex = data.step_index;
      
      // Step index 472: VIEW_FILE of lines 1 to 800 of run_report_expander.py
      if (stepIndex === 472) {
        console.log("Found step 472!");
        fs.writeFileSync("step_472_content.txt", data.content || "");
      }
      
      // Step index 476: VIEW_FILE of lines 1350 to 1950 of run_report_expander.py
      if (stepIndex === 476) {
        console.log("Found step 476!");
        fs.writeFileSync("step_476_content.txt", data.content || "");
      }
      
      // Step index 488: VIEW_FILE of lines 803 to 1354 of run_report_expander.py
      if (stepIndex === 488) {
        console.log("Found step 488!");
        fs.writeFileSync("step_488_content.txt", data.content || "");
      }
    } catch (e) {
      // Ignore parse errors
    }
  }
  console.log("Finished processing logs.");
}

processLog();
