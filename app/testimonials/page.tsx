"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Quote, Building, MapPin, Calendar, Award } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    company: "ABC Fashion Ltd.",
    position: { zh: "采购总监", en: "Procurement Director" },
    location: { zh: "美国纽约", en: "New York, USA" },
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "2024-01-15",
    content: {
      zh: "金彭服饰的产品质量超出了我们的预期。他们的正装裤系列在我们的市场上非常受欢迎，客户反馈极佳。交货准时，服务专业，特别是他们的高端商务正装系列，完美契合了美国市场对品质和款式的双重要求。",
      en: "Jinpeng's product quality exceeded our expectations. Their formal trouser line has been very popular in our market with excellent customer feedback. Timely delivery and professional service. Their premium business formal series perfectly matches the American market's dual requirements for quality and style.",
    },
    orderValue: "$125,000",
    partnership: "2 years",
    image: "/business-handshake-international-cooperation.jpg",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    company: "European Style Co.",
    position: { zh: "首席买手", en: "Chief Buyer" },
    location: { zh: "西班牙马德里", en: "Madrid, Spain" },
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "2024-01-20",
    content: {
      zh: "与金彭合作三年来，他们始终保持高标准的产品质量和创新设计。特别是他们的可持续面料系列，完全符合欧洲市场的环保要求。从设计到生产，每个环节都体现了专业水准，这正是我们选择长期合作的原因。",
      en: "Working with Jinpeng for three years, they consistently maintain high product quality and innovative designs. Especially their sustainable fabric series perfectly meets European market environmental requirements. From design to production, every step reflects professional standards, which is why we choose long-term cooperation.",
    },
    orderValue: "$280,000",
    partnership: "3 years",
    image: "/green-factory-environmental-certification.jpg",
  },
  {
    id: 3,
    name: "Hiroshi Tanaka",
    company: "Tokyo Fashion House",
    position: { zh: "产品经理", en: "Product Manager" },
    location: { zh: "日本东京", en: "Tokyo, Japan" },
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "2024-01-25",
    content: {
      zh: "金彭的技术团队非常专业，能够根据我们的具体需求进行定制生产。他们的质量控制体系让我们完全放心，产品一致性非常好。无论是传统款式还是时尚前卫的设计，都能完美呈现，这种灵活性对我们的多元化产品线至关重要。",
      en: "Jinpeng's technical team is very professional and can customize production according to our specific needs. Their quality control system gives us complete confidence with excellent product consistency. Whether traditional styles or fashion-forward designs, they present perfectly. This flexibility is crucial for our diversified product line.",
    },
    orderValue: "$95,000",
    partnership: "1.5 years",
    image: "/modern-factory-automation-production-line.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    company: "Premium Retail Group",
    position: { zh: "供应链总监", en: "Supply Chain Director" },
    location: { zh: "英国伦敦", en: "London, UK" },
    avatar: "/placeholder-user.jpg",
    rating: 5,
    date: "2024-02-01",
    content: {
      zh: "金彭服饰在快速响应和灵活生产方面表现出色。即使是紧急订单，他们也能保证质量和交期。这种可靠性对我们的业务至关重要。他们的团队不仅理解我们的需求，更能提供专业的建议，帮助我们优化产品组合。",
      en: "Jinpeng excels in rapid response and flexible production. Even for urgent orders, they guarantee quality and delivery time. This reliability is crucial for our business. Their team not only understands our needs but also provides professional advice to help us optimize our product portfolio.",
    },
    orderValue: "$180,000",
    partnership: "4 years",
    image: "/award-ceremony-corporate-honor.jpg",
  },
]

