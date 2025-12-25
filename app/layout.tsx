import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Viral Content AI Agent - Auto Generate Viral Reels',
  description: 'Automatically generate viral Instagram Reels, TikTok videos, and YouTube Shorts with AI-powered scripts, captions, hashtags, and optimization.',
  keywords: 'viral content, AI agent, Instagram Reels, TikTok, YouTube Shorts, content creation, viral marketing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
