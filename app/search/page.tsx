"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, SlidersHorizontal, Grid, List } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const mockProducts = [
  {
    id: 1,
    name: { zh: "商务正装西裤", en: "Business Formal Trousers" },
    category: "formal",
    fabric: "wool",
    color: "navy",
    price: 45,
    image: "/formal-suit-trousers-charcoal.jpg",
    features: ["stretch", "wrinkle-free"],
    inStock: true,
  },
  {
    id: 2,
    name: { zh: "休闲棉质长裤", en: "Casual Cotton Pants" },
    category: "casual",
    fabric: "cotton",
    color: "khaki",
    price: 28,
    image: "/urban-casual-pants-khaki.jpg",
    features: ["moisture-wicking"],
    inStock: true,
  },
  {
    id: 3,
    name: { zh: "弹性牛仔裤", en: "Stretch Denim Jeans" },
    category: "jeans",
    fabric: "blend",
    color: "indigo",
    price: 35,
    image: "/stretch-slim-jeans-indigo.jpg",
    features: ["stretch", "stain-resistant"],
    inStock: false,
  },
  // Add more mock products...
]

const filters = {
  categories: [
    { id: "formal", name: { zh: "正装裤", en: "Formal" } },
    { id: "casual", name: { zh: "休闲裤", en: "Casual" } },
    { id: "jeans", name: { zh: "牛仔裤", en: "Jeans" } },
  ],
  fabrics: [
    { id: "cotton", name: { zh: "纯棉", en: "Cotton" } },
    { id: "wool", name: { zh: "羊毛", en: "Wool" } },
    { id: "polyester", name: { zh: "聚酯纤维", en: "Polyester" } },
    { id: "blend", name: { zh: "混纺", en: "Blend" } },
  ],
  colors: [
    { id: "navy", name: { zh: "海军蓝", en: "Navy" } },
    { id: "black", name: { zh: "黑色", en: "Black" } },
    { id: "khaki", name: { zh: "卡其色", en: "Khaki" } },
    { id: "indigo", name: { zh: "靛蓝色", en: "Indigo" } },
  ],
  features: [
    { id: "stretch", name: { zh: "弹性面料", en: "Stretch" } },
    { id: "wrinkle-free", name: { zh: "免烫", en: "Wrinkle-Free" } },
    { id: "moisture-wicking", name: { zh: "吸湿排汗", en: "Moisture Wicking" } },
    { id: "stain-resistant", name: { zh: "防污", en: "Stain Resistant" } },
  ],
}