const caseStudies = [
  {
    id: 1,
    title: { zh: "欧洲高端品牌合作案例", en: "European Premium Brand Partnership" },
    client: "Luxury Fashion Europe",
    challenge: {
      zh: "需要符合欧盟环保标准的高端正装裤，要求使用可持续材料并通过严格的质量认证",
      en: "Need for high-end formal trousers meeting EU environmental standards, requiring sustainable materials and strict quality certification",
    },
    solution: {
      zh: "采用有机棉和再生纤维，建立专门的绿色生产线，获得OEKO-TEX和GOTS认证，实施全程可追溯的供应链管理",
      en: "Used organic cotton and recycled fibers, established dedicated green production line, obtained OEKO-TEX and GOTS certification, implemented fully traceable supply chain management",
    },
    result: {
      zh: "成功打入欧洲高端市场，年销售额增长150%，获得欧盟绿色纺织品认证，成为该品牌核心供应商",
      en: "Successfully entered European premium market, 150% annual sales growth, obtained EU green textile certification, became core supplier for the brand",
    },
    image: "/green-factory-environmental-certification.jpg",
    metrics: [
      { label: { zh: "订单增长", en: "Order Growth" }, value: "150%" },
      { label: { zh: "质量评分", en: "Quality Score" }, value: "9.8/10" },
      { label: { zh: "交付准时率", en: "On-time Delivery" }, value: "99.2%" },
    ],
  },
  {
    id: 2,
    title: { zh: "美国快时尚品牌定制", en: "US Fast Fashion Brand Customization" },
    client: "American Trend Co.",
    challenge: {
      zh: "快速响应市场变化，缩短生产周期，同时保证大批量订单的质量一致性和成本控制",
      en: "Rapid market response, shortened production cycles while ensuring quality consistency and cost control for large volume orders",
    },
    solution: {
      zh: "建立智能化敏捷生产系统，实现7天快速打样，采用模块化生产线，引入AI质检系统，优化库存管理",
      en: "Established intelligent agile production system, 7-day rapid sampling, modular production lines, AI quality inspection system, optimized inventory management",
    },
    result: {
      zh: "生产效率提升40%，客户满意度达98%，成为该品牌最大的亚洲供应商，建立长期战略合作关系",
      en: "40% production efficiency improvement, 98% customer satisfaction, became the brand's largest Asian supplier, established long-term strategic partnership",
    },
    image: "/modern-factory-automation-production-line.jpg",
    metrics: [
      { label: { zh: "生产效率", en: "Production Efficiency" }, value: "+40%" },
      { label: { zh: "打样速度", en: "Sampling Speed" }, value: "7 days" },
      { label: { zh: "客户满意度", en: "Customer Satisfaction" }, value: "98%" },
    ],
  },
  {
    id: 3,
    title: { zh: "日本精品男装定制案例", en: "Japanese Premium Menswear Customization" },
    client: "Tokyo Premium Menswear",
    challenge: {
      zh: "日本市场对细节和工艺要求极高，需要实现小批量多款式的精准定制生产",
      en: "Japanese market demands extremely high attention to detail and craftsmanship, requiring precise customization for small batches with multiple styles",
    },
    solution: {
      zh: "建立专门的精品定制生产线，培训专业技师团队，引入日式质量管理体系，实现每件产品的个性化定制",
      en: "Established dedicated premium customization production line, trained professional technician team, introduced Japanese quality management system, achieved personalized customization for each product",
    },
    result: {
      zh: "获得日本JIS质量认证，客户复购率达95%，平均订单价值提升200%，成为日本市场的标杆供应商",
      en: "Obtained Japanese JIS quality certification, 95% customer repurchase rate, 200% increase in average order value, became benchmark supplier in Japanese market",
    },
    image: "/fashion-menswear-collection-spring-summer.jpg",
    metrics: [
      { label: { zh: "复购率", en: "Repurchase Rate" }, value: "95%" },
      { label: { zh: "订单价值", en: "Order Value" }, value: "+200%" },
      { label: { zh: "质量认证", en: "Quality Cert" }, value: "JIS" },
    ],
  },
]

