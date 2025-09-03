"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState("zh-CN")
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "首页", labelEn: "Home" },
    { href: "/about", label: "关于我们", labelEn: "About Us" },
    { href: "/products", label: "产品展示", labelEn: "Products" },
    { href: "/quote", label: "在线报价", labelEn: "Get Quote" },
    { href: "/testimonials", label: "客户见证", labelEn: "Testimonials" },
    { href: "/careers", label: "招聘信息", labelEn: "Careers" },
    { href: "/news", label: "新闻动态", labelEn: "News" },
    { href: "/contact", label: "联系我们", labelEn: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = (lang: string) => {
    setLanguage(lang)
    // In a real app, this would trigger i18n language change
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image src="/images/logo.png" alt="金彭服饰 Logo" width={40} height={40} className="h-10 w-10" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary group-hover:text-primary/80 transition-colors">
                {language === "zh-CN" ? "金彭服饰" : "GOLDPANTHER"}
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                {language === "zh-CN" ? "阳江市金彭服饰实业有限公司" : "Sun City Jinpeng Clothing Co., Ltd."}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative group ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {language === "zh-CN" ? item.label : item.labelEn}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language Switcher and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hover:bg-primary/10">
                  <Globe className="h-4 w-4" />
                  <span className="ml-2">{language === "zh-CN" ? "中文" : "EN"}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => toggleLanguage("zh-CN")}>中文 (简体)</DropdownMenuItem>
                <DropdownMenuItem onClick={() => toggleLanguage("en")}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-primary/10"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden border-t overflow-hidden"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`block text-sm font-medium transition-colors hover:text-primary px-2 py-1 rounded ${
                        pathname === item.href ? "text-primary bg-primary/5" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "zh-CN" ? item.label : item.labelEn}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
