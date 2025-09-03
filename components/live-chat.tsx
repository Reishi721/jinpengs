"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

interface Message {
  id: string
  text: string
  sender: "user" | "agent"
  timestamp: Date
}

const quickReplies = [
  { id: "quote", text: { zh: "获取报价", en: "Get Quote" } },
  { id: "samples", text: { zh: "申请样品", en: "Request Samples" } },
  { id: "delivery", text: { zh: "交货时间", en: "Delivery Time" } },
  { id: "minimum", text: { zh: "最小订量", en: "Minimum Order" } },
]

export function LiveChat() {
  const { language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text:
        language === "zh"
          ? "您好！我是金彭服饰的客服代表。有什么可以帮助您的吗？"
          : "Hello! I'm a customer service representative from Jinpeng Garment. How can I help you?",
      sender: "agent",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isOnline, setIsOnline] = useState(true)

  // Simulate agent responses
  const sendAgentResponse = (userMessage: string) => {
    setIsTyping(true)

    setTimeout(() => {
      let response = ""

      if (userMessage.toLowerCase().includes("quote") || userMessage.includes("报价")) {
        response =
          language === "zh"
            ? "我很乐意为您提供报价！请告诉我您需要的产品类型、数量和具体要求，我会尽快为您准备详细报价。"
            : "I'd be happy to provide you with a quote! Please tell me the product type, quantity, and specific requirements, and I'll prepare a detailed quote for you."
      } else if (userMessage.toLowerCase().includes("sample") || userMessage.includes("样品")) {
        response =
          language === "zh"
            ? "我们提供免费样品服务！通常样品制作需要3-5个工作日，国际快递需要额外3-7天。请提供您的详细地址。"
            : "We offer free sample service! Sample production usually takes 3-5 business days, plus 3-7 days for international express delivery. Please provide your detailed address."
      } else if (userMessage.toLowerCase().includes("delivery") || userMessage.includes("交货")) {
        response =
          language === "zh"
            ? "我们的标准交货时间是15-25个工作日，具体取决于订单数量和产品复杂度。紧急订单可以安排加急生产。"
            : "Our standard delivery time is 15-25 business days, depending on order quantity and product complexity. Rush orders can be arranged for expedited production."
      } else if (userMessage.toLowerCase().includes("minimum") || userMessage.includes("最小")) {
        response =
          language === "zh"
            ? "我们的最小起订量是500件每款每色。对于新客户，我们也可以接受较小的试订单。"
            : "Our minimum order quantity is 500 pieces per style per color. For new customers, we can also accept smaller trial orders."
      } else {
        response =
          language === "zh"
            ? "感谢您的咨询！我已经记录了您的问题，我们的专业团队会尽快为您提供详细解答。您还有其他问题吗？"
            : "Thank you for your inquiry! I've recorded your question and our professional team will provide you with a detailed answer soon. Do you have any other questions?"
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: response,
          sender: "agent",
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 1500)
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newMessage])
    sendAgentResponse(inputValue)
    setInputValue("")
  }

  const handleQuickReply = (replyId: string) => {
    const reply = quickReplies.find((r) => r.id === replyId)
    if (reply) {
      setInputValue(reply.text[language])
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-amber-600 hover:bg-amber-700 shadow-lg"
          size="lg"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-6 w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-6 w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>

        {/* Notification Badge */}
        {!isOpen && (
          <motion.div
            className="absolute -top-2 -right-2 h-6 w-6 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3 }}
          >
            <span className="text-white text-xs font-bold">1</span>
          </motion.div>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-80 h-96"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="h-full flex flex-col shadow-2xl">
              <CardHeader className="bg-amber-600 text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-between text-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-green-400" : "bg-gray-400"}`} />
                      <span>{language === "zh" ? "在线客服" : "Live Support"}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-amber-500 text-white border-0">
                      {language === "zh" ? "在线" : "Online"}
                    </Badge>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-amber-100">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{language === "zh" ? "通常1分钟内回复" : "Usually replies in 1 min"}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col p-0">
                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.sender === "user" ? "bg-amber-600 text-white" : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className={`text-xs mt-1 ${message.sender === "user" ? "text-amber-100" : "text-gray-500"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-gray-100 p-3 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.1s" }}
                          />
                          <div
                            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                            style={{ animationDelay: "0.2s" }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Quick Replies */}
                <div className="p-3 border-t bg-gray-50">
                  <p className="text-xs text-gray-600 mb-2">{language === "zh" ? "快速回复:" : "Quick replies:"}</p>
                  <div className="flex flex-wrap gap-1">
                    {quickReplies.map((reply) => (
                      <Button
                        key={reply.id}
                        variant="outline"
                        size="sm"
                        className="text-xs h-6 bg-transparent"
                        onClick={() => handleQuickReply(reply.id)}
                      >
                        {reply.text[language]}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-3 border-t">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={language === "zh" ? "输入消息..." : "Type a message..."}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="sm" className="bg-amber-600 hover:bg-amber-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        <span>+86-662-3456789</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        <span>sales@jinpeng.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
