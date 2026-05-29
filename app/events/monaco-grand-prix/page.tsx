export default function MonacoGrandPrixPage() {
  const headingFont = {
    fontFamily: '"Begum Medium", Georgia, serif',
  };

  const inclusions = [
    "Premium Monaco or French Riviera accommodation",
    "Monaco Grand Prix tickets",
    "Optional F1 hospitality upgrades",
    "Private transfers where required",
    "Curated Riviera dining recommendations",
    "Dedicated travel support",
  ];

  return (
    <main className="min-h-screen bg-[#F9F4EE] text-[#0C2340]">
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="/monaco4.jpg"
          alt="Monaco Grand Prix"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0C2340]/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#FF9016]">
              Monaco Grand Prix
            </p>

            <h1
              style={headingFont}
              className="max-w-4xl text-5xl font-black leading-tight md:text-7xl"
            >
              The most iconic weekend in motorsport.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
              The harbour, the yachts, the street circuit and the atmosphere of
              Formula 1’s most legendary race weekend.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#FF9016] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0C2340] transition hover:bg-white"
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
            More than Formula 1.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#0C2340]/80">
            Monaco is the race weekend that feels almost impossible to
            replicate: narrow streets, superyachts, grandstand drama and a level
            of atmosphere that makes the whole principality feel electric.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#0C2340]/80">
            Frontrunner Travel packages are designed for clients who want the
            experience handled properly — tickets, hospitality, premium hotels,
            transfers and the right balance of event access and Riviera style.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#0C2340]/80">
            Whether travelling for the racing, the glamour or the full Monaco
            weekend, this is a trip where logistics matter and planning makes
            all the difference.
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
            src="/monaco4.jpg"
            alt="Monaco Grand Prix harbour"
            className="h-[420px] w-full rounded-[32px] object-cover"
          />

          <img
            src="/monaco4.jpg"
            alt="Monaco Grand Prix circuit"
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
            Experience Monaco at full volume.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Enquire now for Monaco Grand Prix packages, hospitality options and
            tailored Riviera travel planning.
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
