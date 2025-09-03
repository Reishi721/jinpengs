"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function FeaturedProducts() {
  const categories = [
    {
      title: "正装裤",
      titleEn: "Formal Trousers",
      description: "商务正装，精工细作，彰显专业品质",
      descriptionEn: "Business formal wear with exquisite craftsmanship",
      image: "/formal-suit-trousers-charcoal.jpg",
    },
    {
      title: "休闲裤",
      titleEn: "Casual Trousers",
      description: "舒适休闲，时尚百搭，适合日常穿着",
      descriptionEn: "Comfortable casual wear for everyday style",
      image: "/urban-casual-pants-khaki.jpg",
    },
    {
      title: "牛仔裤",
      titleEn: "Jeans",
      description: "经典牛仔，潮流设计，展现个性魅力",
      descriptionEn: "Classic denim with trendy designs",
      image: "/stylish-denim-jeans.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">产品系列</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            专注男装裤类产品，涵盖正装、休闲、牛仔等多个品类，满足不同场合需求
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div key={category.title} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{category.titleEn}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/products">查看产品</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
