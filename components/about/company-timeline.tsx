"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CompanyTimeline() {
  const timelineEvents = [
    {
      year: "1988",
      title: "公司成立",
      description: "阳江市金彭服饰实业有限公司正式成立，开始专注于服装制造业务。",
    },
    {
      year: "1995",
      title: "生产规模扩大",
      description: "扩建生产车间，引进先进的生产设备，员工规模达到500人。",
    },
    {
      year: "2000",
      title: "品牌合作开始",
      description: "与国内知名服装品牌建立合作关系，成为多个品牌的核心供应商。",
    },
    {
      year: "2005",
      title: "技术升级",
      description: "投资引进自动化生产线，提升生产效率和产品质量控制水平。",
    },
    {
      year: "2010",
      title: "多基地布局",
      description: "在广州新塘设立生产基地，形成多地协同生产格局。",
    },
    {
      year: "2015",
      title: "研发中心成立",
      description: "在广州白云区设立专业研发中心，加强产品设计和技术创新能力。",
    },
    {
      year: "2020",
      title: "数字化转型",
      description: "全面推进生产数字化，建立集成化数据驱动和时控系统。",
    },
    {
      year: "2024",
      title: "行业领先",
      description: "成为广东省最先进、规模最大的服装制造企业之一，员工超过3000人。",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">发展历程</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            从1988年创立至今，金彭服饰始终坚持创新发展，不断提升制造能力和服务水平
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {timelineEvents.map((event, index) => (
              <AccordionItem
                key={event.year}
                value={`item-${index}`}
                className="bg-background rounded-lg border shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-semibold">
                      {event.year}
                    </div>
                    <div className="font-semibold">{event.title}</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed ml-16">{event.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
