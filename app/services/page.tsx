import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Truck, Recycle, Clock, BadgeJapaneseYen, ShieldCheck, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "事業内容 | エコリサイクル株式会社",
  description:
    "エコリサイクル株式会社の事業内容をご紹介します。不用品買取、リサイクル販売、産業廃棄物収集運搬など、環境に配慮したサービスを提供しています。",
}

export default function ServicesPage() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <Image
            src="/header.webp"
            alt="事業内容のヘッダー画像"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
          />
        </div>
        <div className="container relative py-24 md:py-28 lg:py-32">
          <div className="mx-auto max-w-[800px] text-center text-white">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">事業内容</h1>
            <p className="mt-4 text-lg text-white/90 sm:text-xl">
              環境に配慮した不用品買取・リサイクルサービスを通じて、
              <br />
              持続可能な社会の実現に貢献します。
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">主要サービス</h2>
            <p className="mt-4 text-muted-foreground">お客様のニーズに合わせた最適なソリューションを提供いたします。</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Truck className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">出張買取サービス</CardTitle>
                <CardDescription>
                  ご自宅や事務所まで専門スタッフが訪問し、その場で査定・買取を行います。
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium">サービス内容：</p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>無料出張査定</li>
                    <li>即日現金買取</li>
                    <li>梱包・運搬サービス</li>
                    <li>大型家具・家電対応</li>
                  </ul>
                </div>
                <Button className="mt-6" variant="outline" asChild>
                  <Link href="/contact">
                    見積もりを依頼する
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Recycle className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">リサイクルショップ運営</CardTitle>
                <CardDescription>買取した商品を適切に整備し、リーズナブルな価格で提供します。</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium">取扱商品：</p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>家具・インテリア</li>
                    <li>家電製品</li>
                    <li>ブランド品</li>
                    <li>事務用品</li>
                  </ul>
                </div>
                <Button className="mt-6" variant="outline" asChild>
                  <Link href="/contact">
                    店舗情報を見る
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <CardTitle className="mt-4">法人向けサービス</CardTitle>
                <CardDescription>オフィス移転や事務所閉鎖に伴う備品の一括買取を承ります。</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium">対応内容：</p>
                  <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                    <li>オフィス家具買取</li>
                    <li>IT機器買取</li>
                    <li>産業廃棄物処理</li>
                    <li>機密文書処理</li>
                  </ul>
                </div>
                <Button className="mt-6" variant="outline" asChild>
                  <Link href="/contact">
                    法人窓口に問い合わせる
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/40 py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">買取の流れ</h2>
            <p className="mt-4 text-muted-foreground">お客様の大切な物を、スムーズに買取させていただきます。</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Clock,
                title: "お問い合わせ",
                description: "フォームまたはお電話で買取のご依頼をいただきます。",
              },
              {
                icon: Truck,
                title: "訪問査定",
                description: "専門スタッフがご自宅まで訪問し、査定を行います。",
              },
              {
                icon: BadgeJapaneseYen,
                title: "買取価格の提示",
                description: "その場で買取価格をご提示いたします。",
              },
              {
                icon: ShieldCheck,
                title: "買取成立・お支払い",
                description: "ご承諾いただけましたら、即日現金でお支払いいたします。",
              },
            ].map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="mt-4">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">対応エリア</h2>
            <p className="mt-4 text-muted-foreground">首都圏を中心に、幅広いエリアで対応しております。</p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>対応地域</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>東京都全域</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>神奈川県全域</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>埼玉県主要地域</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>千葉県主要地域</span>
                  </li>
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">※その他の地域についてもご相談ください。</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>出張費用</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>出張査定は無料です。</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>買取が成立した場合、運搬費用も無料です。</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    <span>キャンセル料は一切いただきません。</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t bg-muted/40 py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px] text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">よくあるご質問</h2>
            <p className="mt-4 text-muted-foreground">お客様からよくいただくご質問をまとめました。</p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              {
                question: "買取までの期間はどのくらいですか？",
                answer:
                  "お問い合わせいただいてから最短で当日の買取も可能です。お客様のご都合に合わせて日程調整させていただきます。",
              },
              {
                question: "現金以外の支払方法は可能ですか？",
                answer: "現金の他、銀行振込でのお支払いも可能です。お客様のご希望に応じて対応させていただきます。",
              },
              {
                question: "買取できない物はありますか？",
                answer:
                  "法令で定められた危険物や違法物、著しく破損・汚損している物などは買取できません。詳しくはお問い合わせください。",
              },
              {
                question: "見積もりは無料ですか？",
                answer: "はい、出張見積もりは完全無料です。キャンセル料も発生いたしません。",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-base">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                お問い合わせ・見積もり依頼
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
