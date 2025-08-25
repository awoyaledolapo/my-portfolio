"use client"

import {useEffect, useState} from "react"
import Link from "next/link"
import { Silkscreen } from "next/font/google"
import Image from "next/image"
import { Menu, X } from "lucide-react" 
import img from "@/public/logo.webp"

const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
})

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between  md:px-20 py-4 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
   
      <Link
        href="/"
        className={`${silkscreen.className} text-3xl font-normal text-black`}
      >
        <Image src={img} alt="Logo" width={84} height={24} />
      </Link>

     
      <div className="hidden md:flex gap-6">
        <Link
          href="/"
          className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-[#176199] to-black animate-shine 
             hover:text-[#176199] transition
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#176199] after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-1/2"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-[#176199] to-black animate-shine 
             hover:text-[#176199] transition
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#176199] after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-1/2"
        >
          About
        </Link>
         <Link
            href="#project"
         
            className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-[#176199] to-black animate-shine 
             hover:text-[#176199] transition
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#176199] after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-1/2"
          >
            Project
          </Link>
        <Link
          href="#contact"
          className="relative font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-black via-[#176199] to-black animate-shine 
             hover:text-[#176199] transition
             after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#176199] after:transition-all after:duration-300 after:-translate-x-1/2
             hover:after:w-1/2"
        >
          Contact
        </Link>
      </div>

     
      <button
        className="md:hidden text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/90 backdrop-blur-md shadow-md flex flex-col items-center py-6 gap-4 md:hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="font-bold text-lg text-[#176199]"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="font-bold text-lg text-[#176199]"
          >
            About
          </Link>
           <Link
            href="#project"
            onClick={() => setIsOpen(false)}
            className="font-bold text-lg text-[#176199]"
          >
            Project
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="font-bold text-lg text-[#176199]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Nav
