import type { Metadata } from "next"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "お問い合わせ | エコリサイクル株式会社",
  description:
    "エコリサイクル株式会社へのお問い合わせはこちらから。不用品買取・リサイクルに関するご質問やご相談を承ります。",
}

export default function ContactPage() {
  return (
    <>
      <div className="container py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">お問い合わせ</h1>
          <p className="mt-4 text-muted-foreground">
            不用品買取・リサイクルに関するご質問やご相談を承ります。 お気軽にお問い合わせください。
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <CardTitle>お電話でのお問い合わせ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">03-1234-5678</p>
                <p className="mt-2 text-sm text-muted-foreground">受付時間: 平日 9:00-18:00</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <CardTitle>メールでのお問い合わせ</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-mono">info@example.com</p>
                <p className="mt-2 text-sm text-muted-foreground">24時間受付中</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>所在地</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>〒100-0001</p>
                <p>東京都千代田区千代田1-1</p>
                <p>千代田ビル5階</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <CardTitle>営業時間</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>平日</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>土曜</span>
                    <span>10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>日祝</span>
                    <span>休業</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
              <CardDescription>下記フォームに必要事項をご入力の上、送信ボタンをクリックしてください。</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>

    </>
  )
}
