"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import type { Product } from "./products-grid"
import { Eye, Palette, Shirt } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {product.isNew && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">新品 / New</Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick View Button */}
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size="sm"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
              <Eye className="h-4 w-4 mr-2" />
              快速查看
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl">{product.name}</DialogTitle>
              <DialogDescription>{product.nameEn}</DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Shirt className="h-4 w-4" />
                    产品特点
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, index) => (
                      <Badge key={index} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Palette className="h-4 w-4" />
                    可选颜色
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <Badge key={index} variant="outline">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full">联系咨询 / Contact for Details</Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <CardHeader>
        <CardTitle className="text-lg group-hover:text-primary transition-colors">{product.name}</CardTitle>
        <CardDescription className="text-sm">{product.nameEn}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{product.description}</p>

        <div className="flex flex-wrap gap-1">
          {product.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {feature}
            </Badge>
          ))}
          {product.features.length > 2 && (
            <Badge variant="outline" className="text-xs">
              +{product.features.length - 2}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-sm text-muted-foreground">面料: {product.fabric}</div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm">
                查看详情
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl">{product.name}</DialogTitle>
                <DialogDescription>{product.nameEn}</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Shirt className="h-4 w-4" />
                      产品特点
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, index) => (
                        <Badge key={index} variant="secondary">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Palette className="h-4 w-4" />
                      可选颜色
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color, index) => (
                        <Badge key={index} variant="outline">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button className="w-full">联系咨询 / Contact for Details</Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}
