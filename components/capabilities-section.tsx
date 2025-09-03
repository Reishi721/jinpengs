"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Cog, Lightbulb, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function CapabilitiesSection() {
  const [showVideo, setShowVideo] = useState(false)

  const capabilities = [
    {
      icon: Award,
      title: "品质保证",
      titleEn: "Quality Assurance",
      description: "严格的质量控制体系，确保每一件产品都达到国际标准",
      descriptionEn: "Strict quality control system ensuring every product meets international standards",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5560.JPG-9GvbIJVshSjPMOJZcPBCar9ifHPCJd.jpeg",
    },
    {
      icon: Cog,
      title: "自动化生产",
      titleEn: "Automated Production",
      description: "现代化自动生产线，数据驱动的时控系统提升效率",
      descriptionEn: "Modern automated production lines with data-driven timing systems for enhanced efficiency",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_20250902121050_404_1.jpg-M8Qk4ho5hiugWcMM4BDpUNCmEkgNGk.jpeg",
      hasVideo: true, // Added video flag for production line
    },
    {
      icon: Lightbulb,
      title: "研发创新",
      titleEn: "R&D Innovation",
      description: "广州白云区专业研发中心，持续推动服装设计与技术创新",
      descriptionEn:
        "Professional R&D center in Guangzhou Baiyun District, continuously driving innovation in garment design and technology",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_20250902121052_405_1.jpg-tluGVWTWMTSNEgrU5d4sv3bYDeTQGx.jpeg",
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">核心优势</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            凭借先进的生产设备、严格的质量管理和持续的技术创新，为客户提供卓越的产品和服务
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {capabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div key={capability.title} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className="relative h-48 overflow-hidden group">
                    <Image
                      src={capability.image || "/placeholder.svg"}
                      alt={capability.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {capability.hasVideo && (
                      <button
                        onClick={() => setShowVideo(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-label="观看生产线视频"
                      >
                        <div className="p-4 bg-primary/90 rounded-full hover:bg-primary transition-colors">
                          <Play className="h-8 w-8 text-primary-foreground ml-1" />
                        </div>
                      </button>
                    )}

                    <div className="absolute bottom-4 left-4">
                      <div className="p-2 bg-primary/90 rounded-full w-fit">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">{capability.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{capability.titleEn}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden">
            <video controls autoPlay className="w-full h-full" onEnded={() => setShowVideo(false)}>
              <source src="https://goldpanthers-1377014447.cos.ap-hongkong.myqcloud.com/IMG_5562.MP4" type="video/mp4" />
           
              您的浏览器不支持视频播放。
            </video>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              aria-label="关闭视频"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
