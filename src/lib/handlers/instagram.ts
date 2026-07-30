import { fetchWithRotation, resolveUrl } from "../api-utils";
import { type PlatformResult, type Media } from "../../types/download";

/**
 * Primary Instagram API using RapidAPI
 */
async function primaryInstagramApi(url: string): Promise<PlatformResult> {
  const resolvedUrl = await resolveUrl(url);
  const apiUrl = `https://insta-reels-downloader-the-fastest-hd-reels-fetcher-api.p.rapidapi.com/unified/index?url=${encodeURIComponent(resolvedUrl)}`;

  const response = await fetchWithRotation(apiUrl, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "insta-reels-downloader-the-fastest-hd-reels-fetcher-api.p.rapidapi.com",
    }
  }, "instagram");

  const result = await response.json();
  console.log("[DEBUG] Instagram API Response:", JSON.stringify(result, null, 2));
  
  if (!result.success || !result.data) {
    throw new Error("Failed to fetch Instagram data from primary API.");
  }

  const { data, media_type, shortcode } = result;
  const medias: Media[] = [];
  const items = data.content?.items || [];
  
  // Handle Sidecar/Carousel (multiple items) vs Single Item
  if ((media_type === "sidecar" || items.length > 1) && items.length > 0) {
    const listItems = items.map((item: any, index: number) => ({
      id: `${shortcode}-${index}`,
      title: `${data.title || 'Instagram Post'} - Item ${index + 1}`,
      thumbnail: item.thumbnail_url || data.cover_thumbnail || item.media_url,
      url: item.media_url
    }));

    return {
      title: data.title || "Instagram Carousel",
      thumbnail: data.cover_thumbnail || (items[0]?.thumbnail_url) || "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",
      medias: [],
      type: "list",
      items: listItems,
      caption: data.title || `Instagram Post - ${shortcode}`,
      likes: 0,
      commentCount: 0
    };
  } else {
    // Single media
    let item = items[0];
    
    if (!item) {
      item = {
        type: media_type === 'video' || data.content?.type === 'video' ? 'video' : 'photo',
        media_url: data.content?.media_url || data.media_url,
        thumbnail_url: data.content?.thumbnail_url || data.cover_thumbnail || data.thumbnail_url
      };
    }
    
    if (item && item.media_url) {
      medias.push({
        id: `${shortcode}-main`,
        url: item.media_url,
        quality: "HD",
        type: item.type === "video" ? "video" : "image",
        extension: item.type === "video" ? "mp4" : "jpg"
      });
    }

    return {
      title: data.title || "Instagram Post",
      thumbnail: data.cover_thumbnail || item?.thumbnail_url || "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",
      medias,
      caption: data.title || `Instagram Post - ${shortcode}`,
      likes: 0,
      commentCount: 0
    };
  }
}

/**
 * Fallback Instagram API using Cobalt Engine
 */
async function fallbackInstagramApi(url: string): Promise<PlatformResult> {
  console.log("[API] Attempting Instagram fallback via Cobalt engine...");
  
  const response = await fetch("https://api.cobalt.tools/api/json", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url: url,
      videoQuality: "max"
    })
  });

  if (!response.ok) {
    throw new Error(`Fallback Cobalt API returned HTTP ${response.status}`);
  }

  const data = await response.json();
  console.log("[DEBUG] Instagram Cobalt Response:", JSON.stringify(data).substring(0, 300));

  if (data.status === "error") {
    throw new Error(data.text || "Cobalt API error processing Instagram link.");
  }

  const medias: Media[] = [];

  if (data.status === "picker" && Array.isArray(data.picker)) {
    const listItems = data.picker.map((item: any, index: number) => ({
      id: `insta-picker-${index}`,
      title: `Instagram Item ${index + 1}`,
      thumbnail: item.thumb || "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",
      url: item.url
    }));

    return {
      title: "Instagram Post",
      thumbnail: data.picker[0]?.thumb || "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",
      medias: [],
      type: "list",
      items: listItems,
      caption: "Instagram Post",
      likes: 0,
      commentCount: 0
    };
  }

  const videoUrl = data.url;
  if (videoUrl) {
    medias.push({
      id: `insta-${Date.now()}`,
      url: videoUrl,
      quality: "HD 1080p",
      type: "video",
      extension: "mp4"
    });
  }

  if (medias.length === 0) {
    throw new Error("No media found for this Instagram link.");
  }

  return {
    title: "Instagram Video",
    thumbnail: "https://www.instagram.com/static/images/ico/favicon.ico/36b3ee2d91ed.ico",
    medias,
    caption: "Instagram Video",
    likes: 0,
    commentCount: 0
  };
}

/**
 * Main Instagram Handler with Fallback Support
 */
export async function instagramHandler(url: string): Promise<PlatformResult> {
  try {
    return await primaryInstagramApi(url);
  } catch (primaryErr: any) {
    console.warn("[WARN] Primary Instagram API failed:", primaryErr.message);
    try {
      return await fallbackInstagramApi(url);
    } catch (fallbackErr: any) {
      console.error("[ERROR] Fallback Instagram API failed:", fallbackErr.message);
      throw new Error("Unable to download Instagram video. Please verify that the post link is valid and from a public account.");
    }
  }
}
