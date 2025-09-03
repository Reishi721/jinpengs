"use client"

import { CardDescription } from "@/components/ui/card"

import { Calendar } from "@/components/ui/calendar"

import { Badge } from "@/components/ui/badge"

import { Textarea } from "@/components/ui/textarea"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"

import { CardContent } from "@/components/ui/card"

import { CardTitle } from "@/components/ui/card"

import { CardHeader } from "@/components/ui/card"

import { Card } from "@/components/ui/card"
;```tsx file="app/admin/page.tsx"
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart3, Users, Globe, TrendingUp, Eye, MousePointer, Clock, Plus, Edit, Trash2, Save, Calendar, FileText, ImageIcon } from 'lucide-react'
import { useLanguage } from "@/lib/i18n"

const analyticsData = {
  overview: {
    totalVisitors: 45672,
    pageViews: 128934,
    bounceRate: 32.5,
    avgSessionDuration: "3:42",
    conversionRate: 4.2
  },
  topPages: [
    { page: "/products", views: 23456, percentage: 18.2 },
    { page: "/", views: 19834, percentage: 15.4 },
    { page: "/about", views: 15672, percentage: 12.2 },
    { page: "/quote", views: 12345, percentage: 9.6 },
    { page: "/contact", views: 8901, percentage: 6.9 }
  ],
  traffic: [
    { source: "Organic Search", visitors: 18234, percentage: 39.9 },
    { source: "Direct", visitors: 12456, percentage: 27.3 },
    { source: "Social Media", visitors: 8901, percentage: 19.5 },
    { source: "Referral", visitors: 4567, percentage: 10.0 },
    { source: "Email", visitors: 1514, percentage: 3.3 }
  ],
  countries: [
    { country: "China", visitors: 15234, percentage: 33.4 },
    { country: "United States", visitors: 8901, percentage: 19.5 },
    { country: "Germany", visitors: 5678, percentage: 12.4 },
    { country: "United Kingdom", visitors: 4321, percentage: 9.5 },
    { country: "Japan", visitors: 3456, percentage: 7.6 }
  ]
}

const mockArticles = [
  {
    id: 1,
    title: "金彭服饰荣获广东省优秀民营企业称号",
    titleEn: "GOLDPANTHER Awarded Outstanding Private Enterprise",
    category: "company-honor",
    status: "published",
    date: "2024-12-15",
    views: 1234,
    author: "Admin"
  },
  {
    id: 2,
    title: "智能化生产线正式投产",
    titleEn: "Smart Production Line Officially Launched",
    category: "technology",
    status: "draft",
    date: "2024-11-28",
    views: 0,
    author: "Editor"
  }
]

export default function AdminPage() {
  const { language } = useLanguage()
  const [activeTab, setActiveTab] = useState("analytics")
  const [articles, setArticles] = useState(mockArticles)
  const [editingArticle, setEditingArticle] = useState<any>(null)
  const [newArticle, setNewArticle] = useState({
    title: "",
    titleEn: "",
    category: "",
    content: "",
    contentEn: "",
    excerpt: "",
    excerptEn: ""
  })

  const handleSaveArticle = () => {
    if (editingArticle) {
      setArticles(articles.map(a => a.id === editingArticle.id ? { ...editingArticle, ...newArticle } : a))
      setEditingArticle(null)
    } else {
      const article = {
        id: Date.now(),
        ...newArticle,
        status: "draft",
        date: new Date().toISOString().split('T')[0],
        views: 0,
        author: "Admin"
      }
      setArticles([article, ...articles])
    }
    setNewArticle({
      title: "",
      titleEn: "",
      category: "",
      content: "",
      contentEn: "",
      excerpt: "",
      excerptEn: ""
    })
  }

  const handleDeleteArticle = (id: number) => {
    setArticles(articles.filter(a => a.id !== id))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === "zh" ? "管理后台" : "Admin Dashboard"}
          </h1>
          <p className="text-gray-600">
            {language === "zh" ? "网站分析和内容管理" : "Website analytics and content management"}
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              {language === "zh" ? "数据分析" : "Analytics"}
            </TabsTrigger>
            <TabsTrigger value="content" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              {language === "zh" ? "内容管理" : "Content"}
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              {language === "zh" ? "网站设置" : "Settings"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                { 
                  label: { zh: "总访客", en: "Total Visitors" }, 
                  value: analyticsData.overview.totalVisitors.toLocaleString(), 
                  icon: Users,
                  color: "text-blue-600"
                },
                { 
                  label: { zh: "页面浏览", en: "Page Views" }, 
                  value: analyticsData.overview.pageViews.toLocaleString(), 
                  icon: Eye,
                  color: "text-green-600"
                },
                { 
                  label: { zh: "跳出率", en: "Bounce Rate" }, 
                  value: `
