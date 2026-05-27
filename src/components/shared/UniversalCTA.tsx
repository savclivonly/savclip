"use client"

import * as React from "react"
import { translateToolName } from "@/utils/translate-tool"

interface UniversalCTAProps {
  config: {
    ctaColor: string;
    ctaTitleKey: string;
    ctaDescKey: string;
    ctaButtonLabel: string;
  };
  locale: string;
}

export function UniversalCTA({ config, locale }: UniversalCTAProps) {
  const currentLocale = locale || "en";

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className={`py-24 ${config.ctaColor || 'bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600'} text-white text-center px-4`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-tight">
          {translateToolName(config.ctaTitleKey, currentLocale)}
        </h2>
        <p className="text-xl font-bold mb-12 opacity-90">
          {translateToolName(config.ctaDescKey, currentLocale)}
        </p>
        <button 
          onClick={handleScrollTop}
          className="px-12 py-5 bg-white text-neutral-900 rounded-full font-black uppercase tracking-widest shadow-2xl hover:scale-110 transition-transform cursor-pointer"
        >
          {translateToolName(config.ctaButtonLabel, currentLocale)}
        </button>
      </div>
    </section>
  )
}
