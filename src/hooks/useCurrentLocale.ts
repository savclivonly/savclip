"use client"

import { usePathname } from 'next/navigation'
import { locales } from '@/i18n'

export function useCurrentLocale() {
  const pathname = usePathname()
  if (!pathname) return 'en'
  
  const segments = pathname.split('/')
  const firstSegment = segments[1]
  
  if (locales.includes(firstSegment as any)) {
    return firstSegment
  }
  
  return 'en'
}
