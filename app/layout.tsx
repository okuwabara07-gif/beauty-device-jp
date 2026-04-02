import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: '美容機器Lab',
  description: '美容機器・美顔器の比較レビュー',
  keywords: '美容機器Lab,美容機器・美顔器の比較レビュー',
  openGraph: {
    title: '美容機器Lab',
    description: '美容機器・美顔器の比較レビュー',
    type: 'website',
    locale: 'ja_JP',
    siteName: '美容機器Lab',
  },
  twitter: {
    card: 'summary_large_image',
    title: '美容機器Lab',
    description: '美容機器・美顔器の比較レビュー',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
