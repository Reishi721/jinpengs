"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Palette, Ruler, Shirt, Package, Download, Share2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const fabricTypes = [
  { id: "cotton", name: { zh: "纯棉", en: "Cotton" }, price: 0, image: "/fabric-cotton.jpg" },
  { id: "wool", name: { zh: "羊毛", en: "Wool" }, price: 8, image: "/fabric-wool.jpg" },
  { id: "polyester", name: { zh: "聚酯纤维", en: "Polyester" }, price: -3, image: "/fabric-polyester.jpg" },
  { id: "blend", name: { zh: "混纺", en: "Cotton Blend" }, price: 4, image: "/fabric-blend.jpg" },
  { id: "linen", name: { zh: "亚麻", en: "Linen" }, price: 6, image: "/fabric-linen.jpg" },
]

const colors = [
  { id: "navy", name: { zh: "海军蓝", en: "Navy Blue" }, hex: "#1e3a8a" },
  { id: "charcoal", name: { zh: "炭灰色", en: "Charcoal" }, hex: "#374151" },
  { id: "black", name: { zh: "黑色", en: "Black" }, hex: "#000000" },
  { id: "khaki", name: { zh: "卡其色", en: "Khaki" }, hex: "#a3a380" },
  { id: "brown", name: { zh: "棕色", en: "Brown" }, hex: "#92400e" },
  { id: "olive", name: { zh: "橄榄绿", en: "Olive" }, hex: "#65a30d" },
]

const styles = [
  { id: "slim", name: { zh: "修身版型", en: "Slim Fit" }, price: 0 },
  { id: "regular", name: { zh: "标准版型", en: "Regular Fit" }, price: 0 },
  { id: "relaxed", name: { zh: "宽松版型", en: "Relaxed Fit" }, price: 2 },
]

const features = [
  { id: "stretch", name: { zh: "弹性面料", en: "Stretch Fabric" }, price: 3 },
  { id: "wrinkle-free", name: { zh: "免烫处理", en: "Wrinkle-Free" }, price: 4 },
  { id: "moisture-wicking", name: { zh: "吸湿排汗", en: "Moisture Wicking" }, price: 5 },
  { id: "stain-resistant", name: { zh: "防污处理", en: "Stain Resistant" }, price: 6 },
]