export default function SearchPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    fabrics: [] as string[],
    colors: [] as string[],
    features: [] as string[],
    priceRange: [0, 100],
    inStockOnly: false,
  })
  const [sortBy, setSortBy] = useState("relevance")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filteredProducts, setFilteredProducts] = useState(mockProducts)

  useEffect(() => {
    const filtered = mockProducts.filter((product) => {
      // Search query filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase()
        const nameMatch = product.name[language].toLowerCase().includes(searchLower)
        if (!nameMatch) return false
      }

      // Category filter
      if (selectedFilters.categories.length > 0 && !selectedFilters.categories.includes(product.category)) {
        return false
      }

      // Fabric filter
      if (selectedFilters.fabrics.length > 0 && !selectedFilters.fabrics.includes(product.fabric)) {
        return false
      }

      // Color filter
      if (selectedFilters.colors.length > 0 && !selectedFilters.colors.includes(product.color)) {
        return false
      }

      // Features filter
      if (selectedFilters.features.length > 0) {
        const hasFeature = selectedFilters.features.some((feature) => product.features.includes(feature))
        if (!hasFeature) return false
      }

      // Price range filter
      if (product.price < selectedFilters.priceRange[0] || product.price > selectedFilters.priceRange[1]) {
        return false
      }

      // Stock filter
      if (selectedFilters.inStockOnly && !product.inStock) {
        return false
      }

      return true
    })

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "name":
        filtered.sort((a, b) => a.name[language].localeCompare(b.name[language]))
        break
      default:
        // Keep original order for relevance
        break
    }

    setFilteredProducts(filtered)
  }, [searchQuery, selectedFilters, sortBy, language])

  const handleFilterChange = (filterType: keyof typeof selectedFilters, value: any) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const toggleFilter = (filterType: "categories" | "fabrics" | "colors" | "features", value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {language === "zh" ? "高级产品搜索" : "Advanced Product Search"}
          </h1>
          <p className="text-gray-600">
            {language === "zh" ? "使用多种筛选条件找到完美的产品" : "Use multiple filters to find the perfect products"}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5 text-amber-600" />
                  {language === "zh" ? "筛选条件" : "Filters"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search Input */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">
                    {language === "zh" ? "搜索关键词" : "Search Keywords"}
                  </Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={language === "zh" ? "搜索产品..." : "Search products..."}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">
                    {language === "zh" ? "产品类别" : "Categories"}
                  </Label>
                  <div className="space-y-2">
                    {filters.categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={category.id}
                          checked={selectedFilters.categories.includes(category.id)}
                          onCheckedChange={() => toggleFilter("categories", category.id)}
                        />
                        <Label htmlFor={category.id} className="text-sm cursor-pointer">
                          {category.name[language]}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fabric Filter */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">
                    {language === "zh" ? "面料类型" : "Fabric Types"}
                  </Label>
                  <div className="space-y-2">
                    {filters.fabrics.map((fabric) => (
                      <div key={fabric.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={fabric.id}
                          checked={selectedFilters.fabrics.includes(fabric.id)}
                          onCheckedChange={() => toggleFilter("fabrics", fabric.id)}
                        />
                        <Label htmlFor={fabric.id} className="text-sm cursor-pointer">
                          {fabric.name[language]}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">{language === "zh" ? "颜色" : "Colors"}</Label>
                  <div className="space-y-2">
                    {filters.colors.map((color) => (
                      <div key={color.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={color.id}
                          checked={selectedFilters.colors.includes(color.id)}
                          onCheckedChange={() => toggleFilter("colors", color.id)}
                        />
                        <Label htmlFor={color.id} className="text-sm cursor-pointer">
                          {color.name[language]}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Filter */}
                <div>
                  <Label className="text-sm font-semibold mb-2 block">
                    {language === "zh" ? "产品特性" : "Features"}
                  </Label>
                  <div className="space-y-2">
                    {filters.features.map((feature) => (
                      <div key={feature.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature.id}
                          checked={selectedFilters.features.includes(feature.id)}
                          onCheckedChange={() => toggleFilter("features", feature.id)}
                        />
                        <Label htmlFor={feature.id} className="text-sm cursor-pointer">
                          {feature.name[language]}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stock Filter */}
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="inStock"
                      checked={selectedFilters.inStockOnly}
                      onCheckedChange={(checked) => handleFilterChange("inStockOnly", checked)}
                    />
                    <Label htmlFor="inStock" className="text-sm cursor-pointer">
                      {language === "zh" ? "仅显示有库存" : "In Stock Only"}
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  {filteredProducts.length} {language === "zh" ? "个结果" : "Results"}
                </h2>
                {searchQuery && (
                  <p className="text-sm text-gray-600">
                    {language === "zh" ? "搜索: " : "Search: "}
                    {searchQuery}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Options */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">{language === "zh" ? "相关性" : "Relevance"}</SelectItem>
                    <SelectItem value="price-low">
                      {language === "zh" ? "价格: 低到高" : "Price: Low to High"}
                    </SelectItem>
                    <SelectItem value="price-high">
                      {language === "zh" ? "价格: 高到低" : "Price: High to Low"}
                    </SelectItem>
                    <SelectItem value="name">{language === "zh" ? "名称" : "Name"}</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="flex border rounded-lg">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`overflow-hidden hover:shadow-lg transition-shadow ${viewMode === "list" ? "flex" : ""}`}
                  >
                    <div className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}>
                      <div
                        className={`bg-gray-200 ${viewMode === "list" ? "h-full" : "aspect-square"} flex items-center justify-center`}
                      >
                        <span className="text-gray-500 text-sm">{product.name[language]}</span>
                      </div>
                    </div>
                    <div className={viewMode === "list" ? "flex-1" : ""}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold text-lg">{product.name[language]}</h3>
                          {!product.inStock && (
                            <Badge variant="outline" className="text-red-600 border-red-200">
                              {language === "zh" ? "缺货" : "Out of Stock"}
                            </Badge>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {product.features.map((feature) => (
                            <Badge key={feature} variant="secondary" className="text-xs">
                              {filters.features.find((f) => f.id === feature)?.name[language]}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-2xl font-bold text-amber-600">${product.price}</div>
                          <Button size="sm" disabled={!product.inStock}>
                            {language === "zh" ? "查看详情" : "View Details"}
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {language === "zh" ? "没有找到匹配的产品" : "No products found matching your criteria"}
                </p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedFilters({
                      categories: [],
                      fabrics: [],
                      colors: [],
                      features: [],
                      priceRange: [0, 100],
                      inStockOnly: false,
                    })
                  }}
                >
                  {language === "zh" ? "清除所有筛选" : "Clear All Filters"}
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
