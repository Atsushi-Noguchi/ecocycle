import type { Metadata } from "next"
import { NewsCard } from "@/components/news-card"

export const metadata: Metadata = {
  title: "お知らせ | エコリサイクル株式会社",
  description: "エコリサイクルからの最新のお知らせをご覧いただけます。",
}

// 実際のプロジェクトではデータベースやCMSから取得します
const news = [
  {
    title: "年末年始の営業について",
    date: "2024-01-15",
    excerpt:
      "年末年始の営業時間および休業日について、ご案内いたします。誠に勝手ながら、2024年12月30日から2025年1月3日まで休業とさせていただきます。",
    slug: "2024-holiday-schedule",
  },
  {
    title: "新サービス「即日現金化」開始のお知らせ",
    date: "2024-01-10",
    excerpt:
      "買取品の査定後、即日での現金でのお支払いサービスを開始いたしました。お客様のご要望にお応えし、より迅速なサービスを提供いたします。",
    slug: "same-day-payment-service",
  },
  {
    title: "買取価格改定のお知らせ",
    date: "2024-01-05",
    excerpt:
      "一部商品の買取価格を改定いたしましたので、お知らせいたします。市場価格の変動に伴い、より適切な価格での買取を実施いたします。",
    slug: "price-revision",
  },
  {
    title: "新規スタッフ募集のお知らせ",
    date: "2024-01-01",
    excerpt: "事業拡大に伴い、新規スタッフを募集いたします。経験者優遇、未経験者も歓迎いたします。",
    slug: "staff-recruitment",
  },
  {
    title: "新事務所開設のお知らせ",
    date: "2023-12-25",
    excerpt: "この度、東京都新宿区に新事務所を開設することとなりましたので、お知らせいたします。",
    slug: "new-office",
  },
  {
    title: "年末特別買取キャンペーンのお知らせ",
    date: "2023-12-20",
    excerpt:
      "年末の大掃除に合わせて、特別買取キャンペーンを実施いたします。期間中は買取価格を最大30%上乗せいたします。",
    slug: "year-end-campaign",
  },
  {
    title: "サービス地域拡大のお知らせ",
    date: "2023-12-15",
    excerpt: "この度、サービス提供地域を神奈川県全域に拡大いたしましたので、お知らせいたします。",
    slug: "service-area-expansion",
  },
  {
    title: "プライバシーポリシー改定のお知らせ",
    date: "2023-12-10",
    excerpt: "個人情報保護方針を改定いたしましたので、お知らせいたします。改定内容をご確認ください。",
    slug: "privacy-policy-update",
  },
  {
    title: "冬季休業のお知らせ",
    date: "2023-12-05",
    excerpt: "誠に勝手ながら、12月29日から1月3日まで冬季休業とさせていただきます。",
    slug: "winter-holiday",
  },
]

export default function NewsPage() {
  return (
    <div className="container py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">お知らせ</h1>
        <p className="mt-4 text-muted-foreground">エコリサイクルからの最新のお知らせをご覧いただけます。</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item) => (
          <NewsCard key={item.slug} title={item.title} date={item.date} excerpt={item.excerpt} slug={item.slug} />
        ))}
      </div>

      {/* ページネーション（必要に応じて実装） */}
      {/* <div className="mt-12 flex justify-center">
        <Pagination />
      </div> */}
    </div>
  )
}

