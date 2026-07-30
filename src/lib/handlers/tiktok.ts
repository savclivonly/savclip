import { fetchWithRotation, resolveUrl } from "../api-utils";
import { type PlatformResult, type Media } from "../../types/download";

/**
 * Fast TikTok API (New): tiktok-video-downloader-7690-video-per-months-for-free.p.rapidapi.com
 */
async function fastTiktokApi(resolvedUrl: string): Promise<PlatformResult> {
  const apiUrl = `https://tiktok-video-downloader-7690-video-per-months-for-free.p.rapidapi.com/tiktok-video.php?url=${encodeURIComponent(resolvedUrl)}`;

  const response = await fetchWithRotation(apiUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tiktok-video-downloader-7690-video-per-months-for-free.p.rapidapi.com",
    },
  }, "tiktok");

  const result = await response.json();
  console.log("[DEBUG] Fast TikTok API Response:", JSON.stringify(result).substring(0, 500));

  if (result.status !== "success" || !result.video_url) {
    throw new Error(result.message || "Fast API failed to fetch TikTok video.");
  }

  const medias: Media[] = [];
  
  medias.push({
    id: `${result.author_id || "tiktok"}-video-fast`,
    url: result.video_url,
    quality: "High Quality (No Watermark)",
    type: "video",
    extension: "mp4"
  });

  if (result.music) {
    medias.push({
      id: `${result.author_id || "tiktok"}-audio-fast`,
      url: result.music,
      quality: "Original Audio",
      type: "audio",
      extension: "mp3"
    });
  }

  return {
    title: result.title || "TikTok Video",
    caption: result.title || "",
    thumbnail: result.cover || "https://www.tiktok.com/favicon.ico",
    medias,
    author: result.author || "TikTok User",
    authorId: result.author_id || "tiktok",
    likes: result.like_count || 0,
    commentCount: result.comment_count || 0,
    shareCount: result.share_count || 0,
  };
}

/**
 * Primary TikTok API: snap-video3.p.rapidapi.com
 */
