const events = [
  {
    title: "Australian Open",
    href: "/events/australian-open",
    category: "Tennis",
    location: "Melbourne",
    image:
      "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1200&q=80",
    text: "Grand Slam tennis, Melbourne energy, premium hotels and curated event access.",
  },
  {
    title: "Australian Grand Prix",
    href: "/events/australian-grand-prix",
    category: "Formula 1",
    location: "Melbourne",
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
    text: "Race weekend travel with hospitality, transfers, hotels and the thrill of lights out.",
  },
  {
    title: "Monaco Grand Prix",
    href: "/events/monaco-grand-prix",
    category: "Formula 1",
    location: "Monaco",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    text: "One of the most iconic weekends in motorsport, built around rare access and atmosphere.",
  },
  {
    title: "Singapore Grand Prix",
    href: "/events/singapore-grand-prix",
    category: "Formula 1",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    text: "Night racing, premium hospitality and a city that comes alive after dark.",
  },
];

export default function EventsPage() {
  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  return (
    <main className="min-h-screen bg-[#F9F4EE] px-6 py-24 text-[#383232]">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
          Events
        </p>

        <h1
          style={headingFont}
          className="mt-4 max-w-4xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em]"
        >
          Global sporting events worth travelling for.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-8 text-[#383232]/70">
          Explore Frontrunner Travel’s launch collection of premium sports travel
          experiences, each built around access, atmosphere and intelligent
          planning.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#383232]/10 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#383232]/88 via-[#383232]/25 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#F35B15] px-3 py-1 text-xs font-black uppercase text-white">
                  {event.category}
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h2 style={headingFont} className="text-3xl font-semibold">
                    {event.title}
                  </h2>

                  <p className="mt-2 text-sm text-white/85">
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[#383232]/68">{event.text}</p>

                <span className="mt-auto pt-8 font-black uppercase tracking-wide text-[#F35B15]">
                  View event →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
