"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ManufacturingScale() {
  const facilities = [
    {
      title: "现代化生产车间",
      titleEn: "Modern Production Workshop",
      description: "大规模生产车间配备先进缝纫设备，3000+专业技术人员确保高效生产",
      descriptionEn:
        "Large-scale production workshop with advanced sewing equipment and 3000+ skilled technicians ensuring efficient production",
      image: "/modern-factory-automation-production-line.jpg",
    },
    {
      title: "智能化生产线",
      titleEn: "Intelligent Production Line",
      description: "自动化悬挂系统和智能分组管理，实现精准高效的服装制造流程",
      descriptionEn:
        "Automated hanging systems and intelligent group management for precise and efficient garment manufacturing",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_20250902121050_404_1.jpg-M8Qk4ho5hiugWcMM4BDpUNCmEkgNGk.jpeg", // Production line with hanging system
    },
    {
      title: "环保认证工厂",
      titleEn: "Green Certified Factory",
      description: "获得绿色环保认证的现代化工厂，配备太阳能和风能设施，践行可持续发展理念",
      descriptionEn:
        "Green certified modern factory with solar and wind power facilities, committed to sustainable development",
      image: "/green-factory-environmental-certification.jpg",
    },
    {
      title: "现代化厂区设施",
      titleEn: "Modern Factory Complex",
      description: "占地20万平方米的现代化工业园区，集生产、办公、生活配套于一体",
      descriptionEn: "200,000㎡ modern industrial park integrating production, office, and living facilities",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Image_20250902121055_409_1.jpg-jZJJmm3a3lWm7Z7u8q0rjsHxawTbwJ.jpeg", // Modern factory complex exterior
    },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">制造规模</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            20万平方米现代化生产设施，集成化数据驱动和时控系统，实现高效精准制造
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold mb-1">{facility.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200,000m²</div>
            <div className="text-muted-foreground">生产设施总面积</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">3,000+</div>
            <div className="text-muted-foreground">专业技术人员</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">连续生产能力</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
