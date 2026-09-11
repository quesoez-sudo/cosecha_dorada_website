"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Instagram } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
  { image: "/images/photo_pour.png", alt: "Sirviendo Cosecha Dorada" },
  { image: "/images/photo_glass_lulo.png", alt: "Copa de vino con lulo fresco" },
  { image: "/images/photo_outdoor.png", alt: "Botella al aire libre en Colombia" },
  { image: "/images/photo_toast.png", alt: "Brindando con Cosecha Dorada" },
  { image: "/images/photo_flatlay.png", alt: "Flatlay editorial Cosecha Dorada" },
  { image: "/images/photo_nature.png", alt: "Botella en la naturaleza colombiana" },
]

const testimonials = [
  {
    quote: "El sabor del lulo lo cambia todo. No esperaba algo tan fresco y diferente en un vino.",
    handle: "@mariaj_col",
  },
  {
    quote: "Perfecto para compartir. Lo pedí para una cena y todos quedaron sorprendidos.",
    handle: "@sergio_bta",
  },
  {
    quote: "Por fin un vino colombiano que rompe con lo de siempre. ¡100% recomendado!",
    handle: "@valentina.mv",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

export function SocialSection() {
  const gridRef = useRef(null)
  const testimonialsRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" })
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-50px" })

  return (
    <section id="community" className="relative py-16 bg-[#244A36] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#F4B83F] text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            NUESTRA COMUNIDAD
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display text-white tracking-[-0.04em] mt-2 overflow-hidden">
            <motion.span
              className="inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              @COSECHA
            </motion.span>
            <motion.span
              className="text-[#F4B83F] inline-block"
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.3 }}
            >
              DORADACOL
            </motion.span>
          </h2>
        </motion.div>

        {/* Photo grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
          variants={containerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {instagramPosts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/cosechadoradacol"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 10, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-[#F4B83F]/0 group-hover:bg-[#F4B83F]/20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Instagram className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          ref={testimonialsRef}
          className="grid md:grid-cols-3 gap-4 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.handle}
              className="bg-white/5 border border-white/10 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <p className="text-white/80 font-sans text-sm leading-relaxed mb-4">"{t.quote}"</p>
              <span className="text-[#F4B83F] font-mono text-xs tracking-wider">{t.handle}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://instagram.com/cosechadoradacol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#F4B83F] text-[#244A36] px-6 py-3 rounded-full font-bold text-sm tracking-wide relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{ x: "200%" }}
              transition={{ duration: 0.6 }}
            />
            <Instagram className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Seguir @cosechadoradacol</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
