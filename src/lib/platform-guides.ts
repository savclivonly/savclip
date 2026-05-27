export interface GuideItem {
  title: string;
  desc: string;
}

export interface PlatformGuide {
  titleKey: string;
  guides: GuideItem[];
}

export const PLATFORM_GUIDES: Record<string, PlatformGuide> = {
  instagram: {
    titleKey: "Video Downloading Guides",
    guides: [
      { title: "Best Video Format for Instagram 2026", desc: "Why MP4 is still king for high-quality uploads." },
      { title: "How to Download Private IG Videos", desc: "A safe and secure method to save restricted content." },
      { title: "Video Compression Tips for Viral Reach", desc: "How to keep quality high while reducing file size." }
    ]
  },
  tiktok: {
    titleKey: "TikTok Video Guides",
    guides: [
      { title: "How to Save TikToks on iPhone", desc: "A simple guide for iOS users to archive viral clips." },
      { title: "Best Video Formats for TikTok 2026", desc: "How to optimize your content for high engagement." },
      { title: "Removing TikTok Watermarks Safely", desc: "Why web-based tools are the best for clean downloads." }
    ]
  },
  youtube: {
    titleKey: "YouTube Video Guides",
    guides: [
      { title: "How to Download YouTube Videos in HD", desc: "A detailed walk-through to export 1080p and 4K streams." },
      { title: "Understanding YouTube Region Restrictions", desc: "How to verify and bypass geo-blocks online." },
      { title: "Best Audio Bitrates for MP3 Conversions", desc: "Why 320kbps is the golden standard for clear sound." }
    ]
  },
  facebook: {
    titleKey: "Facebook Downloader Guides",
    guides: [
      { title: "How to Download Facebook Private Videos", desc: "Access and save restricted FB content securely." },
      { title: "Best Settings for FB Video Compression", desc: "Reduce file sizes without losing visual detailing." },
      { title: "Downloading HD Albums and Photos", desc: "A quick guide to export bulk galleries in high resolution." }
    ]
  },
  snapchat: {
    titleKey: "Snapchat Media Guides",
    guides: [
      { title: "Saving Snapchat Snaps & Spotlight Clips", desc: "How to archive short-form loops without notifications." },
      { title: "How to Backup Snapchat Memories Online", desc: "A secure way to download your personal timeline snapshots." },
      { title: "Downloading AR Lenses & Custom Filters", desc: "Backup and share creative Snapchat lenses easily." }
    ]
  },
  telegram: {
    titleKey: "Telegram Download Guides",
    guides: [
      { title: "Bypassing Telegram Restrictions", desc: "How to save protected files and restricted channel content." },
      { title: "Compressing Videos for Telegram Sharing", desc: "Reduce file size to pass attachment limit constraints." },
      { title: "Downloading Group Files & Custom Media", desc: "Streamline document retrieval through our cloud pipelines." }
    ]
  },
  x: {
    titleKey: "X (Twitter) Media Guides",
    guides: [
      { title: "How to Download X Videos & GIFs in HD", desc: "Save Twitter media directly to your camera roll." },
      { title: "Exporting X Threads as PDF or Text", desc: "Archive valuable educational or viral tweet arrays." },
      { title: "Using AI to Generate Perfect Bio and Tags", desc: "Maximize engagement and audience reach with smart text." }
    ]
  }
};

export function getPlatformGuide(toolName: string): PlatformGuide | null {
  const lower = toolName.toLowerCase();
  if (lower.startsWith('instagram')) return PLATFORM_GUIDES.instagram;
  if (lower.startsWith('tiktok')) return PLATFORM_GUIDES.tiktok;
  if (lower.startsWith('youtube')) return PLATFORM_GUIDES.youtube;
  if (lower.startsWith('facebook')) return PLATFORM_GUIDES.facebook;
  if (lower.startsWith('snapchat')) return PLATFORM_GUIDES.snapchat;
  if (lower.startsWith('telegram')) return PLATFORM_GUIDES.telegram;
  if (lower.startsWith('x-') || lower.startsWith('twitter-')) return PLATFORM_GUIDES.x;
  return null;
}
