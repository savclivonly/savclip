import * as React from "react"
import { type Locale, getDictionary } from "@/i18n"
import { translateToolName } from "@/utils/translate-tool";

import { HomeView } from "./HomeView"
import { StructuredData } from "@/components/shared/StructuredData"

import { getSeoAlternates } from "@/lib/seo"
import type { Metadata } from "next"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await props.params).locale || 'en';
  const dict = await getDictionary(locale);
  const title = dict.seo?.title || "SavClip: Free HD Social Media Video Downloader Online";
  const description = dict.seo?.description || "Download high-quality HD videos from Instagram, TikTok, YouTube, and more for free. Fast, secure, no watermark video downloader online by SavClip.";
  
  return {
    title,
    description,
    alternates: getSeoAlternates("", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}`,
      images: [
        {
          url: "/icon-512x512.png",
          width: 512,
          height: 512,
          alt: "SavClip Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

export default async function HomePage(props: { params: Promise<{ locale: string }> }) {
  const locale = (await props.params).locale || 'en';
  const fullDict = await getDictionary(locale);
  const { platforms, ...rest } = fullDict;
  const dict = {
    ...rest,
    platforms: {
      instagram: platforms?.instagram
    }
  };

  const faqList = [
    { q: translateToolName("How to download videos online for free?", locale), a: translateToolName("Simply copy the link of the video from Instagram, TikTok, YouTube, or Facebook, and paste it into the search box on SavClip. Click 'Download' to save the HD video instantly.", locale) },
    { q: translateToolName("Is this a video downloader without watermark?", locale), a: translateToolName("Yes. SavClip serves as a premium no watermark downloader, especially for platforms like TikTok, ensuring you get a clean, unbranded HD video file.", locale) },
    { q: translateToolName("Does this work as a video downloader for iPhone and Android?", locale), a: translateToolName("Absolutely. SavClip is a fully responsive mobile video downloader. You can use it directly in Safari, Chrome, or any mobile browser without installing extra apps.", locale) },
    { q: translateToolName("What social media platforms are supported?", locale), a: translateToolName("SavClip is a universal video downloader supporting Instagram, Facebook, TikTok, YouTube, Snapchat, Telegram, and X (Twitter).", locale) },
    { q: translateToolName("Are the AI tools free to use?", locale), a: translateToolName("Yes! Our AI Caption Generator, AI Hashtag Generator, and AI Bio Generator are completely free to use to help you grow your social media presence.", locale) },
    { q: translateToolName("Do I need to create an account?", locale), a: translateToolName("No. SavClip is a secure video downloader that requires zero login, protecting your privacy and ensuring fast, anonymous downloads.", locale) }
  ];

  return (
    <>
      <StructuredData locale={locale} type="BreadcrumbList" data={[{ name: translateToolName("Home", locale), item: "https://savclip.com" }]} />
      <StructuredData locale={locale} type="SoftwareApplication" data={{ title: "SavClip Universal Social Media Downloader", description: "Free HD video downloader online without watermark for Instagram, TikTok, YouTube, and Facebook.", ratingValue: "4.9", reviewCount: "25420" }} />
      <StructuredData locale={locale} type="FAQPage" data={{ items: faqList }} />
      <HomeView locale={locale as Locale} dict={dict} />
    </>
  )
}

