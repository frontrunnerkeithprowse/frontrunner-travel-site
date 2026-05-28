export default function AustralianOpenPage() {
  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  const inclusions = [
    "Premium Melbourne accommodation",
    "Australian Open tickets",
    "Optional hospitality upgrades",
    "Airport and event transfers",
    "Curated Melbourne dining recommendations",
    "Dedicated travel support",
  ];

  return (
    <main className="min-h-screen bg-[#F9F4EE] text-[#383232]">
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1800&q=80"
          alt="Australian Open tennis court"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#F35B15]">
              Australian Open
            </p>

            <h1
              style={headingFont}
              className="max-w-3xl text-5xl font-black leading-tight md:text-7xl"
            >
              Melbourne’s most electric summer sporting event.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
              Premium seats, luxury accommodation, curated dining and insider
              access designed for travellers who want more than just a ticket.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-[#F35B15] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#d94d0f]"
              >
                Register Interest
              </a>

              <a
                href="/events"
                className="rounded-full border border-white/50 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#383232]"
              >
                View All Events
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#F35B15]">
            Event Overview
          </p>

          <h2
            style={headingFont}
            className="text-4xl font-black leading-tight md:text-5xl"
          >
            More than tennis.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#383232]/80">
            The Australian Open transforms Melbourne into one of the most
            exciting sporting cities in the world each January.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#383232]/80">
            Frontrunner Travel creates complete premium experiences around the
            tournament — combining tickets, luxury hotels, restaurants and
            seamless travel planning into one elevated package.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#383232]/80">
            Whether you are travelling for centre court action, hospitality or a
            luxury Melbourne getaway, every detail is designed around access,
            atmosphere and ease.
          </p>
        </div>

        <div className="rounded-[32px] bg-white p-10 shadow-xl">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.25em] text-[#F35B15]">
            Package Inclusions
          </p>

          <div className="space-y-5">
            {inclusions.map((item) => (
              <div key={item} className="flex items-start gap-4">
                <div className="mt-2 h-3 w-3 rounded-full bg-[#F35B15]" />
                <p className="text-lg text-[#383232]/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <img
            src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80"
            alt="Tennis match"
            className="h-[420px] w-full rounded-[32px] object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80"
            alt="Premium sporting event atmosphere"
            className="h-[420px] w-full rounded-[32px] object-cover"
          />
        </div>
      </section>

      <section className="bg-[#383232] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#F35B15]">
            Frontrunner Travel
          </p>

          <h2
            style={headingFont}
            className="text-4xl font-black leading-tight md:text-6xl"
          >
            Secure your place at the Australian Open.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Enquire now for tailored Australian Open packages, hospitality
            options and personalised Melbourne travel planning.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-block rounded-full bg-[#F35B15] px-10 py-5 text-sm font-bold uppercase tracking-[0.25em] text-white transition hover:bg-[#d94d0f]"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  );
}