export default function TestimonialsPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState<"testimonials" | "cases">("testimonials")

  console.log("[v0] Current language:", language)
  console.log("[v0] First testimonial content:", testimonials[0]?.content)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {language === "zh" ? "客户见证" : "Customer Testimonials"}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {language === "zh"
              ? "听听我们的合作伙伴如何评价我们的产品和服务"
              : "Hear what our partners say about our products and services"}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm border">
            <Button
              variant={activeTab === "testimonials" ? "default" : "ghost"}
              onClick={() => setActiveTab("testimonials")}
              className="px-6"
            >
              <Quote className="h-4 w-4 mr-2" />
              {language === "zh" ? "客户评价" : "Testimonials"}
            </Button>
            <Button
              variant={activeTab === "cases" ? "default" : "ghost"}
              onClick={() => setActiveTab("cases")}
              className="px-6"
            >
              <Award className="h-4 w-4 mr-2" />
              {language === "zh" ? "成功案例" : "Case Studies"}
            </Button>
          </div>
        </div>

        {activeTab === "testimonials" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { label: { zh: "客户满意度", en: "Customer Satisfaction" }, value: "98.5%", icon: Star },
                { label: { zh: "合作伙伴", en: "Partners" }, value: "200+", icon: Building },
                { label: { zh: "服务国家", en: "Countries Served" }, value: "45+", icon: MapPin },
                { label: { zh: "平均合作年限", en: "Avg Partnership" }, value: "3.2 years", icon: Calendar },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label.en}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <stat.icon className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label[language]}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                            <AvatarFallback>
                              {testimonial.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                            <p className="text-sm text-gray-600">{testimonial.position[language]}</p>
                            <p className="text-sm text-amber-600 font-medium">{testimonial.company}</p>
                          </div>
                        </div>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <Quote className="h-6 w-6 text-amber-600 mb-2" />
                        <p className="text-gray-700 italic leading-relaxed">
                          "{testimonial.content[language] || testimonial.content.en || "No content available"}"
                        </p>
                        {process.env.NODE_ENV === "development" && (
                          <div className="text-xs text-red-500 mt-2">
                            Debug: Language={language}, Content exists={!!testimonial.content[language]}
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4" />
                        {testimonial.location[language]}
                        <span className="mx-2">•</span>
                        <Calendar className="h-4 w-4" />
                        {testimonial.date}
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <div className="flex gap-4">
                          <div>
                            <p className="text-xs text-gray-500">{language === "zh" ? "订单价值" : "Order Value"}</p>
                            <p className="font-semibold text-amber-600">{testimonial.orderValue}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">{language === "zh" ? "合作时长" : "Partnership"}</p>
                            <p className="font-semibold">{testimonial.partnership}</p>
                          </div>
                        </div>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          {language === "zh" ? "验证客户" : "Verified Client"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "cases" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative aspect-video lg:aspect-auto">
                      <img
                        src={caseStudy.image || "/placeholder.svg"}
                        alt={caseStudy.title[language]}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-8">
                      <div className="mb-6">
                        <Badge className="mb-3">{caseStudy.client}</Badge>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{caseStudy.title[language]}</h2>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-amber-600 mb-2">
                            {language === "zh" ? "挑战" : "Challenge"}
                          </h4>
                          <p className="text-gray-700">{caseStudy.challenge[language]}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-600 mb-2">
                            {language === "zh" ? "解决方案" : "Solution"}
                          </h4>
                          <p className="text-gray-700">{caseStudy.solution[language]}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-amber-600 mb-2">{language === "zh" ? "结果" : "Result"}</h4>
                          <p className="text-gray-700">{caseStudy.result[language]}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.metrics.map((metric, i) => (
                          <div key={i} className="text-center p-3 bg-amber-50 rounded-lg">
                            <div className="text-xl font-bold text-amber-600">{metric.value}</div>
                            <div className="text-xs text-gray-600">{metric.label[language]}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-amber-600 to-amber-700 text-white">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                {language === "zh" ? "成为我们的下一个成功案例" : "Become Our Next Success Story"}
              </h2>
              <p className="text-xl mb-8 text-amber-100">
                {language === "zh"
                  ? "加入200+满意客户的行列，体验专业的服装制造服务"
                  : "Join 200+ satisfied customers and experience professional garment manufacturing"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-amber-700 hover:bg-gray-100">
                  {language === "zh" ? "获取报价" : "Get Quote"}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-amber-700 bg-transparent"
                >
                  {language === "zh" ? "联系我们" : "Contact Us"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
