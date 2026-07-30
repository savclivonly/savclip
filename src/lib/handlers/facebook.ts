import { fetchWithRotation, resolveUrl } from "../api-utils";
import { type PlatformResult, type Media } from "../../types/download";

async function primaryFacebookApi(url: string): Promise<PlatformResult> {
  let resolvedUrl = await resolveUrl(url);

  try {
    const urlObj = new URL(resolvedUrl);
    const v = urlObj.searchParams.get("v");
    if (v) {
      resolvedUrl = `${urlObj.origin}${urlObj.pathname}?v=${v}`;
    } else {
      resolvedUrl = `${urlObj.origin}${urlObj.pathname}`;
    }
  } catch (e) {}

  const apiUrl = `https://free-facebook-downloader.p.rapidapi.com/external-api/facebook-video-downloader?url=${encodeURIComponent(resolvedUrl)}`;

  const response = await fetchWithRotation(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-host": "free-facebook-downloader.p.rapidapi.com",
    },
    body: JSON.stringify({ url: resolvedUrl }), 
  }, "facebook");

  const result = await response.json();
  if (!result.success || !result.links) {
    throw new Error(result.message || "Failed to fetch Facebook video from primary API.");
  }

  const medias: Media[] = [];
  if (result.links["Download High Quality"]) {
    medias.push({
      id: `${result.id || Date.now()}-hd`,
      url: result.links["Download High Quality"],
      quality: "High Quality (HD)",
      type: "video",
      extension: "mp4"
    });
  }
  if (result.links["Download Low Quality"]) {
    medias.push({
      id: `${result.id || Date.now()}-sd`,
      url: result.links["Download Low Quality"],
      quality: "Normal Quality (SD)",
      type: "video",
      extension: "mp4"
    });
  }

  return {
    title: result.title || "Facebook Video",
    thumbnail: "https://www.facebook.com/images/fb_icon_325x325.png",
    medias,
    caption: `Facebook Video - ${result.id || 'Post'}`,
    likes: 0,
    commentCount: 0
  };
}

async function fallbackFacebookApi(url: string): Promise<PlatformResult> {
  console.log("[API] Attempting Facebook fallback via Cobalt engine...");
  const response = await fetch("https://api.cobalt.tools/api/json", {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ url: url, videoQuality: "max" })
  });

  if (!response.ok) throw new Error("Fallback Cobalt FB API failed.");
  const data = await response.json();
  if (data.status === "error") throw new Error(data.text || "Cobalt FB error.");

  const videoUrl = data.url || data.picker?.[0]?.url;
  if (!videoUrl) throw new Error("No Facebook video URL found.");

  return {
    title: "Facebook Video",
    thumbnail: "https://www.facebook.com/images/fb_icon_325x325.png",
    medias: [{ id: `fb-${Date.now()}`, url: videoUrl, quality: "High Quality (HD)", type: "video", extension: "mp4" }],
    caption: "Facebook Video",
    likes: 0,
    commentCount: 0
  };
}

export async function facebookHandler(url: string): Promise<PlatformResult> {
  try {
    return await primaryFacebookApi(url);
  } catch (err: any) {
    console.warn("[WARN] Primary Facebook API failed:", err.message);
    try {
      return await fallbackFacebookApi(url);
    } catch (fallbackErr: any) {
      console.error("[ERROR] Fallback Facebook API failed:", fallbackErr.message);
      throw new Error("Unable to download Facebook video. Please ensure the link is valid and from a public post.");
    }
  }
}
