"use client"
import { ProductsHeader } from "@/components/products/products-header"
import { ProductsFilter } from "@/components/products/products-filter"
import { ProductsGrid } from "@/components/products/products-grid"
import { ProductsCatalog } from "@/components/products/products-catalog"
import { useState } from "react"

export type ProductCategory = "all" | "formal" | "casual" | "jeans"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen">
      <ProductsHeader />
      <ProductsFilter
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ProductsGrid activeCategory={activeCategory} searchQuery={searchQuery} />
      <ProductsCatalog />
    </div>
  )
}
