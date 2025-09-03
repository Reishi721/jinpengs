"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

interface StatItemProps {
  value: string
  label: string
  delay: number
}

function StatItem({ value, label, delay }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  const numericValue = Number.parseInt(value.replace(/[^\d]/g, ""))
  const suffix = value.replace(/[\d]/g, "")

  useEffect(() => {
    if (isInView && numericValue) {
      let start = 0
      const increment = numericValue / 60
      const timer = setInterval(() => {
        start += increment
        if (start >= numericValue) {
          setCount(numericValue)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [isInView, numericValue])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {numericValue ? count.toLocaleString() + suffix : value}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  const stats = [
    { value: "1988", label: "成立年份" },
    { value: "3000+", label: "员工数量" },
    { value: "200000", label: "生产设施 (m²)" },
    { value: "6+", label: "主要合作伙伴" },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">企业实力</h2>
          <p className="text-lg text-muted-foreground">数字见证我们的专业与实力</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} value={stat.value} label={stat.label} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
