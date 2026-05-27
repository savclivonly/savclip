import en from './en.json'
import pt from './pt.json'
import es from './es.json'
import id from './id.json'
import ar from './ar.json'

export const dictionaries = {
  en,
  pt,
  es,
  id,
  ar,
}

export type Dictionary = typeof en
export type Locale = string

export const getDictionary = (locale: string): Dictionary => {
  return (dictionaries as any)[locale] || dictionaries.en
}
