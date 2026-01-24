import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaibhav Wani | AI/ML Enthusiast & Frontend Developer',
  description:
    'Vaibhav Wani is an engineering student and AI/ML enthusiast focused on data analysis, computer vision, and modern web development. Explore projects, skills, and professional journey.',
  keywords: [
    'Vaibhav Wani',
    'Vaibhav Wani portfolio',
    'Vaibhav Wani developer',
    'Vaibhav Wani AI ML',
    'AI/ML Enthusiast',
    'Machine Learning',
    'Computer Vision',
    'Frontend Developer',
    'React Developer',
    'Python Developer',
    'Data Analysis',
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
    siteName: 'Vaibhav Wani - Portfolio',
    title: 'Vaibhav Wani | AI/ML Enthusiast & Frontend Developer',
    description:
      'Vaibhav Wani is an engineering student and AI/ML enthusiast focused on data analysis, computer vision, and modern web development.',
    images: [
      {
        url: 'https://vwani.in/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vaibhav Wani - AI/ML Enthusiast & Frontend Developer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vaibhav Wani | AI/ML Enthusiast & Frontend Developer',
    description:
      'Vaibhav Wani is an engineering student and AI/ML enthusiast focused on data analysis, computer vision, and modern web development.',
    images: ['https://vwani.in/og-image.png'],
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
      <body className="font-sans antialiased">
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
