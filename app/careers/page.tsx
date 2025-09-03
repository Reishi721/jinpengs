"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Users, Briefcase, GraduationCap, Heart } from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "服装设计师",
    titleEn: "Fashion Designer",
    department: "设计部",
    departmentEn: "Design Department",
    location: "阳江市",
    locationEn: "Yangjiang City",
    type: "全职",
    typeEn: "Full-time",
    experience: "3-5年",
    experienceEn: "3-5 years",
    description: "负责男装设计，包括正装裤、休闲裤等产品线的设计开发工作。",
    descriptionEn: "Responsible for menswear design, including formal pants, casual pants and other product lines.",
    requirements: [
      "服装设计相关专业本科以上学历",
      "3年以上男装设计经验",
      "熟练使用AI、PS等设计软件",
      "对时尚趋势敏感，有创新思维",
    ],
    requirementsEn: [
      "Bachelor's degree or above in fashion design",
      "3+ years of menswear design experience",
      "Proficient in AI, PS and other design software",
      "Fashion trend sensitive with innovative thinking",
    ],
  },
  {
    id: 2,
    title: "生产主管",
    titleEn: "Production Supervisor",
    department: "生产部",
    departmentEn: "Production Department",
    location: "阳江市",
    locationEn: "Yangjiang City",
    type: "全职",
    typeEn: "Full-time",
    experience: "5-8年",
    experienceEn: "5-8 years",
    description: "负责生产线管理，确保产品质量和交期，优化生产流程。",
    descriptionEn: "Manage production lines, ensure product quality and delivery, optimize production processes.",
    requirements: ["纺织工程或相关专业", "5年以上服装生产管理经验", "熟悉精益生产管理", "具备团队管理能力"],
    requirementsEn: [
      "Textile engineering or related major",
      "5+ years garment production management experience",
      "Familiar with lean production management",
      "Team management capabilities",
    ],
  },
  {
    id: 3,
    title: "质量检验员",
    titleEn: "Quality Inspector",
    department: "质检部",
    departmentEn: "Quality Department",
    location: "阳江市",
    locationEn: "Yangjiang City",
    type: "全职",
    typeEn: "Full-time",
    experience: "2-3年",
    experienceEn: "2-3 years",
    description: "负责产品质量检验，确保出厂产品符合质量标准。",
    descriptionEn: "Responsible for product quality inspection, ensure products meet quality standards.",
    requirements: ["纺织或相关专业大专以上学历", "2年以上服装质检经验", "熟悉服装质量标准", "工作细致认真，责任心强"],
    requirementsEn: [
      "College degree or above in textile or related field",
      "2+ years garment quality inspection experience",
      "Familiar with garment quality standards",
      "Detail-oriented with strong sense of responsibility",
    ],
  },
]

const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "完善福利",
    titleEn: "Comprehensive Benefits",
    description: "五险一金、带薪年假、节日福利",
    descriptionEn: "Social insurance, paid annual leave, holiday benefits",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "培训发展",
    titleEn: "Training & Development",
    description: "完善的培训体系，广阔的发展空间",
    descriptionEn: "Comprehensive training system, broad development opportunities",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "团队氛围",
    titleEn: "Team Environment",
    description: "和谐的工作环境，优秀的团队文化",
    descriptionEn: "Harmonious work environment, excellent team culture",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Header Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">加入金彭服饰</h1>
            <p className="text-xl text-muted-foreground mb-4">Join GOLDPANTHER</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我们致力于为每一位员工提供发展平台，共同创造服装行业的美好未来。
            </p>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto mt-2">
              We are committed to providing development opportunities for every employee to create a bright future in
              the garment industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">员工福利</h2>
            <p className="text-muted-foreground">Employee Benefits</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{benefit.titleEn}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{benefit.description}</p>
                    <p className="text-sm text-muted-foreground">{benefit.descriptionEn}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">招聘职位</h2>
            <p className="text-muted-foreground">Current Openings</p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-primary mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base font-medium">{job.titleEn}</CardDescription>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {job.department}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">职位描述 / Job Description</h4>
                        <p className="text-muted-foreground mb-2">{job.description}</p>
                        <p className="text-sm text-muted-foreground">{job.descriptionEn}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">任职要求 / Requirements</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-4 border-t">
                      <div className="text-sm text-muted-foreground">
                        经验要求: {job.experience} / Experience: {job.experienceEn}
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">申请职位 / Apply Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-primary mb-6">联系我们</h2>
            <p className="text-muted-foreground mb-2">Contact HR Department</p>
            <div className="bg-muted/30 rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-lg mb-4">
                <strong>人事部联系方式 / HR Contact:</strong>
              </p>
              <p className="text-muted-foreground mb-2">电话 / Phone: +86-662-3456789</p>
              <p className="text-muted-foreground mb-2">邮箱 / Email: hr@goldpanther.com.cn</p>
              <p className="text-muted-foreground">地址 / Address: 广东省阳江市江城区金彭工业园</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
