import { translateToolName } from "@/utils/translate-tool";

import { getSeoAlternates } from "@/lib/seo"
import type { Metadata } from "next"
import AboutView from "./AboutView"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await props.params).locale || 'en';
  const rawTitle = "About Us – Learn More About SavClip Downloader";
  const rawDesc = "Learn more about SavClip, the premier web-based media downloader. Discover our mission to provide fast, high-quality, and secure media conversion tools.";
  const title = translateToolName(rawTitle, locale);
  const description = translateToolName(rawDesc, locale);
  
  return {
    title,
    description,
    alternates: getSeoAlternates("about", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/about`,
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

export default async function Page(props: { params: Promise<{ locale: string }> }) {
  return <AboutView />
}
