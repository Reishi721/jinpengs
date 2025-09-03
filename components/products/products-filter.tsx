"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import type { ProductCategory } from "@/app/products/page"

interface ProductsFilterProps {
  activeCategory: ProductCategory
  setActiveCategory: (category: ProductCategory) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export function ProductsFilter({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
}: ProductsFilterProps) {
  const categories = [
    { id: "all" as ProductCategory, label: "全部产品", labelEn: "All Products" },
    { id: "formal" as ProductCategory, label: "正装裤", labelEn: "Formal Trousers" },
    { id: "casual" as ProductCategory, label: "休闲裤", labelEn: "Casual Trousers" },
    { id: "jeans" as ProductCategory, label: "牛仔裤", labelEn: "Jeans" },
  ]

  return (
    <section className="py-8 border-b bg-background/95 backdrop-blur sticky top-16 z-40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-6 items-center justify-between"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-200"
              >
                <span className="font-medium">{category.label}</span>
                <span className="text-xs opacity-70 ml-1">{category.labelEn}</span>
              </Button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="搜索产品... / Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
