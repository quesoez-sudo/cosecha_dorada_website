"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useLenis } from "lenis/react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element && lenis) {
      lenis.scrollTo(element, { offset: -100 })
    }
    setMobileMenuOpen(false)
  }

  const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "El Vino", href: "#producto" },
    { label: "Nuestra Historia", href: "#historia" },
    { label: "Community", href: "#community" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#244A36]/95 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
          <a href="#hero" aria-label="Ir al inicio de Cosecha Dorada">
            <Image
              src="/images/isotipo.png"
              alt="Lulito, isotipo de Cosecha Dorada"
              width={1200}
              height={1200}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item, i) => (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium tracking-wide transition-colors relative ${
                scrolled ? "text-white/80 hover:text-[#F4B83F]" : "text-[#244A36]/80 hover:text-[#244A36]"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#E86A20] origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </motion.button>
          ))}
        </div>

        <motion.a
          href="https://instagram.com/cosechadoradacol"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#E86A20] text-white px-6 py-2.5 rounded-full font-bold text-sm tracking-wide relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          />
          <span className="relative z-10">Pedir en Instagram</span>
        </motion.a>

        <motion.button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className={scrolled ? "text-white" : "text-[#244A36]"} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className={scrolled ? "text-white" : "text-[#244A36]"} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="md:hidden bg-[#244A36]/95 backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-white/80 hover:text-[#F4B83F] text-lg font-medium py-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="https://instagram.com/cosechadoradacol"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#E86A20] text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Pedir en Instagram
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
