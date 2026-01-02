import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'en'

function getLocale(request: NextRequest): string {
  // 1. Check cookie first
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // 2. Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const browserLocale = acceptLanguage.split(',')[0].split('-')[0]
    if (locales.includes(browserLocale)) {
      return browserLocale
    }
  }

  // 3. Default
  return defaultLocale
}

export function middleware(request: NextRequest) {
  const locale = getLocale(request)
  const response = NextResponse.next()

  // Set cookie for future requests (30 days)
  response.cookies.set('NEXT_LOCALE', locale, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  })

  // Set header for server components
  response.headers.set('x-locale', locale)

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.svg|.*\\.jpg|.*\\.jpeg).*)',
  ],
}
