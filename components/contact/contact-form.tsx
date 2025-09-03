"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send, Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "姓名至少需要2个字符 / Name must be at least 2 characters"),
  email: z.string().email("请输入有效的邮箱地址 / Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "留言至少需要10个字符 / Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", data)

    toast({
      title: "消息已发送 / Message Sent",
      description: "我们会尽快回复您 / We will get back to you soon",
    })

    reset()
    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">发送消息</CardTitle>
          <CardDescription>
            请填写以下信息，我们会尽快与您联系 / Please fill out the form below and we'll get back to you soon
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">姓名 / Name *</Label>
                <Input id="name" placeholder="请输入您的姓名 / Enter your name" {...register("name")} />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">邮箱 / Email *</Label>
                <Input id="email" type="email" placeholder="请输入您的邮箱 / Enter your email" {...register("email")} />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="company">公司名称 / Company</Label>
                <Input id="company" placeholder="请输入公司名称 / Enter company name" {...register("company")} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">电话 / Phone</Label>
                <Input id="phone" placeholder="请输入联系电话 / Enter phone number" {...register("phone")} />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">留言内容 / Message *</Label>
              <Textarea
                id="message"
                placeholder="请详细描述您的需求或问题 / Please describe your requirements or questions in detail"
                rows={6}
                {...register("message")}
              />
              {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  发送中... / Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  发送消息 / Send Message
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}
