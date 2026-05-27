"use client"

import * as React from "react"
import { useAutoDownload } from "@/hooks/useAutoDownload"
import { motion } from "framer-motion"
import { SearchBar } from "@/components/layout/SearchBar"
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image"

const CategoryCards = dynamic(() => import("@/components/layout/CategoryCards").then(mod => mod.CategoryCards))
const DownloadPreview = dynamic(() => import("@/components/layout/DownloadPreview").then(mod => mod.DownloadPreview), { ssr: false })
const SocialPlatformBar = dynamic(() => import("@/components/layout/SocialPlatformBar").then(mod => mod.SocialPlatformBar))
import { type Locale } from "@/i18n"
import { LoadingBar } from "@/components/ui/LoadingBar"
import { DownloadCounter } from "@/components/ui/DownloadCounter"
import { useDownloadHistory } from "@/hooks/useDownloadHistory"
import { HeroEffect } from "@/components/shared/HeroEffect"
import { ArrowRight, CheckCircle2, HelpCircle, Hash, Download, ShieldCheck, Zap, Globe, Smartphone, Monitor, Video, Layers, Lock } from "lucide-react"
import { toast } from "react-hot-toast"
import { isSmartInput, handleSmartRedirect } from "@/utils/platform-detector"
import { useRouter, useSearchParams } from "next/navigation"
import { translateToolName } from "@/utils/translate-tool"
import { RatingWidget } from "@/components/shared/RatingWidget"


const ChromeExtensionBanner = dynamic(() => import("@/components/layout/ChromeExtensionBanner").then(mod => mod.ChromeExtensionBanner))
import { PurpleStepGuide } from "@/components/shared/PurpleStepGuide"
import { RichArticle } from "@/components/shared/RichArticle"

