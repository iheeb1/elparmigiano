"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export function ComingSoon() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
      {/* Ambient background image */}
      <div className="absolute inset-0 -z-10">
        <div
          className="animate-slow-zoom h-full w-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/images/pizza-hero.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>

      {/* Eyebrow */}
      <motion.p
        custom={0}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="animate-flicker mb-8 text-xs uppercase tracking-[0.45em] text-primary sm:text-sm"
      >
        Ouverture Prochaine
      </motion.p>

      {/* Logo with radiating glow rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex items-center justify-center"
      >
        {/* Pulsing rings behind the logo */}
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            className="absolute rounded-full border border-primary/30"
            style={{ width: 220, height: 220 }}
            animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
            transition={{
              duration: 3.6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeOut",
              delay: i * 1.2,
            }}
          />
        ))}

        {/* Soft glow */}
        <motion.div
          aria-hidden
          className="absolute size-56 rounded-full bg-primary/15 blur-3xl"
          animate={{ opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="relative"
        >
          <Image
            src="/images/logo.png"
            alt="El Parmigiano — four à bois et pâte à pizza"
            width={340}
            height={300}
            priority
            className="h-auto w-56 drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)] sm:w-72 lg:w-80"
          />
        </motion.div>
      </motion.div>

      {/* Teaser line */}
      <motion.p
        custom={1}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-10 max-w-xl text-pretty font-serif text-lg italic leading-relaxed text-foreground/90 sm:text-xl"
      >
        {"Quelque chose de délicieux se prépare. Bientôt, l'Italie s'invite à votre table."}
      </motion.p>

      {/* Animated loader */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-10 flex w-full max-w-xs flex-col items-center gap-4"
      >
        <span className="font-serif text-2xl uppercase tracking-[0.5em] text-primary sm:text-3xl">
          Prochainement
        </span>

        {/* Indeterminate loading bar */}
        <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-primary/15">
          <motion.span
            className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-primary"
            animate={{ left: ["-35%", "100%"] }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Les derniers préparatifs sont en cours
        </span>
      </motion.div>

      {/* CTA */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="mt-12"
      >
        <Link
          href="/menu"
          className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-transform hover:scale-105"
        >
          Ce qui vous attend
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  )
}
