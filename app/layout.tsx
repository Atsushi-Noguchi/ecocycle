import type { Metadata } from "next"
import { Geist } from "next/font/google"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/toaster"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "エコリサイクル株式会社 | 不用品買取・リサイクル専門",
    template: "%s | エコリサイクル株式会社"
  },
  description: "環境に優しい不用品買取・リサイクルサービス。家電/家具の無料引き取りから適正処理まで持続可能な社会を実現します。",
  keywords: ["不用品回収", "リサイクル", "エコ", "環境保護", "買取"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "エコリサイクル株式会社",
    title: "エコリサイクル株式会社 | 持続可能なリサイクルサービス",
    description: "環境配慮型の不用品処理でSDGsに貢献するリサイクル専門企業",
    images: [
      {
        url: "/ogp-image.jpg",
        width: 1200,
        height: 630,
        alt: "エコリサイクル株式会社 ロゴイメージ"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "エコリサイクル株式会社 | 不用品買取・リサイクル専門",
    description: "環境に優しいリサイクルサービスで持続可能な社会を実現",
    images: ["/twitter-image.webp"]
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${geist.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'