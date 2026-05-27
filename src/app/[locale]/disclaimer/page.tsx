import { translateToolName } from "@/utils/translate-tool";

import * as React from "react"
import { Scale, Info } from "lucide-react"
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
  const title = legalData.disclaimer.metaTitle;
  const description = legalData.disclaimer.metaDesc;
  
  return {
    title,
    description,
    alternates: getSeoAlternates("disclaimer", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/disclaimer`,
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

export default async function DisclaimerPage(props: { params: Promise<{ locale: string }> }) {
  const locale = (await props.params).locale || 'en';
  const legalData = await getLegalData(locale);
  const data = legalData.disclaimer;

  return (
    <div className="flex flex-col min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-14 w-14 flex items-center justify-center rounded-3xl bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-800 shadow-sm">
             <Scale className="h-7 w-7" />
           </div>
           <div>
             <h1 className="text-4xl font-black tracking-tight uppercase italic text-neutral-900 dark:text-white">
               {data.title}
             </h1>
             <p className="text-sm font-bold text-neutral-500 tracking-widest uppercase italic mt-1 hidden sm:block">
               {data.subtitle}
             </p>
           </div>
        </div>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-12 text-neutral-600 dark:text-neutral-400">
          <section className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800">
            <p className="text-lg font-bold leading-relaxed border-l-4 border-pink-600 pl-8 m-0">
              {data.readCarefully}
            </p>
          </section>

          <section>
             <div className="flex items-center gap-3 text-pink-600 mb-6">
                <Info className="h-6 w-6" />
                <h2 className="text-2xl font-black tracking-wider md:tracking-widest uppercase italic m-0 leading-tight">
                  {data.affiliationTitle}
                </h2>
             </div>
             <p className="font-medium leading-relaxed">
               {data.affiliationBody}
             </p>
          </section>

          <section>
             <h2 className="text-2xl font-black tracking-wider md:tracking-widest uppercase italic text-neutral-900 dark:text-white mb-6 leading-tight">
               {data.complianceTitle}
             </h2>
             <p className="font-medium leading-relaxed">
               {data.complianceBody}
             </p>
          </section>

          <section className="bg-neutral-50 dark:bg-neutral-900/50 p-8 rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800">
             <h2 className="text-2xl font-black tracking-wider md:tracking-widest uppercase italic text-neutral-900 dark:text-white mb-6 m-0 leading-tight">
               {data.noHostingTitle}
             </h2>
             <p className="font-medium leading-relaxed mt-4">
               {data.noHostingBody}
             </p>
          </section>

          <section className="pt-10 border-t border-neutral-200 dark:border-neutral-800 text-center">
             <p className="text-sm font-black tracking-widest uppercase italic text-neutral-400">
               {data.acknowledgement}
             </p>
          </section>
        </div>
      </div>
      <CategoryCards />
    </div>
  )
}
