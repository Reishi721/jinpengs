"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function CompanyIntro() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">企业简介</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                阳江市金彭服饰实业有限公司成立于1988年，是一家专业从事高端男装裤类产品生产的领先服装制造商，总部位于中国广东省阳江市。公司专注于正装裤、休闲裤和牛仔裤的生产，以卓越的品质和精湛的工艺著称。
              </p>
              <p>
                公司拥有超过3000名员工和20万平方米的现代化自动生产车间，从原材料到成品实现全流程制造管控，配备集成化数据驱动和时控系统，确保生产效率和产品质量。
              </p>
              <p>
                金彭服饰在阳江设有多个生产基地，包括江城区和高新区，同时在广州新塘设有生产基地，并在广州白云区设立专门的研发中心，持续推动服装设计与技术创新。
              </p>
              <p>
                作为广东省最先进、规模最大、设备最完善的服装企业之一，金彭服饰的客户包括中国知名服装品牌，如海澜之家(HLA)、七匹狼(Septwolves)、花花公子(Playboy)、报喜鸟、九牧王和七牌等。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder-xdigx.png"
                alt="金彭服饰生产车间"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-2xl font-bold text-primary">36年</div>
              <div className="text-sm text-muted-foreground">专业制造经验</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border">
              <div className="text-2xl font-bold text-primary">20万m²</div>
              <div className="text-sm text-muted-foreground">生产设施面积</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
