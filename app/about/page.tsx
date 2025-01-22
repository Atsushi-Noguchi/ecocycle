import type { Metadata } from "next"
import Image from "next/image"
import { Building2, Mail, MapPin, Phone } from "lucide-react"

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "会社概要 | エコリサイクル株式会社",
  description:
    "エコリサイクル株式会社の会社概要をご覧いただけます。環境に配慮した不用品買取・リサイクルサービスを提供しています。",
}

export default function AboutPage() {
  return (
    <>
      <div className="container py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">会社概要</h1>
          <p className="mt-4 text-muted-foreground">
            エコリサイクルは、環境に配慮した不用品買取・リサイクルサービスを提供する企業です。
          </p>
        </div>

        <div className="mt-12">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="w-32 font-medium">社名</TableCell>
                <TableCell>エコリサイクル株式会社</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">設立</TableCell>
                <TableCell>2010年4月1日</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">資本金</TableCell>
                <TableCell>5,000万円</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">代表取締役</TableCell>
                <TableCell>山田 太郎</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">従業員数</TableCell>
                <TableCell>50名（2024年1月現在）</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">事業内容</TableCell>
                <TableCell>
                  <ul className="list-inside list-disc space-y-1">
                    <li>不用品買取事業</li>
                    <li>リサイクル品販売事業</li>
                    <li>産業廃棄物収集運搬事業</li>
                    <li>古物営業</li>
                  </ul>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">許認可</TableCell>
                <TableCell>
                  <ul className="list-inside list-disc space-y-1">
                    <li>産業廃棄物収集運搬業許可：第12345号</li>
                    <li>古物商許可：第67890号</li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                本社
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p>〒100-0001</p>
                  <p>東京都千代田区千代田1-1</p>
                  <p>千代田ビル5階</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p>TEL: 03-1234-5678</p>
                  <p>FAX: 03-1234-5679</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <p>info@example.com</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                横浜営業所
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p>〒231-0001</p>
                  <p>神奈川県横浜市中区新港2-2</p>
                  <p>横浜ビル3階</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Phone className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p>TEL: 045-1234-5678</p>
                  <p>FAX: 045-1234-5679</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Mail className="h-5 w-5 shrink-0 text-muted-foreground" />
                <p>yokohama@example.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <section className="border-t bg-muted/40 py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            <h2 className="text-2xl font-bold sm:text-3xl">企業理念</h2>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-xl font-semibold">ミッション</h3>
                <p className="mt-2 text-muted-foreground">
                  私たちは、循環型社会の実現に貢献し、持続可能な未来を創造します。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">ビジョン</h3>
                <p className="mt-2 text-muted-foreground">
                  2030年までに、日本のリサイクル率向上に貢献する、業界をリードする企業となります。
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">バリュー</h3>
                <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>誠実</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        お客様との信頼関係を大切にし、常に誠実な対応を心がけます。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>革新</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        新しい技術やアイデアを積極的に取り入れ、サービスの向上に努めます。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>環境</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        環境負荷の低減を常に意識し、持続可能な事業活動を推進します。
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>共生</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        地域社会との共生を図り、共に発展することを目指します。
                      </p>
                    </CardContent>
                  </Card>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            <h2 className="text-2xl font-bold sm:text-3xl">アクセス</h2>
            <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.827853398575!2d139.7538444152588!3d35.68562318019425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188be0e9221f2d%3A0x1f32c1b7f1f8f3f4!2z5pel5pys44CB5LiD5pel5pys!5e0!3m2!1sja!2sjp!4v1715580000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
