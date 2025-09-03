"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">成为我们的合作伙伴</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            与金彭服饰携手合作，共享优质制造资源，共创美好未来。 我们期待与更多优秀品牌建立长期稳定的合作关系。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6 h-auto">
              <Link href="/contact">联系我们</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 h-auto bg-transparent">
              <Link href="/about">了解更多</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
