export default function AustralianGrandPrixPage() {
  const headingFont = {
    fontFamily: '"Begum Medium", Georgia, serif',
  };

  const inclusions = [
    "Premium Melbourne accommodation",
    "Australian Grand Prix tickets",
    "Optional F1 hospitality upgrades",
    "Airport and circuit transfers",
    "Curated Melbourne dining recommendations",
    "Dedicated travel support",
  ];

  return (
    <main className="min-h-screen bg-[#F9F4EE] text-[#0C2340]">
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="/images/australian-grand-prix/heroagp.jpg"
          alt="Australian Grand Prix racing"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0C2340]/55" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#FF9016]">
              Australian Grand Prix
            </p>

            <h1
              style={headingFont}
              className="max-w-3xl text-5xl font-black leading-tight md:text-7xl"
            >
              The thrill of lights out in Melbourne.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
              Race weekend energy, premium hospitality, curated hotels and
              seamless planning for one of Formula 1’s most exciting city events.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#FF9016] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0C2340] transition hover:bg-[#0C2340] hover:text-white"
              >
                Register Interest
              </a>

              <a
                href="/events"
                className="rounded-full border border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#0C2340]"
              >
                View All Events
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#FF9016]">
            Event Overview
          </p>

          <h2
            style={headingFont}
            className="text-4xl font-black leading-tight md:text-5xl"
          >
            More than a race weekend.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#0C2340]/80">
            The Australian Grand Prix brings Formula 1 atmosphere into the heart
            of Melbourne, combining speed, spectacle and city energy across an
            unforgettable race weekend.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#0C2340]/80">
            Frontrunner Travel creates complete premium experiences around the
            race — bringing together tickets, hospitality, accommodation,
            transfers and local recommendations into one seamless package.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#0C2340]/80">
            Whether clients want grandstand action, elevated hospitality or a
            full Melbourne city escape around the race, each itinerary is shaped
            around access, atmosphere and ease.
          </p>
        </div>

        <div className="rounded-[32px] border border-[#C0C0C8]/40 bg-white p-10 shadow-xl">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-[#FF9016]">
            Package Inclusions
          </p>

          <div className="space-y-5">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-[#FF9016]" />
                <p className="text-lg text-[#0C2340]/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <img
            src="/images/australian-grand-prix/melbgpaction.jpg"
            alt="Australian Grand Prix race car"
            className="h-[420px] w-full rounded-[32px] object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"
            alt="Formula 1 racing detail"
            className="h-[420px] w-full rounded-[32px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[#0C2340] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#FF9016]">
            Frontrunner Travel
          </p>

          <h2
            style={headingFont}
            className="text-4xl font-black leading-tight md:text-6xl"
          >
            Be there when the lights go out.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Enquire now for tailored Australian Grand Prix packages, hospitality
            options and premium Melbourne race weekend planning.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#FF9016] px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] text-[#0C2340] transition hover:bg-white"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  );
}
