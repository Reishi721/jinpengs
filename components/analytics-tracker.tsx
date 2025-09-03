"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

interface AnalyticsEvent {
  event: string
  page?: string
  action?: string
  category?: string
  label?: string
  value?: number
}

export function AnalyticsTracker() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    trackEvent({
      event: "page_view",
      page: pathname,
    })
  }, [pathname])

  const trackEvent = (eventData: AnalyticsEvent) => {
    // In a real implementation, this would send data to your analytics service
    console.log("[Analytics]", eventData)

    // Example: Send to Google Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", eventData.event, {
        page_path: eventData.page,
        event_category: eventData.category,
        event_label: eventData.label,
        value: eventData.value,
      })
    }
  }

  // Track user interactions
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Track button clicks
      if (target.tagName === "BUTTON" || target.closest("button")) {
        const button = target.tagName === "BUTTON" ? target : target.closest("button")
        trackEvent({
          event: "button_click",
          category: "engagement",
          label: button?.textContent || "unknown_button",
          page: pathname,
        })
      }

      // Track link clicks
      if (target.tagName === "A" || target.closest("a")) {
        const link = target.tagName === "A" ? target : target.closest("a")
        trackEvent({
          event: "link_click",
          category: "navigation",
          label: (link as HTMLAnchorElement)?.href || "unknown_link",
          page: pathname,
        })
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [pathname])

  // Track scroll depth
  useEffect(() => {
    let maxScroll = 0

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent
        trackEvent({
          event: "scroll_depth",
          category: "engagement",
          label: `${scrollPercent}%`,
          value: scrollPercent,
          page: pathname,
        })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  return null
}

// Export tracking functions for manual use
export const trackQuoteRequest = (productType: string, quantity: number) => {
  console.log("[Analytics] Quote Request", { productType, quantity })
}

export const trackProductView = (productId: string, productName: string) => {
  console.log("[Analytics] Product View", { productId, productName })
}

export const trackContactForm = (formType: string) => {
  console.log("[Analytics] Contact Form", { formType })
}
