"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Mail } from "lucide-react"

export function ProductsCatalog() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">产品目录</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            下载完整产品目录，了解更多产品详情和技术规格
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">产品总目录</CardTitle>
              <CardDescription>完整产品系列介绍</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">包含所有产品系列的详细信息、规格参数和应用场景</p>
              <Button className="w-full">
                <Download className="h-4 w-4 mr-2" />
                下载目录 (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">面料样册</CardTitle>
              <CardDescription>面料材质与工艺</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">详细的面料介绍、工艺说明和质量标准参考</p>
              <Button variant="outline" className="w-full bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                下载样册 (PDF)
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">定制咨询</CardTitle>
              <CardDescription>专业定制服务</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">提供个性化定制方案，满足特殊需求和批量订购</p>
              <Button variant="outline" className="w-full bg-transparent">
                <Mail className="h-4 w-4 mr-2" />
                联系咨询
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
