"use client"

import { motion } from "framer-motion"
import { CompanyIntro } from "@/components/about/company-intro"
import { CompanyTimeline } from "@/components/about/company-timeline"
import { ProductionFootprint } from "@/components/about/production-footprint"
import { ManufacturingScale } from "@/components/about/manufacturing-scale"
import { CompanyValues } from "@/components/about/company-values"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">关于我们</h1>
            <p className="text-xl text-muted-foreground text-pretty">
              阳江市金彭服饰实业有限公司 - 专业服装制造的领航者
            </p>
          </motion.div>
        </div>
      </section>

      <CompanyIntro />
      <CompanyTimeline />
      <ProductionFootprint />
      <ManufacturingScale />
      <CompanyValues />
    </div>
  )
}
