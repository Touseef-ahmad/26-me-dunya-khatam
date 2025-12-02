import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({ weight: ["700", "800"], subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for social sharing with custom title, description, and OG image
export const metadata: Metadata = {
  title: "2026 me dunya khatam ha",
  description: "Countdown to 2026 - World End Counter",
  generator: "v0.app",
  openGraph: {
    title: "2026 me dunya khatam ha",
    description: "Countdown to 2026 - World End Counter",
    url: "https://worldendcount.com",
    type: "website",
    images: [
      {
        url: "/background.png",
        width: 1200,
        height: 630,
        alt: "2026 me dunya khatam ha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2026 me dunya khatam ha",
    description: "Countdown to 2026 - World End Counter",
    images: ["/background.png"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/background.png" />
        <meta name="twitter:image" content="/background.png" />
      </head>
      <body
        className={`font-sans antialiased`}
        style={{ "--font-heading": poppins.style.fontFamily } as React.CSSProperties}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