function HomeViewContent({ locale, dict }: { locale: Locale; dict: any }) {
  const router = useRouter()
  const [downloadData, setDownloadData] = React.useState<any | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [autoTriggerDownload, setAutoTriggerDownload] = React.useState(false)
  const [searchCounter, setSearchCounter] = React.useState(0)

  const searchParams = useSearchParams()
  const { addToHistory } = useDownloadHistory("home")

  const currentLocale = locale || 'en'
  const getLocalizedHref = (path: string) => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`
    if (currentLocale === 'en') return cleanPath
    return `/${currentLocale}${cleanPath === '/' ? '' : cleanPath}`
  }

  const handleSearch = async (url: string, isAutoTrigger = false) => {
    setSearchCounter(prev => prev + 1)
    setAutoTriggerDownload(isAutoTrigger)

    if (handleSmartRedirect(url, locale, router)) {
      toast.success("Profile detected! Opening Bulk Downloader...")
      return
    }

    setIsLoading(true)
    setDownloadData(null)

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned an invalid response.")
      }

      const result = await response.json()
      if (result.success) {
        setDownloadData(result.data)
        addToHistory(url, { thumbnail: result.data.thumbnail, title: result.data.title })
      } else {
        throw new Error(result.error || "Failed to fetch content")
      }
    } catch (err: any) {
      toast.error(err?.message || "Failed to process the link.")
    } finally {
      setIsLoading(false)
    }
  }

  const sharedUrl = searchParams.get('url') || ""
  useAutoDownload(handleSearch, locale, "home")

  // Ultimate SEO Content Sections dynamically loaded from dict, with English fallback
  const introArticle = React.useMemo(() => {
    const rawIntro = dict.home?.intro
    if (rawIntro) {
      return rawIntro.split('\n\n').map((p: string) => ({
        type: "paragraph" as const,
        content: p
      }))
    }
    return [
      {
        type: "paragraph" as const,
        content: "Welcome to SavClip, the ultimate global platform for downloading media across the internet. In today's digital age, content moves faster than ever. Whether you are a digital marketer archiving campaign materials, a content creator remixing trends, or simply someone who wants to save a memorable moment offline, having a reliable social media downloader is essential. SavClip provides a premium, all-in-one solution that allows you to download videos online effortlessly, without the need for installing suspicious apps or dealing with restrictive paywalls."
      },
      {
        type: "paragraph" as const,
        content: "We understand that quality matters. When you use a free video downloader, you shouldn't have to compromise on visual fidelity. That's why our proprietary extraction engine is designed as an HD video downloader, capable of pulling the highest available resolution—including Full HD and 4K—directly from the source servers. Furthermore, for platforms like TikTok where branding can ruin your personal archive, SavClip operates as a powerful tool to download videos without watermark, giving you clean, pure MP4 files every single time."
      },
      {
        type: "paragraph" as const,
        content: "SavClip isn't just a fast video downloader; it is a universal video downloader online. We support all major networks seamlessly. Whether you need an Instagram Reels downloader to save viral clips, a Facebook video downloader for long-form content, or a YouTube to MP4 converter for your favorite vlogs, our platform handles it all through one simple, smart input box. Our system automatically detects the platform—be it Snapchat, Telegram, or X (Twitter)—and routes your request to the optimal extraction protocol."
      },
      {
        type: "paragraph" as const,
        content: "Beyond media extraction, SavClip is pioneering the future of social media growth. Our universal platform handles all major networks seamlessly through one simple, smart input box. Our system automatically detects the platform—be it Snapchat, Telegram, or X (Twitter)—and routes your request to the optimal extraction protocol. Experience the fastest, most secure video downloader available today, designed to run flawlessly on your iPhone, Android, or desktop PC."
      }
    ]
  }, [dict.home?.intro])

  const featuresList = React.useMemo(() => [
    { title: translateToolName("HD Video Downloads", currentLocale), desc: translateToolName("Save videos in stunning Full HD and 4K quality natively from the source.", currentLocale), icon: <Monitor className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("No Watermark", currentLocale), desc: translateToolName("Download clean videos from TikTok and Instagram without annoying logos.", currentLocale), icon: <Video className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("Multi-Platform Support", currentLocale), desc: translateToolName("Universal downloader for Instagram, TikTok, YouTube, Facebook, X, and more.", currentLocale), icon: <Layers className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("Lightning Fast", currentLocale), desc: translateToolName("Our multi-threaded extraction engine delivers the fastest video downloader experience.", currentLocale), icon: <Zap className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("Unlimited Downloads", currentLocale), desc: translateToolName("Completely free online video saver with zero daily limits or hidden paywalls.", currentLocale), icon: <Download className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("Mobile & Desktop", currentLocale), desc: translateToolName("Perfectly optimized video downloader for iPhone, Android, PC, and Mac.", currentLocale), icon: <Smartphone className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("100% Secure", currentLocale), desc: translateToolName("A safe, secure video downloader with no account login or app installation required.", currentLocale), icon: <ShieldCheck className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("AI Tool Suite", currentLocale), desc: translateToolName("Boost your social growth with our built-in TikTok & YouTube AI tools like tag generators and caption tools.", currentLocale), icon: <Zap className="w-6 h-6 text-fuchsia-600" /> },
    { title: translateToolName("Global CDN", currentLocale), desc: translateToolName("Worldwide server network ensures instant video download speeds wherever you are.", currentLocale), icon: <Globe className="w-6 h-6 text-fuchsia-600" /> }
  ], [currentLocale])

  const faqList = React.useMemo(() => [
    { q: translateToolName("How to download videos online for free?", currentLocale), a: translateToolName("Simply copy the link of the video from Instagram, TikTok, YouTube, or Facebook, and paste it into the search box on SavClip. Click 'Download' to save the HD video instantly.", currentLocale) },
    { q: translateToolName("Is this a video downloader without watermark?", currentLocale), a: translateToolName("Yes. SavClip serves as a premium no watermark downloader, especially for platforms like TikTok, ensuring you get a clean, unbranded HD video file.", currentLocale) },
    { q: translateToolName("Does this work as a video downloader for iPhone and Android?", currentLocale), a: translateToolName("Absolutely. SavClip is a fully responsive mobile video downloader. You can use it directly in Safari, Chrome, or any mobile browser without installing extra apps.", currentLocale) },
    { q: translateToolName("What social media platforms are supported?", currentLocale), a: translateToolName("SavClip is a universal video downloader supporting Instagram, Facebook, TikTok, YouTube, Snapchat, Telegram, and X (Twitter).", currentLocale) },
    { q: translateToolName("Are the AI tools free to use?", currentLocale), a: translateToolName("Yes! SavClip includes free AI tools for TikTok and YouTube such as caption generators, tag generators, and description generators to help you grow your social media presence.", currentLocale) },
    { q: translateToolName("Do I need to create an account?", currentLocale), a: translateToolName("No. SavClip is a secure video downloader that requires zero login, protecting your privacy and ensuring fast, anonymous downloads.", currentLocale) }
  ], [currentLocale])

  const howToUseSteps = React.useMemo(() => [
    { title: translateToolName("Copy the Link", currentLocale), description: translateToolName("Find the video, reel, or photo you want to download from your favorite app and copy its URL from the share menu.", currentLocale) },
    { title: translateToolName("Paste the Link", currentLocale), description: translateToolName("Paste the copied URL into the search box at the top of this page.", currentLocale) },
    { title: translateToolName("Download", currentLocale), description: translateToolName("Click the download button and choose your preferred HD video quality.", currentLocale) }
  ], [currentLocale])

  return (
    <div className="flex flex-col bg-linear-to-r from-fuchsia-600 via-purple-600 to-sky-500 font-sans">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-transparent px-4 pt-12 pb-8 sm:pt-20 sm:pb-12 sm:px-6 lg:px-8">
        <HeroEffect color="bg-fuchsia-400" intensity="high" />
        
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute -top-1/4 -left-1/4 h-[800px] w-[800px] animate-pulse rounded-full bg-fuchsia-500/30 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[800px] w-[800px] animate-pulse rounded-full bg-sky-500/30 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center flex flex-col items-center gap-6 sm:gap-8">
          <SocialPlatformBar 
            activeId="home" 
            className="!justify-center gap-2 sm:!gap-3 !py-3 !px-6 sm:!py-4 sm:!px-8 !w-fit rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl" 
          />
          
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center gap-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white text-center tracking-tight leading-tight drop-shadow-lg animate-fade-in-down">
              {dict.home?.hero?.title_1 || "All-in-One"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 drop-shadow-md">{dict.home?.hero?.title_2 || "Social Media"}</span> {dict.home?.hero?.title_3 || "Video Downloader (HD)"}
            </h1>
            <p className="text-sm md:text-xl font-medium text-white/90 text-center px-4 max-w-3xl drop-shadow-md">
              {dict.home?.hero?.subtitle || "Download HD videos, Reels, Shorts, and Photos from any social platform. Fast, secure, and completely free—with absolutely no watermarks."}
            </p>

          </motion.div>

          <div className="w-full max-w-4xl mt-0 sm:mt-4">
            <SearchBar
              onSearch={handleSearch}
              isLoading={isLoading}
              dict={dict}
              validate={isSmartInput}
              initialValue={sharedUrl}
              className="drop-shadow-xl"
              buttonClass="bg-linear-to-br from-pink-600 via-rose-600 to-pink-700 text-white font-bold uppercase tracking-wider shadow-lg transition-all active:translate-y-[2px] active:shadow-none"
              iconClass="text-white"
            />
            <div className="mt-6 flex flex-row flex-nowrap justify-center gap-3 sm:gap-8 opacity-90">
               {[
                 { label: dict.home?.trust?.watermark || "No Watermark", icon: <Video className="h-3.5 w-3.5 sm:h-4 w-4" /> },
                 { label: dict.home?.trust?.safe || "Secure", icon: <Lock className="h-3.5 w-3.5 sm:h-4 w-4" /> },
                 { label: dict.home?.trust?.free || "100% Free", icon: <Globe className="h-3.5 w-3.5 sm:h-4 w-4" /> }
               ].map((badge, i) => (
                 <div key={i} className={`flex items-center gap-1.5 font-bold text-white uppercase tracking-wider sm:tracking-widest hover:scale-105 transition-transform whitespace-nowrap ${locale === 'ar' ? "text-[11px] sm:text-sm" : "text-[8px] sm:text-xs"}`}>
                    <span className="p-0.5 sm:p-1 bg-white/20 rounded-lg backdrop-blur-md shrink-0">{badge.icon}</span>
                    <span className="drop-shadow-sm">{badge.label}</span>
                 </div>
               ))}
            </div>
          </div>

          
            <div className="mt-3 sm:mt-6 flex flex-col items-center">
              <div className="flex -space-x-4 mb-4">
                {[1,2,3,4,5].map((i) => (
                  <Image 
                    key={i} 
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    alt="User" 
                    width={48} 
                    height={48} 
                    className="w-12 h-12 rounded-full border-2 border-fuchsia-600 shadow-lg object-cover" 
                  />
                ))}
              </div>
              <p className="text-white font-bold tracking-widest uppercase text-sm drop-shadow-md">
                {dict.home?.trust?.users || "Trusted by 100,000+ creators worldwide"}
              </p>
            </div>

          <DownloadCounter accentColor="text-fuchsia-200" />

          <div className="mt-1 sm:mt-4 flex flex-col items-center gap-8 w-full">
            <LoadingBar isLoading={isLoading} label={dict?.common?.analyzing || "Analyzing media..."} gradient="from-indigo-500 via-purple-500 to-rose-500" />
            <DownloadPreview data={downloadData} isLoading={isLoading} autoTriggerDownload={autoTriggerDownload} searchCounter={searchCounter} buttonStyle="bg-linear-to-br from-pink-600 via-rose-600 to-pink-700 text-white font-bold uppercase tracking-wider shadow-lg" accentText="text-cyan-400" accentBg="bg-cyan-500/10" accentBorder="border-pink-600" />
          </div>
        </div>
      </section>

      {/* INTRO ARTICLE SECTION (SEO H2s & Semantic Text) */}
      <section className="pt-6 pb-8 bg-white dark:bg-neutral-950 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight mb-3 text-center leading-tight">
            {translateToolName("Download Videos from Social Media", currentLocale)}
          </h2>
          <RichArticle sections={introArticle} />
        </div>
      </section>

      
      {/* TRENDING TOOLS */}
      <section className="py-16 bg-white dark:bg-black px-4 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Zap className="w-8 h-8 text-fuchsia-600" />
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-white uppercase tracking-wider leading-tight">
              {translateToolName("Trending Tools Right Now", currentLocale)}
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Instagram Reels Downloader', href: '/instagram-reels-downloader' },
              { label: 'TikTok Video Downloader', href: '/tiktok-video-downloader' },
              { label: 'YouTube Shorts Downloader', href: '/youtube-shorts-downloader' },
              { label: 'Telegram Video Downloader', href: '/telegram-video-downloader' },
              { label: 'Facebook Video Downloader', href: '/facebook-video-downloader' },
              { label: 'Snapchat Spotlight Downloader', href: '/snapchat-spotlight-downloader' }
            ].map((tool, i) => (
              <Link key={i} href={getLocalizedHref(tool.href)} className="px-6 py-4 rounded-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-bold text-neutral-700 dark:text-neutral-300 hover:bg-fuchsia-600 hover:text-white hover:border-fuchsia-600 transition-all uppercase tracking-wider text-sm shadow-sm hover:scale-105">
                {translateToolName(tool.label, currentLocale)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO USE SECTION */}
      <div className="bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
        <PurpleStepGuide
          title={translateToolName("How to Use SavClip", currentLocale)}
          steps={howToUseSteps}
        />
      </div>

      {/* PLATFORM CARDS SECTION */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900 px-4 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl sm:text-5xl font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 leading-tight text-center">
              {translateToolName("All Video Downloader", currentLocale)}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 font-medium max-w-2xl mx-auto">
              {translateToolName("One multi-platform social media downloader for all your needs. From Instagram Reels to YouTube Shorts, we've got you covered.", currentLocale)}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { id: 'instagram', name: translateToolName('Instagram', currentLocale), desc: translateToolName('Download Reels, Stories & Photos', currentLocale), icon: '📸', color: 'bg-pink-500', href: '/instagram-video-downloader' },
              { id: 'tiktok', name: translateToolName('TikTok', currentLocale), desc: translateToolName('No Watermark Video Saver', currentLocale), icon: '🎵', color: 'bg-black', href: '/tiktok-video-downloader' },
              { id: 'youtube', name: translateToolName('YouTube', currentLocale), desc: translateToolName('Shorts & MP4 Downloader', currentLocale), icon: '▶️', color: 'bg-red-600', href: '/youtube-video-downloader' },
              { id: 'facebook', name: translateToolName('Facebook', currentLocale), desc: translateToolName('HD Video & Reels Downloader', currentLocale), icon: '🟦', color: 'bg-blue-600', href: '/facebook-video-downloader' },
              { id: 'x', name: translateToolName('X (Twitter)', currentLocale), desc: translateToolName('GIFs & Media Downloader', currentLocale), icon: '𝕏', color: 'bg-neutral-800', href: '/x-video-downloader' },
              { id: 'telegram', name: translateToolName('Telegram', currentLocale), desc: translateToolName('Private Video & File Saver', currentLocale), icon: '✈️', color: 'bg-sky-500', href: '/telegram-video-downloader' },
              { id: 'snapchat', name: translateToolName('Snapchat', currentLocale), desc: translateToolName('Stories & Spotlight Saver', currentLocale), icon: '👻', color: 'bg-yellow-400 text-black', href: '/snapchat-story-downloader' },
              { id: 'ai', name: translateToolName('AI Tools', currentLocale), desc: translateToolName('TikTok & YouTube Generators', currentLocale), icon: '🤖', color: 'bg-indigo-600', href: '/tiktok-caption-generator' },
            ].map((p) => (
              <Link key={p.id} href={getLocalizedHref(p.href)} className="flex flex-col p-8 rounded-3xl bg-white dark:bg-black shadow-sm border border-neutral-100 dark:border-neutral-800 hover:shadow-2xl hover:scale-[1.02] transition-all group">
                <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:rotate-6 transition-transform text-white`}>
                  {p.icon}
                </div>
                <h3 className="text-2xl font-black text-neutral-900 dark:text-white uppercase tracking-tight mb-2">{p.name}</h3>
                <p className="text-neutral-500 font-bold mb-6">{p.desc}</p>
                <div className="mt-auto inline-flex items-center gap-2 text-fuchsia-600 font-bold uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  {translateToolName("Open Tool", currentLocale)} <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* FEATURES SECTION (SEO Optimized) */}
      <section className="py-24 bg-white dark:bg-black px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-4 leading-tight text-center">
              {translateToolName("Best Free Online Video Downloader", currentLocale)}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 font-medium">
              {translateToolName("Why millions trust SavClip as their primary HD video downloader online.", currentLocale)}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresList.map((feature, i) => (
              <div key={i} className="p-8 bg-neutral-50 dark:bg-neutral-900/50 rounded-4xl border border-neutral-100 dark:border-neutral-800 transition-all hover:scale-[1.02] hover:shadow-xl group">
                <div className="h-14 w-14 rounded-2xl bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase tracking-tight mb-3">{feature.title}</h3>
                <p className="text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ SECTION (SEO Optimized) */}
      <section className="py-20 bg-white dark:bg-black px-4 border-t border-neutral-100 dark:border-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white uppercase tracking-wider text-center mb-16 leading-tight">
            {translateToolName("Frequently Asked Questions", currentLocale)}
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, i) => (
              <div key={i} className="p-6 bg-neutral-50 dark:bg-neutral-900 rounded-3xl border border-neutral-100 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white uppercase tracking-tight mb-2 flex items-center gap-3">
                  <HelpCircle className="h-5 w-5 text-fuchsia-600 shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed ml-8 text-justify md:text-left hyphens-auto">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* BLOG PREVIEWS */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900 px-4 border-t border-neutral-100 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white uppercase tracking-wider mb-4 leading-tight text-center">
              {translateToolName("Creator Growth Guides", currentLocale)}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 font-medium max-w-2xl mx-auto">
              {translateToolName("Master the algorithm and grow your audience with our latest tips and tricks.", currentLocale)}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Best Instagram Captions to Go Viral in 2026", cat: "Instagram Tips", color: "text-pink-500", href: "/blog", image: "/blog/insta_captions.png" },
              { title: "How to Download TikTok Videos Without Watermark Natively", cat: "TikTok Hacks", color: "text-indigo-500", href: "/blog", image: "/blog/tiktok_hacks.png" },
              { title: "The Ultimate Guide to YouTube Shorts Algorithm", cat: "YouTube Growth", color: "text-red-500", href: "/blog", image: "/blog/youtube_shorts.png" }
            ].map((blog, i) => (
              <Link key={i} href={getLocalizedHref(blog.href)} className="flex flex-col bg-white dark:bg-black rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-neutral-100 dark:border-neutral-800 group">
                <div className="h-48 bg-neutral-200 dark:bg-neutral-800 w-full relative overflow-hidden">
                  {blog.image ? (
                    <Image 
                      src={blog.image} 
                      alt={translateToolName(blog.title, currentLocale)} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 350px" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-linear-to-br from-neutral-200 to-neutral-300 dark:from-neutral-800 dark:to-neutral-900" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:scale-110 transition-transform duration-700">
                        <Hash className="w-24 h-24 text-neutral-900 dark:text-white" />
                      </div>
                    </>
                  )}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className={`text-xs font-black uppercase tracking-widest mb-3 ${blog.color}`}>{translateToolName(blog.cat, currentLocale)}</span>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white leading-snug mb-6 group-hover:text-fuchsia-600 transition-colors">
                    {translateToolName(blog.title, currentLocale)}
                  </h3>
                  <div className="mt-auto inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 font-bold uppercase tracking-widest text-xs">
                    {translateToolName("Read Article", currentLocale)} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-linear-to-r from-sky-500 to-indigo-600 text-white px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl sm:text-6xl font-bold uppercase tracking-tight mb-8 drop-shadow-lg leading-tight">
            {translateToolName("Start Downloading Now", currentLocale)}
          </h2>
          <p className="text-xl font-medium mb-12 opacity-90">
            {translateToolName("Join millions of users utilizing the best free online video downloader and AI growth suite on the internet.", currentLocale)}
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-12 py-5 bg-white text-indigo-600 rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform inline-block shadow-lg">
            {translateToolName("Paste Link Here", currentLocale)}
          </button>
        </div>
      </section>

      {/* RATING WIDGET */}
      <div className="flex flex-col items-center justify-center py-12 bg-neutral-50 dark:bg-neutral-900/10 border-t border-b border-neutral-100 dark:border-neutral-800">
        <RatingWidget toolKey="home" defaultRating={4.9} defaultReviewCount={25420} locale={locale} />
      </div>

      <ChromeExtensionBanner dict={dict} />
    </div>
  )
}

export function HomeView(props: { locale: Locale, dict: any }) {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-black" />}>
      <HomeViewContent {...props} />
    </React.Suspense>
  )
}
