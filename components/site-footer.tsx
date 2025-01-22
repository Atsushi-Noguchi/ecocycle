import Link from "next/link"
import { Mountain } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6" />
              <span className="text-xl font-bold">エコリサイクル</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              環境に優しい不用品買取・リサイクルサービスを提供しています。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">サイトマップ</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-foreground">
                  事業内容
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">お問い合わせ</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">
                〒100-0001
                <br />
                東京都千代田区千代田1-1
              </li>
              <li className="text-muted-foreground">TEL: 03-1234-5678</li>
              <li className="text-muted-foreground">FAX: 03-1234-5679</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">営業時間</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="text-muted-foreground">平日: 9:00 - 18:00</li>
              <li className="text-muted-foreground">土曜: 10:00 - 17:00</li>
              <li className="text-muted-foreground">日祝: 休業</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} エコリサイクル株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

