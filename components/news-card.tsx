import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface NewsCardProps {
  title: string
  date: string
  excerpt: string
  slug: string
}

export function NewsCard({ title, date, excerpt, slug }: NewsCardProps) {
  return (
    <Card className="group transition-colors hover:border-primary">
      <Link href={`/news/${slug}`}>
        <CardHeader>
          <CardTitle className="group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{excerpt}</p>
        </CardContent>
      </Link>
    </Card>
  )
}

