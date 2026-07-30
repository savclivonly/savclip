import { NextResponse } from "next/server";
import { statsManager } from "@/utils/stats";
import { facebookHandler } from "@/lib/handlers/facebook";
import { tiktokHandler } from "@/lib/handlers/tiktok";
import { youtubeHandler } from "@/lib/handlers/youtube";
import { telegramHandler } from "@/lib/handlers/telegram";

/**
 * In-Memory Rate Limiter Settings
 * Limits each IP to 20 requests per minute to protect the API quota.
 */
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const MAX_REQUESTS_PER_MINUTE = 20;
const WINDOW_MS = 60 * 1000; // 1 minute

/**
 * Main Download API Route.
 */
export async function POST(request: Request) {
  console.log("[API_ROUTE] Received download request");
  
  // 1. Get the user's IP Address
  const ip = request.headers.get("x-forwarded-for") || "unknown";
  
  // 2. Rate Limiting Logic
  if (ip !== "unknown") {
    const now = Date.now();
    const userRecord = rateLimitMap.get(ip);

    if (!userRecord || now > userRecord.resetTime) {
      // First request or window expired: Reset
      rateLimitMap.set(ip, { count: 1, resetTime: now + WINDOW_MS });
    } else {
      // Within window
      if (userRecord.count >= MAX_REQUESTS_PER_MINUTE) {
        console.warn(`[RATE_LIMIT] Blocked IP: ${ip}. Exceeded ${MAX_REQUESTS_PER_MINUTE} req/min.`);
        return NextResponse.json(
          { error: "Too many requests. Please wait 1 minute before trying again." },
          { status: 429 }
        );
      }
      // Increment count
      userRecord.count += 1;
    }
  }

  // 3. Track user activity
  statsManager.trackActivity(ip);

  try {
    const { url, platform } = await request.json();

    if (!url) {
      return NextResponse.json({ success: false, error: "URL is required" });
    }

    if (url.includes("mock") || url.includes("test")) {
      return NextResponse.json({
        success: true,
        data: {
          title: "BCA Major Project Presentation Guide - SavClip",
          caption: "Learn how to build and present your major project step by step with stunning UI designs and visual diagrams.",
          thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
          medias: [
            { id: "mock-1", url: "https://www.w3schools.com/html/mov_bbb.mp4", quality: "1080p (HD)", type: "video", extension: "mp4" },
            { id: "mock-2", url: "https://www.w3schools.com/html/mov_bbb.mp4", quality: "720p", type: "video", extension: "mp4" },
            { id: "mock-3", url: "https://www.w3schools.com/html/mov_bbb.mp4", quality: "360p", type: "video", extension: "mp4" },
            { id: "mock-4", url: "https://www.w3schools.com/html/mov_bbb.mp4", quality: "128kbps", type: "audio", extension: "mp3" }
          ],
          likes: 1250,
          commentCount: 84,
          duration: "10:24",
          author: "SavClip Team"
        }
      });
    }

    const lowerUrl = url.toLowerCase();
    let result = null;

    // Platform Dispatcher
    if (platform === "facebook" || lowerUrl.includes("facebook.com") || lowerUrl.includes("fb.watch") || lowerUrl.includes("fb.gg")) {
      result = await facebookHandler(url);
    } else if (platform === "tiktok" || lowerUrl.includes("tiktok.com")) {
      result = await tiktokHandler(url);
    } else if (platform === "youtube" || lowerUrl.includes("youtube.com") || lowerUrl.includes("youtu.be")) {
      result = await youtubeHandler(url);
    } else if (platform === "instagram" || lowerUrl.includes("instagram.com") || lowerUrl.includes("ig.me")) {
      const { instagramHandler } = await import("@/lib/handlers/instagram");
      result = await instagramHandler(url);
    } else if (platform === "telegram" || lowerUrl.includes("t.me") || lowerUrl.includes("telegram.me")) {
      result = await telegramHandler(url);
    } else if (platform === "snapchat" || lowerUrl.includes("snapchat.com")) {
      const { snapchatHandler } = await import("@/lib/handlers/snapchat");
      result = await snapchatHandler(url);
    } else if (platform === "twitter" || platform === "x" || lowerUrl.includes("twitter.com") || lowerUrl.includes("x.com")) {
      const { twitterHandler } = await import("@/lib/handlers/twitter");
      result = await twitterHandler(url);
    } else {
      return NextResponse.json({ 
        success: false,
        error: "Currently only Instagram, Facebook, TikTok, YouTube, Snapchat, Telegram, and X (Twitter) are supported." 
      });
    }

    if (result) {
      result.url = url;
      return NextResponse.json({
        success: true,
        data: result,
      });
    }

    return NextResponse.json({ success: false, error: "Failed to process the requested URL." });

  } catch (error: any) {
    console.error("API Error:", error?.message || error);
    return NextResponse.json({ success: false, error: error.message || "Failed to process the request. Please check the URL." });
  }
}
