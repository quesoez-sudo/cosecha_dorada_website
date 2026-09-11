import Link from "next/link"

type BrandLogoProps = {
  className?: string
  href?: string
  inverse?: boolean
  size?: "default" | "hero"
}

export function BrandLogo({ className = "", href, inverse = false, size = "default" }: BrandLogoProps) {
  const isHero = size === "hero"
  const mark = (
    <span className={`inline-flex flex-col leading-none ${className}`} aria-label="Cosecha Dorada, Lo inesperado sabe mejor">
      <span className={`font-display tracking-[-0.06em] ${isHero ? "text-5xl sm:text-6xl md:text-7xl" : "text-[1.45rem]"} ${inverse ? "text-[#F6EBCF]" : "text-[#244A36]"}`}>
        COSECHA<br />DORADA
      </span>
      <span className={`mt-1 font-sans font-semibold tracking-[0.08em] ${isHero ? "text-sm sm:text-base md:text-lg" : "text-[0.58rem]"} ${inverse ? "text-[#F4B83F]" : "text-[#244A36]"}`}>
        LO INESPERADO SABE MEJOR
      </span>
    </span>
  )

  return href ? <Link href={href} className="inline-flex">{mark}</Link> : mark
}
