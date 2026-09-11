"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Building2, ShoppingBag, Calendar } from "lucide-react"

const INSTAGRAM = "https://instagram.com/cosechadoradacol"

const activations = [
  {
    icon: Sparkles,
    title: "Catas & Eventos",
    description: "Vívenos en eventos exclusivos de degustación.",
    cta: "Ver en Instagram",
    href: INSTAGRAM,
  },
  {
    icon: Building2,
    title: "Restaurantes",
    description: "Lleva Cosecha Dorada a tu establecimiento.",
    cta: "Ser Distribuidor",
    href: INSTAGRAM,
  },
  {
    icon: ShoppingBag,
    title: "Pedidos Online",
    description: "Recibe tu botella directo en casa.",
    cta: "Pedir Ahora",
    href: INSTAGRAM,
  },
  {
    icon: Calendar,
    title: "Eventos Privados",
    description: "Sorprende en tu próxima celebración.",
    cta: "Contáctanos",
    href: INSTAGRAM,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
}

export function ActivationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="canales" className="relative py-16 bg-[#F6EBCF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-10"
        >
          <motion.span
            className="font-mono text-[#244A36]/70 text-xs tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            DÓNDE ENCONTRARNOS
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-display text-[#244A36] tracking-[-0.04em] mt-1">
            <motion.span
              className="inline-block mr-[0.22em]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            >
              VÍVENOS
            </motion.span>
            <motion.span
              className="text-[#E86A20] inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1], delay: 0.25 }}
            >
              EN PERSONA
            </motion.span>
          </h2>
          <motion.p
            className="text-sm text-[#244A36]/70 font-mono mt-1 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Desde catas exclusivas hasta pedidos directos, lleva Cosecha Dorada a tu mundo.
          </motion.p>
          <p className="mt-3 text-xs font-sans text-[#244A36]/60 max-w-lg mx-auto">
            Estamos afinando estos servicios. Escríbenos por Instagram para conocer disponibilidad, próximos eventos y pedidos.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {activations.map((activation) => (
            <motion.a
              key={activation.title}
              href={activation.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 17 },
              }}
              className="group bg-[#244A36] rounded-2xl p-6 cursor-pointer relative overflow-hidden block"
            >
              <motion.div
                className="absolute inset-0 bg-[#F4B83F]/0 group-hover:bg-[#F4B83F]"
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-11 h-11 rounded-xl bg-[#F4B83F] flex items-center justify-center mb-4 group-hover:bg-[#244A36] transition-colors duration-300"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <activation.icon className="w-5 h-5 text-[#244A36] group-hover:text-[#F4B83F] transition-colors duration-300" />
                </motion.div>

                <h3 className="text-lg font-display text-white group-hover:text-[#244A36] tracking-[-0.03em] mb-2 transition-colors duration-300">
                  {activation.title}
                </h3>
                <p className="text-white/60 group-hover:text-[#244A36]/70 font-mono text-xs leading-relaxed mb-4 transition-colors duration-300">
                  {activation.description}
                </p>

                <motion.span
                  className="flex items-center gap-2 text-[#F4B83F] group-hover:text-[#244A36] font-bold text-xs tracking-wide transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {activation.cta}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
