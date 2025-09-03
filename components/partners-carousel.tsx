"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PartnersCarousel() {
  const partners = [
    { name: "HLA", logo: "/hla-logo.jpg" },
    { name: "Septwolves", logo: "/septwolves-logo.jpg" },
    { name: "GOLDPANTHER", logo: "/images/logo.png" }, // Added GOLDPANTHER luxury brand logo
    { name: "Acme Inc.", logo: "/placeholder-logo.svg" },
    { name: "Bengdishing", logo: "/bengdishing-logo.jpg" },
    { name: "Joeone", logo: "/joeone-logo.jpg" },
    { name: "Qipai", logo: "/qipai-logo.jpg" },
  ]

  return (
    <section className="py-12 border-y bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-semibold mb-2">合作伙伴</h2>
          <p className="text-muted-foreground">与知名品牌携手共创辉煌</p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * partners.length] }}
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-12 items-center"
            style={{ width: `${200 * partners.length}%` }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={120}
                  height={60}
                  className={`h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity ${
                    partner.name === "GOLDPANTHER" ? "mix-blend-multiply bg-transparent" : ""
                  }`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
