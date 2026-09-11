"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

const footerLinks = [
  {
    title: "El Vino",
    links: [{ label: "Vino de Lulo", href: "#producto" }],
  },
  {
    title: "Navegar",
    links: [
      { label: "Inicio", href: "#hero" },
      { label: "El Vino", href: "#producto" },
      { label: "Nuestra Historia", href: "#historia" },
      { label: "Community", href: "#community" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "Instagram", href: "https://instagram.com/cosechadoradacol" },
      { label: "Correo", href: "mailto:cosechadorada25@gmail.com" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Política de Privacidad", href: "/politica-de-privacidad" }],
  },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })

  const handleSubmit = () => {
    if (!email) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <footer ref={footerRef} id="contacto" className="relative bg-[#244A36] pt-16 pb-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Big headline */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-display text-white tracking-[-0.05em] leading-[0.9] overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              UNA HISTORIA
            </motion.span>
            <motion.span
              className="block text-[#F4B83F]"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.1 }}
            >
              DIFERENTE
            </motion.span>
          </h2>
          <motion.p
            className="mt-0.5 text-white/40 font-mono text-xs tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            EN CADA BOTELLA
          </motion.p>
        </motion.div>

        {/* Newsletter — lead gen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-12"
        >
          {submitted ? (
            <motion.p
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center text-[#F4B83F] font-mono text-sm"
            >
              ¡Bienvenido a la comunidad! Tu 10% llega pronto 🍷
            </motion.p>
          ) : (
            <>
              <div className="text-center mb-4">
                <p className="text-2xl md:text-3xl font-display text-[#F4B83F] tracking-[-0.03em] leading-tight">
                  10% DE DESCUENTO
                </p>
                <p className="text-white/70 font-sans text-sm mt-0.5">en tu primer pedido</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="flex-1 bg-white/5 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 font-mono text-sm focus:outline-none focus:border-[#F4B83F] transition-all duration-300"
                />
                <motion.button
                  className="bg-[#F4B83F] text-[#244A36] px-6 py-3 rounded-xl font-bold text-sm tracking-wide whitespace-nowrap relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={handleSubmit}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.span
                    className="relative z-10"
                    animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 0.5, repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0 }}
                  >
                    {isSubmitting ? "Uniéndote..." : "Quiero mi descuento"}
                  </motion.span>
                </motion.button>
              </div>
              <p className="text-white/30 font-mono text-xs mt-2 text-center">
                Novedades y eventos exclusivos de la comunidad.
              </p>
            </>
          )}
        </motion.div>

        {/* Brand blurb */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 font-mono text-xs max-w-xl mx-auto leading-relaxed">
            Cosecha Dorada es un vino de frutas tropicales colombianas, elaborado artesanalmente con lulo fresco.
            Creado para quienes se atreven a probar lo distinto.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <motion.a
              href="https://instagram.com/cosechadoradacol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#F4B83F] transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Instagram className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="mailto:cosechadorada25@gmail.com"
              className="text-white/40 hover:text-[#F4B83F] transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>

        {/* Links grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h4 className="font-bold text-white text-sm mb-3">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item.label}>
                    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                      <Link
                        href={item.href}
                        target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-white/60 hover:text-[#F4B83F] font-mono text-xs transition-colors inline-block"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
            <BrandLogo inverse className="scale-75 origin-left" />
          </motion.div>

          <p className="text-white/40 font-mono text-xs">© 2025 Cosecha Dorada. Todos los derechos reservados.</p>

          <p className="text-white/50 font-mono text-xs text-center">Consume responsablemente. Prohibida la venta a menores de 18 años.</p>
        </motion.div>
      </div>

      {/* Watermark */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8rem] md:text-[16rem] font-display font-black text-white/[0.02] pointer-events-none select-none leading-none whitespace-nowrap"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        COSECHA DORADA
      </motion.div>
    </footer>
  )
}
