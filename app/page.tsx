"use client"

import { useEffect, useState } from "react"
import CountdownTimer from "@/components/countdown-timer"
import Footer from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/background.png)",
        }}
      />

      <div className="absolute inset-0 bg-black opacity-60" />

      {/* Content container */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        {/* Fade-in animation wrapper */}
        <div className="animate-fade-in w-full flex flex-col items-center justify-center flex-1">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white text-center mb-8 md:mb-16 tracking-wider animate-fade-in"
            style={{ animationDelay: "0.2s", fontFamily: "var(--font-heading)" }}
          >
            World End Counter
          </h1>

          {/* Countdown timer */}
          <CountdownTimer />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}
