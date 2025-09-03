"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Award, Factory, Users } from "lucide-react"
import Image from "next/image"

const newsArticles = [
  {
    id: 1,
    title: "金彭服饰荣获广东省优秀民营企业称号",
    titleEn: "GOLDPANTHER Awarded 'Outstanding Private Enterprise of Guangdong Province'",
    category: "公司荣誉",
    categoryEn: "Company Honor",
    date: "2024-12-15",
    readTime: "3分钟",
    readTimeEn: "3 min read",
    excerpt:
      "在2024年广东省民营企业表彰大会上，金彭服饰凭借在服装制造领域的卓越表现和社会贡献，荣获广东省优秀民营企业称号。",
    excerptEn:
      "At the 2024 Guangdong Private Enterprise Recognition Conference, GOLDPANTHER was awarded the title of 'Outstanding Private Enterprise of Guangdong Province' for its excellent performance and social contribution in garment manufacturing.",
    image: "/award-ceremony-corporate-honor.jpg",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: 2,
    title: "智能化生产线正式投产，年产能提升30%",
    titleEn: "Smart Production Line Officially Launched, Annual Capacity Increased by 30%",
    category: "技术创新",
    categoryEn: "Technology Innovation",
    date: "2024-11-28",
    readTime: "5分钟",
    readTimeEn: "5 min read",
    excerpt:
      "经过6个月的筹备和调试，金彭服饰全新智能化生产线正式投入使用，采用最新的自动化设备和AI质检系统，大幅提升生产效率。",
    excerptEn:
      "After 6 months of preparation and debugging, GOLDPANTHER's new intelligent production line is officially put into use, adopting the latest automation equipment and AI quality inspection system to significantly improve production efficiency.",
    image: "/modern-factory-automation-production-line.jpg",
    icon: <Factory className="h-5 w-5" />,
  },
  {
    id: 3,
    title: "2024年度员工表彰大会圆满举行",
    titleEn: "2024 Annual Employee Recognition Conference Successfully Held",
    category: "企业文化",
    categoryEn: "Corporate Culture",
    date: "2024-11-10",
    readTime: "4分钟",
    readTimeEn: "4 min read",
    excerpt:
      "金彭服饰2024年度员工表彰大会在公司总部隆重举行，表彰了在各个岗位上表现突出的优秀员工，进一步激发了全体员工的工作热情。",
    excerptEn:
      "GOLDPANTHER's 2024 Annual Employee Recognition Conference was grandly held at the company headquarters, recognizing outstanding employees in various positions and further inspiring the enthusiasm of all employees.",
    image: "/corporate-event-employee-recognition-ceremony.jpg",
    icon: <Users className="h-5 w-5" />,
  },
  {
    id: 4,
    title: "与国际知名品牌达成战略合作协议",
    titleEn: "Strategic Cooperation Agreement Reached with International Famous Brand",
    category: "商业合作",
    categoryEn: "Business Cooperation",
    date: "2024-10-22",
    readTime: "3分钟",
    readTimeEn: "3 min read",
    excerpt: "金彭服饰与欧洲知名服装品牌正式签署战略合作协议，将为其提供高品质的男装产品，进一步拓展国际市场。",
    excerptEn:
      "GOLDPANTHER officially signed a strategic cooperation agreement with a well-known European clothing brand to provide high-quality menswear products and further expand the international market.",
    image: "/business-handshake-international-cooperation.jpg",
    icon: <ArrowRight className="h-5 w-5" />,
  },
  {
    id: 5,
    title: "环保生产获得ISO 14001认证",
    titleEn: "Environmental Production Receives ISO 14001 Certification",
    category: "可持续发展",
    categoryEn: "Sustainability",
    date: "2024-09-15",
    readTime: "4分钟",
    readTimeEn: "4 min read",
    excerpt:
      "金彭服饰通过严格的环境管理体系审核，正式获得ISO 14001环境管理体系认证，彰显了公司在可持续发展方面的承诺。",
    excerptEn:
      "GOLDPANTHER passed strict environmental management system audit and officially obtained ISO 14001 environmental management system certification, demonstrating the company's commitment to sustainable development.",
    image: "/green-factory-environmental-certification.jpg",
    icon: <Award className="h-5 w-5" />,
  },
  {
    id: 6,
    title: "新品发布：2025春夏男装系列",
    titleEn: "New Product Launch: 2025 Spring/Summer Menswear Collection",
    category: "产品发布",
    categoryEn: "Product Launch",
    date: "2024-08-30",
    readTime: "6分钟",
    readTimeEn: "6 min read",
    excerpt: "金彭服饰2025春夏男装系列正式发布，融合时尚设计与舒适面料，为现代男性提供更多元化的穿着选择。",
    excerptEn:
      "GOLDPANTHER's 2025 Spring/Summer menswear collection is officially launched, combining fashionable design with comfortable fabrics to provide modern men with more diversified wearing choices.",
    image: "/fashion-menswear-collection-spring-summer.jpg",
    icon: <ArrowRight className="h-5 w-5" />,
  },
]

const categories = [
  { name: "全部", nameEn: "All", value: "all" },
  { name: "公司荣誉", nameEn: "Company Honor", value: "company-honor" },
  { name: "技术创新", nameEn: "Technology Innovation", value: "technology" },
  { name: "企业文化", nameEn: "Corporate Culture", value: "culture" },
  { name: "商业合作", nameEn: "Business Cooperation", value: "business" },
  { name: "可持续发展", nameEn: "Sustainability", value: "sustainability" },
  { name: "产品发布", nameEn: "Product Launch", value: "product" },
]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">新闻动态</h1>
            <p className="text-xl text-muted-foreground mb-4">Company News & Updates</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              了解金彭服饰最新动态，见证我们的成长历程与发展成就。
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-2">
              Stay updated with GOLDPANTHER's latest news and witness our growth journey and achievements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {categories.map((category, index) => (
              <Button key={category.value} variant={index === 0 ? "default" : "outline"} size="sm" className="text-sm">
                {category.name}
                <span className="ml-1 text-xs opacity-70">/ {category.nameEn}</span>
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                  <Image
                    src={newsArticles[0].image || "/placeholder.svg"}
                    alt={newsArticles[0].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">特别报道 / Featured</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {newsArticles[0].icon}
                      {newsArticles[0].category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {newsArticles[0].date}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {newsArticles[0].readTime}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-2">{newsArticles[0].title}</h2>
                  <p className="text-muted-foreground mb-3 text-sm">{newsArticles[0].titleEn}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{newsArticles[0].excerpt}</p>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{newsArticles[0].excerptEn}</p>
                  <Button className="self-start bg-primary hover:bg-primary/90">
                    阅读全文 / Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">更多新闻</h2>
            <p className="text-muted-foreground">More News & Updates</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(1).map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="flex items-center gap-1">
                        {article.icon}
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{article.titleEn}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{article.excerpt}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{article.excerptEn}</p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                      阅读更多 / Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">订阅新闻通讯</h2>
            <p className="text-muted-foreground mb-2">Subscribe to Newsletter</p>
            <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-lg mb-6">订阅我们的新闻通讯，第一时间获取公司最新动态和行业资讯。</p>
              <p className="text-sm text-muted-foreground mb-6">
                Subscribe to our newsletter to get the latest company updates and industry insights.
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="输入您的邮箱 / Enter your email"
                  className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">订阅 / Subscribe</Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
