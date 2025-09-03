"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
import { Play, Pause } from "lucide-react"

export function HeroSection() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-75"
          onLoadStart={() => setIsPlaying(true)}
        >
          <source src="https://goldpanthers-1377014447.cos.ap-hongkong.myqcloud.com/IMG_5558.webm" type="video/webm" />
        </video>


        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
      </div>

      <button
        onClick={toggleVideo}
        className="absolute top-6 right-6 z-20 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-colors duration-200"
        aria-label={isPlaying ? "暂停视频" : "播放视频"}
      >
        {isPlaying ? <Pause className="h-5 w-5 text-white" /> : <Play className="h-5 w-5 text-white" />}
      </button>

      <motion.div style={{ y, opacity }} className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Logo */}

          {/* Company Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance text-white"
          >
            <span className="text-primary-foreground drop-shadow-lg">金彭服饰</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-white/90 mb-2 drop-shadow"
          >
            阳江市金彭服饰实业有限公司
          </motion.p>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-balance text-white drop-shadow-lg"
          >
            专业服装制造，品质卓越
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg text-white/90 mb-8 max-w-2xl mx-auto text-pretty drop-shadow"
          >
            自1988年以来专注高端男装裤类产品生产，拥有3000+员工，20万平方米现代化生产设施
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 h-auto hover:scale-105 transition-transform duration-200 bg-primary hover:bg-primary/90"
            >
              <Link href="/about">了解更多</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}
