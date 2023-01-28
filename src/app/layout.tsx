import { plex } from '@/app/components/font'
import { AnalyticsWrapper } from '@/app/components/Analytics'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={plex.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
      <AnalyticsWrapper />
    </html>
  )
}
