"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const badges = ["Artesanal", "100% Colombiano", "Sin Aditivos", "10% Vol"]

export function FlavorCarousel() {
  const productoRef = useRef(null)
  const historiaRef = useRef(null)
  const productoInView = useInView(productoRef, { once: true, margin: "-100px" })
  const historiaInView = useInView(historiaRef, { once: true, margin: "-100px" })

  return (
    <>
      {/* Product Showcase */}
      <section id="producto" className="relative py-20 bg-[#244A36] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#244A36] via-[#173A2A] to-[#244A36]" />

        <div ref={productoRef} className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div className="text-center mb-12" initial={{ opacity: 0 }} animate={productoInView ? { opacity: 1 } : {}}>
            <motion.span
              className="inline-block font-mono text-[#F4B83F] text-[10px] tracking-[0.3em] uppercase"
              initial={{ opacity: 0, y: 10 }}
              animate={productoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Nuestro Vino
            </motion.span>
            <div className="overflow-hidden mt-2">
              <motion.h2
                className="text-3xl md:text-4xl font-display text-white tracking-[-0.04em]"
                initial={{ y: 60 }}
                animate={productoInView ? { y: 0 } : { y: 60 }}
                transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.15 }}
              >
                Una botella. Una historia.
              </motion.h2>
            </div>
            <motion.div
              className="h-[2px] w-12 bg-[#F4B83F] mx-auto mt-3 rounded-full"
              initial={{ scaleX: 0 }}
              animate={productoInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
            {/* Bottle image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={productoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-[#F4B83F]/20 blur-[80px] rounded-full scale-75"
                  animate={{ scale: [0.75, 0.9, 0.75], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />
                <motion.div
                  animate={{ y: [0, -12, 0], rotate: [0, 1.5, 0] }}
                  transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/drink1.png"
                    alt="Cosecha Dorada - Vino de Lulo"
                    width={343}
                    height={1604}
                    className="relative z-10 drop-shadow-2xl w-auto h-[clamp(20rem,50vh,30rem)] max-w-[80vw]"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Product details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={productoInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <motion.p
                  className="text-[#F4B83F] font-mono text-xs tracking-widest uppercase mb-3"
                  initial={{ opacity: 0 }}
                  animate={productoInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Lo Inesperado
                </motion.p>
                <h2 className="text-5xl md:text-6xl font-display text-white tracking-[-0.05em] leading-none">
                  VINO DE
                  <br />
                  <span className="text-[#F4B83F]">LULO</span>
                </h2>
              </div>

              <p className="text-white/60 font-sans text-base leading-relaxed max-w-md">
                Fresco, ácido, tropical. Un carácter inesperado que rompe con lo tradicional del vino. Elaborado con
                lulo 100% colombiano, fermentado artesanalmente con amor y ciencia.
              </p>

              <div className="flex flex-wrap gap-2">
                {badges.map((badge, i) => (
                  <motion.span
                    key={badge}
                    className="px-3 py-1 bg-[#F4B83F]/10 border border-[#F4B83F]/30 text-[#F4B83F] text-xs font-mono tracking-wider rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={productoInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {badge}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href="https://instagram.com/cosechadoradacol"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E86A20] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ opacity: 0, y: 20 }}
                animate={productoInView ? { opacity: 1, y: 0 } : {}}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10">Pedir en Instagram</span>
                <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founders Story */}
      <section id="historia" className="relative py-24 bg-[#F6EBCF] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6EBCF] via-[#F4B83F]/8 to-[#F6EBCF]" />

        <div ref={historiaRef} className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.span
            className="inline-block font-mono text-[#E86A20] text-sm tracking-[0.3em] uppercase mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={historiaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            Nuestra Historia
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={historiaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
          >
            <blockquote className="text-2xl md:text-3xl font-display text-[#244A36] tracking-[-0.03em] leading-tight">
              SOMOS DOS JÓVENES INGENIEROS QUE DECIDIMOS{" "}
              <span className="text-[#E86A20]">TRANSFORMAR FÓRMULAS EN EXPERIENCIAS.</span>
            </blockquote>
            <p className="mt-6 text-[#244A36]/70 font-sans text-base leading-relaxed max-w-2xl mx-auto">
              Creamos este vino pensando en quienes, como tú, se atreven a probar lo distinto. Exploramos frutas poco
              convencionales para reinventar el vino, mezclando ciencia, intuición y sabor. No seguimos reglas viejas,
              creamos las nuestras.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex justify-center"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={historiaInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="h-[2px] w-20 bg-[#F4B83F] rounded-full" />
          </motion.div>

          <motion.p
            className="mt-4 text-[#244A36]/50 font-mono text-xs tracking-widest"
            initial={{ opacity: 0 }}
            animate={historiaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            — FUNDADORES, COSECHA DORADA · EST. 2025
          </motion.p>
        </div>
      </section>
    </>
  )
}
