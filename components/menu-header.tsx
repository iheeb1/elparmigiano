"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export function MenuHeader() {
  return (
    <header className="relative overflow-hidden px-6 pb-16 pt-10">
      <div className="absolute inset-0 -z-10">
        <div
          className="h-full w-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url(/images/ingredients.png)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-4" />
        Retour
      </Link>

      <div className="mx-auto mt-14 max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.45em] text-primary sm:text-sm"
        >
          En avant-première
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-serif text-5xl leading-tight text-foreground sm:text-7xl"
        >
          Nos <span className="italic text-primary">spécialités</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-6 max-w-xl text-pretty font-serif text-lg italic text-foreground/90"
        >
          {"Voici ce qui vous attend dès notre ouverture. Un avant-goût de l'Italie, rien que pour vous."}
        </motion.p>
      </div>
    </header>
  )
}
