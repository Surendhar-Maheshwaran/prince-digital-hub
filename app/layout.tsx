import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prince Digital Hub - Innovative Software Solutions",
  description:
    "Leading software development company specializing in cutting-edge digital solutions, web applications, and innovative technology services.",
  keywords: "software development, web applications, digital solutions, technology services, Prince Digital Hub",
  authors: [{ name: "Prince Digital Hub" }],
  openGraph: {
    title: "Prince Digital Hub - Innovative Software Solutions",
    description: "Leading software development company specializing in cutting-edge digital solutions.",
    url: "https://princedigitalhub.com",
    siteName: "Prince Digital Hub",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Prince Digital Hub Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Digital Hub - Innovative Software Solutions",
    description: "Leading software development company specializing in cutting-edge digital solutions.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
