import { MapPin, Phone, Mail } from "lucide-react"

const CONTACTS = [
  {
    icon: MapPin,
    label: "Adresse",
    lines: ["1 bis rue Guy Baudoin", "77000 Melun"],
    href: "https://maps.google.com/?q=1+bis+rue+Guy+Baudoin+Melun+77000",
  },
  {
    icon: Phone,
    label: "Téléphone",
    lines: ["06 51 47 55 45", "01 71 85 75 08"],
    href: "tel:+33651475545",
  },
  {
    icon: Mail,
    label: "Email",
    lines: ["restaurantelparmigiano@gmail.com"],
    href: "mailto:restaurantelparmigiano@gmail.com",
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/20 bg-popover px-6 py-14">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-center font-serif text-2xl italic text-primary sm:text-3xl">
          Nous trouver
        </h2>
        <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3">
          {CONTACTS.map(({ icon: Icon, label, lines, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 text-center transition-colors"
            >
              <span className="flex size-11 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {label}
              </span>
              <span className="text-sm leading-relaxed text-foreground group-hover:text-primary">
                {lines.map((line) => (
                  <span key={line} className="block break-words">
                    {line}
                  </span>
                ))}
              </span>
            </a>
          ))}
        </div>
        <p className="mt-12 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
          El Parmigiano — Cuisine Italienne
        </p>
      </div>
    </footer>
  )
}
