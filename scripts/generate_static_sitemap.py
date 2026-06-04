import os
import re
from datetime import datetime

SITE_URL = "https://savclip.com"
locales = ['en', 'pt', 'es', 'id', 'ar']
static_routes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/dmca"
]

blog_slugs = [
    ("how-to-download-instagram-reels-2026", "2026-05-24"),
    ("tiktok-no-watermark-downloader-guide", "2026-05-24"),
    ("best-hashtags-for-viral-reels", "2026-05-24"),
    ("youtube-shorts-algorithm-secrets", "2026-05-24"),
    ("how-to-make-viral-reels-fast", "2026-05-24"),
    ("best-instagram-bio-ideas", "2026-05-24")
]

# Read tools from sitemap.ts
sitemap_path = "/Users/ramzan/Pictures/savclip/src/app/sitemap.ts"
tools = []

try:
    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()
        match = re.search(r"const fallbackTools = \[(.*?)\];", content, re.DOTALL)
        if match:
            array_content = match.group(1)
            tools = re.findall(r'"([^"]+)"', array_content)
except Exception as e:
    pass

if not tools:
    tools = [
        "anonymous-tiktok-viewer", "facebook-album-downloader", "facebook-audio-downloader",
        "facebook-dp-downloader", "facebook-group-video-downloader", "facebook-live-video-downloader",
        "facebook-page-audit-tool", "facebook-photo-downloader", "facebook-private-video-downloader",
        "facebook-profile-viewer", "facebook-reels-downloader", "facebook-story-saver",
        "facebook-video-compressor", "facebook-video-downloader", "instagram-audio-downloader",
        "instagram-carousel-downloader", "instagram-dp-downloader", "instagram-highlights-downloader",
        "instagram-photo-downloader", "instagram-private-downloader", "instagram-profile-viewer",
        "instagram-reels-downloader", "instagram-story-viewer", "instagram-video-compressor",
        "instagram-video-downloader", "snapchat-audio-downloader", "snapchat-dp-downloader",
        "snapchat-lens-saver", "snapchat-map-downloader", "snapchat-memories-downloader",
        "snapchat-photo-downloader", "snapchat-private-story-downloader", "snapchat-profile-viewer",
        "snapchat-spotlight-downloader", "snapchat-stories-downloader", "snapchat-video-compressor",
        "snapchat-video-downloader", "telegram-audio-downloader", "telegram-bio-generator",
        "telegram-channel-link-generator", "telegram-dp-downloader", "telegram-file-downloader",
        "telegram-gif-downloader", "telegram-photo-downloader", "telegram-private-video-downloader",
        "telegram-restricted-content-downloader", "telegram-story-saver", "telegram-trending-channel-finder",
        "telegram-video-compressor", "telegram-video-downloader", "tiktok-caption-generator",
        "tiktok-dp-downloader", "tiktok-mp3-downloader", "tiktok-photo-downloader",
        "tiktok-private-video-downloader", "tiktok-shorts-downloader", "tiktok-song-finder",
        "tiktok-story-saver", "tiktok-trending-hashtag-generator", "tiktok-video-compressor",
        "tiktok-video-downloader", "x-analytics-viewer", "x-audio-downloader",
        "x-banner-downloader", "x-bio-generator", "x-gif-downloader",
        "x-media-downloader", "x-private-video-downloader", "x-profile-picture-downloader",
        "x-space-downloader", "x-thread-downloader", "x-trending-hashtag-finder",
        "x-video-compressor", "x-video-downloader", "youtube-channel-audit-tool",
        "youtube-comment-picker", "youtube-description-generator", "youtube-playlist-downloader",
        "youtube-region-restriction-checker", "youtube-shorts-downloader", "youtube-subtitle-downloader",
        "youtube-tag-generator", "youtube-thumbnail-downloader", "youtube-title-generator",
        "youtube-to-mp3-converter", "youtube-video-cutter", "youtube-video-downloader"
    ]

# Current Date for lastmod
today = datetime.utcnow().strftime('%Y-%m-%dT%H:%M:%SZ')

def get_alternates(route_path):
    clean = route_path.lstrip('/')
    alts = []
    
    # Default alternate (x-default is English)
    x_default_url = f"{SITE_URL}/{clean}" if clean else SITE_URL
    alts.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{x_default_url}"/>')
    
    for loc in locales:
        prefix = "" if loc == 'en' else f"/{loc}"
        url = f"{SITE_URL}{prefix}/{clean}" if clean else f"{SITE_URL}{prefix}"
        if not clean and prefix == "":
            url = SITE_URL
        alts.append(f'    <xhtml:link rel="alternate" hreflang="{loc}" href="{url}"/>')
    return "\n".join(alts)

xml_blocks = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'
]

# Generate entries for all languages
for locale in locales:
    locale_prefix = "" if locale == 'en' else f"/{locale}"
    
    # 1. Static Routes
    for route in static_routes:
        url_path = f"{locale_prefix}{route}"
        full_url = f"{SITE_URL}{url_path}" if url_path else SITE_URL
        priority = "1.0" if route == "" else "0.8"
        freq = "weekly"
        
        xml_blocks.append("  <url>")
        xml_blocks.append(f"    <loc>{full_url}</loc>")
        xml_blocks.append(f"    <lastmod>{today}</lastmod>")
        xml_blocks.append(f"    <changefreq>{freq}</changefreq>")
        xml_blocks.append(f"    <priority>{priority}</priority>")
        xml_blocks.append(get_alternates(route))
        xml_blocks.append("  </url>")

    # 2. Dynamic Tool Routes
    for tool in tools:
        url_path = f"{locale_prefix}/{tool}"
        full_url = f"{SITE_URL}{url_path}"
        priority = "0.9"
        freq = "daily"
        
        xml_blocks.append("  <url>")
        xml_blocks.append(f"    <loc>{full_url}</loc>")
        xml_blocks.append(f"    <lastmod>{today}</lastmod>")
        xml_blocks.append(f"    <changefreq>{freq}</changefreq>")
        xml_blocks.append(f"    <priority>{priority}</priority>")
        xml_blocks.append(get_alternates(f"/{tool}"))
        xml_blocks.append("  </url>")

    # 3. Blog Routes
    for slug, date_str in blog_slugs:
        url_path = f"{locale_prefix}/blog/{slug}"
        full_url = f"{SITE_URL}{url_path}"
        priority = "0.7"
        freq = "monthly"
        
        xml_blocks.append("  <url>")
        xml_blocks.append(f"    <loc>{full_url}</loc>")
        xml_blocks.append(f"    <lastmod>{date_str}T08:00:00Z</lastmod>")
        xml_blocks.append(f"    <changefreq>{freq}</changefreq>")
        xml_blocks.append(f"    <priority>{priority}</priority>")
        xml_blocks.append(get_alternates(f"/blog/{slug}"))
        xml_blocks.append("  </url>")

xml_blocks.append('</urlset>')

# Save xml file
output_xml = "/Users/ramzan/Pictures/savclip/public/sitemap.xml"
with open(output_xml, "w", encoding="utf-8") as f:
    f.write("\n".join(xml_blocks))

print("Sitemap written successfully to public/sitemap.xml!")
