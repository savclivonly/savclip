import { translateToolName } from "@/utils/translate-tool";

import * as React from "react"
import { Shield, Lock, Eye, FileText } from "lucide-react"
import { CategoryCards } from "@/components/layout/CategoryCards"
import { getSeoAlternates } from "@/lib/seo"
import type { Metadata } from "next"

async function getLegalData(locale: string) {
  try {
    return (await import(`@/data/legal/${locale}`)).legalData;
  } catch (error) {
    return (await import(`@/data/legal/en`)).legalData;
  }
}

export async function generateMetadata(props: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const locale = (await props.params).locale || 'en';
  const legalData = await getLegalData(locale);
  const title = legalData.privacyPolicy.metaTitle;
  const description = legalData.privacyPolicy.metaDesc;
  
  return {
    title,
    description,
    alternates: getSeoAlternates("privacy-policy", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/privacy-policy`,
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

export default async function PrivacyPolicyPage(props: { params: Promise<{ locale: string }> }) {
  const locale = (await props.params).locale || 'en';
  const legalData = await getLegalData(locale);
  const data = legalData.privacyPolicy;

  return (
    <div className="flex flex-col min-h-[60vh] px-4 py-20 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-pink-500/10 text-pink-600">
            <Shield className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tight uppercase italic text-neutral-900 dark:text-white">
              {data.title}
            </h1>
            <p className="text-sm font-bold text-neutral-500 tracking-widest uppercase italic mt-1 hidden sm:block">
              {data.lastUpdated}
            </p>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-400 space-y-12">
          <section className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 mb-4 text-neutral-900 dark:text-white">
              <Lock className="h-5 w-5" />
              <h2 className="text-2xl font-black m-0 leading-tight">
                {data.commitmentTitle}
              </h2>
            </div>
            <p className="leading-relaxed font-medium">
              {data.commitmentBody}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
              {data.logFilesTitle}
            </h2>
            <p className="leading-relaxed mb-4">
              {data.logFilesBody}
            </p>
            <div className="bg-pink-500/5 border-l-4 border-pink-500 p-6 rounded-r-2xl">
               <p className="text-sm font-bold text-pink-600 dark:text-pink-400 m-0">
                 {data.zeroTrackingTitle}
               </p>
               <p className="text-sm font-medium mt-2 m-0">
                 {data.zeroTrackingBody}
               </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
              {data.cookiesTitle}
            </h2>
            <p className="leading-relaxed">
              {data.cookiesBody}
            </p>
          </section>

          <section className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 m-0 leading-tight">
              {data.dartTitle}
            </h2>
            <p className="leading-relaxed mt-4">
              {data.dartBody}
              <a href="https://policies.google.com/technologies/ads" className="text-pink-600 hover:underline">
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
              {data.rightsTitle}
            </h2>
            <p className="leading-relaxed mb-4">
              {data.rightsIntro}
            </p>
            <ul className="list-disc pl-8 space-y-4 font-medium">
              {data.rightsItems.map((item: string, index: number) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>

          <section className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-4 leading-tight">
              {data.consentTitle}
            </h2>
            <p className="leading-relaxed font-bold">
              {data.consentBody}
            </p>
          </section>
        </div>
      </div>
      <CategoryCards />
    </div>
  )
}
