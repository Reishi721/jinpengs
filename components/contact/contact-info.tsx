"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock, Building } from "lucide-react"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Building,
      title: "公司地址",
      titleEn: "Company Address",
      content: "广东省阳江市江城区",
      contentEn: "Jiangcheng District, Yangjiang City, Guangdong Province, China",
    },
    {
      icon: Phone,
      title: "联系电话",
      titleEn: "Phone",
      content: "+86-662-xxxx-xxxx",
      contentEn: "Business Inquiries",
    },
    {
      icon: Mail,
      title: "邮箱地址",
      titleEn: "Email",
      content: "info@jinpeng.com",
      contentEn: "business@jinpeng.com",
    },
    {
      icon: Clock,
      title: "工作时间",
      titleEn: "Business Hours",
      content: "周一至周五 8:00-18:00",
      contentEn: "Monday - Friday 8:00 AM - 6:00 PM",
    },
  ]

  const offices = [
    {
      name: "阳江总部",
      nameEn: "Yangjiang Headquarters",
      address: "广东省阳江市江城区工业园",
      addressEn: "Industrial Park, Jiangcheng District, Yangjiang",
      type: "总部及主要生产基地",
    },
    {
      name: "广州研发中心",
      nameEn: "Guangzhou R&D Center",
      address: "广州市白云区科技园",
      addressEn: "Science Park, Baiyun District, Guangzhou",
      type: "研发设计中心",
    },
    {
      name: "新塘生产基地",
      nameEn: "Xintang Production Base",
      address: "广州市增城区新塘镇",
      addressEn: "Xintang Town, Zengcheng District, Guangzhou",
      type: "生产制造基地",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      {/* Contact Details */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">联系信息</CardTitle>
          <CardDescription>Contact Information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail, index) => {
            const Icon = detail.icon
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{detail.title}</h4>
                  <p className="text-xs text-muted-foreground mb-1">{detail.titleEn}</p>
                  <p className="text-sm">{detail.content}</p>
                  <p className="text-xs text-muted-foreground">{detail.contentEn}</p>
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Office Locations */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl">办公地点</CardTitle>
          <CardDescription>Office Locations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {offices.map((office, index) => (
            <div key={index} className="border-l-4 border-primary/20 pl-4 py-2">
              <h4 className="font-semibold text-sm">{office.name}</h4>
              <p className="text-xs text-muted-foreground mb-1">{office.nameEn}</p>
              <p className="text-sm text-muted-foreground">{office.address}</p>
              <p className="text-xs text-muted-foreground">{office.addressEn}</p>
              <span className="inline-block mt-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                {office.type}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
