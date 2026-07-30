"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/utils/cn"
import { motion } from "framer-motion"
import { useCurrentLocale } from "@/hooks/useCurrentLocale"
import { useClientDictionary } from "@/dictionaries/client"
import { translateToolName } from "@/utils/translate-tool"

export interface TabItem {
  id: string
  label: string
  icon: React.ReactNode
  href: string
}

interface PlatformTabsProps {
  items: TabItem[]
  activeId: string
  activeColor?: string
  tabs?: Record<string, string>
  className?: string
  locale?: string
  indicatorColor?: string
}

export function PlatformTabs({ items, activeId, activeColor = "text-pink-600", tabs: propTabs, className, locale: propLocale, indicatorColor = "bg-white" }: PlatformTabsProps) {
  const currentLocale = useCurrentLocale()
  const locale = propLocale || currentLocale
  const clientDict = useClientDictionary(locale)
  const tabs = propTabs || clientDict?.tabs

  return (
    <div className={cn("mt-1 sm:mt-3 mb-6 sm:mb-10 flex justify-center w-full px-2 sm:px-0", className)}>
      <div className="grid grid-cols-5 items-center gap-0.5 rounded-2xl bg-black/20 p-1 backdrop-blur-xl border border-white/10 shadow-2xl outline-hidden ring-1 ring-white/5 w-full max-w-4xl mx-auto">
        {items.map((item) => {
          const isActive = item.id === activeId
          const label = (tabs as any)?.[item.id] || translateToolName(item.label, locale)
          const rawHref = item.href
          const localizedHref = locale === 'en' ? rawHref : `/${locale}${rawHref.startsWith('/') ? rawHref : '/' + rawHref}`
          return (
            <Link
              key={item.id}
              href={localizedHref}
              prefetch={true}
              className={cn(
                "group relative flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 rounded-xl py-2 sm:py-2.5 text-[9px] sm:text-[13px] font-black tracking-tight transition-all duration-300 w-full",
                isActive ? activeColor : "text-white/60 hover:text-white"
              )}
            >
              <div className={cn("relative z-10 shrink-0 transition-all duration-300", isActive ? "scale-110 rotate-3" : "opacity-70 group-hover:opacity-100 group-hover:scale-105")}>
                {item.icon}
              </div>
              <span className="relative z-10 transition-colors duration-300 text-center line-clamp-1">{label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className={cn("absolute inset-0 rounded-xl shadow-[0_4px_20px_rgba(255,255,255,0.4)] md:shadow-[0_4px_25px_rgba(255,255,255,0.6)] md:ring-1 md:ring-white/40", indicatorColor)}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                />
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
