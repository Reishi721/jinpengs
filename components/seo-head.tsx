import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: string
}

export function SEOHead({
  title = "阳江市金彭服饰实业有限公司 | Sun City Jinpeng Clothing Co., Ltd.",
  description = "专业的服装制造商，专注于高端男装裤类产品生产",
  keywords = [],
  image = "/images/logo.png",
  url = "https://goldpanther.com.cn",
  type = "website",
}: SEOHeadProps) {
  const fullTitle = title.includes("金彭服饰") ? title : `${title} | 金彭服饰 GOLDPANTHER`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="金彭服饰 GOLDPANTHER" />
      <meta property="og:locale" content="zh_CN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  )
}
