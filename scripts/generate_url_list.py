import os
import re

SITE_URL = "https://savclip.com"
locales = ['', 'pt', 'es', 'id', 'ar']
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

# Blog slugs from blog-data.ts
blog_slugs = [
    "how-to-download-instagram-reels-2026",
    "tiktok-no-watermark-downloader-guide",
    "best-hashtags-for-viral-reels",
    "youtube-shorts-algorithm-secrets",
    "how-to-make-viral-reels-fast",
    "best-instagram-bio-ideas"
]

# Read tools from sitemap.ts
sitemap_path = "/Users/ramzan/Pictures/savclip/src/app/sitemap.ts"
tools = []

try:
    with open(sitemap_path, "r", encoding="utf-8") as f:
        content = f.read()
        # Find the fallbackTools array content
        match = re.search(r"const fallbackTools = \[(.*?)\];", content, re.DOTALL)
        if match:
            array_content = match.group(1)
            # Find all double-quoted strings
            tools = re.findall(r'"([^"]+)"', array_content)
except Exception as e:
    print(f"Error reading sitemap.ts: {e}")

if not tools:
    print("Fallback to hardcoded tools list...")
    # Just in case regex fails, list the main platforms
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

# Generate URLs list
all_urls = []

for locale in locales:
    locale_prefix = f"/{locale}" if locale else ""
    
    # 1. Static Routes
    for route in static_routes:
        url = f"{SITE_URL}{locale_prefix}{route}"
        all_urls.append(url)
        
    # 2. Dynamic Tool Routes
    for tool in tools:
        url = f"{SITE_URL}{locale_prefix}/{tool}"
        all_urls.append(url)
        
    # 3. Blog Posts
    for slug in blog_slugs:
        url = f"{SITE_URL}{locale_prefix}/blog/{slug}"
        all_urls.append(url)

# Write to urls.txt in the project root
output_path = "/Users/ramzan/Pictures/savclip/urls.txt"
with open(output_path, "w", encoding="utf-8") as f:
    for url in all_urls:
        f.write(url + "\n")

print(f"Successfully generated {len(all_urls)} URLs and saved to {output_path}!")
