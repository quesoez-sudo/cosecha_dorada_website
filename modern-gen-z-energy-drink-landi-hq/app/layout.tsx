import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const bowlbyOne = localFont({
  src: "./fonts/BowlbyOneSC-Regular.ttf",
  variable: "--font-bowlby",
})

const barlowCondensed = localFont({
  src: [
    { path: "./fonts/BarlowCondensed-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/BarlowCondensed-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/BarlowCondensed-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/BarlowCondensed-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/BarlowCondensed-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Cosecha Dorada | Lo Inesperado Sabe Mejor",
  description: "Vino artesanal de frutas tropicales colombianas. Elaborado con lulo 100% colombiano. Solo para mayores de 18 años.",
  keywords: ["vino", "lulo", "colombia", "artesanal", "cosecha dorada", "vino de frutas tropicales"],
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#244A36",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${bowlbyOne.variable} ${barlowCondensed.variable} font-sans antialiased`}>
        <ClickSpark sparkColor="#F4B83F" sparkSize={12} sparkRadius={20} sparkCount={8} duration={400} easing="ease-out">
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>
        <Analytics />
      </body>
    </html>
  )
}
