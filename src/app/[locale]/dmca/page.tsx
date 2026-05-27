import { translateToolName } from "@/utils/translate-tool";

import * as React from "react"
import { AlertTriangle, Mail } from "lucide-react"
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
  const title = legalData.dmca.metaTitle;
  const description = legalData.dmca.metaDesc;
  
  return {
    title,
    description,
    alternates: getSeoAlternates("dmca", locale),
    openGraph: {
      title,
      description,
      url: `https://savclip.com${locale === 'en' ? '' : `/${locale}`}/dmca`,
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

export default async function DMCAPage(props: { params: Promise<{ locale: string }> }) {
  const locale = (await props.params).locale || 'en';
  const legalData = await getLegalData(locale);
  const data = legalData.dmca;

  return (
    <div className="flex flex-col min-h-screen px-4 py-20 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="mx-auto max-w-4xl w-full">
        <div className="flex items-center gap-4 mb-8">
           <div className="h-14 w-14 flex items-center justify-center rounded-3xl bg-red-500/10 text-red-600 border border-red-500/20 shadow-lg">
             <AlertTriangle className="h-7 w-7" />
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
            <p className="text-lg font-bold leading-relaxed m-0">
              {data.intro}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black tracking-wider md:tracking-widest uppercase italic text-neutral-900 dark:text-white mb-6 leading-tight">
              {data.reportingTitle}
            </h2>
            <p className="font-medium leading-relaxed mb-6">
              {data.reportingIntro}
            </p>
            <ul className="list-disc pl-8 space-y-4 font-bold text-sm">
              {data.reportingItems.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="relative group overflow-hidden p-10 rounded-[3rem] bg-[#0a0a0a] border border-white/10 shadow-2xl">
             <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail className="h-24 w-24 text-pink-600" />
             </div>
             <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-3 relative z-10">
               <Mail className="h-6 w-6 text-pink-600" />
               {data.takedownTitle}
             </h3>
             <p className="text-white/60 font-medium leading-relaxed relative z-10 max-w-lg mb-6">
               {data.takedownBody}
             </p>
             <div className="bg-white/5 inline-block px-6 py-3 rounded-2xl border border-white/10 relative z-10">
                <span className="text-pink-500 font-black text-lg">ramzaan0043@gmail.com</span>
             </div>
          </div>

          <section className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
             <h2 className="text-2xl font-black tracking-wider md:tracking-widest uppercase italic text-neutral-900 dark:text-white mb-4 leading-tight">
               {data.counterTitle}
             </h2>
             <p className="font-medium leading-relaxed">
               {data.counterBody}
             </p>
          </section>
        </div>
      </div>
      <CategoryCards />
    </div>
  )
}
