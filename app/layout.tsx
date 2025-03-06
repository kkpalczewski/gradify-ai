import type { Metadata } from 'next'
import './globals.css'
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

export const metadata: Metadata = {
  title: 'Data Science Boutique | Data Strategy | gradify.ai',
  description: 'AI-powered grading and assessment platform',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
