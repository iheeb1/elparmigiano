"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "À Propos", href: "/#apropos" },
  { label: "Horaires", href: "/#horaires" },
  { label: "Contact", href: "/#contact" },
]

export function SiteNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null)
      return
    }

    const sectionIds = ["apropos", "horaires", "contact"]
    const observers: IntersectionObserver[] = []

    const handleScroll = () => {
      if (window.scrollY < 300) {
        setActiveSection("/")
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`/#${id}`)
            }
          })
        },
        {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observers.forEach((obs) => obs.disconnect())
    }
  }, [pathname])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (pathname === "/menu") return href === "/menu"
    if (pathname === "/") {
      if (href === "/") return activeSection === "/" || activeSection === null
      return activeSection === href
    }
    return false
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-primary/20 bg-background/85 backdrop-blur-md shadow-lg shadow-black/20"
          : "border-b border-transparent bg-gradient-to-b from-background/70 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="El Parmigiano"
            width={44}
            height={44}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="hidden font-serif text-lg font-semibold tracking-wide text-foreground sm:block">
            El <span className="text-primary">Parmigiano</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.15em] transition-colors ${
                  isActive(link.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/menu"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/40 md:inline-flex"
        >
          Voir le Menu
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:text-primary md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-primary/15 bg-background/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium uppercase tracking-[0.12em] transition-colors ${
                      isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-card/60 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/menu"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground"
                >
                  Voir le Menu
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
