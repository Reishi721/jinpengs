"use client"

import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import type { ProductCategory } from "@/app/products/page"

interface ProductsGridProps {
  activeCategory: ProductCategory
  searchQuery: string
}

export interface Product {
  id: string
  name: string
  nameEn: string
  category: ProductCategory
  description: string
  descriptionEn: string
  image: string
  features: string[]
  isNew?: boolean
  fabric: string
  colors: string[]
}

export function ProductsGrid({ activeCategory, searchQuery }: ProductsGridProps) {
  const products: Product[] = [
    // Formal Wear Collection
    {
      id: "formal-001",
      name: "经典商务正装裤",
      nameEn: "Classic Business Formal Trousers",
      category: "formal",
      description: "采用高品质羊毛面料，精工细作，适合商务场合",
      descriptionEn: "High-quality wool fabric with exquisite craftsmanship for business occasions",
      image: "/elegant-formal-business-trousers.jpg",
      features: ["羊毛面料", "免烫处理", "修身剪裁"],
      isNew: true,
      fabric: "羊毛混纺",
      colors: ["黑色", "深灰", "藏青"],
    },
    {
      id: "formal-002",
      name: "高端西装裤",
      nameEn: "Premium Suit Trousers",
      category: "formal",
      description: "意大利进口面料，手工缝制，展现专业形象",
      descriptionEn: "Italian imported fabric with hand-sewn details for professional image",
      image: "/formal-suit-trousers-charcoal.jpg",
      features: ["意大利面料", "手工缝制", "经典版型"],
      fabric: "纯羊毛",
      colors: ["炭灰", "深蓝", "黑色"],
    },
    {
      id: "formal-003",
      name: "商务修身西裤",
      nameEn: "Business Slim Fit Dress Pants",
      category: "formal",
      description: "现代修身剪裁，展现都市精英风范",
      descriptionEn: "Modern slim fit tailoring for urban professional style",
      image: "/business-slim-dress-pants.jpg",
      features: ["修身版型", "抗皱面料", "舒适腰带"],
      fabric: "羊毛聚酯混纺",
      colors: ["深灰", "黑色", "深蓝"],
    },
    {
      id: "formal-004",
      name: "奢华正装长裤",
      nameEn: "Luxury Formal Trousers",
      category: "formal",
      description: "顶级面料工艺，彰显尊贵品味",
      descriptionEn: "Premium fabric craftsmanship showcasing distinguished taste",
      image: "/luxury-formal-trousers-navy.jpg",
      features: ["奢华面料", "定制剪裁", "精致细节"],
      fabric: "高支羊毛",
      colors: ["藏青", "炭黑", "深棕"],
    },

    // Casual Wear Collection
    {
      id: "casual-001",
      name: "舒适休闲裤",
      nameEn: "Comfortable Casual Trousers",
      category: "casual",
      description: "柔软棉质面料，宽松舒适，适合日常休闲",
      descriptionEn: "Soft cotton fabric with relaxed fit for everyday casual wear",
      image: "/comfortable-casual-trousers.jpg",
      features: ["纯棉面料", "弹性腰带", "多口袋设计"],
      fabric: "纯棉",
      colors: ["卡其", "海军蓝", "橄榄绿"],
    },
    {
      id: "casual-002",
      name: "运动休闲裤",
      nameEn: "Athletic Casual Trousers",
      category: "casual",
      description: "运动科技面料，透气排汗，运动休闲两相宜",
      descriptionEn: "Athletic tech fabric with moisture-wicking for sports and casual wear",
      image: "/athletic-casual-pants-grey.jpg",
      features: ["科技面料", "透气排汗", "弹性设计"],
      isNew: true,
      fabric: "聚酯纤维",
      colors: ["黑色", "深灰", "军绿"],
    },
    {
      id: "casual-003",
      name: "都市休闲长裤",
      nameEn: "Urban Casual Pants",
      category: "casual",
      description: "时尚都市风格，适合各种休闲场合",
      descriptionEn: "Fashionable urban style suitable for various casual occasions",
      image: "/urban-casual-pants-khaki.jpg",
      features: ["时尚剪裁", "舒适面料", "百搭设计"],
      fabric: "棉聚酯混纺",
      colors: ["卡其", "橄榄绿", "深蓝"],
    },
    {
      id: "casual-004",
      name: "户外休闲裤",
      nameEn: "Outdoor Casual Trousers",
      category: "casual",
      description: "耐磨防水面料，适合户外活动",
      descriptionEn: "Durable water-resistant fabric perfect for outdoor activities",
      image: "/outdoor-casual-trousers-olive.jpg",
      features: ["防水面料", "耐磨设计", "多功能口袋"],
      fabric: "尼龙混纺",
      colors: ["橄榄绿", "卡其", "深灰"],
    },
    {
      id: "casual-005",
      name: "轻奢休闲裤",
      nameEn: "Light Luxury Casual Pants",
      category: "casual",
      description: "轻奢面料工艺，休闲中透露精致",
      descriptionEn: "Light luxury fabric craftsmanship with refined casual elegance",
      image: "/light-luxury-casual-pants.jpg",
      features: ["轻奢面料", "精致工艺", "舒适版型"],
      fabric: "高档棉麻",
      colors: ["米白", "浅灰", "深蓝"],
    },

    // Denim Collection
    {
      id: "jeans-001",
      name: "经典牛仔裤",
      nameEn: "Classic Denim Jeans",
      category: "jeans",
      description: "优质牛仔布料，经典五袋设计，百搭时尚",
      descriptionEn: "Premium denim fabric with classic five-pocket design",
      image: "/stylish-denim-jeans.jpg",
      features: ["优质牛仔布", "五袋设计", "经典剪裁"],
      fabric: "纯棉牛仔",
      colors: ["靛蓝", "深蓝", "黑色"],
    },
    {
      id: "jeans-002",
      name: "弹力修身牛仔裤",
      nameEn: "Stretch Slim Fit Jeans",
      category: "jeans",
      description: "添加弹性纤维，修身版型，舒适贴身",
      descriptionEn: "Added stretch fiber with slim fit for comfort and style",
      image: "/stretch-slim-jeans-indigo.jpg",
      features: ["弹性面料", "修身版型", "舒适贴身"],
      fabric: "棉弹混纺",
      colors: ["浅蓝", "中蓝", "深蓝"],
    },
    {
      id: "jeans-003",
      name: "复古直筒牛仔裤",
      nameEn: "Vintage Straight Leg Jeans",
      category: "jeans",
      description: "复古洗水工艺，直筒版型，经典永恒",
      descriptionEn: "Vintage wash treatment with straight leg cut for timeless appeal",
      image: "/vintage-straight-jeans-blue.jpg",
      features: ["复古洗水", "直筒版型", "经典设计"],
      fabric: "纯棉牛仔",
      colors: ["复古蓝", "深靛蓝", "黑色"],
    },
    {
      id: "jeans-004",
      name: "高腰修身牛仔裤",
      nameEn: "High-Waist Skinny Jeans",
      category: "jeans",
      description: "高腰设计，修身剪裁，展现完美身材",
      descriptionEn: "High-waist design with skinny fit to showcase perfect silhouette",
      image: "/high-waist-skinny-jeans.jpg",
      features: ["高腰设计", "修身剪裁", "塑形效果"],
      isNew: true,
      fabric: "棉弹混纺",
      colors: ["深蓝", "黑色", "浅蓝"],
    },
    {
      id: "jeans-005",
      name: "工装牛仔裤",
      nameEn: "Workwear Denim Jeans",
      category: "jeans",
      description: "工装风格设计，耐磨实用，时尚个性",
      descriptionEn: "Workwear style design with durability and fashionable personality",
      image: "/workwear-denim-jeans-dark.jpg",
      features: ["工装设计", "耐磨面料", "多口袋"],
      fabric: "重磅牛仔",
      colors: ["深靛蓝", "黑色", "军绿"],
    },
    {
      id: "jeans-006",
      name: "破洞时尚牛仔裤",
      nameEn: "Distressed Fashion Jeans",
      category: "jeans",
      description: "时尚破洞设计，个性十足，年轻活力",
      descriptionEn: "Trendy distressed design with personality and youthful energy",
      image: "/distressed-fashion-jeans.jpg",
      features: ["破洞设计", "时尚剪裁", "个性风格"],
      fabric: "棉弹混纺",
      colors: ["浅蓝", "中蓝", "深蓝"],
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())

    return matchesCategory && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {filteredProducts.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-lg text-muted-foreground">未找到匹配的产品 / No products found</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
