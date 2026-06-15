import { MetadataRoute } from "next"
import { BLOG_POSTS } from "@/lib/blog-data"
import { TOOL_CONFIGS } from "@/lib/tool-configs"

export const revalidate = 86400 // Cache sitemap for 24 hours

const SITE_URL = "https://savclip.com"
const LAST_MODIFIED_DATE = new Date("2026-06-15")

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

  // Dynamic tool routes fetched dynamically from TOOL_CONFIGS
  const dynamicTools = Object.keys(TOOL_CONFIGS).map(tool => `/${tool}`);

  const locales = ['en', 'pt', 'es', 'id', 'ar']

  const getAlternatesForRoute = (route: string) => {
    const cleanRoute = route.startsWith('/') ? route.slice(1) : route;
    
    const languages: Record<string, string> = {
      'x-default': cleanRoute ? `${SITE_URL}/${cleanRoute}` : `${SITE_URL}`,
      'en': cleanRoute ? `${SITE_URL}/${cleanRoute}` : `${SITE_URL}`,
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
        lastModified: LAST_MODIFIED_DATE,
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: getAlternatesForRoute(route),
      })
    })

    // Dynamic Tool Routes
    dynamicTools.forEach((route) => {
      sitemapEntries.push({
        url: `${SITE_URL}${localePrefix}${route}`,
        lastModified: LAST_MODIFIED_DATE,
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
