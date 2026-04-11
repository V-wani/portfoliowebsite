import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap' })

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vaibhav Wani",
  "alternateName": "V Wani",
  "url": "https://vwani.in",
  "image": "https://vwani.in/vaibhav-wani-ai-developer.jpg",
  "sameAs": [
    "https://github.com/V-wani",
    "https://www.linkedin.com/in/vaibhavwani17"
  ],
  "jobTitle": "AI Developer & Tech Entrepreneur",
  "worksFor": {
    "@type": "Organization",
    "name": "Prime Web Tech"
  },
  "description": "AI Developer and Tech Entrepreneur specializing in scalable AI solutions and modern web development."
}

export const metadata: Metadata = {
  title: 'Vaibhav Wani (V Wani) | AI Website Developer | Founder of Prime Web Tech',
  description:
    'Vaibhav Wani (V Wani) is a Computer Science engineering student, AI Developer, and Tech Entrepreneur specializing in scalable AI solutions and web development.',
  keywords: [
    'Vaibhav Wani',
    'V Wani',
    'Vaibhav Wani AI Developer',
    'Founder of Prime Web Tech',
    'AI Website Developer',
    'Prime Web Tech',
    'AI Solutions Developer',
    'Custom AI Websites',
    'Web Development Specialist',
  ],
  authors: [{ name: 'Vaibhav Wani', url: 'https://vwani.in' }],
  creator: 'Vaibhav Wani',
  publisher: 'Vaibhav Wani',
  metadataBase: new URL('https://vwani.in'),
  alternates: {
    canonical: 'https://vwani.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vwani.in',
    siteName: 'Vaibhav Wani - Personal Portfolio',
    title: 'Vaibhav Wani (V Wani) | AI Website Developer | Founder of Prime Web Tech',
    description:
      'Official portfolio of Vaibhav Wani. AI Website Developer & Founder of Prime Web Tech. Building scalable digital solutions.',
    images: [
      {
        url: 'https://vwani.in/vaibhav-wani-ai-developer.jpg',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Wani - AI Website Developer & Founder of Prime Web Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Wani (V Wani) | AI Website Developer | Founder of Prime Web Tech',
    description:
      'AI Website Developer & Founder of Prime Web Tech. Specialized in custom web solutions.',
    images: ['https://vwani.in/vaibhav-wani-ai-developer.jpg'],
    creator: '@vaibhavwani',
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
  verification: {
    google: 'your-google-verification-code',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0f' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-foreground bg-background">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