async function primaryTiktokApi(resolvedUrl: string): Promise<PlatformResult> {
  const apiUrl = "https://snap-video3.p.rapidapi.com/download";
  const body = new URLSearchParams({ url: resolvedUrl }).toString();

  const response = await fetchWithRotation(apiUrl, {
    method: "POST",
    headers: {
      "x-rapidapi-host": "snap-video3.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
  }, "tiktok");

  const result = await response.json();
  console.log("[DEBUG] Primary TikTok API Response:", JSON.stringify(result).substring(0, 500));

  if (!result || !result.medias || result.medias.length === 0) {
    throw new Error("Primary API failed: No media found.");
  }

  const medias: Media[] = result.medias
    .filter((media: any) => media.url && !media.url.includes('_original.mp4'))
    .map((media: any, index: number) => {
    let qualityStr = media.quality || (media.videoAvailable ? "Video" : "Audio");
    if (qualityStr.toLowerCase() === '128kbps') {
      qualityStr = '128kbps Audio';
    } else {
      qualityStr = qualityStr.split(' ').map((w: string) => w.toUpperCase() === 'HD' ? 'HD' : w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
    const isActuallyAudio = qualityStr.toLowerCase().includes('audio') || qualityStr.toLowerCase().includes('kbps');
    const isVideo = media.videoAvailable !== false && !isActuallyAudio;

    return {
      id: `tiktok-media-${index}`,
      url: media.url,
      quality: qualityStr,
      type: isVideo ? "video" : "audio",
      extension: media.extension || (isVideo ? "mp4" : "mp3")
    };
  });

  let authorId = "tiktok";
  const usernameMatch = resolvedUrl.match(/@([\w.-]+)/);
  if (usernameMatch && usernameMatch[1]) {
    authorId = usernameMatch[1];
  }

  return {
    title: result.title || "TikTok Video",
    caption: result.title || "",
    thumbnail: result.thumbnail || "https://www.tiktok.com/favicon.ico",
    medias,
    author: authorId, 
    authorId: authorId,
    likes: 0,
    commentCount: 0,
    shareCount: 0,
  };
}

/**
 * Fallback TikTok API: tiktok-download5.p.rapidapi.com
 */
async function fallbackTiktokApi(resolvedUrl: string): Promise<PlatformResult> {
  const apiUrl = `https://tiktok-download5.p.rapidapi.com/getVideo?url=${encodeURIComponent(resolvedUrl)}`;

  const response = await fetchWithRotation(apiUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "tiktok-download5.p.rapidapi.com",
    },
  }, "tiktok");

  const result = await response.json();
  console.log("[DEBUG] Fallback TikTok API Response:", JSON.stringify(result).substring(0, 500));

  if (result.code !== 0 || !result.data) {
    throw new Error(result.msg || "Fallback API failed to fetch TikTok video.");
  }

  const data = result.data;
  const medias: Media[] = [];
  
  if (data.play) {
    medias.push({
      id: `${data.author?.unique_id || "tiktok"}-video-sd`,
      url: data.play,
      quality: "SD (No Watermark)",
      type: "video",
      extension: "mp4"
    });
  }

  if (data.hdplay && data.hdplay !== data.play) {
    medias.push({
      id: `${data.author?.unique_id || "tiktok"}-video-hd`,
      url: data.hdplay,
      quality: "HD (No Watermark)",
      type: "video",
      extension: "mp4"
    });
  }

  if (data.wmplay) {
    medias.push({
      id: `${data.author?.unique_id || "tiktok"}-video-wm`,
      url: data.wmplay,
      quality: "SD (Watermark)",
      type: "video",
      extension: "mp4"
    });
  }

  if (data.music_info?.play) {
    medias.push({
      id: `${data.author?.unique_id || "tiktok"}-audio`,
      url: data.music_info.play,
      quality: "Original Audio",
      type: "audio",
      extension: "mp3"
    });
  }

  if (medias.length === 0) {
    throw new Error("No media found in the fallback response.");
  }

  return {
    title: data.title || "TikTok Video",
    caption: data.title || "",
    thumbnail: data.cover || "https://www.tiktok.com/favicon.ico",
    medias,
    author: data.author?.nickname || "TikTok User",
    authorId: data.author?.unique_id || "tiktok",
    likes: data.digg_count || 0,
    commentCount: data.comment_count || 0,
    shareCount: data.share_count || 0,
  };
}

export async function tiktokHandler(url: string): Promise<PlatformResult> {
  let resolvedUrl = await resolveUrl(url);
  const originalUrl = url;
  
  if (resolvedUrl.includes("?") && !resolvedUrl.includes("/video/")) {
    resolvedUrl = resolvedUrl.split("?")[0];
  }

  try {
    console.log(`[API] Trying Fast TikTok API for ${resolvedUrl}...`);
    return await fastTiktokApi(resolvedUrl);
  } catch (err: any) {
    console.warn(`[API] Fast TikTok API failed: ${err.message}. Trying Primary API...`);
    try {
      return await primaryTiktokApi(resolvedUrl);
    } catch (err2: any) {
      console.warn(`[API] Primary TikTok API failed: ${err2.message}. Trying RapidAPI Fallback...`);
      try {
        return await fallbackTiktokApi(resolvedUrl);
      } catch (err3: any) {
        console.warn(`[API] RapidAPI Fallback failed: ${err3.message}. Triggering Cobalt fallback...`);
        try {
          return await cobaltTiktokApi(originalUrl);
        } catch (cobaltErr: any) {
          throw new Error("Unable to download TikTok video. Please verify the link is valid and from a public video.");
        }
      }
    }
  }
}

async function cobaltTiktokApi(url: string): Promise<PlatformResult> {
  console.log("[API] Attempting TikTok fallback via Cobalt engine...");
  const response = await fetch("https://api.cobalt.tools/api/json", {
    method: "POST",
    headers: { "Accept": "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({ url: url, videoQuality: "max" })
  });

  if (!response.ok) throw new Error("Fallback Cobalt TikTok API failed.");
  const data = await response.json();
  if (data.status === "error") throw new Error(data.text || "Cobalt TikTok error.");

  const videoUrl = data.url || data.picker?.[0]?.url;
  if (!videoUrl) throw new Error("No TikTok video URL found.");

  return {
    title: "TikTok Video",
    thumbnail: "https://www.tiktok.com/favicon.ico",
    medias: [
      { id: `tt-${Date.now()}`, url: videoUrl, quality: "No Watermark (HD)", type: "video", extension: "mp4" }
    ],
    caption: "TikTok Video",
    likes: 0,
    commentCount: 0
  };
}
