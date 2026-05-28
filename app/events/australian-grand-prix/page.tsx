export default function AustralianOpenPage() {
  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  const inclusions = [
    "Premium Melbourne accommodation",
    "Official Australian Open tickets",
    "Optional hospitality upgrades",
    "Airport and event transfers",
    "Curated dining recommendations",
    "Dedicated travel support",
  ];

  return (
    <main className="min-h-screen bg-[#F9F4EE] pt-28 text-[#383232]">
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=1800&q=80"
          alt="Australian Open"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#383232]/85 via-[#383232]/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-6 pb-16 text-white">
            <p className="mb-5 inline-block rounded-full bg-[#F35B15] px-4 py-2 text-sm font-black uppercase tracking-[0.25em]">
              Grand Slam Tennis
            </p>

            <h1
              style={headingFont}
              className="max-w-5xl text-6xl font-semibold leading-[0.92] tracking-[-0.04em] sm:text-7xl"
            >
              Australian Open 2026
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/85">
              Centre Court atmosphere, Melbourne energy and premium travel
              experiences built around one of the world’s great sporting events.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
            Event Overview
          </p>

          <h2
            style={headingFont}
            className="mt-4 text-5xl font-semibold leading-tight tracking-[-0.03em]"
          >
            Melbourne at its absolute peak.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-[#383232]/75">
            <p>
              The Australian Open combines world-class tennis with one of the
              most exciting sporting atmospheres anywhere in the world.
            </p>

            <p>
              From Centre Court sessions and premium hospitality through to
              Melbourne’s dining scene, rooftop bars and summer energy, this is
              far more than a tennis tournament.
            </p>

            <p>
              Frontrunner Travel packages are designed to remove complexity and
              elevate the experience with carefully selected hotels, ticketing,
              hospitality access and concierge-level support throughout your
              journey.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80"
              alt=""
              className="h-72 w-full rounded-[1.75rem] object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1000&q=80"
              alt=""
              className="h-72 w-full rounded-[1.75rem] object-cover shadow-xl"
            />
          </div>
        </div>

        <div>
          <div className="sticky top-32 rounded-[2rem] bg-white p-8 shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
              Package Inclusions
            </p>

            <div className="mt-8 space-y-4">
              {inclusions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-[#F9F4EE] p-4"
                >
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[#F35B15]" />

                  <p className="text-[#383232]/75">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-[#383232] p-6 text-white">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
                Enquire Now
              </p>

              <p className="mt-4 text-white/75">
                Speak with Frontrunner Travel about Australian Open packages,
                hospitality and tailored itineraries.
              </p>

              <a
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#F35B15] px-6 py-4 font-black uppercase tracking-wide text-white"
              >
                Start Your Enquiry
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