export default function ConfiguratorPage() {
  const { language } = useLanguage()
  const [config, setConfig] = useState({
    category: "formal",
    fabric: "cotton",
    color: "navy",
    style: "slim",
    features: [] as string[],
    quantity: [500],
    customization: "",
  })

  const basePrice = 25
  const fabricPrice = fabricTypes.find((f) => f.id === config.fabric)?.price || 0
  const stylePrice = styles.find((s) => s.id === config.style)?.price || 0
  const featuresPrice = config.features.reduce((total, featureId) => {
    const feature = features.find((f) => f.id === featureId)
    return total + (feature?.price || 0)
  }, 0)
  const totalPrice = (basePrice + fabricPrice + stylePrice + featuresPrice) * config.quantity[0]

  const handleFeatureToggle = (featureId: string) => {
    setConfig((prev) => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter((id) => id !== featureId)
        : [...prev.features, featureId],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === "zh" ? "产品定制器" : "Product Configurator"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === "zh"
              ? "定制您的专属服装，实时预览价格和效果"
              : "Customize your garments with real-time pricing and preview"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Configuration Panel */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shirt className="h-5 w-5 text-amber-600" />
                  {language === "zh" ? "定制选项" : "Customization Options"}
                </CardTitle>
                <CardDescription>{language === "zh" ? "选择您的偏好设置" : "Select your preferences"}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Product Category */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    {language === "zh" ? "产品类别" : "Product Category"}
                  </Label>
                  <Select value={config.category} onValueChange={(value) => setConfig({ ...config, category: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="formal">{language === "zh" ? "正装裤" : "Formal Trousers"}</SelectItem>
                      <SelectItem value="casual">{language === "zh" ? "休闲裤" : "Casual Pants"}</SelectItem>
                      <SelectItem value="jeans">{language === "zh" ? "牛仔裤" : "Denim Jeans"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Fabric Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    {language === "zh" ? "面料选择" : "Fabric Selection"}
                  </Label>
                  <div className="grid grid-cols-2 gap-3">
                    {fabricTypes.map((fabric) => (
                      <motion.div
                        key={fabric.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                          config.fabric === fabric.id
                            ? "border-amber-500 bg-amber-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setConfig({ ...config, fabric: fabric.id })}
                      >
                        <div className="text-center">
                          <div className="w-full h-16 bg-gray-200 rounded mb-2 flex items-center justify-center">
                            <span className="text-xs text-gray-500">{fabric.name[language]}</span>
                          </div>
                          <p className="text-sm font-medium">{fabric.name[language]}</p>
                          <p className="text-xs text-gray-500">
                            {fabric.price > 0 ? `+$${fabric.price}` : fabric.price < 0 ? `$${fabric.price}` : "Base"}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    {language === "zh" ? "颜色选择" : "Color Selection"}
                  </Label>
                  <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                      <motion.div
                        key={color.id}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`w-12 h-12 rounded-full cursor-pointer border-4 transition-all ${
                          config.color === color.id ? "border-amber-500" : "border-gray-200"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => setConfig({ ...config, color: color.id })}
                        title={color.name[language]}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    {language === "zh" ? "已选择: " : "Selected: "}
                    {colors.find((c) => c.id === config.color)?.name[language]}
                  </p>
                </div>

                {/* Style Selection */}
                <div>
                  <Label className="text-base font-semibold mb-3 block flex items-center gap-2">
                    <Ruler className="h-4 w-4" />
                    {language === "zh" ? "版型选择" : "Fit Style"}
                  </Label>
                  <div className="grid grid-cols-3 gap-3">
                    {styles.map((style) => (
                      <motion.div
                        key={style.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`border-2 rounded-lg p-3 cursor-pointer text-center transition-all ${
                          config.style === style.id
                            ? "border-amber-500 bg-amber-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setConfig({ ...config, style: style.id })}
                      >
                        <p className="text-sm font-medium">{style.name[language]}</p>
                        <p className="text-xs text-gray-500">{style.price > 0 ? `+$${style.price}` : "Standard"}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Additional Features */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    {language === "zh" ? "附加功能" : "Additional Features"}
                  </Label>
                  <div className="space-y-3">
                    {features.map((feature) => (
                      <div
                        key={feature.id}
                        className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
                        onClick={() => handleFeatureToggle(feature.id)}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={config.features.includes(feature.id)}
                            onChange={() => handleFeatureToggle(feature.id)}
                            className="w-4 h-4 text-amber-600"
                          />
                          <span className="font-medium">{feature.name[language]}</span>
                        </div>
                        <Badge variant="outline">+${feature.price}</Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <Label className="text-base font-semibold mb-3 block flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    {language === "zh" ? "订购数量" : "Order Quantity"}
                  </Label>
                  <div className="space-y-3">
                    <Slider
                      value={config.quantity}
                      onValueChange={(value) => setConfig({ ...config, quantity: value })}
                      max={10000}
                      min={500}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>500</span>
                      <span className="font-semibold">
                        {config.quantity[0]} {language === "zh" ? "件" : "pieces"}
                      </span>
                      <span>10,000</span>
                    </div>
                  </div>
                </div>

                {/* Custom Requirements */}
                <div>
                  <Label className="text-base font-semibold mb-3 block">
                    {language === "zh" ? "特殊要求" : "Special Requirements"}
                  </Label>
                  <textarea
                    value={config.customization}
                    onChange={(e) => setConfig({ ...config, customization: e.target.value })}
                    placeholder={
                      language === "zh"
                        ? "请描述任何特殊定制要求..."
                        : "Describe any special customization requirements..."
                    }
                    className="w-full p-3 border rounded-lg resize-none"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Preview and Pricing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* 3D Preview */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "zh" ? "产品预览" : "Product Preview"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <div
                    className="w-32 h-40 rounded-lg shadow-lg"
                    style={{ backgroundColor: colors.find((c) => c.id === config.color)?.hex }}
                  />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="font-semibold">
                    {language === "zh" ? "定制" : "Custom"}{" "}
                    {config.category === "formal"
                      ? language === "zh"
                        ? "正装裤"
                        : "Formal Trousers"
                      : config.category === "casual"
                        ? language === "zh"
                          ? "休闲裤"
                          : "Casual Pants"
                        : language === "zh"
                          ? "牛仔裤"
                          : "Denim Jeans"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {fabricTypes.find((f) => f.id === config.fabric)?.name[language]} •{" "}
                    {colors.find((c) => c.id === config.color)?.name[language]}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "zh" ? "价格明细" : "Price Breakdown"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>{language === "zh" ? "基础价格" : "Base Price"}</span>
                    <span>${basePrice.toFixed(2)}</span>
                  </div>
                  {fabricPrice !== 0 && (
                    <div className="flex justify-between">
                      <span>{language === "zh" ? "面料升级" : "Fabric Upgrade"}</span>
                      <span>${fabricPrice.toFixed(2)}</span>
                    </div>
                  )}
                  {stylePrice !== 0 && (
                    <div className="flex justify-between">
                      <span>{language === "zh" ? "版型调整" : "Fit Adjustment"}</span>
                      <span>${stylePrice.toFixed(2)}</span>
                    </div>
                  )}
                  {config.features.length > 0 && (
                    <div className="flex justify-between">
                      <span>{language === "zh" ? "附加功能" : "Additional Features"}</span>
                      <span>${featuresPrice.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="border-t pt-2">
                    <div className="flex justify-between">
                      <span>{language === "zh" ? "单价" : "Unit Price"}</span>
                      <span className="font-semibold">
                        ${(basePrice + fabricPrice + stylePrice + featuresPrice).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>{language === "zh" ? "数量" : "Quantity"}</span>
                      <span>
                        {config.quantity[0]} {language === "zh" ? "件" : "pieces"}
                      </span>
                    </div>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between text-lg font-bold">
                      <span>{language === "zh" ? "总价" : "Total Price"}</span>
                      <span className="text-amber-600">${totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    {language === "zh" ? "添加到报价单" : "Add to Quote"}
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Download className="h-4 w-4" />
                      {language === "zh" ? "保存配置" : "Save Config"}
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Share2 className="h-4 w-4" />
                      {language === "zh" ? "分享" : "Share"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Configuration Summary */}
            <Card>
              <CardHeader>
                <CardTitle>{language === "zh" ? "配置摘要" : "Configuration Summary"}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === "zh" ? "类别:" : "Category:"}</span>
                    <span>
                      {config.category === "formal"
                        ? language === "zh"
                          ? "正装裤"
                          : "Formal"
                        : config.category === "casual"
                          ? language === "zh"
                            ? "休闲裤"
                            : "Casual"
                          : language === "zh"
                            ? "牛仔裤"
                            : "Denim"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === "zh" ? "面料:" : "Fabric:"}</span>
                    <span>{fabricTypes.find((f) => f.id === config.fabric)?.name[language]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === "zh" ? "颜色:" : "Color:"}</span>
                    <span>{colors.find((c) => c.id === config.color)?.name[language]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === "zh" ? "版型:" : "Fit:"}</span>
                    <span>{styles.find((s) => s.id === config.style)?.name[language]}</span>
                  </div>
                  {config.features.length > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">{language === "zh" ? "功能:" : "Features:"}</span>
                      <span>
                        {config.features.length} {language === "zh" ? "项" : "selected"}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
