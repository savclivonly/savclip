import { MetadataRoute } from "next"
import fs from "fs"
import path from "path"
import { BLOG_POSTS } from "@/lib/blog-data"

export const revalidate = 86400 // Cache sitemap for 24 hours

const SITE_URL = "https://savclip.com"

let cachedSitemap: MetadataRoute.Sitemap | null = null
let lastCacheTime = 0
const CACHE_DURATION = 86400 * 1000

export default function sitemap(): MetadataRoute.Sitemap {
  const now = Date.now()
  if (cachedSitemap && (now - lastCacheTime < CACHE_DURATION)) {
    return cachedSitemap
  }

  const sitemapEntries: MetadataRoute.Sitemap = []

  // Static Pages
  const staticRoutes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/dmca"
  ]

  // Dynamic tool routes from the file system
  const appLocaleDir = path.join(process.cwd(), "src", "app", "[locale]")
  let dynamicTools: string[] = []

  try {
    const entries = fs.readdirSync(appLocaleDir, { withFileTypes: true })
    dynamicTools = entries
      .filter(entry => entry.isDirectory() && !entry.name.startsWith('[') && !entry.name.startsWith('_') && entry.name !== 'api' && entry.name !== 'share-target' && fs.existsSync(path.join(appLocaleDir, entry.name, "page.tsx")))
      .map(entry => `/${entry.name}`)
      .filter(route => !staticRoutes.includes(route))
  } catch (e) {
    console.error("Failed to read dynamic tools for sitemap from disk", e)
  }

  // Fallback to a predefined list of tools if filesystem scanning returns empty (common on Vercel at runtime)
  if (dynamicTools.length === 0) {
    const fallbackTools = [
      "anonymous-tiktok-viewer",
      "facebook-album-downloader",
      "facebook-audio-downloader",
      "facebook-dp-downloader",
      "facebook-group-video-downloader",
      "facebook-live-video-downloader",
      "facebook-page-audit-tool",
      "facebook-photo-downloader",
      "facebook-private-video-downloader",
      "facebook-profile-viewer",
      "facebook-reels-downloader",
      "facebook-story-saver",
      "facebook-video-compressor",
      "facebook-video-downloader",
      "instagram-audio-downloader",
      "instagram-carousel-downloader",
      "instagram-dp-downloader",
      "instagram-highlights-downloader",
      "instagram-photo-downloader",
      "instagram-private-downloader",
      "instagram-profile-viewer",
      "instagram-reels-downloader",
      "instagram-story-viewer",
      "instagram-video-compressor",
      "instagram-video-downloader",
      "snapchat-audio-downloader",
      "snapchat-dp-downloader",
      "snapchat-lens-saver",
      "snapchat-map-downloader",
      "snapchat-memories-downloader",
      "snapchat-photo-downloader",
      "snapchat-private-story-downloader",
      "snapchat-profile-viewer",
      "snapchat-spotlight-downloader",
      "snapchat-stories-downloader",
      "snapchat-video-compressor",
      "snapchat-video-downloader",
      "telegram-audio-downloader",
      "telegram-bio-generator",
      "telegram-channel-link-generator",
      "telegram-dp-downloader",
      "telegram-file-downloader",
      "telegram-gif-downloader",
      "telegram-photo-downloader",
      "telegram-private-video-downloader",
      "telegram-restricted-content-downloader",
      "telegram-story-saver",
      "telegram-trending-channel-finder",
      "telegram-video-compressor",
      "telegram-video-downloader",
      "tiktok-caption-generator",
      "tiktok-dp-downloader",
      "tiktok-mp3-downloader",
      "tiktok-photo-downloader",
      "tiktok-private-video-downloader",
      "tiktok-shorts-downloader",
      "tiktok-song-finder",
      "tiktok-story-saver",
      "tiktok-trending-hashtag-generator",
      "tiktok-video-compressor",
      "tiktok-video-downloader",
      "x-analytics-viewer",
      "x-audio-downloader",
      "x-banner-downloader",
      "x-bio-generator",
      "x-gif-downloader",
      "x-media-downloader",
      "x-private-video-downloader",
      "x-profile-picture-downloader",
      "x-space-downloader",
      "x-thread-downloader",
      "x-trending-hashtag-finder",
      "x-video-compressor",
      "x-video-downloader",
      "youtube-channel-audit-tool",
      "youtube-comment-picker",
      "youtube-description-generator",
      "youtube-playlist-downloader",
      "youtube-region-restriction-checker",
      "youtube-shorts-downloader",
      "youtube-subtitle-downloader",
      "youtube-tag-generator",
      "youtube-thumbnail-downloader",
      "youtube-title-generator",
      "youtube-to-mp3-converter",
      "youtube-video-cutter",
      "youtube-video-downloader"
    ];
    dynamicTools = fallbackTools.map(tool => `/${tool}`);
  }

  const locales = ['en', 'pt', 'es', 'id', 'ar']

  const getAlternatesForRoute = (route: string) => {
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    
    const languages: Record<string, string> = {
      'x-default': cleanRoute ? `${SITE_URL}/${cleanRoute}` : `${SITE_URL}/`,
      'en': cleanRoute ? `${SITE_URL}/${cleanRoute}` : `${SITE_URL}/`,
      'pt': cleanRoute ? `${SITE_URL}/pt/${cleanRoute}` : `${SITE_URL}/pt`,
      'es': cleanRoute ? `${SITE_URL}/es/${cleanRoute}` : `${SITE_URL}/es`,
      'id': cleanRoute ? `${SITE_URL}/id/${cleanRoute}` : `${SITE_URL}/id`,
      'ar': cleanRoute ? `${SITE_URL}/ar/${cleanRoute}` : `${SITE_URL}/ar`,
    };

    return {
      languages: languages,
    };
  };

  locales.forEach((locale) => {
    const localePrefix = locale === 'en' ? '' : `/${locale}`

    // Static Routes
    staticRoutes.forEach((route) => {
      sitemapEntries.push({
        url: `${SITE_URL}${localePrefix}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: getAlternatesForRoute(route),
      })
    })

    // Dynamic Tool Routes
    dynamicTools.forEach((route) => {
      sitemapEntries.push({
        url: `${SITE_URL}${localePrefix}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
        alternates: getAlternatesForRoute(route),
      })
    })

    // Blog Posts
    BLOG_POSTS.forEach((post) => {
      sitemapEntries.push({
        url: `${SITE_URL}${localePrefix}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: getAlternatesForRoute(`blog/${post.slug}`),
      })
    })
  })

  cachedSitemap = sitemapEntries
  lastCacheTime = now
  return sitemapEntries
}
