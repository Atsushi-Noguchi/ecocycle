import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Recycle, Timer, Truck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <>
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/header.jpg"
            alt="リサイクルセンターの外観"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container">
          <div className="mx-auto max-w-2xl space-y-6 text-center">
            <h1 className="text-5xl font-bold font-serif sm:text-6xl md:text-7xl text-white">
              エコリサイクルで<br />
              新しい価値を
            </h1>
            <p className="mx-auto max-w-xl text-xl font-medium text-white/90">
              不用品買取からリサイクルまで、<br />
              環境に優しい循環型社会を実現します
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">選ばれる理由</h2>
            <p className="mt-4 text-muted-foreground">エコリサイクルが多くのお客様に選ばれている理由をご紹介します。</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Timer,
                title: "迅速な対応",
                description: "お問い合わせから24時間以内に担当者が丁寧にご対応いたします。",
                image: "/customer-service.jpg",
                alt: "カスタマーサービススタッフ",
              },
              {
                icon: CheckCircle2,
                title: "確かな査定",
                description: "経験豊富なスタッフが、適切な価格で査定いたします。",
                image: "/31183591_m.jpg",
                alt: "査定作業の様子",
              },
              {
                icon: Truck,
                title: "無料回収",
                description: "買取が成立した場合、回収・運搬費用は一切かかりません。",
                image: "/25058951_s.jpg",
                alt: "回収トラック",
              },
              {
                icon: Recycle,
                title: "環境配慮",
                description: "買い取った商品は可能な限りリサイクル・リユースいたします。",
                image: "/31364879_s.jpg",
                alt: "リサイクル作業の様子",
              },
            ].map((feature) => (
              <Card key={feature.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={feature.image} alt={feature.alt} fill className="object-cover" />
                </div>
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary" />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 買取品目セクション */}
      <section className="border-t bg-muted/40 py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">買取品目</h2>
            <p className="mt-4 text-muted-foreground">
              幅広い品目の買取に対応しています。まずはお気軽にご相談ください。
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "家具・インテリア",
                items: ["ソファー", "テーブル", "椅子", "食器棚", "照明器具"],
                image: "/furniture.jpg",
                alt: "家具の買取例",
              },
              {
                title: "家電製品",
                items: ["テレビ", "冷蔵庫", "洗濯機", "エアコン", "電子レンジ"],
                image: "/appliances.jpg",
                alt: "家電製品の買取例",
              },
              {
                title: "事務用品",
                items: ["デスク", "オフィスチェア", "キャビネット", "複合機", "シュレッダー"],
                image: "/office.jpg",
                alt: "オフィス家具の買取例",
              },
              {
                title: "電化製品",
                items: ["パソコン", "タブレット", "スマートフォン", "オーディオ機器", "カメラ"],
                image: "/electronics.jpg",
                alt: "電化製品の買取例",
              },
              {
                title: "スポーツ・レジャー用品",
                items: ["ゴルフ用品", "フィットネス機器", "キャンプ用品", "自転車", "釣具"],
                image: "/sports.jpg",
                alt: "スポーツ用品の買取例",
              },
              {
                title: "その他",
                items: ["楽器", "ブランド品", "貴金属", "アンティーク", "骨董品"],
                image: "/others.jpg",
                alt: "その他の買取品目例",
              },
            ].map((category) => (
              <Card key={category.title} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={category.image} alt={category.alt} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/services">すべての買取品目を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 他のセクションは変更なし */}
    </>
  )
}
