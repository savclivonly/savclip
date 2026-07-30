import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'pt', 'es', 'id', 'ar']

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal next requests, static assets, APIs, and file-like paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/assets') ||
    pathname.startsWith('/images') ||
    pathname.includes('.') || 
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next()
  }

  // 1. Redirect explicit "/en" prefix to the clean path for SEO optimization
  if (pathname.startsWith('/en/') || pathname === '/en') {
    let cleanPathname = pathname.replace(/^\/en/, '')
    if (cleanPathname === '') cleanPathname = '/'

    const url = new URL(cleanPathname, request.url)
    request.nextUrl.searchParams.forEach((val, key) => {
      url.searchParams.set(key, val)
    })
    
    return NextResponse.redirect(url, 301)
  }

  // 2. Check if the pathname starts with another supported locale (e.g. /es, /pt)
  const matchedLocale = locales.find(
    (locale) => locale !== 'en' && (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  )

  if (matchedLocale) {
    return NextResponse.next()
  }

  // 3. For default English (no prefix), rewrite internally to prefix /en
  const url = new URL(`/en${pathname}`, request.url)
  request.nextUrl.searchParams.forEach((val, key) => {
    url.searchParams.set(key, val)
  })

  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|manifest.json|sw.js|sitemap.xml|robots.txt|assets|images).*)',
  ],
}

export default proxy;
