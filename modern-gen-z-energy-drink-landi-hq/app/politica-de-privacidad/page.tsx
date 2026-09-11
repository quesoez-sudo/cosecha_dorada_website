import Link from "next/link"
import { BrandLogo } from "@/components/brand-logo"

export const metadata = {
  title: "Política de Privacidad | Cosecha Dorada",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F6EBCF] text-[#244A36]">
      <header className="border-b border-[#244A36]/15 px-6 py-5">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <BrandLogo href="/" />
          <Link href="/" className="font-sans text-sm font-semibold hover:text-[#E86A20]">Volver al inicio</Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-sans text-xs font-semibold tracking-[0.2em] text-[#E86A20]">LEGAL</p>
        <h1 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-6xl">Política de Privacidad</h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-[#244A36]/75">Última actualización: septiembre de 2026.</p>
        <div className="mt-10 space-y-8 font-sans text-base leading-relaxed text-[#244A36]/80">
          <section><h2 className="font-display text-2xl tracking-[-0.03em] text-[#244A36]">Información que recibimos</h2><p className="mt-2">Cuando nos escribes por Instagram o correo, podemos recibir tu nombre de usuario, nombre, correo y el mensaje que nos envíes. Si te suscribes a novedades, usaremos el correo que proporcionas.</p></section>
          <section><h2 className="font-display text-2xl tracking-[-0.03em] text-[#244A36]">Cómo la usamos</h2><p className="mt-2">Usamos esta información para atender pedidos, consultas, eventos y comunicaciones de Cosecha Dorada. No vendemos ni cedemos tus datos personales a terceros.</p></section>
          <section><h2 className="font-display text-2xl tracking-[-0.03em] text-[#244A36]">Canales externos</h2><p className="mt-2">Nuestros pedidos y conversaciones se gestionan por Instagram. El uso de esa plataforma también está sujeto a sus propias políticas de privacidad.</p></section>
          <section><h2 className="font-display text-2xl tracking-[-0.03em] text-[#244A36]">Tus derechos y contacto</h2><p className="mt-2">Puedes solicitar acceso, corrección o eliminación de tu información escribiendo a cosechadorada25@gmail.com.</p></section>
          <section className="rounded-2xl bg-[#244A36] p-6 text-[#F6EBCF]"><h2 className="font-display text-2xl tracking-[-0.03em] text-[#F4B83F]">Consumo responsable</h2><p className="mt-2">Este sitio y nuestros productos están dirigidos exclusivamente a personas mayores de 18 años. Consume responsablemente.</p></section>
        </div>
      </article>
    </main>
  )
}
