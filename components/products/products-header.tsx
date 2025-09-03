"use client"

import { motion } from "framer-motion"

export function ProductsHeader() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">产品展示</h1>
          <p className="text-xl text-muted-foreground text-pretty mb-4">
            专注高端男装裤类产品，涵盖正装、休闲、牛仔等多个品类
          </p>
          <p className="text-lg text-muted-foreground">Products Showcase - Specializing in high-end men's trousers</p>
        </motion.div>
      </div>
    </section>
  )
}
