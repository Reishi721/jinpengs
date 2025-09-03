"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Footer() {
  const partnerLogos = [
    { name: "HLA", logo: "/hla-logo.jpg" },
    { name: "Septwolves", logo: "/septwolves-logo.jpg" },
    { name: "Playboy", logo: "/playboy-logo.jpg" },
    { name: "Bengdishing", logo: "/bengdishing-logo.jpg" },
    { name: "Joeone", logo: "/joeone-logo.jpg" },
    { name: "Qipai", logo: "/qipai-logo.jpg" },
  ]

  return (
    <footer className="bg-muted/50 border-t">
      {/* Partner Logos Strip */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h3 className="text-lg font-semibold mb-4">合作伙伴 | Our Partners</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  width={80}
                  height={40}
                  className="h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image src="/images/logo.png" alt="金彭服饰 Logo" width={32} height={32} className="h-8 w-8" />
                <span className="text-lg font-bold text-primary">金彭服饰</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                阳江市金彭服饰实业有限公司成立于1988年，是一家专业从事高端男装裤类产品生产的领先服装制造商。
              </p>
              <p className="text-xs text-muted-foreground">
                Sun City Jinpeng Clothing Co., Ltd. - Leading garment manufacturer since 1988
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">快速链接</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    关于我们
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                    产品展示
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                    招聘信息
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-muted-foreground hover:text-primary transition-colors">
                    新闻动态
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    联系我们
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">联系信息</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>地址：广东省阳江市江城区金彭工业园</p>
                <p>电话：+86-662-3456789</p>
                <p>邮箱：info@goldpanther.com.cn</p>
                <p>传真：+86-662-3456790</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <p>&copy; 2024 阳江市金彭服饰实业有限公司. 保留所有权利.</p>
                <p className="mt-1">Sun City Jinpeng Clothing Co., Ltd. All rights reserved.</p>
              </div>
              <div className="flex flex-col md:flex-row gap-4 text-xs">
                <Link href="#" className="hover:text-primary transition-colors">
                  粤ICP备2024123456号-1
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  粤公网安备44170202000123号
                </Link>
                <Link href="#" className="hover:text-primary transition-colors">
                  营业执照
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
