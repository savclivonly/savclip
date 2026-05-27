import { translateToolName } from "@/utils/translate-tool";

import { getSeoAlternates } from "@/lib/seo"
import type { Metadata } from "next"
import ContactView from "./ContactView"

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await props.params).locale || 'en';
  const rawTitle = "Contact Us – Get in Touch with SavClip Team";
  const rawDesc = "Have questions or feedback? Get in touch with the SavClip team. We are here to help you with any technical issues or feature inquiries.";
  const title = translateToolName(rawTitle, locale);
  const description = translateToolName(rawDesc, locale);
  
  return {
    title,
    description,
    alternates: getSeoAlternates("contact", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/contact`,
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
  const locale = (await props.params).locale || 'en';
  return <ContactView locale={locale} />
}
