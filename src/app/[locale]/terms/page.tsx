import { translateToolName } from "@/utils/translate-tool";

import * as React from "react"
import { Scale, Gavel, AlertTriangle, FileCheck } from "lucide-react"
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
  const title = legalData.terms.metaTitle;
  const description = legalData.terms.metaDesc;
  
  return {
    title,
    description,
    alternates: getSeoAlternates("terms", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/terms`,
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

export default async function TermsPage(props: { params: Promise<{ locale: string }> }) {
  const locale = (await props.params).locale || 'en';
  const legalData = await getLegalData(locale);
  const data = legalData.terms;

  return (
    <div className="flex flex-col min-h-[60vh] px-4 py-20 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-600">
            <Scale className="h-8 w-8" />
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
              <Gavel className="h-5 w-5" />
              <h2 className="text-2xl font-black m-0 leading-tight">
                {data.acceptanceTitle}
              </h2>
            </div>
            <p className="leading-relaxed font-medium">
              {data.acceptanceBody}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
              {data.licenseTitle}
            </h2>
            <p className="leading-relaxed mb-4">
              {data.licenseIntro}
            </p>
            <ul className="list-disc pl-8 space-y-3 font-medium">
              {data.licenseItems.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="mt-6 p-6 bg-amber-500/5 border-l-4 border-amber-500 rounded-r-2xl">
              <p className="text-sm font-bold text-amber-600 m-0 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4" />
                {data.responsibilityTitle}
              </p>
              <p className="text-sm font-medium mt-2 m-0">
                {data.responsibilityBody}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
              {data.disclaimerTitle}
            </h2>
            <p className="leading-relaxed">
              {data.disclaimerBody}
            </p>
          </section>

          <section className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-[2rem] border border-neutral-200 dark:border-neutral-800">
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 m-0 leading-tight">
              {data.liabilityTitle}
            </h2>
            <p className="leading-relaxed mt-4">
              {data.liabilityBody}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-neutral-900 dark:text-white mb-6 leading-tight">
              {data.accuracyTitle}
            </h2>
            <p className="leading-relaxed mb-4">
              {data.accuracyBody}
            </p>
            <p className="leading-relaxed">
              {data.linksBody}
            </p>
          </section>

          <section className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 mb-4 text-neutral-900 dark:text-white">
              <FileCheck className="h-5 w-5" />
              <h2 className="text-2xl font-black m-0 leading-tight">
                {data.governingTitle}
              </h2>
            </div>
            <p className="leading-relaxed font-bold">
              {data.governingBody}
            </p>
          </section>
        </div>
      </div>
      <CategoryCards />
    </div>
  )
}
