"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, Clock, CheckCircle, Truck, FileText, Download, User, Settings, Bell, CreditCard } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const mockOrders = [
  {
    id: "ORD-2024-001",
    date: "2024-01-15",
    status: "shipped",
    total: 15680,
    currency: "USD",
    items: "Formal Trousers x 500, Casual Pants x 300",
  },
  {
    id: "ORD-2024-002",
    date: "2024-01-20",
    status: "processing",
    total: 8950,
    currency: "USD",
    items: "Denim Jeans x 200, Casual Pants x 150",
  },
  {
    id: "ORD-2024-003",
    date: "2024-01-25",
    status: "pending",
    total: 22340,
    currency: "USD",
    items: "Formal Trousers x 800, Premium Suits x 100",
  },
]

export default function DashboardPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("overview")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "shipped":
        return "bg-green-100 text-green-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status: string) => {
    const statusMap = {
      shipped: { zh: "已发货", en: "Shipped" },
      processing: { zh: "处理中", en: "Processing" },
      pending: { zh: "待处理", en: "Pending" },
    }
    return statusMap[status as keyof typeof statusMap]?.[language] || status
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === "zh" ? "客户仪表板" : "Customer Dashboard"}
          </h1>
          <p className="text-gray-600">
            {language === "zh" ? "管理您的订单、账户和偏好设置" : "Manage your orders, account, and preferences"}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              {language === "zh" ? "概览" : "Overview"}
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {language === "zh" ? "订单" : "Orders"}
            </TabsTrigger>
            <TabsTrigger value="downloads" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              {language === "zh" ? "下载" : "Downloads"}
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              {language === "zh" ? "账户" : "Account"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{language === "zh" ? "总订单" : "Total Orders"}</p>
                        <p className="text-2xl font-bold">24</p>
                      </div>
                      <Package className="h-8 w-8 text-amber-600" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{language === "zh" ? "处理中" : "Processing"}</p>
                        <p className="text-2xl font-bold">3</p>
                      </div>
                      <Clock className="h-8 w-8 text-blue-600" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{language === "zh" ? "已完成" : "Completed"}</p>
                        <p className="text-2xl font-bold">21</p>
                      </div>
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{language === "zh" ? "总金额" : "Total Value"}</p>
                        <p className="text-2xl font-bold">$186K</p>
                      </div>
                      <CreditCard className="h-8 w-8 text-purple-600" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "zh" ? "最近订单" : "Recent Orders"}</CardTitle>
                <CardDescription>{language === "zh" ? "您最近的订单状态" : "Your recent order status"}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.slice(0, 3).map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-semibold">{order.id}</h4>
                          <Badge className={getStatusColor(order.status)}>{getStatusText(order.status)}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{order.items}</p>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${order.total.toLocaleString()}</p>
                        <Button variant="outline" size="sm" className="mt-2 bg-transparent">
                          {language === "zh" ? "查看详情" : "View Details"}
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{language === "zh" ? "所有订单" : "All Orders"}</CardTitle>
                <CardDescription>
                  {language === "zh" ? "查看和管理您的所有订单" : "View and manage all your orders"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOrders.map((order, index) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>{getStatusText(order.status)}</Badge>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm text-gray-600 mb-1">{language === "zh" ? "订单内容:" : "Order Items:"}</p>
                        <p>{order.items}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold">
                          ${order.total.toLocaleString()} {order.currency}
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-2" />
                            {language === "zh" ? "发票" : "Invoice"}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Truck className="h-4 w-4 mr-2" />
                            {language === "zh" ? "跟踪" : "Track"}
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="downloads" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{language === "zh" ? "下载中心" : "Download Center"}</CardTitle>
                <CardDescription>
                  {language === "zh"
                    ? "下载产品目录、规格书和证书"
                    : "Download product catalogs, specifications, and certificates"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: language === "zh" ? "2024产品目录" : "2024 Product Catalog", size: "15.2 MB", type: "PDF" },
                    { name: language === "zh" ? "质量认证证书" : "Quality Certificates", size: "3.8 MB", type: "PDF" },
                    { name: language === "zh" ? "面料规格表" : "Fabric Specifications", size: "8.1 MB", type: "PDF" },
                    { name: language === "zh" ? "尺码对照表" : "Size Chart", size: "2.3 MB", type: "PDF" },
                  ].map((file, index) => (
                    <motion.div
                      key={file.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-red-600" />
                        <div>
                          <h4 className="font-semibold">{file.name}</h4>
                          <p className="text-sm text-gray-600">
                            {file.type} • {file.size}
                          </p>
                        </div>
                      </div>
                      <Button size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        {language === "zh" ? "下载" : "Download"}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{language === "zh" ? "账户设置" : "Account Settings"}</CardTitle>
                <CardDescription>
                  {language === "zh" ? "管理您的个人信息和偏好" : "Manage your personal information and preferences"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">{language === "zh" ? "公司信息" : "Company Information"}</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>{language === "zh" ? "公司名称:" : "Company:"}</strong> ABC Fashion Ltd.
                      </p>
                      <p>
                        <strong>{language === "zh" ? "联系人:" : "Contact:"}</strong> John Smith
                      </p>
                      <p>
                        <strong>{language === "zh" ? "邮箱:" : "Email:"}</strong> john@abcfashion.com
                      </p>
                      <p>
                        <strong>{language === "zh" ? "电话:" : "Phone:"}</strong> +1-555-0123
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{language === "zh" ? "账户状态" : "Account Status"}</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>{language === "zh" ? "会员等级:" : "Membership:"}</strong> Gold Partner
                      </p>
                      <p>
                        <strong>{language === "zh" ? "注册日期:" : "Member Since:"}</strong> Jan 2023
                      </p>
                      <p>
                        <strong>{language === "zh" ? "信用额度:" : "Credit Limit:"}</strong> $50,000
                      </p>
                      <p>
                        <strong>{language === "zh" ? "可用余额:" : "Available:"}</strong> $35,000
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>
                    <Settings className="h-4 w-4 mr-2" />
                    {language === "zh" ? "编辑资料" : "Edit Profile"}
                  </Button>
                  <Button variant="outline">
                    <Bell className="h-4 w-4 mr-2" />
                    {language === "zh" ? "通知设置" : "Notifications"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