$
{
  analyticsData.overview.bounceRate
}
%`, 
                  icon: MousePointer,
                  color: "text-orange-600"\
                },\
{
  zh: "平均停留", en
  : "Avg Session"
  , 
                  value: analyticsData.overview.avgSessionDuration, 
                  icon: Clock,\
                  color: \"text-purple-600"
}
,
{
  zh: "转化率", en
  : "Conversion"
  , 
                  value: \`$
  analyticsData.overview.conversionRate
  %`, 
                  icon: TrendingUp,\
                  color: \"text-amber-600"
}
\
              ].map((stat, index) => (
                <motion.div
                  key=
{
  stat.label.en
}
initial={{ opacity: 0, y: 20 }
}
                  animate=
{
  opacity: 1, y
  : 0
}
transition={{ delay: index * 0.1 }
}\
                >\
                  <Card>\
                    <CardContent className="p-6">\
                      <div className=\"flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600">
{
  stat.label[language]
}
</p>
;<p className="text-2xl font-bold">{stat.value}</p>
</div>
                        <stat.icon className=
{
  ;`h-8 w-8 ${stat.color}`
}
;/>
</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

{
  /* Detailed Analytics */
}
;<div className="grid lg:grid-cols-2 gap-6">
  {/* Top Pages */}
  <Card>
    <CardHeader>
      <CardTitle>{language === "zh" ? "热门页面" : "Top Pages"}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {analyticsData.topPages.map((page, index) => (
          <div key={page.page} className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium">{page.page}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-amber-600 h-2 rounded-full" style={{ width: `${page.percentage}%` }} />
              </div>
            </div>
            <div className="text-right ml-4">
              <p className="font-semibold">{page.views.toLocaleString()}</p>
              <p className="text-sm text-gray-500">{page.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>

  {/* Traffic Sources */}
  <Card>
    <CardHeader>
      <CardTitle>{language === "zh" ? "流量来源" : "Traffic Sources"}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {analyticsData.traffic.map((source, index) => (
          <div key={source.source} className="flex items-center justify-between">
            <div className="flex-1">
              <p className="font-medium">{source.source}</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${source.percentage}%` }} />
              </div>
            </div>
            <div className="text-right ml-4">
              <p className="font-semibold">{source.visitors.toLocaleString()}</p>
              <p className="text-sm text-gray-500">{source.percentage}%</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>

  {/* Geographic Data */}
  <Card className="lg:col-span-2">
    <CardHeader>
      <CardTitle>{language === "zh" ? "访客地区分布" : "Visitor Geography"}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid md:grid-cols-5 gap-4">
        {analyticsData.countries.map((country, index) => (
          <div key={country.country} className="text-center">
            <div className="mb-2">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto flex items-center justify-center">
                <Globe className="h-6 w-6 text-gray-500" />
              </div>
            </div>
            <p className="font-medium text-sm">{country.country}</p>
            <p className="text-lg font-bold text-amber-600">{country.visitors.toLocaleString()}</p>
            <p className="text-xs text-gray-500">{country.percentage}%</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
</div>
</TabsContent>

          <TabsContent value="content" className="space-y-6">
{
  /* Content Management Header */
}
;<div className="flex items-center justify-between">
  <h2 className="text-2xl font-bold">{language === "zh" ? "内容管理" : "Content Management"}</h2>
  <Button onClick={() => setEditingArticle({})} className="bg-amber-600 hover:bg-amber-700">
    <Plus className="h-4 w-4 mr-2" />
    {language === "zh" ? "新建文章" : "New Article"}
  </Button>
</div>

{
  /* Article Editor */
}
{
  ;(editingArticle || editingArticle === null) && (
    <Card>
      <CardHeader>
        <CardTitle>
          {editingArticle?.id
            ? language === "zh"
              ? "编辑文章"
              : "Edit Article"
            : language === "zh"
              ? "新建文章"
              : "New Article"}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>{language === "zh" ? "中文标题" : "Chinese Title"}</Label>
            <Input
              value={newArticle.title}
              onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
              placeholder={language === "zh" ? "输入中文标题" : "Enter Chinese title"}
            />
          </div>
          <div>
            <Label>{language === "zh" ? "英文标题" : "English Title"}</Label>
            <Input
              value={newArticle.titleEn}
              onChange={(e) => setNewArticle({ ...newArticle, titleEn: e.target.value })}
              placeholder={language === "zh" ? "输入英文标题" : "Enter English title"}
            />
          </div>
        </div>

        <div>
          <Label>{language === "zh" ? "分类" : "Category"}</Label>
          <Select
            value={newArticle.category}
            onValueChange={(value) => setNewArticle({ ...newArticle, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder={language === "zh" ? "选择分类" : "Select category"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="company-honor">{language === "zh" ? "公司荣誉" : "Company Honor"}</SelectItem>
              <SelectItem value="technology">{language === "zh" ? "技术创新" : "Technology"}</SelectItem>
              <SelectItem value="culture">{language === "zh" ? "企业文化" : "Culture"}</SelectItem>
              <SelectItem value="business">{language === "zh" ? "商业合作" : "Business"}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>{language === "zh" ? "中文摘要" : "Chinese Excerpt"}</Label>
            <Textarea
              value={newArticle.excerpt}
              onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
              placeholder={language === "zh" ? "输入中文摘要" : "Enter Chinese excerpt"}
              rows={3}
            />
          </div>
          <div>
            <Label>{language === "zh" ? "英文摘要" : "English Excerpt"}</Label>
            <Textarea
              value={newArticle.excerptEn}
              onChange={(e) => setNewArticle({ ...newArticle, excerptEn: e.target.value })}
              placeholder={language === "zh" ? "输入英文摘要" : "Enter English excerpt"}
              rows={3}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label>{language === "zh" ? "中文内容" : "Chinese Content"}</Label>
            <Textarea
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
              placeholder={language === "zh" ? "输入中文内容" : "Enter Chinese content"}
              rows={8}
            />
          </div>
          <div>
            <Label>{language === "zh" ? "英文内容" : "English Content"}</Label>
            <Textarea
              value={newArticle.contentEn}
              onChange={(e) => setNewArticle({ ...newArticle, contentEn: e.target.value })}
              placeholder={language === "zh" ? "输入英文内容" : "Enter English content"}
              rows={8}
            />
          </div>
        </div>

        <div className="flex gap-4">
          <Button onClick={handleSaveArticle} className="bg-amber-600 hover:bg-amber-700">
            <Save className="h-4 w-4 mr-2" />
            {language === "zh" ? "保存" : "Save"}
          </Button>
          <Button variant="outline" onClick={() => setEditingArticle(null)} className="bg-transparent">
            {language === "zh" ? "取消" : "Cancel"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

{
  /* Articles List */
}
;<Card>
  <CardHeader>
    <CardTitle>{language === "zh" ? "文章列表" : "Articles List"}</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="space-y-4">
      {articles.map((article) => (
        <div key={article.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex-1">
            <h3 className="font-semibold">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.titleEn}</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <Badge variant={article.status === "published" ? "default" : "secondary"}>
                {article.status === "published"
                  ? language === "zh"
                    ? "已发布"
                    : "Published"
                  : language === "zh"
                    ? "草稿"
                    : "Draft"}
              </Badge>
              <span className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" />
                {article.views}
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => setEditingArticle(article)} className="bg-transparent">
              <Edit className="h-4 w-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleDeleteArticle(article.id)}
              className="text-red-600 hover:text-red-700 bg-transparent"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  </CardContent>
</Card>
</TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
{
  language === "zh" ? "网站设置" : "Website Settings"
}
</CardTitle>
;<CardDescription>
  {language === "zh" ? "管理网站的基本配置和SEO设置" : "Manage basic website configuration and SEO settings"}
</CardDescription>
</CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>
{
  language === "zh" ? "网站标题" : "Site Title"
}
</Label>
;<Input defaultValue="阳江市金彭服饰实业有限公司" />
</div>
                  <div>
                    <Label>
{
  language === "zh" ? "网站描述" : "Site Description"
}
</Label>
;<Input defaultValue="专业的服装制造商，专注于高端男装裤类产品生产" />
</div>
                </div>

                <div>
                  <Label>
{
  language === "zh" ? "SEO关键词" : "SEO Keywords"
}
</Label>
;<Textarea defaultValue="金彭服饰,阳江服装厂,男装制造,正装裤,休闲裤,牛仔裤" rows={3} />
</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label>
{
  language === "zh" ? "联系电话" : "Contact Phone"
}
</Label>
;<Input defaultValue="+86-662-3456789" />
</div>
                  <div>
                    <Label>
{
  language === "zh" ? "联系邮箱" : "Contact Email"
}
</Label>
;<Input defaultValue="sales@jinpeng-garment.com" />
</div>
                </div>

                <Button className="bg-amber-600 hover:bg-amber-700">
                  <Save className="h-4 w-4 mr-2" />
{
  language === "zh" ? "保存设置" : "Save Settings"
}
</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
