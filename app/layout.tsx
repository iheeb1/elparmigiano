import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'El Parmigiano — Restaurant Italien | Pizza, Panuozzo, El Panino',
  description:
    "El Parmigiano — restaurant italien authentique. Pizza artisanale, Panuozzo, El Panino et El Vulcano préparés avec des ingrédients frais et traditionnels. Ouverture prochaine.",
  keywords: ['restaurant italien', 'pizza', 'panuozzo', 'el panino', 'el vulcano', 'cuisine italienne', 'parmesan', 'el parmigiano'],
  authors: [{ name: 'El Parmigiano' }],
  creator: 'El Parmigiano',
  publisher: 'El Parmigiano',
  metadataBase: new URL('https://elparmigiano.fr'),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: '/',
    siteName: 'El Parmigiano',
    title: 'El Parmigiano — Restaurant Italien | Pizza, Panuozzo, El Panino',
    description:
      "El Parmigiano — restaurant italien authentique. Pizza artisanale, Panuozzo, El Panino et El Vulcano préparés avec des ingrédients frais et traditionnels.",
    images: [
      {
        url: '/images/logo.png',
        width: 512,
        height: 512,
        alt: 'El Parmigiano Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Parmigiano — Restaurant Italien',
    description:
      "Pizza artisanale, Panuozzo, El Panino et El Vulcano — la véritable cuisine italienne.",
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/images/logo.png',
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/images/logo.png',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#5c0c0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
