import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Beauty Device', description: '美容機器・美顔器情報' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}