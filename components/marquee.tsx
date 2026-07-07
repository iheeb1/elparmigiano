const ITEMS = [
  "Cuisine Italienne",
  "Ouverture Prochaine",
  "Fait Maison",
  "Pizza au Feu de Bois",
  "Bientôt",
]

export function Marquee() {
  // Duplicated so the loop appears seamless
  const sequence = [...ITEMS, ...ITEMS]

  return (
    <div className="relative flex w-full overflow-hidden border-y border-primary/20 bg-primary py-3 text-primary-foreground">
      <div className="animate-marquee flex shrink-0 items-center whitespace-nowrap">
        {sequence.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-6 font-serif text-sm uppercase tracking-[0.25em]">
              {item}
            </span>
            <span aria-hidden className="text-base">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
