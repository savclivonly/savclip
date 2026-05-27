export const locales = ['en', 'pt', 'es', 'id', 'ar'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pt: () => import('./dictionaries/pt.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  id: () => import('./dictionaries/id.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
}

import { cache } from 'react'

const dictionaryCache: Record<string, any> = {}

export const getDictionary = cache(async (locale: string): Promise<any> => {
  const safeLocale = locales.includes(locale as any) ? locale : 'en'
  if (dictionaryCache[safeLocale]) return dictionaryCache[safeLocale]

  const dict = await dictionaries[safeLocale as Locale]()
  dictionaryCache[safeLocale] = dict
  return dict
})


export const languageNames: Record<string, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  id: 'Indonesian',
  ar: 'العربية',
}

export const languageFlags: Record<string, string> = {
  en: '🇺🇸',
  pt: '🇧🇷',
  es: '🇲🇽',
  id: '🇮🇩',
  ar: '🇸🇦',
}

export const rtlLocales: string[] = ['ar'];
export const isRTL = (locale: string) => rtlLocales.includes(locale);

