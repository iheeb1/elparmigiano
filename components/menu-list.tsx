"use client"

import { motion } from "framer-motion"

const SPECIALITES = [
  { name: "Pizza", price: "à partir de 10€", teaser: "La signature, au feu de bois" },
  { name: "Panuozzo", price: "à partir de 7€", teaser: "La spécialité napolitaine" },
  { name: "El Panino", price: "à partir de 5,5€", teaser: "Le classique revisité" },
  { name: "El Vulcano", price: "à partir de 7€", teaser: "L'incontournable de la maison" },
]

export function MenuList() {
  return (
    <ul className="mx-auto max-w-3xl">
      {SPECIALITES.map((item, i) => (
        <motion.li
          key={item.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group border-b border-primary/20 py-8 first:border-t"
        >
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="font-serif text-base text-primary/50 sm:text-lg">
              0{i + 1}
            </span>
            <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-3xl text-foreground transition-colors group-hover:text-primary sm:text-5xl">
                {item.name}
              </h3>
              <span className="whitespace-nowrap font-serif text-lg italic text-primary sm:text-2xl">
                {item.price}
              </span>
            </div>
          </div>
          <p className="mt-2 pl-9 text-sm uppercase tracking-[0.2em] text-muted-foreground sm:pl-12">
            {item.teaser}
          </p>
        </motion.li>
      ))}
    </ul>
  )
}
