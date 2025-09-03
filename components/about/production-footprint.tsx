"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Building, Users, Lightbulb } from "lucide-react"

export function ProductionFootprint() {
  const locations = [
    {
      icon: Building,
      name: "阳江江城区生产基地",
      nameEn: "Yangjiang Jiangcheng Production Base",
      description: "主要生产基地，配备现代化生产线和质量控制中心",
      features: ["主生产车间", "质量检测中心", "仓储物流"],
    },
    {
      icon: Building,
      name: "阳江高新区生产基地",
      nameEn: "Yangjiang High-Tech Zone Production Base",
      description: "高科技生产基地，专注自动化生产和技术创新",
      features: ["自动化生产线", "智能制造系统", "环保设施"],
    },
    {
      icon: Users,
      name: "广州新塘生产基地",
      nameEn: "Guangzhou Xintang Production Base",
      description: "战略生产基地，服务华南地区客户需求",
      features: ["快速响应生产", "区域配送中心", "客户服务"],
    },
    {
      icon: Lightbulb,
      name: "广州白云研发中心",
      nameEn: "Guangzhou Baiyun R&D Center",
      description: "专业研发中心，推动产品设计和技术创新",
      features: ["产品设计", "技术研发", "样品制作"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">生产布局</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            多基地协同发展，形成完整的生产和研发体系，为客户提供全方位服务
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {locations.map((location, index) => {
            const Icon = location.icon
            return (
              <motion.div key={location.name} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{location.name}</CardTitle>
                        <CardDescription className="text-sm">{location.nameEn}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{location.description}</p>
                    <div className="space-y-2">
                      {location.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
