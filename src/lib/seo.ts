export const SITE_URL = "https://savclip.com";

/**
 * Generates SEO optimized alternates for Next.js Metadata.
 * English pages are treated as clean root URLs (no /en prefix).
 * @param path The relative path of the tool (e.g. "instagram-video-downloader")
 * @param currentLocale The current locale (defaults to 'en')
 * @returns Metadata alternates object with canonical tag and hreflang alternates
 */
export function getSeoAlternates(path: string, currentLocale: string = 'en') {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Dynamic canonical URL reflecting the current locale subpath (no trailing slash for subpaths)
  let canonicalUrl = `${SITE_URL}`;
  if (currentLocale && currentLocale !== 'en') {
    canonicalUrl += `/${currentLocale}`;
  }
  if (cleanPath) {
    canonicalUrl += `/${cleanPath}`;
  }

  // Language alternates (hreflangs) for the 5 target languages plus x-default
  const languages: Record<string, string> = {
    'x-default': cleanPath ? `${SITE_URL}/${cleanPath}` : `${SITE_URL}`,
    'en': cleanPath ? `${SITE_URL}/${cleanPath}` : `${SITE_URL}`,
  };

  languages['pt'] = cleanPath ? `${SITE_URL}/pt/${cleanPath}` : `${SITE_URL}/pt`;
  languages['es'] = cleanPath ? `${SITE_URL}/es/${cleanPath}` : `${SITE_URL}/es`;
  languages['id'] = cleanPath ? `${SITE_URL}/id/${cleanPath}` : `${SITE_URL}/id`;
  languages['ar'] = cleanPath ? `${SITE_URL}/ar/${cleanPath}` : `${SITE_URL}/ar`;

  return {
    canonical: canonicalUrl,
    languages: languages,
  };
}


