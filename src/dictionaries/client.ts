import { useState, useEffect } from 'react'
import en from './en.json'

export type Dictionary = typeof en
export type Locale = string

const cache: Record<string, Dictionary> = { en }

/**
 * Hook to load translation dictionaries dynamically in client components.
 * Prevents bundling all JSON files in the initial client bundle.
 */
export function useClientDictionary(locale: string): Dictionary {
  const [dict, setDict] = useState<Dictionary>(cache[locale] || en)

  useEffect(() => {
    if (cache[locale]) {
      setDict(cache[locale])
      return
    }

    let active = true
    const load = async () => {
      let data: Dictionary
      switch (locale) {
        case 'pt':
          data = (await import('./pt.json')).default
          break
        case 'es':
          data = (await import('./es.json')).default
          break
        case 'id':
          data = (await import('./id.json')).default
          break
        case 'ar':
          data = (await import('./ar.json')).default
          break
        default:
          data = en
      }
      cache[locale] = data
      if (active) {
        setDict(data)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [locale])

  return dict
}

/**
 * Async helper to load a dictionary on demand
 */
export const getDictionary = async (locale: string): Promise<Dictionary> => {
  if (cache[locale]) return cache[locale]
  let data: Dictionary
  switch (locale) {
    case 'pt':
      data = (await import('./pt.json')).default
      break
    case 'es':
      data = (await import('./es.json')).default
      break
    case 'id':
      data = (await import('./id.json')).default
      break
    case 'ar':
      data = (await import('./ar.json')).default
      break
    default:
      data = en
  }
  cache[locale] = data
  return data
}
