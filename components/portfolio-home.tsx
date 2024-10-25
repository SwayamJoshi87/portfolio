'use client'

import Image from "next/image"
import Link from "next/link"
import { Inter } from 'next/font/google'
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

const inter = Inter({ subsets: ['latin'] })

export function PortfolioHome() {
  return (
    <div className={`min-h-screen bg-black text-white ${inter.className}`}>
      <header className="border-b border-zinc-800">
        <nav className="px-6 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-semibold">Swayam Joshi</Link>
          <ul className="hidden md:flex space-x-12">
            <li><Link href="#home" className="text-lg hover:text-red-500 transition-colors">Home</Link></li>
            <li><Link href="#portfolio" className="text-lg hover:text-red-500 transition-colors">Portfolio</Link></li>
            <li><Link href="#services" className="text-lg hover:text-red-500 transition-colors">Services</Link></li>
            <li><Link href="#testimonials" className="text-lg hover:text-red-500 transition-colors">Testimonials</Link></li>
          </ul>
          <Button variant="outline" size="lg" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
            Let&aposs Talk
          </Button>
        </nav>
      </header>
      <main className="px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              I am Swayam Joshi
              <Heart className="inline-block ml-4 text-red-500" />
            </h1>
            <p className="text-2xl text-zinc-400 font-light">A software engineer based in Toronto</p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-red-500 heart-shape"></div>
              <div className="absolute inset-0 heart-shape overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Swayam Joshi"
                  layout="fill"
                  objectFit="cover"
                  className="scale-150 translate-y-1/4"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-zinc-800 mt-16">
        <div className="px-6 py-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-lg mb-4 md:mb-0">© 2023 Swayam Joshi</p>
          <div className="flex space-x-8">
            <Link href="#" className="text-zinc-400 hover:text-red-500 transition-colors text-lg">GitHub</Link>
            <Link href="#" className="text-zinc-400 hover:text-red-500 transition-colors text-lg">LinkedIn</Link>
            <Link href="#" className="text-zinc-400 hover:text-red-500 transition-colors text-lg">Twitter</Link>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .heart-shape {
          width: 100%;
          height: 100%;
          background-color: red;
          clip-path: path('M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z');
        }
      `}</style>
    </div>
  )
}