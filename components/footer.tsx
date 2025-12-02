import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-6 md:py-8 px-4 border-t border-cyan-400 border-opacity-30 bg-black bg-opacity-20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Main footer content */}
        <div className="flex flex-col items-center gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          {/* Credit text */}
          <p className="text-center text-sm md:text-base text-gray-300">
            Made with <span className="text-red-500">💀 fear</span> by{" "}
            <span className="font-semibold text-cyan-300">Touseef Ahmad</span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 md:gap-8">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-sm">LinkedIn</span>
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-sm">GitHub</span>
            </Link>

            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm md:text-base font-medium group"
              aria-label="Contribute on GitHub"
            >
              Contribute <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
