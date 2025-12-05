import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Teasy Gift Box - Hediye Kutusu Çeşitleri & Özel Hediye Kutuları',
  description: 'Sevdiklerinize eşsiz ve yaratıcı hediye kutuları ile unutulmaz anlar yaşatın! En çok tercih edilen Hediye kutusu çeşitlerini keşfedin!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}

