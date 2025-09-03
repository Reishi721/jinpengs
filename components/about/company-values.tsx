"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Zap, Handshake } from "lucide-react"

export function CompanyValues() {
  const values = [
    {
      icon: Award,
      title: "品质至上",
      titleEn: "Quality First",
      description: "严格的质量管理体系，从原材料采购到成品出厂，每个环节都精益求精，确保产品品质达到国际先进水平。",
      highlights: ["ISO质量认证", "全程质量追溯", "零缺陷目标"],
    },
    {
      icon: Zap,
      title: "持续创新",
      titleEn: "Continuous Innovation",
      description: "投资研发创新，引进先进技术和设备，不断提升产品设计能力和生产工艺水平，保持行业领先地位。",
      highlights: ["技术研发投入", "工艺创新升级", "产品设计优化"],
    },
    {
      icon: Handshake,
      title: "合作共赢",
      titleEn: "Win-Win Partnership",
      description: "与客户建立长期稳定的合作关系，提供专业的服务和解决方案，实现互利共赢，共同发展。",
      highlights: ["长期合作伙伴", "定制化服务", "快速响应能力"],
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">企业价值观</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            秉承品质至上、持续创新、合作共赢的核心价值观，为客户创造更大价值
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div key={value.title} variants={itemVariants}>
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{value.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{value.titleEn}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    <div className="space-y-2">
                      {value.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="inline-block bg-primary/5 text-primary text-sm px-3 py-1 rounded-full mr-2"
                        >
                          {highlight}
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
