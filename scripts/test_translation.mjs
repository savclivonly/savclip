// Using global fetch (available in Node 18+)

async function translateText(text, targetLang) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const json = await res.json();
  // The response is an array of arrays representing the translated segments
  const translatedSegments = json[0];
  const translatedText = translatedSegments.map(s => s[0]).join('');
  return translatedText;
}

async function test() {
  const strings = [
    "Why SavClip is the Best TikTok Shorts Downloader",
    "Welcome to SavClip, the ultimate global destination for saving TikTok Shorts and Reels.",
    "Copy Link: Open TikTok and find the Short or Reel you want to save. Tap the share button.",
    "Is it free to save TikTok shorts with SavClip?",
    "Yes, SavClip is a completely free online TikTok shorts tool."
  ];

  const payload = strings.join('\n\n[SPLIT]\n\n');
  console.log("Payload:\n", payload);

  for (const lang of ['es', 'pt', 'id', 'ar']) {
    try {
      console.log(`\nTranslating to ${lang}...`);
      const result = await translateText(payload, lang);
      console.log(`Result for ${lang}:`);
      console.log(result);
      
      const splitResult = result.split(/\[SPLIT\]/i).map(s => s.trim());
      console.log(`Split count: ${splitResult.length} (Expected: ${strings.length})`);
      splitResult.forEach((s, i) => {
        console.log(`  [${i}]: ${s}`);
      });
    } catch (err) {
      console.error(`Error for ${lang}:`, err);
    }
  }
}

test();
