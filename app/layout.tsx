import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cephas Tsatsu | teckGenius - Software Engineer & Creative Problem Solver",
  description:
    "Portfolio of Cephas Tsatsu (teckGenius) - Software Engineer, Trainer, and Creative Problem Solver specializing in web development, technical training, and innovative solutions.",
  keywords: "Cephas Tsatsu, teckGenius, Software Engineer, Web Developer, Ghana, Technical Trainer, Video Editor",
  authors: [{ name: "Cephas Tsatsu" }],
  creator: "Cephas Tsatsu",
  openGraph: {
    title: "Cephas Tsatsu | teckGenius - Software Engineer",
    description:
      "Portfolio showcasing innovative web development projects, technical training expertise, and creative problem-solving solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cephas Tsatsu | teckGenius",
    description: "Software Engineer & Creative Problem Solver",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
