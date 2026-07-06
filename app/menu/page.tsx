import Link from "next/link"
import type { Metadata } from "next"
import { MenuHeader } from "@/components/menu-header"
import { FullMenu } from "@/components/full-menu"
import { Marquee } from "@/components/marquee"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Nos spécialités — El Parmigiano",
  description:
    "Découvrez en avant-première les spécialités d'El Parmigiano : Pizza, Panuozzo, El Panino et El Vulcano.",
}

export default function MenuPage() {
  return (
    <main className="bg-background pt-16">
      <MenuHeader />

      <section className="pb-20">
        <FullMenu />

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-full border border-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      <Marquee />
      <SiteFooter />
    </main>
  )
}
