import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_SC, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { LiveChat } from "@/components/live-chat"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/i18n"
import "./globals.css"

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-sc",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "阳江市金彭服饰实业有限公司 | Sun City Jinpeng Clothing Co., Ltd.",
  description:
    "专业的服装制造商，专注于高端男装裤类产品生产。成立于1988年，拥有20万平方米生产基地，年产能300万件。合作伙伴包括HLA、七匹狼、花花公子等知名品牌。| Leading garment manufacturer specializing in high-end men's trousers since 1988. 200,000㎡ production facility with 3M annual capacity.",
  keywords: [
    "金彭服饰",
    "阳江服装厂",
    "男装制造",
    "正装裤",
    "休闲裤",
    "牛仔裤",
    "服装代工",
    "OEM服装",
    "广东服装厂",
    "GOLDPANTHER",
    "Jinpeng Clothing",
    "Yangjiang Garment",
    "Menswear Manufacturing",
    "Formal Pants",
    "Casual Trousers",
    "Denim Jeans",
    "Garment OEM",
    "China Clothing Factory",
  ],
  authors: [{ name: "阳江市金彭服饰实业有限公司" }],
  creator: "阳江市金彭服饰实业有限公司",
  publisher: "阳江市金彭服饰实业有限公司",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goldpanther.com.cn"),
  alternates: {
    canonical: "/",
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "阳江市金彭服饰实业有限公司 | 专业男装制造商",
    description: "成立于1988年的专业服装制造商，专注高端男装裤类产品生产，拥有20万平方米现代化生产基地。",
    url: "https://goldpanther.com.cn",
    siteName: "金彭服饰 GOLDPANTHER",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "金彭服饰 GOLDPANTHER Logo",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "阳江市金彭服饰实业有限公司 | 专业男装制造商",
    description: "成立于1988年的专业服装制造商，专注高端男装裤类产品生产。",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    baidu: "your-baidu-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "阳江市金彭服饰实业有限公司",
              alternateName: "Sun City Jinpeng Clothing Co., Ltd.",
              url: "https://goldpanther.com.cn",
              logo: "https://goldpanther.com.cn/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+86-662-3456789",
                contactType: "customer service",
                areaServed: "CN",
                availableLanguage: ["Chinese", "English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "金彭工业园",
                addressLocality: "阳江市",
                addressRegion: "广东省",
                addressCountry: "CN",
              },
              foundingDate: "1988",
              numberOfEmployees: "3000+",
              industry: "Garment Manufacturing",
              description: "专业的服装制造商，专注于高端男装裤类产品生产",
              sameAs: ["https://www.linkedin.com/company/goldpanther", "https://weibo.com/goldpanther"],
            }),
          }}
        />
        <link rel="canonical" href="https://goldpanther.com.cn" />
        <link rel="alternate" hrefLang="zh-CN" href="https://goldpanther.com.cn" />
        <link rel="alternate" hrefLang="en" href="https://goldpanther.com.cn/en" />
        <meta name="geo.region" content="CN-GD" />
        <meta name="geo.placename" content="Yangjiang, Guangdong" />
        <meta name="geo.position" content="21.8590;111.9820" />
        <meta name="ICBM" content="21.8590, 111.9820" />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation />
            <main>{children}</main>
            <Footer />
            <ScrollToTop />
            <LiveChat />
            <Toaster />
          </Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
