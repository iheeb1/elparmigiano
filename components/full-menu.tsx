"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { Flame, Sandwich, Pizza, UtensilsCrossed, CupSoda, IceCreamCone } from "lucide-react"

interface MenuItem {
  name: string
  price: string
  description: string
  image?: string
}

interface MenuCategory {
  id: string
  title: string
  subtitle: string
  icon: typeof Flame
  banner: string
  items: MenuItem[]
}

const MENU_DATA: MenuCategory[] = [
  {
    id: "pizzas",
    title: "Pizzas Napolitaines",
    subtitle: "Cuites au feu de bois, selon la tradition",
    icon: Flame,
    banner: "/images/menu-pizza.png",
    items: [
      {
        name: "Pizza Margherita",
        price: "10€",
        description:
          "Sauce tomate San Marzano, mozzarella fior di latte, basilic frais, huile d'olive vierge extra.",
        image: "/images/products/pizza-margherita.png",
      },
      {
        name: "Pizza Marinara",
        price: "10€",
        description: "Sauce tomate, ail émincé, origan, olives, huile d'olive. (Sans fromage)",
        image: "/images/products/pizza-marinara.png",
      },
      {
        name: "Pizza Capricciosa",
        price: "12€",
        description:
          "Sauce tomate, mozzarella, jambon, champignons frais, cœurs d'artichauts, olives noires.",
        image: "/images/products/pizza-capricciosa.png",
      },
      {
        name: "Pizza Al Tonno",
        price: "12€",
        description: "Sauce tomate, mozzarella, thon, oignons rouges, olives noires.",
        image: "/images/products/pizza-al-tonno.png",
      },
      {
        name: "Pizza Napoli",
        price: "12€",
        description: "Sauce tomate, mozzarella, filets d'anchois, câpres, olives noires, origan.",
        image: "/images/products/pizza-napoli.png",
      },
      {
        name: "Pizza Pollo",
        price: "12€",
        description: "Sauce tomate, mozzarella, poulet mariné, poivron, origan, huile d'olive.",
        image: "/images/products/pizza-pollo.png",
      },
      {
        name: "Pizza Macinata",
        price: "12€",
        description:
          "Sauce tomate, mozzarella, viande hachée, poivron, oignon rouge, origan, huile d'olive.",
        image: "/images/products/pizza-macinata.png",
      },
      {
        name: "Pizza Ortolana (Végétarienne)",
        price: "12€",
        description:
          "Sauce tomate, mozzarella, aubergines, courgettes, poivrons, champignons frais, olives noires, basilic, huile d'olive.",
        image: "/images/products/pizza-ortolana.png",
      },
      {
        name: "Pizza Quattro Formaggi",
        price: "12€",
        description: "Sauce tomate, mozzarella, roquefort, gruyère, parmesan.",
        image: "/images/products/pizza-quattro-formaggi.png",
      },
      {
        name: "Pizza Pollo Bianca",
        price: "14€",
        description: "Sauce blanche, mozzarella, poulet rôti, poivron, champignons, olives.",
        image: "/images/products/pizza-pollo-bianca.png",
      },
      {
        name: "Pizza Parmigiano",
        price: "14€",
        description:
          "Crème à la truffe, mozzarella, champignons frais, copeaux de Parmigiano Reggiano, roquette, huile de truffe.",
        image: "/images/products/pizza-parmigiano.png",
      },
      {
        name: "Pizza Al Salmone",
        price: "15€",
        description:
          "Sauce blanche, mozzarella, saumon fumé, parmesan, citron, poivre noir, huile d'olive.",
        image: "/images/products/pizza-al-salmone.png",
      },
      {
        name: "Pizza Bresaola",
        price: "15€",
        description:
          "Sauce tomate, mozzarella. Après cuisson : bresaola, roquette fraîche, copeaux de Parmigiano Reggiano, filet d'huile d'olive.",
        image: "/images/products/pizza-bresaola.png",
      },
      {
        name: "Pizza Della Casa",
        price: "15€",
        description: "Disponible uniquement le week-end. Recette différente chaque week-end.",
        image: "/images/products/pizza-della-casa.png",
      },
    ],
  },
  {
    id: "panuozzo",
    title: "Panuozzo",
    subtitle: "La spécialité napolitaine, levée et croustillante",
    icon: Sandwich,
    banner: "/images/menu-panuozzo.png",
    items: [
      {
        name: "Panuozzo Classico",
        price: "7€",
        description: "Mozzarella, jambon, roquette, huile d'olive.",
        image: "/images/products/panuozzo-classico.png",
      },
      {
        name: "Panuozzo Vegetariano",
        price: "7€",
        description: "Mozzarella, aubergines, courgettes, poivrons, champignons frais, roquette.",
        image: "/images/products/panuozzo-vegetariano.png",
      },
      {
        name: "Panuozzo Al Salmone",
        price: "8€",
        description: "Mozzarella, saumon fumé, tomate cerise, roquette.",
        image: "/images/products/panuozzo-salmone.png",
      },
      {
        name: "Panuozzo Bresaola",
        price: "9€",
        description: "Mozzarella, bresaola, roquette, Parmigiano Reggiano, crème de balsamique.",
        image: "/images/products/panuozzo-bresaola.png",
      },
    ],
  },
  {
    id: "volcano",
    title: "El Volcano",
    subtitle: "L'incontournable de la maison, plié et doré",
    icon: Pizza,
    banner: "/images/menu-volcano.png",
    items: [
      {
        name: "El Volcano Escalope",
        price: "7€",
        description:
          "Avant cuisson : escalope panée, mozzarella, oignons rouges. Après cuisson : salade, tomates cerises, sauce maison.",
        image: "/images/products/volcano-escalope.png",
      },
      {
        name: "El Volcano Poulet",
        price: "7€",
        description:
          "Avant cuisson : poulet grillé mariné, mozzarella, oignons rouges. Après cuisson : salade, tomates cerises, sauce maison.",
        image: "/images/products/volcano-poulet.png",
      },
      {
        name: "El Volcano Thon",
        price: "7€",
        description:
          "Avant cuisson : thon, mozzarella, oignons rouges, olives noires. Après cuisson : salade, tomates cerises, sauce maison.",
        image: "/images/products/volcano-thon.png",
      },
      {
        name: "El Volcano Jambon",
        price: "7€",
        description:
          "Avant cuisson : jambon de dinde fumé, mozzarella, champignons frais. Après cuisson : salade, tomates cerises, sauce maison.",
        image: "/images/products/volcano-jambon.png",
      },
    ],
  },
  {
    id: "boissons",
    title: "Boissons",
    subtitle: "Fraîches et chaudes",
    icon: CupSoda,
    banner: "/images/menu-drinks.png",
    items: [
      {
        name: "Boisson fraîche au choix (33 cl)",
        price: "1,50€",
        description: "",
        image: "/images/products/drink-soda.png",
      },
      {
        name: "Bouteille d'eau (50 cl)",
        price: "1,00€",
        description: "",
        image: "/images/products/drink-water.png",
      },
      {
        name: "Café",
        price: "2,00€",
        description: "",
        image: "/images/products/drink-coffee.png",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "La touche sucrée, faite maison",
    icon: IceCreamCone,
    banner: "/images/menu-desserts.png",
    items: [
      {
        name: "Tiramisu maison",
        price: "4,50€",
        description: "",
        image: "/images/products/dessert-tiramisu.png",
      },
      {
        name: "Cookie",
        price: "3,50€",
        description: "",
        image: "/images/products/dessert-cookie.png",
      },
      {
        name: "Mini Pizza Nutella",
        price: "5,50€",
        description: "",
        image: "/images/products/dessert-mini-pizza-nutella.png",
      },
      {
        name: "Mini Pizza Nutella & Pistache",
        price: "6,50€",
        description: "",
        image: "/images/products/dessert-mini-pizza-nutella-pistache.png",
      },
    ],
  },
]

const SUPPLEMENTS = [
  { name: "Champignons", price: "+1,50€", image: "/images/products/supplement-champignons.png" },
  { name: "Burrata", price: "+3,00€", image: "/images/products/supplement-burrata.png" },
  { name: "Œuf", price: "+1,50€", image: "/images/products/supplement-oeuf.png" },
  { name: "Mozzarella", price: "+1,50€", image: "/images/products/supplement-mozzarella.png" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function MenuItemCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-lg border border-primary/15 bg-card/40 backdrop-blur-sm transition-colors duration-300 hover:border-primary/50"
    >
      {item.image ? (
        <div className="relative h-44 w-full overflow-hidden sm:h-52">
          <motion.div
            className="relative h-full w-full"
            whileHover={{ scale: 1.12 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card/95 via-card/10 to-transparent opacity-90" />
          <span className="absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 font-serif text-sm italic text-primary shadow-sm backdrop-blur-sm">
            {item.price}
          </span>
          <span className="absolute left-3 top-3 flex size-7 items-center justify-center rounded-full border border-primary/40 bg-background/70 font-serif text-xs text-primary backdrop-blur-sm">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      ) : (
        <div className="flex h-44 w-full items-center justify-between bg-gradient-to-br from-secondary/40 to-transparent px-5 sm:h-auto sm:min-h-[7rem]">
          <span className="font-serif text-xs text-primary/40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="rounded-full border border-primary/30 px-3 py-1 font-serif text-sm italic text-primary">
            {item.price}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-1.5 p-4 sm:p-5">
        <h3 className="font-serif text-lg text-foreground transition-colors group-hover:text-primary sm:text-xl">
          {item.name}
        </h3>
        {item.description && (
          <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
            {item.description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

interface NavItem {
  id: string
  title: string
  icon: typeof Flame
}

const NAV_ITEMS: NavItem[] = [
  { id: "pizzas", title: "Pizzas", icon: Flame },
  { id: "panuozzo", title: "Panuozzo", icon: Sandwich },
  { id: "volcano", title: "El Volcano", icon: Pizza },
  { id: "panino", title: "El Panino", icon: UtensilsCrossed },
  { id: "boissons", title: "Boissons", icon: CupSoda },
  { id: "desserts", title: "Desserts", icon: IceCreamCone },
]

function CategoryNav({ categories }: { categories: NavItem[] }) {
  const [active, setActive] = useState(categories[0]?.id)

  useEffect(() => {
    const sections = categories
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [categories])

  return (
    <div className="sticky top-0 z-30 -mx-6 mb-12 border-b border-primary/10 bg-background/80 px-6 py-3 backdrop-blur-md sm:mb-16">
      <nav className="mx-auto flex max-w-5xl gap-1.5 overflow-x-auto scrollbar-hide sm:justify-center sm:gap-2">
        {categories.map((cat) => {
          const Icon = cat.icon
          const isActive = active === cat.id
          return (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="relative flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors sm:text-sm"
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <Icon className={`relative z-10 size-3.5 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
              <span className={`relative z-10 ${isActive ? "text-primary-foreground" : "text-foreground/80"}`}>
                {cat.title}
              </span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-40 h-[3px] origin-left bg-primary"
    />
  )
}

export function FullMenu() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "20%"])

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <ScrollProgress />

      {/* Hero image */}
      <motion.div
        ref={heroRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative mb-12 h-72 w-full overflow-hidden rounded-lg sm:h-96 sm:mb-16"
      >
        <motion.div
          className="absolute inset-0 h-full w-full"
          style={{ y: heroY }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image src="/images/menu-pizza.png" alt="Pizza Hero" fill className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      <CategoryNav categories={NAV_ITEMS} />

      <div className="space-y-24 sm:space-y-32">
        <CategorySection category={MENU_DATA[0]} />
        <CategorySection category={MENU_DATA[1]} />
        <CategorySection category={MENU_DATA[2]} />
        <ElPanino />
        <CategorySection category={MENU_DATA[3]} />
        <CategorySection category={MENU_DATA[4]} />
      </div>
    </div>
  )
}

function CategorySection({ category }: { category: MenuCategory }) {
  const Icon = category.icon
  return (
    <section id={category.id} className="scroll-mt-24">
      {/* Section header with ambient banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative mb-10 overflow-hidden rounded-lg border border-primary/15 px-6 py-12 text-center sm:mb-14 sm:py-16"
      >
        <div className="absolute inset-0 -z-10">
          <Image src={category.banner} alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
        </div>

        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-primary/40 bg-background/60"
        >
          <Icon className="size-6 text-primary" />
        </motion.div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">{category.title}</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-primary/80 sm:text-base">
          {category.subtitle}
        </p>
      </motion.div>

      {/* Items grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
      >
        {[...category.items]
          .sort((a, b) => (b.image ? 1 : 0) - (a.image ? 1 : 0))
          .map((item, i) => (
            <MenuItemCard key={item.name} item={item} index={i} />
          ))}
      </motion.div>
    </section>
  )
}

function ElPanino() {
  return (
    <section id="panino" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-80px" }}
        className="relative mb-10 overflow-hidden rounded-lg border border-primary/15 px-6 py-12 text-center sm:mb-14 sm:py-16"
      >
        <div className="absolute inset-0 -z-10">
          <Image src="/images/menu-panino.png" alt="" fill className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
        </div>

        <motion.div
          initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
          whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border border-primary/40 bg-background/60"
        >
          <UtensilsCrossed className="size-6 text-primary" />
        </motion.div>
        <h2 className="font-serif text-3xl font-bold text-foreground sm:text-5xl">El Panino</h2>
        <p className="mt-3 text-sm uppercase tracking-[0.25em] text-primary/80 sm:text-base">
          Le classique revisité, à composer soi-même
        </p>
      </motion.div>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="relative h-72 w-full overflow-hidden rounded-lg border border-primary/15 sm:h-96"
        >
          <Image
            src="/images/products/el-panino-hero.png"
            alt="El Panino"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          <span className="absolute right-4 top-4 rounded-full bg-background/80 px-4 py-1.5 font-serif text-lg italic text-primary shadow-sm backdrop-blur-sm">
            5,50€
          </span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          <motion.div variants={cardVariants}>
            <h3 className="mb-2 font-serif text-xl text-primary">Choix</h3>
            <ul className="space-y-1.5 text-muted-foreground">
              <li>• Thon (œuf en option)</li>
              <li>• Jambon de dinde fumé</li>
              <li>• Poulet pané</li>
            </ul>
          </motion.div>
          <motion.p variants={cardVariants} className="text-sm italic leading-relaxed text-muted-foreground">
            Tous les panino sont préparés avec des crudités au choix (salade, tomate, oignon) et des
            sauces au choix (mayonnaise, ketchup, moutarde, harissa, algérienne, samouraï, sauce
            maison).
          </motion.p>
        </motion.div>
      </div>

      {/* Supplements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mt-14 sm:mt-20"
      >
        <h3 className="mb-8 text-center font-serif text-2xl text-primary sm:text-3xl">
          Les Suppléments
        </h3>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {SUPPLEMENTS.map((sup) => (
            <motion.div
              key={sup.name}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
                className="relative mb-3 size-24 overflow-hidden rounded-full border-2 border-primary/30 transition-colors group-hover:border-primary sm:size-28"
              >
                <Image src={sup.image} alt={sup.name} fill className="object-cover" />
              </motion.div>
              <p className="font-serif text-sm font-semibold text-foreground sm:text-base">
                {sup.name}
              </p>
              <p className="text-xs text-primary sm:text-sm">{sup.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
