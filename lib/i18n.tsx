"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

export const translations = {
  "zh-CN": {
    // Navigation
    home: "首页",
    about: "关于我们",
    products: "产品展示",
    contact: "联系我们",

    // Common
    learnMore: "了解更多",
    viewMore: "查看更多",
    contactUs: "联系我们",

    // Hero Section
    heroTitle: "专业服装制造，品质卓越",
    heroSubtitle: "阳江市金彭服饰实业有限公司 - 自1988年以来专注高端男装裤类产品生产",

    // Stats
    founded: "成立年份",
    employees: "员工数量",
    facilities: "生产设施",
    partners: "合作伙伴",

    // Products
    formalTrousers: "正装裤",
    casualTrousers: "休闲裤",
    jeans: "牛仔裤",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About Us",
    products: "Products",
    contact: "Contact",

    // Common
    learnMore: "Learn More",
    viewMore: "View More",
    contactUs: "Contact Us",

    // Hero Section
    heroTitle: "Professional Garment Manufacturing, Exceptional Quality",
    heroSubtitle: "Sun City Jinpeng Clothing Co., Ltd. - Specializing in high-end men's trousers since 1988",

    // Stats
    founded: "Founded",
    employees: "Employees",
    facilities: "Production Facilities",
    partners: "Partners",

    // Products
    formalTrousers: "Formal Trousers",
    casualTrousers: "Casual Trousers",
    jeans: "Jeans",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof (typeof translations)["zh-CN"]

export function getTranslation(key: TranslationKey, lang: Language = "zh-CN"): string {
  return translations[lang][key] || translations["zh-CN"][key]
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh-CN")

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "zh-CN" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: TranslationKey) => getTranslation(key, language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
