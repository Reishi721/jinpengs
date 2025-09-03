"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, ExternalLink } from "lucide-react"

export function ContactMap() {
  const [mapProvider, setMapProvider] = useState<"baidu" | "google">("baidu")

  const baiduMapUrl =
    "https://map.baidu.com/search/阳江市江城区/@12684736.17,2565476.5,12z?querytype=s&da_src=shareurl&wd=阳江市江城区&c=289&src=0&pn=0&sug=0&l=12&b=(12659736,2540476;12709736,2590476)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D"

  const googleMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.8!2d111.9!3d21.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ4JzAwLjAiTiAxMTHCsDU0JzAwLjAiRQ!5e0!3m2!1sen!2scn!4v1"

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">位置导航</h2>
          <p className="text-lg text-muted-foreground mb-6">欢迎莅临参观指导 / Welcome to visit our facilities</p>

          {/* Map Provider Toggle */}
          <div className="flex justify-center gap-2 mb-6">
            <Button
              variant={mapProvider === "baidu" ? "default" : "outline"}
              size="sm"
              onClick={() => setMapProvider("baidu")}
            >
              百度地图
            </Button>
            <Button
              variant={mapProvider === "google" ? "default" : "outline"}
              size="sm"
              onClick={() => setMapProvider("google")}
            >
              Google Maps
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-background rounded-xl shadow-lg overflow-hidden border">
            {mapProvider === "baidu" ? (
              <div className="relative">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">百度地图</h3>
                      <p className="text-muted-foreground mb-4">点击下方按钮在百度地图中查看详细位置</p>
                      <Button asChild>
                        <a href={baiduMapUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          在百度地图中打开
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Google Maps</h3>
                      <p className="text-muted-foreground mb-4">
                        Click the button below to view detailed location on Google Maps
                      </p>
                      <Button asChild>
                        <a href={googleMapUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Open in Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">阳江总部</h4>
              <p className="text-sm text-muted-foreground">广东省阳江市江城区工业园</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">广州研发中心</h4>
              <p className="text-sm text-muted-foreground">广州市白云区科技园</p>
            </div>
            <div className="bg-background rounded-lg p-6 shadow-sm border text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">新塘生产基地</h4>
              <p className="text-sm text-muted-foreground">广州市增城区新塘镇</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
