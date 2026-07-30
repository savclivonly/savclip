"use client"

import Image from "next/image"
import Link from "next/link"
import { Camera, Send, Mail, Globe, ShieldCheck, Zap, HelpCircle, HardDrive, Share2, Apple as AppleIcon, Music, Play, Ghost, Hash, Instagram, Sparkles, ChevronDown, ChevronUp } from "lucide-react"
import { usePathname } from "next/navigation"
import * as React from "react"
import { ReactNode, useState } from "react"
import { translateToolName } from "@/utils/translate-tool"
import { cn } from "@/utils/cn"
import { motion, AnimatePresence } from "framer-motion"
import { RatingWidget } from "@/components/shared/RatingWidget"
import { TOOL_CONFIGS } from "@/lib/tool-configs"

function FooterInner({ locale, dict }: { locale: string, dict: any }) {
  const pathname = usePathname() || "";
  const currentLocale = locale || 'en';
  
  const toolKey = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "").replace(/^\//, "") || "home";
  const config = TOOL_CONFIGS[toolKey];
  const defaultRating = config ? (parseFloat(config.ratingValue) || 4.9) : 4.9;
  const defaultReviewCount = config ? (parseInt(config.reviewCount.replace(/[^0-9]/g, ""), 10) || 25420) : 25420;
  
  const branding = dict?.footer_branding || {
    title: "SavClip – Fast & Secure",
    desc: "A trusted platform to save and manage social media content.",
    platforms_title: "Supported Platforms",
    features_title: "Features",
    features: ["No Login", "Fast", "HD", "Multi-Platform"]
  }

  const getLocalizedHref = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    if (currentLocale === 'en') return cleanPath
    return `/${currentLocale}${cleanPath === '/' ? '' : cleanPath}`
  }

  const [expandedPlatforms, setExpandedPlatforms] = useState<Record<string, boolean>>({
    instagram: false,
    facebook: false,
    tiktok: false,
    youtube: false,
    snapchat: false,
    x: false,
    telegram: false
  });

  const togglePlatform = (platform: string) => {
    setExpandedPlatforms(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const platforms = [
    {
      key: "instagram",
      name: "Instagram Platform Explorer",
      icon: <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      colorClass: "text-pink-600 bg-pink-50 dark:bg-pink-900/20 border-pink-100 dark:border-pink-800/30 hover:text-pink-600 hover:bg-pink-100 dark:hover:bg-pink-900/30",
      dotClass: "group-hover:bg-pink-600",
      btnClass: "border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/20",
      countLabel: "11 Professional Tools",
      tools: [
        { name: "Instagram Video Downloader", href: "/instagram-video-downloader" },
        { name: "Instagram Reels Downloader", href: "/instagram-reels-downloader" },
        { name: "Instagram Photo Downloader", href: "/instagram-photo-downloader" },
        { name: "Instagram Highlights Downloader", href: "/instagram-highlights-downloader" },
        { name: "Instagram Audio Downloader", href: "/instagram-audio-downloader" },
        { name: "Instagram Private Downloader", href: "/instagram-private-downloader" },
        { name: "Instagram Video Compressor", href: "/instagram-video-compressor" },
        { name: "Instagram Carousel Downloader", href: "/instagram-carousel-downloader" },
        { name: "Instagram DP Downloader", href: "/instagram-dp-downloader" },
        { name: "Instagram Profile Viewer", href: "/instagram-profile-viewer" },
        { name: "Instagram Story Viewer", href: "/instagram-story-viewer" }
      ]
    },
    {
      key: "facebook",
      name: "Facebook Platform Explorer",
      icon: <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      colorClass: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800/30 hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30",
      dotClass: "group-hover:bg-blue-600",
      btnClass: "border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20",
      countLabel: "13 Professional Tools",
      tools: [
        { name: "Facebook Video Downloader", href: "/facebook-video-downloader" },
        { name: "Facebook Reels Downloader", href: "/facebook-reels-downloader" },
        { name: "Facebook Private Video Downloader", href: "/facebook-private-video-downloader" },
        { name: "Facebook Story Saver", href: "/facebook-story-saver" },
        { name: "Facebook Photo Downloader", href: "/facebook-photo-downloader" },
        { name: "Facebook Album Downloader", href: "/facebook-album-downloader" },
        { name: "Facebook Live Video Downloader", href: "/facebook-live-video-downloader" },
        { name: "Facebook DP Downloader", href: "/facebook-dp-downloader" },
        { name: "Facebook Group Video Downloader", href: "/facebook-group-video-downloader" },
        { name: "Facebook Audio Downloader", href: "/facebook-audio-downloader" },
        { name: "Facebook Profile Viewer", href: "/facebook-profile-viewer" },
        { name: "Facebook Video Compressor", href: "/facebook-video-compressor" },
        { name: "Facebook Page Audit Tool", href: "/facebook-page-audit-tool" }
      ]
    },
    {
      key: "tiktok",
      name: "TikTok Platform Explorer",
      icon: <Music className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      colorClass: "text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900/20 border-neutral-100 dark:border-neutral-800/30 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900/40",
      dotClass: "group-hover:bg-black dark:group-hover:bg-white",
      btnClass: "border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/25",
      countLabel: "12 Professional Tools",
      tools: [
        { name: "TikTok Video Downloader", href: "/tiktok-video-downloader" },
        { name: "TikTok MP3 Downloader", href: "/tiktok-mp3-downloader" },
        { name: "TikTok Story Saver", href: "/tiktok-story-saver" },
        { name: "TikTok Shorts Downloader", href: "/tiktok-shorts-downloader" },
        { name: "TikTok Photo Downloader", href: "/tiktok-photo-downloader" },
        { name: "TikTok DP Downloader", href: "/tiktok-dp-downloader" },
        { name: "Anonymous TikTok Viewer", href: "/anonymous-tiktok-viewer" },
        { name: "TikTok Private Video Downloader", href: "/tiktok-private-video-downloader" },
        { name: "TikTok Trending Hashtag Generator", href: "/tiktok-trending-hashtag-generator" },
        { name: "TikTok Caption Generator", href: "/tiktok-caption-generator" },
        { name: "TikTok Video Compressor", href: "/tiktok-video-compressor" },
        { name: "TikTok Song Finder", href: "/tiktok-song-finder" }
      ]
    },
    {
      key: "youtube",
      name: "YouTube Platform Explorer",
      icon: <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      colorClass: "text-red-600 bg-red-50 dark:bg-red-900/20 border-red-100 dark:border-red-800/30 hover:text-red-600 hover:bg-red-100 dark:hover:bg-red-900/30",
      dotClass: "group-hover:bg-red-600",
      btnClass: "border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20",
      countLabel: "13 Professional Tools",
      tools: [
        { name: "YouTube Video Downloader", href: "/youtube-video-downloader" },
        { name: "YouTube Shorts Downloader", href: "/youtube-shorts-downloader" },
        { name: "YouTube to MP3 Converter", href: "/youtube-to-mp3-converter" },
        { name: "YouTube Thumbnail Downloader", href: "/youtube-thumbnail-downloader" },
        { name: "YouTube Playlist Downloader", href: "/youtube-playlist-downloader" },
        { name: "YouTube Subtitle Downloader", href: "/youtube-subtitle-downloader" },
        { name: "YouTube Channel Audit Tool", href: "/youtube-channel-audit-tool" },
        { name: "YouTube Tag Generator", href: "/youtube-tag-generator" },
        { name: "YouTube Description Generator", href: "/youtube-description-generator" },
        { name: "YouTube Title Generator", href: "/youtube-title-generator" },
        { name: "YouTube Region Restriction Checker", href: "/youtube-region-restriction-checker" },
        { name: "YouTube Video Cutter", href: "/youtube-video-cutter" },
        { name: "YouTube Comment Picker", href: "/youtube-comment-picker" }
      ]
    },
    {
      key: "snapchat",
      name: "Snapchat Platform Explorer",
      icon: <Ghost className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      colorClass: "text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-100 dark:border-yellow-800/30 hover:text-yellow-600 hover:bg-yellow-100 dark:hover:bg-yellow-900/30",
      dotClass: "group-hover:bg-yellow-600",
      btnClass: "border-yellow-200 dark:border-yellow-800 text-yellow-600 dark:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-950/20",
      countLabel: "12 Professional Tools",
      tools: [
        { name: "Snapchat Video Downloader", href: "/snapchat-video-downloader" },
        { name: "Snapchat Spotlight Downloader", href: "/snapchat-spotlight-downloader" },
        { name: "Snapchat Story Downloader", href: "/snapchat-stories-downloader" },
        { name: "Snapchat Photo Downloader", href: "/snapchat-photo-downloader" },
        { name: "Snapchat MP3 Downloader", href: "/snapchat-audio-downloader" },
        { name: "Snapchat DP Downloader", href: "/snapchat-dp-downloader" },
        { name: "Snapchat Map Downloader", href: "/snapchat-map-downloader" },
        { name: "Snapchat Lens Saver", href: "/snapchat-lens-saver" },
        { name: "Snapchat Private Story Downloader", href: "/snapchat-private-story-downloader" },
        { name: "Snapchat Video Compressor", href: "/snapchat-video-compressor" },
        { name: "Snapchat Profile Viewer", href: "/snapchat-profile-viewer" },
        { name: "Snapchat Memories Downloader", href: "/snapchat-memories-downloader" }
      ]
    },
    {
      key: "x",
      name: "X Platform Explorer",
      icon: <Hash className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      colorClass: "text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900/20 border-neutral-100 dark:border-neutral-800/30 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900/40",
      dotClass: "group-hover:bg-black dark:group-hover:bg-white",
      btnClass: "border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-900/25",
      countLabel: "13 Professional Tools",
      tools: [
        { name: "X Video Downloader", href: "/x-video-downloader" },
        { name: "X GIF Downloader", href: "/x-gif-downloader" },
        { name: "X Space Downloader", href: "/x-space-downloader" },
        { name: "X Media Downloader", href: "/x-media-downloader" },
        { name: "X Thread Downloader", href: "/x-thread-downloader" },
        { name: "X Audio Downloader", href: "/x-audio-downloader" },
        { name: "X Profile Picture Downloader", href: "/x-profile-picture-downloader" },
        { name: "X Private Video Downloader", href: "/x-private-video-downloader" },
        { name: "X Banner Downloader", href: "/x-banner-downloader" },
        { name: "X Trending Hashtag Finder", href: "/x-trending-hashtag-finder" },
        { name: "X Analytics Viewer", href: "/x-analytics-viewer" },
        { name: "X Video Compressor", href: "/x-video-compressor" },
        { name: "X Bio Generator", href: "/x-bio-generator" }
      ]
    },
    {
      key: "telegram",
      name: "Telegram Platform Explorer",
      icon: <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
      colorClass: "text-sky-600 bg-sky-50 dark:bg-sky-900/20 border-sky-100 dark:border-sky-800/30 hover:text-sky-600 hover:bg-sky-100 dark:hover:bg-sky-900/30",
      dotClass: "group-hover:bg-sky-600",
      btnClass: "border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/20",
      countLabel: "13 Professional Tools",
      tools: [
        { name: "Telegram Video Downloader", href: "/telegram-video-downloader" },
        { name: "Telegram Private Downloader", href: "/telegram-private-video-downloader" },
        { name: "Telegram Restricted Content Downloader", href: "/telegram-restricted-content-downloader" },
        { name: "Telegram Photo Downloader", href: "/telegram-photo-downloader" },
        { name: "Telegram Audio Downloader", href: "/telegram-audio-downloader" },
        { name: "Telegram Story Saver", href: "/telegram-story-saver" },
        { name: "Telegram DP Downloader", href: "/telegram-dp-downloader" },
        { name: "Telegram File Downloader", href: "/telegram-file-downloader" },
        { name: "Telegram GIF Downloader", href: "/telegram-gif-downloader" },
        { name: "Telegram Trending Channels", href: "/telegram-trending-channel-finder" },
        { name: "Telegram Channel Link Generator", href: "/telegram-channel-link-generator" },
        { name: "Telegram Video Compressor", href: "/telegram-video-compressor" },
        { name: "Telegram Bio Generator", href: "/telegram-bio-generator" }
      ]
    }
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white dark:border-neutral-900 dark:bg-black/95 relative overflow-hidden">
      {/* Structural Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16">
          
          {/* Column 1: Branding & Philosophy */}
          <div className="lg:col-span-8 space-y-8">
            <Link href={getLocalizedHref("/")} className="flex items-center gap-3 group">
              <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-white/10 dark:backdrop-blur-md dark:border dark:border-white/20 shadow-xl group-hover:scale-110 transition-transform">
                <Image 
                  src="/icon.png" 
                  alt="SavClip Logo - Free Video Downloader Online" 
                  width={32} 
                  height={32} 
                  className="object-contain dark:brightness-125"
                />
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase italic text-neutral-900 dark:text-white">
                {currentLocale === 'ar' ? (
                  <>
                    ساف
                    <span className={cn("ms-1 text-transparent bg-clip-text bg-gradient-to-r", 
                      pathname.includes('/facebook') ? 'from-blue-500 to-blue-600' :
                      pathname.includes('/youtube') ? 'from-red-500 to-red-600' :
                      pathname.includes('/tiktok') ? 'from-blue-500 to-blue-600' :
                      pathname.includes('/snapchat') ? 'from-yellow-400 to-yellow-500' :
                      pathname.includes('/telegram') ? 'from-sky-400 to-sky-500' :
                      pathname.includes('/twitter') ? 'from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-200' :
                      'from-blue-500 to-blue-600'
                    )}>كليب</span>
                  </>
                ) : (
                  <>
                    Sav<span className={
                      pathname.includes('/facebook') ? 'text-blue-600' :
                      pathname.includes('/youtube') ? 'text-red-600' :
                      pathname.includes('/tiktok') ? 'text-blue-600' :
                      pathname.includes('/snapchat') ? 'text-yellow-500' :
                      pathname.includes('/telegram') ? 'text-sky-500' :
                      pathname.includes('/twitter') ? 'text-neutral-900 dark:text-white' :
                      'text-blue-600'
                    }>Clip</span>
                  </>
                )}
              </span>
            </Link>
            
            <h2 className="text-xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight leading-tight">
              {branding.title}
            </h2>
            <p className="max-w-sm text-sm font-medium leading-relaxed text-neutral-500 dark:text-neutral-400 opacity-90">
              {branding.desc}
            </p>

            {/* App Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
               <div className="h-9 w-28 bg-black rounded-lg border border-white/10 flex items-center justify-center p-1.5 cursor-pointer hover:bg-neutral-900 transition-colors">
                  <div className="flex items-center gap-1.5">
                     <Globe className="w-3.5 h-3.5 text-white" />
                     <div className="flex flex-col">
                        <span className="text-[5px] font-black text-white/50 leading-none">Get it on</span>
                        <span className="text-[10px] font-black text-white leading-none">Google Play</span>
                     </div>
                  </div>
               </div>
               <div className="h-9 w-28 bg-black rounded-lg border border-white/10 flex items-center justify-center p-1.5 cursor-pointer hover:bg-neutral-900 transition-colors">
                  <div className="flex items-center gap-1.5">
                     <AppleIcon className="w-3.5 h-3.5 text-white" />
                     <div className="flex flex-col">
                        <span className="text-[5px] font-black text-white/50 leading-none">Download on</span>
                        <span className="text-[10px] font-black text-white leading-none">App Store</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
               <div className="flex flex-col">
                  <p className="text-[10px] font-black tracking-widest uppercase italic text-neutral-400 mb-1">Founder / CEO</p>
                  <p className="text-sm font-black text-neutral-900 dark:text-white">Ramzan Ahmad</p>
                  <p className="text-[9px] font-bold text-neutral-500 tracking-tighter uppercase italic">Web Developer | 3+ Years Exp.</p>
               </div>
               <div className="hidden sm:block h-12 w-px bg-neutral-100 dark:bg-neutral-800" />
               <div className="flex flex-col">
                  <p className="text-[10px] font-black tracking-widest uppercase italic text-neutral-400 mb-1">Direct Contact</p>
                  <Link href="mailto:ramzaan0043@gmail.com" className="text-sm font-black text-pink-600 hover:underline">ramzaan0043@gmail.com</Link>
                  <p className="text-[9px] font-bold text-neutral-500 tracking-tighter uppercase italic">Response Time: 24h</p>
               </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Legal */}
          <div className="lg:col-span-4">
             <h3 className="text-sm font-bold tracking-wider text-neutral-900 dark:text-white mb-8 bg-neutral-50 dark:bg-neutral-800 px-3 py-1 rounded inline-block">
                {translateToolName("Company & Legal", currentLocale)}
             </h3>
             <ul className="grid grid-cols-1 gap-4">
                {[
                        { name: "About SavClip", href: "/about" },
                        { name: "SavClip Blog", href: "/blog" },
                        { name: "Contact Support", href: "/contact" },
                        { name: "Privacy Policy", href: "/privacy-policy" },
                        { name: "Terms & Service", href: "/terms" },
                        { name: "Disclaimer", href: "/disclaimer" },
                        { name: "DMCA Report", href: "/dmca" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={getLocalizedHref(link.href)} prefetch={true} className="text-sm font-bold text-neutral-500 hover:text-pink-600 dark:text-neutral-400 transition-all hover:translate-x-1 inline-block">
                      {translateToolName(link.name, currentLocale)}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>
        </div>

        {/* --- GLOBAL TOOLS EXPLORER (Platform-Centric Accordions) --- */}
        <div className="mt-20 space-y-20 border-t border-neutral-100 dark:border-neutral-800 pt-20">
          {platforms.map((platform) => {
            const isExpanded = expandedPlatforms[platform.key];
            const visibleTools = platform.tools.slice(0, 3);
            
            return (
              <div key={platform.key} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 items-start">
                  <h3 className={cn(
                    "text-[9px] sm:text-[11px] font-black tracking-[0.15em] sm:tracking-[0.4em] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full inline-flex items-center gap-2.5 border transition-colors",
                    platform.colorClass
                  )}>
                    {platform.icon}
                    {translateToolName(platform.name, currentLocale)}
                  </h3>
                  <span className="text-xs font-bold tracking-wider uppercase text-neutral-400" suppressHydrationWarning={true}>
                    {translateToolName(platform.countLabel, currentLocale)}
                  </span>
                </div>

                <div className="relative">
                  {/* Grid layout */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4" suppressHydrationWarning={true}>
                    {visibleTools.map((link) => (
                      <Link 
                        key={link.href} 
                        href={getLocalizedHref(link.href)} 
                        prefetch={true} 
                        className={cn(
                          "text-[10px] sm:text-xs font-bold text-neutral-400 transition-colors flex items-center gap-2 group",
                          platform.key === 'instagram' ? 'hover:text-pink-600' :
                          platform.key === 'facebook' ? 'hover:text-blue-600' :
                          platform.key === 'tiktok' ? 'hover:text-neutral-900 dark:hover:text-white' :
                          platform.key === 'youtube' ? 'hover:text-red-600' :
                          platform.key === 'snapchat' ? 'hover:text-yellow-600' :
                          platform.key === 'x' ? 'hover:text-neutral-900 dark:hover:text-white' :
                          'hover:text-sky-600'
                        )}
                      >
                        <div className={cn(
                          "w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors",
                          platform.dotClass
                        )} />
                        {translateToolName(link.name, currentLocale)}
                      </Link>
                    ))}
                  </div>

                  {/* Accordion Expandable Part */}
                  {/* Accordion Expandable Part (rendered unconditionally in DOM for search engines) */}
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate={isExpanded ? "open" : "collapsed"}
                    variants={{
                      open: { opacity: 1, height: "auto", display: "block" },
                      collapsed: { opacity: 0, height: 0, transitionEnd: { display: "none" } }
                    }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden mt-4"
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-4 border-t border-neutral-100 dark:border-neutral-800/50 pt-4" suppressHydrationWarning={true}>
                      {platform.tools.slice(3).map((link) => (
                        <Link 
                          key={link.href} 
                          href={getLocalizedHref(link.href)} 
                          prefetch={true} 
                          className={cn(
                            "text-[10px] sm:text-xs font-bold text-neutral-400 transition-colors flex items-center gap-2 group",
                            platform.key === 'instagram' ? 'hover:text-pink-600' :
                            platform.key === 'facebook' ? 'hover:text-blue-600' :
                            platform.key === 'tiktok' ? 'hover:text-neutral-900 dark:hover:text-white' :
                            platform.key === 'youtube' ? 'hover:text-red-600' :
                            platform.key === 'snapchat' ? 'hover:text-yellow-600' :
                            platform.key === 'x' ? 'hover:text-neutral-900 dark:hover:text-white' :
                            'hover:text-sky-600'
                          )}
                        >
                          <div className={cn(
                            "w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors",
                            platform.dotClass
                          )} />
                          {translateToolName(link.name, currentLocale)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Show All / Show Less Toggle Button */}
                <div className="flex justify-start">
                  <button
                    onClick={() => togglePlatform(platform.key)}
                    className={cn(
                      "flex items-center gap-2 px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all border shadow-xs active:scale-95",
                      platform.btnClass
                    )}
                  >
                    {isExpanded 
                      ? translateToolName(`Show Less ${platform.key.charAt(0).toUpperCase() + platform.key.slice(1)} Tools`, currentLocale)
                      : translateToolName(`Show All ${platform.key.charAt(0).toUpperCase() + platform.key.slice(1)} Tools`, currentLocale)
                    }
                    <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", isExpanded && "rotate-180")} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        {/* Bottom Bar: Final Trust Sign-off */}
        <div suppressHydrationWarning className="mt-4 pt-4 flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-2 mb-4">
             <div className="flex h-3 w-3">
                <span className="inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
             </div>
             <p className="text-[10px] font-black tracking-[0.4em] text-neutral-400">
                {currentLocale === 'pt' ? 'STATUS DO SISTEMA: ' :
                 currentLocale === 'es' ? 'ESTADO DEL SISTEMA: ' :
                 currentLocale === 'id' ? 'STATUS SISTEM: ' :
                 currentLocale === 'ar' ? 'حالة النظام: ' : 'SYSTEM STATUS: '}
                <span className="text-green-500">
                  {currentLocale === 'pt' ? 'TOTALMENTE OPERACIONAL' :
                   currentLocale === 'es' ? 'TOTALMENTE OPERATIVO' :
                   currentLocale === 'id' ? 'BEROPERASI SEPENUHNYA' :
                   currentLocale === 'ar' ? 'يعمل بكامل الكفاءة' : 'FULLY OPERATIONAL'}
                </span>
             </p>
          </div>
          
          <div className="mb-2">
             <RatingWidget toolKey={toolKey} defaultRating={defaultRating} defaultReviewCount={defaultReviewCount} locale={currentLocale} />
          </div>
          
          <p className="max-w-4xl text-[10px] font-black tracking-[0.2em] text-pink-600/80 mb-6 px-4">
            {translateToolName("SavClip is maintained by Ramzan Ahmad, built with Next.js for ultimate speed & security.", currentLocale)}
          </p>
          
          <p className="text-sm font-bold tracking-wider text-neutral-900 dark:text-white" suppressHydrationWarning>
            © {new Date().getFullYear()} SavClip. {currentLocale === 'pt' ? 'Autoridade Global em Extração de Mídia.' : currentLocale === 'es' ? 'Autoridad Global en Extracción de Medios.' : currentLocale === 'id' ? 'Otoritas Global dalam Ekstraksi Media.' : currentLocale === 'ar' ? 'المرجع العالمي الأول في استخراج الوسائط.' : 'Global Authority in Media Extraction.'}
          </p>

          <div className="max-w-4xl w-full bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-100 dark:border-neutral-800 p-8 rounded-3xl space-y-6">
             <div className="flex items-center justify-center gap-4 text-pink-600">
                <ShieldCheck className="h-5 w-5" />
                <h4 className="text-xs font-black tracking-[0.4em] m-0">
                  {translateToolName("Legal Protection Shield", currentLocale)}
                </h4>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-neutral-900 dark:text-white">
                     {translateToolName("Zero Hosting Policy", currentLocale)}
                   </p>
                   <p className="text-[9px] font-bold text-neutral-400 leading-relaxed">
                     {translateToolName("We do not host any files or media on our servers. All content is fetched directly from social platforms.", currentLocale)}
                   </p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-neutral-900 dark:text-white">
                     {translateToolName("Ownership Rights", currentLocale)}
                   </p>
                   <p className="text-[9px] font-bold text-neutral-400 leading-relaxed">
                     {translateToolName("All content and trademarks belong to their respective owners. We respect intellectual property rights.", currentLocale)}
                   </p>
                </div>
                <div className="space-y-2">
                   <p className="text-[10px] font-black text-neutral-900 dark:text-white">
                     {translateToolName("Ethical Usage", currentLocale)}
                   </p>
                   <p className="text-[9px] font-bold text-neutral-400 leading-relaxed">
                     {translateToolName("This tool is intended for educational and personal use only. Unauthorized distribution is discouraged.", currentLocale)}
                   </p>
                </div>
             </div>
          </div>
          
          <p className="max-w-5xl text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase px-4 leading-relaxed opacity-60">
            {translateToolName("Disclaimer: SavClip is an independent tool and is not affiliated, associated, or endorsed by YouTube, Instagram, TikTok, Facebook, Snapchat, X, or Telegram.", currentLocale)}
          </p>
        </div>
      </div>
    </footer>
  )
}

export const Footer = React.memo(FooterInner);
