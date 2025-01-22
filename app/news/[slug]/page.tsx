import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

interface NewsPageProps {
  params: {
    slug: string
  }
}

// 実際のプロジェクトではデータベースやCMSから取得します
const getNewsArticle = (slug: string) => {
  // ダミーデータ
  return {
    title: "年末年始の営業について",
    date: "2024-01-15",
    content: `
      平素より格別のご高配を賜り、厚く御礼申し上げます。

      誠に勝手ながら、下記の期間を年末年始休業とさせていただきます。

      休業期間：2024年12月30日（月）～2025年1月3日（金）
      営業開始日：2025年1月4日（土）

      なお、休業期間中にいただいたお問い合わせにつきましては、
      営業開始日以降に順次対応させていただきます。

      ご不便をおかけいたしますが、何卒ご理解賜りますようお願い申し上げます。
    `.trim(),
  }
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const article = getNewsArticle(params.slug)
  return {
    title: `${article.title} | エコリサイクル株式会社`,
    description: article.content.slice(0, 100),
  }
}

export default function NewsArticlePage({ params }: NewsPageProps) {
  const article = getNewsArticle(params.slug)

  return (
    <div className="container py-16 md:py-20 lg:py-24">
      <Button variant="ghost" className="mb-8" asChild>
        <Link href="/news">
          <ArrowLeft className="mr-2 h-4 w-4" />
          お知らせ一覧に戻る
        </Link>
      </Button>

      <article className="prose prose-zinc mx-auto max-w-[800px] dark:prose-invert">
        <h1>{article.title}</h1>
        <div className="not-prose">
          <time className="text-sm text-muted-foreground">{article.date}</time>
        </div>
        <div className="mt-8 whitespace-pre-wrap">{article.content}</div>
      </article>
    </div>
  )
}

