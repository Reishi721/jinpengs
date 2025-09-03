"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Calculator, FileText, Globe, Truck } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const currencies = [
  { code: "USD", symbol: "$", rate: 1 },
  { code: "EUR", symbol: "€", rate: 0.85 },
  { code: "CNY", symbol: "¥", rate: 7.2 },
]

const productCategories = [
  { id: "formal", name: { zh: "正装裤", en: "Formal Trousers" }, basePrice: 25 },
  { id: "casual", name: { zh: "休闲裤", en: "Casual Pants" }, basePrice: 20 },
  { id: "denim", name: { zh: "牛仔裤", en: "Denim Jeans" }, basePrice: 22 },
]

const fabricOptions = [
  { id: "cotton", name: { zh: "纯棉", en: "Cotton" }, priceMultiplier: 1 },
  { id: "wool", name: { zh: "羊毛", en: "Wool" }, priceMultiplier: 1.5 },
  { id: "polyester", name: { zh: "聚酯纤维", en: "Polyester" }, priceMultiplier: 0.8 },
  { id: "blend", name: { zh: "混纺", en: "Blend" }, priceMultiplier: 1.2 },
]

export default function QuotePage() {
  const { language, t } = useLanguage()
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0])
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    category: "",
    fabric: "",
    quantity: "",
    customization: "",
    requirements: "",
  })
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [estimatedPrice, setEstimatedPrice] = useState(0)

  const services = [
    { id: "design", name: { zh: "设计服务", en: "Design Service" }, price: 500 },
    { id: "sampling", name: { zh: "样品制作", en: "Sample Making" }, price: 200 },
    { id: "packaging", name: { zh: "定制包装", en: "Custom Packaging" }, price: 300 },
    { id: "shipping", name: { zh: "国际运输", en: "International Shipping" }, price: 800 },
  ]

  const calculatePrice = () => {
    const category = productCategories.find((c) => c.id === formData.category)
    const fabric = fabricOptions.find((f) => f.id === formData.fabric)
    const quantity = Number.parseInt(formData.quantity) || 0

    if (!category || !fabric || quantity === 0) return 0

    let basePrice = category.basePrice * fabric.priceMultiplier * quantity
    const servicesPrice = selectedServices.reduce((total, serviceId) => {
      const service = services.find((s) => s.id === serviceId)
      return total + (service?.price || 0)
    }, 0)

    // Bulk discount
    if (quantity >= 1000) basePrice *= 0.9
    if (quantity >= 5000) basePrice *= 0.85
    if (quantity >= 10000) basePrice *= 0.8

    return (basePrice + servicesPrice) * selectedCurrency.rate
  }

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceId) ? prev.filter((id) => id !== serviceId) : [...prev, serviceId],
    )
  }

  const handleSubmitQuote = () => {
    const price = calculatePrice()
    setEstimatedPrice(price)
    // Here you would typically send the quote request to your backend
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === "zh" ? "在线报价系统" : "Online Quotation System"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === "zh"
              ? "获取专业的批量订单报价，支持多种面料和定制服务"
              : "Get professional bulk order quotes with multiple fabric options and custom services"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Quote Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-amber-600" />
                  {language === "zh" ? "报价详情" : "Quote Details"}
                </CardTitle>
                <CardDescription>
                  {language === "zh" ? "填写您的需求信息" : "Fill in your requirements"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Currency Selection */}
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <Globe className="h-4 w-4" />
                    {language === "zh" ? "货币" : "Currency"}
                  </Label>
                  <Select
                    value={selectedCurrency.code}
                    onValueChange={(value) => {
                      const currency = currencies.find((c) => c.code === value)
                      if (currency) setSelectedCurrency(currency)
                    }}
                    className="mt-2"
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.code} value={currency.code}>
                          {currency.symbol} {currency.code}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Company Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2 block">{language === "zh" ? "公司名称" : "Company Name"}</Label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder={language === "zh" ? "请输入公司名称" : "Enter company name"}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block">{language === "zh" ? "联系人" : "Contact Person"}</Label>
                    <Input
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder={language === "zh" ? "请输入联系人" : "Enter contact person"}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2 block">{language === "zh" ? "邮箱" : "Email"}</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={language === "zh" ? "请输入邮箱" : "Enter email"}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label className="mb-2 block">{language === "zh" ? "电话" : "Phone"}</Label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={language === "zh" ? "请输入电话" : "Enter phone"}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-2 block">{language === "zh" ? "产品类别" : "Product Category"}</Label>
                    <Select
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                      className="mt-2"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "zh" ? "选择类别" : "Select category"} />
                      </SelectTrigger>
                      <SelectContent>
                        {productCategories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name[language]} ({selectedCurrency.symbol}
                            {(category.basePrice * selectedCurrency.rate).toFixed(2)})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label className="mb-2 block">{language === "zh" ? "面料类型" : "Fabric Type"}</Label>
                    <Select
                      value={formData.fabric}
                      onValueChange={(value) => setFormData({ ...formData, fabric: value })}
                      className="mt-2"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={language === "zh" ? "选择面料" : "Select fabric"} />
                      </SelectTrigger>
                      <SelectContent>
                        {fabricOptions.map((fabric) => (
                          <SelectItem key={fabric.id} value={fabric.id}>
                            {fabric.name[language]} (+{((fabric.priceMultiplier - 1) * 100).toFixed(0)}%)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">{language === "zh" ? "订购数量" : "Quantity"}</Label>
                  <Input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder={language === "zh" ? "最小起订量: 500件" : "Minimum order: 500 pieces"}
                    min="500"
                    className="mt-2"
                  />
                  <div className="text-sm text-gray-500 mt-1">
                    {language === "zh"
                      ? "批量折扣: 1000+件 10%折扣, 5000+件 15%折扣, 10000+件 20%折扣"
                      : "Bulk discount: 1000+ 10% off, 5000+ 15% off, 10000+ 20% off"}
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <Label className="mb-3 block">{language === "zh" ? "附加服务" : "Additional Services"}</Label>
                  <div className="space-y-3">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={service.id}
                          checked={selectedServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                          {service.name[language]}
                        </Label>
                        <Badge variant="outline">
                          {selectedCurrency.symbol}
                          {(service.price * selectedCurrency.rate).toFixed(2)}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="mb-2 block">{language === "zh" ? "定制要求" : "Customization Requirements"}</Label>
                  <Textarea
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder={language === "zh" ? "请描述您的定制需求..." : "Describe your customization needs..."}
                    rows={4}
                    className="mt-2"
                  />
                </div>

                <Button onClick={handleSubmitQuote} className="w-full bg-amber-600 hover:bg-amber-700" size="lg">
                  <FileText className="h-4 w-4 mr-2" />
                  {language === "zh" ? "获取报价" : "Get Quote"}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Price Estimate */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-amber-600" />
                  {language === "zh" ? "价格估算" : "Price Estimate"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <div className="text-4xl font-bold text-amber-600 mb-2">
                    {selectedCurrency.symbol}
                    {calculatePrice().toFixed(2)}
                  </div>
                  <p className="text-gray-600">{language === "zh" ? "预估总价" : "Estimated Total Price"}</p>
                </div>

                {estimatedPrice > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4"
                  >
                    <h4 className="font-semibold text-green-800 mb-2">
                      {language === "zh" ? "报价已生成" : "Quote Generated"}
                    </h4>
                    <p className="text-green-700 text-sm">
                      {language === "zh"
                        ? "我们的销售团队将在24小时内与您联系，提供详细的正式报价单。"
                        : "Our sales team will contact you within 24 hours with a detailed formal quote."}
                    </p>
                  </motion.div>
                )}

                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold">{language === "zh" ? "价格说明" : "Pricing Notes"}</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• {language === "zh" ? "价格包含基础制作成本" : "Price includes basic manufacturing costs"}</li>
                    <li>• {language === "zh" ? "不含国际运费和关税" : "Excludes international shipping and duties"}</li>
                    <li>• {language === "zh" ? "最终价格以正式合同为准" : "Final price subject to formal contract"}</li>
                    <li>
                      • {language === "zh" ? "支持30%预付，70%发货前付清" : "Payment: 30% advance, 70% before shipment"}
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="mt-6">
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-3">{language === "zh" ? "快速联系" : "Quick Contact"}</h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>{language === "zh" ? "销售热线" : "Sales Hotline"}:</strong> +86-662-3456789
                  </p>
                  <p>
                    <strong>{language === "zh" ? "邮箱" : "Email"}:</strong> sales@jinpeng-garment.com
                  </p>
                  <p>
                    <strong>{language === "zh" ? "微信" : "WeChat"}:</strong> JinpengSales
                  </p>
                  <p>
                    <strong>WhatsApp:</strong> +86-138-0000-0000
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
