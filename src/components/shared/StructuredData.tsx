import { translateToolName } from "@/utils/translate-tool"

const SITE_URL = "https://savclip.com"
const locales = ['pt', 'es', 'id', 'ar']

interface StructuredDataProps {
  type: "FAQPage" | "HowTo" | "SoftwareApplication" | "BreadcrumbList" | "WebSite"
  data: any
  locale?: string
}

export function StructuredData({ type, data, locale = 'en' }: StructuredDataProps) {
  const dataStr = typeof data === 'object' ? JSON.stringify(data) : String(data)
  const hash = dataStr.slice(0, 15).replace(/[^a-zA-Z0-9]/g, '')
  const generatedId = `${type}-${hash}`
  let schema: any = {}

  if (type === "BreadcrumbList") {
    schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": Array.isArray(data) ? data.map((item: any, index: number) => {
        let rawItem: string = item.item || "/"
        // Prepend locale prefix for translated pages
        if (locale && locale !== 'en' && !rawItem.startsWith('http')) {
          const rawPath = rawItem.startsWith('/') ? rawItem : '/' + rawItem;
          rawItem = `/${locale}${rawPath === '/' ? '' : rawPath}`;
        }
        const absoluteItem = rawItem.startsWith("http") ? rawItem : `${SITE_URL}${rawItem.startsWith("/") ? rawItem : "/" + rawItem}`
        return {
          "@type": "ListItem",
          "position": index + 1,
          "name": translateToolName(item.name, locale),
          "item": absoluteItem
        }
      }) : []
    }
  }

  if (type === "SoftwareApplication") {
    const localizedTitle = translateToolName(data.title, locale);
    const appSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": localizedTitle,
      "image": "https://savclip.com/icon.png",
      "operatingSystem": "iOS, Android, Windows, macOS, Linux",
      "applicationCategory": "SocialNetworkingApplication",
      "datePublished": "2024-01-10T08:00:00+00:00",
      "dateModified": "2026-05-24T08:00:00+00:00",
      "softwareVersion": "1.5.2",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": data.ratingValue || "4.9",
        "reviewCount": data.reviewCount || "12840"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": data.description || translateToolName("Free online social media downloader for videos, reels, and stories.", locale)
    };

    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": translateToolName("How to use {title}", locale).replace("{title}", localizedTitle),
      "description": translateToolName("Follow these 3 easy steps to download media using {title}.", locale).replace("{title}", localizedTitle),
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": translateToolName("Copy the Link", locale),
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "text": translateToolName("Open the social media application or website, find the media you want to save, and copy its URL or share link.", locale)
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": translateToolName("Paste the Link", locale),
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "text": translateToolName("Go to the {title} page on SavClip, and paste the copied link into the input box at the top.", locale).replace("{title}", localizedTitle)
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": translateToolName("Download the Media", locale),
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "text": translateToolName("Click the 'Download' button. Once processed, select your preferred quality to save the file to your device.", locale)
            }
          ]
        }
      ]
    };

    schema = [appSchema, howToSchema];
  }

  if (type === "HowTo") {
    schema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": data.name || data.title,
      "description": data.description || data.desc,
      "step": Array.isArray(data.steps) ? data.steps.map((step: any, index: number) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": (typeof step === 'object' && (step.name || step.title)) ? (step.name || step.title) : `${translateToolName("Step", locale)} ${index + 1}`,
        "text": typeof step === 'string' ? step : (step.desc || step.title || step.text)
      })) : []
    }
  }

  if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "SavClip",
      "alternateName": ["SavClip Downloader", "SavClip"],
      "url": "https://savclip.com",
      "datePublished": "2024-01-10T08:00:00+00:00",
      "dateModified": "2026-05-24T08:00:00+00:00",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://savclip.com?url={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  }

  if (type === "FAQPage") {
    const faqItems = Array.isArray(data) ? data : (data.items || []);
    schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((faq: { q?: string; a?: string; title?: string; desc?: string }) => ({
        "@type": "Question",
        "name": faq.q || faq.title,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a || faq.desc
        }
      }))
    }
  }

  return (
    <script
      id={`json-ld-${type}-${generatedId}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
