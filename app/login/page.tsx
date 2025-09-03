"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Lock, Mail, User, Building } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export default function LoginPage() {
  const { language } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [registerData, setRegisterData] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login:", loginData)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle registration logic here
    console.log("Register:", registerData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-white flex items-center justify-center p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {language === "zh" ? "客户门户" : "Customer Portal"}
          </h1>
          <p className="text-gray-600">
            {language === "zh" ? "登录或注册以访问您的账户" : "Login or register to access your account"}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center">{language === "zh" ? "欢迎回来" : "Welcome Back"}</CardTitle>
            <CardDescription className="text-center">
              {language === "zh" ? "管理您的订单和账户信息" : "Manage your orders and account information"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">{language === "zh" ? "登录" : "Login"}</TabsTrigger>
                <TabsTrigger value="register">{language === "zh" ? "注册" : "Register"}</TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {language === "zh" ? "邮箱地址" : "Email Address"}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      placeholder={language === "zh" ? "请输入邮箱" : "Enter your email"}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="password" className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      {language === "zh" ? "密码" : "Password"}
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        placeholder={language === "zh" ? "请输入密码" : "Enter your password"}
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Link href="/forgot-password" className="text-sm text-amber-600 hover:underline">
                      {language === "zh" ? "忘记密码？" : "Forgot password?"}
                    </Link>
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                    {language === "zh" ? "登录" : "Sign In"}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {language === "zh" ? "公司名称" : "Company"}
                      </Label>
                      <Input
                        id="company"
                        value={registerData.company}
                        onChange={(e) => setRegisterData({ ...registerData, company: e.target.value })}
                        placeholder={language === "zh" ? "公司名称" : "Company name"}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact" className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {language === "zh" ? "联系人" : "Contact"}
                      </Label>
                      <Input
                        id="contact"
                        value={registerData.contact}
                        onChange={(e) => setRegisterData({ ...registerData, contact: e.target.value })}
                        placeholder={language === "zh" ? "联系人姓名" : "Contact name"}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="reg-email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {language === "zh" ? "邮箱地址" : "Email"}
                    </Label>
                    <Input
                      id="reg-email"
                      type="email"
                      value={registerData.email}
                      onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      placeholder={language === "zh" ? "邮箱地址" : "Email address"}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{language === "zh" ? "电话号码" : "Phone"}</Label>
                    <Input
                      id="phone"
                      value={registerData.phone}
                      onChange={(e) => setRegisterData({ ...registerData, phone: e.target.value })}
                      placeholder={language === "zh" ? "电话号码" : "Phone number"}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="reg-password">{language === "zh" ? "密码" : "Password"}</Label>
                    <Input
                      id="reg-password"
                      type="password"
                      value={registerData.password}
                      onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      placeholder={language === "zh" ? "设置密码" : "Set password"}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="confirm-password">{language === "zh" ? "确认密码" : "Confirm Password"}</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={registerData.confirmPassword}
                      onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      placeholder={language === "zh" ? "确认密码" : "Confirm password"}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700">
                    {language === "zh" ? "注册账户" : "Create Account"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-gray-600">
          {language === "zh" ? "需要帮助？" : "Need help?"}{" "}
          <Link href="/contact" className="text-amber-600 hover:underline">
            {language === "zh" ? "联系我们" : "Contact us"}
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
