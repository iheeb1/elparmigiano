"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Phone, MapPin, Mail, Clock, Flame, UtensilsCrossed } from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function LandingPage() {
  return (
    <main className="relative bg-background overflow-hidden">
      {/* Advanced animated background with theme-inspired elements */}
      <motion.div
        className="pointer-events-none fixed inset-0 -z-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Animated gradient orbs */}
        {[
          { x: "10%", y: "15%", size: 300, duration: 25, delay: 0, color: "from-primary" },
          { x: "80%", y: "25%", size: 250, duration: 30, delay: 5, color: "from-secondary" },
          { x: "15%", y: "75%", size: 280, duration: 28, delay: 2, color: "from-primary" },
          { x: "70%", y: "85%", size: 320, duration: 32, delay: 8, color: "from-secondary" },
        ].map((orb, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full blur-3xl mix-blend-screen opacity-0`}
            style={{
              width: orb.size,
              height: orb.size,
              left: orb.x,
              top: orb.y,
              background: `radial-gradient(circle, rgba(254, 223, 130, 0.25) 0%, transparent 70%)`,
            }}
            animate={{
              y: [0, 60, 0],
              x: [0, 40, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: orb.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: orb.delay,
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute h-1 w-1 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Animated grid lines */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.03]" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Radial gradient overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(254, 223, 130, 0.08) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-20 text-center">
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url(/images/pizza-hero.png)" }}
            animate={{ scale: [1, 1.08] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
        >
          {[0, 1, 2, 3].map((i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute rounded-full border border-primary/30"
              style={{ width: 200 + i * 60, height: 200 + i * 60 }}
              animate={{ scale: [1, 1.2], opacity: [0.7, 0] }}
              transition={{
                duration: 4 + i * 0.6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeOut",
                delay: i * 0.9,
              }}
            />
          ))}

          <motion.div
            aria-hidden
            className="absolute size-72 rounded-full bg-primary/25 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <motion.div
            animate={{ y: [0, -18, 0], rotateZ: [0, 1.5, 0] }}
            transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative"
          >
            <Image
              src="/images/logo.png"
              alt="El Parmigiano — La véritable cuisine italienne"
              width={340}
              height={300}
              priority
              className="relative h-auto w-56 drop-shadow-[0_20px_80px_rgba(0,0,0,0.8)] sm:w-72 lg:w-80"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-16 max-w-4xl font-serif text-4xl font-bold text-foreground sm:text-5xl lg:text-7xl tracking-tight"
        >
          <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            La Véritable
          </span>
          <br />
          <span>Cuisine Italienne</span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Authentique. Raffinée. Passionnée. Depuis 2026, El Parmigiano vous invite à découvrir l&apos;essence même de la gastronomie italienne.
        </motion.p>

        <motion.div custom={3} initial="hidden" animate="show" variants={fadeUp} className="mt-10">
          <Link
            href="/menu"
            className="group inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 font-serif text-lg font-semibold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            Découvrez Notre Menu
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>

      </section>

      {/* About Section */}
      <section id="apropos" className="relative scroll-mt-20 px-6 py-24 sm:py-32">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-secondary/8 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-8"
          >
            À Propos de Nous
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-lg text-muted-foreground leading-relaxed mb-6"
          >
            El Parmigiano est bien plus qu&apos;un restaurant — c&apos;est une passion culinaire incarnée. Chaque plat est préparé avec minutie, utilisant uniquement les meilleurs ingrédients italiens importés directement.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-lg text-muted-foreground leading-relaxed"
          >
            Notre four à bois traditionnel, nos recettes authentiques et notre dévouement à l&apos;excellence font de chaque visite une expérience inoubliable.
          </motion.p>
        </motion.div>
      </section>

      {/* Why Us Section */}
      <section className="relative px-6 py-24 sm:py-32 bg-card/30">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-16"
          >
            Pourquoi Nous Choisir ?
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Flame, title: "Four Traditionnel", desc: "Cuit au feu de bois pour une authenticité garantie et des saveurs incomparables." },
              { icon: UtensilsCrossed, title: "Recettes Authentiques", desc: "Transmises de génération en génération, nos recettes sont le cœur de notre cuisine." },
              { icon: Flame, title: "Ingrédients Premium", desc: "Sélectionnés avec soin, directement importés d'Italie pour assurer la qualité." },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group text-center p-8 rounded-lg border border-border/40 bg-background/40 backdrop-blur transition-all duration-300 hover:bg-background/60 hover:border-primary/40"
                >
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.15, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="size-10 text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>

      {/* Specialties Section */}
      <section className="relative px-6 py-24 sm:py-32">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-4"
          >
            Nos Spécialités
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto"
          >
            Une sélection de plats élaborés avec passion et les ingrédients les plus fins
          </motion.p>

          <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
            {[
              {
                title: "Pizzas Napolitaines",
                desc: "Traditionnelles et authentiques, cuites au feu de bois selon la recette originale.",
                price: "À partir de 10€",
                img: "/images/menu/cat-pizza.jpg",
              },
              {
                title: "Panuozzo",
                desc: "Sandwichs italiens levés et croustillants, garnis de saveurs méditerranéennes.",
                price: "À partir de 7€",
                img: "/images/menu/cat-panuozzo.png",
              },
              {
                title: "El Panino",
                desc: "Pains généreux remplis d'ingrédients frais et préparés selon vos envies.",
                price: "À partir de 5,50€",
                img: "/images/menu/cat-panino.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-card/50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <motion.div
                  className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-b from-secondary/25 to-transparent p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-x-8 top-6 bottom-2 rounded-full bg-primary/15 blur-2xl" />
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={360}
                    height={240}
                    className="relative h-auto max-h-40 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
                  />
                </motion.div>

                <div className="relative p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.desc}
                  </p>
                  <motion.p
                    className="font-serif text-lg font-bold text-primary"
                  >
                    {item.price}
                  </motion.p>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-primary/0 rounded-lg"
                  whileHover={{ borderColor: "hsl(var(--primary))" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Hours Section */}
      <section id="horaires" className="relative scroll-mt-20 px-6 py-24 sm:py-32">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-secondary/8 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            className="mb-8 flex justify-center"
            whileInView={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Clock className="size-12 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-8"
          >
            Nos Horaires
          </motion.h2>

          <div className="grid gap-4 sm:grid-cols-2 max-w-xl mx-auto mb-8">
            {[
              { day: "Lundi — Samedi", hours: "10h00 - 22h00" },
              { day: "Dimanche", hours: "Fermé" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-4 rounded-lg bg-card/40 border border-border/30"
              >
                <p className="font-serif font-semibold text-foreground">{item.day}</p>
                <p className="text-sm text-muted-foreground">{item.hours}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call-to-Action Section */}
      <section className="relative px-6 py-24 sm:py-32">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl mb-6">
            Prêt à Savourer ?
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            Explorez notre menu complet et trouvez votre prochaine délicieuse découverte.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-10 py-4 font-serif font-bold text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 hover:scale-105"
          >
            Voir le Menu Complet
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative scroll-mt-20 px-6 py-24 sm:py-32 border-t border-border/40">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-6xl"
        >
          <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl mb-16">
            Nous Contacter
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                lines: ["1 bis rue Guy Baudoin", "77000 Melun"],
              },
              {
                icon: Phone,
                title: "Téléphone",
                lines: ["0651475545", "0171857508"],
              },
              {
                icon: Mail,
                title: "Email",
                lines: ["restaurantelparmigiano@gmail.com"],
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center"
                >
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="size-8 text-primary" />
                  </motion.div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.lines.map((line, j) => (
                      <p key={j} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
