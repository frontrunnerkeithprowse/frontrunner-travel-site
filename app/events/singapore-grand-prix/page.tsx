export default function SingaporeGrandPrixPage() {
  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  const inclusions = [
    "Premium Singapore accommodation",
    "Singapore Grand Prix tickets",
    "Optional hospitality upgrades",
    "Airport and circuit transfers",
    "Dining and nightlife recommendations",
    "Dedicated travel support",
  ];

  return (
    <main className="min-h-screen bg-[#F9F4EE] text-[#383232]">
      <section className="relative h-[75vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1800&q=80"
          alt="Singapore Grand Prix"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-7xl px-6 text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#F35B15]">
              Singapore Grand Prix
            </p>

            <h1
              style={headingFont}
              className="max-w-4xl text-5xl font-black leading-tight md:text-7xl"
            >
              Formula 1 under the lights.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-white/85 md:text-xl">
              Night racing, city energy, premium hospitality and one of Formula
              1’s most atmospheric weekends.
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
            A city built for spectacle.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#383232]/80">
            The Singapore Grand Prix combines world-class Formula 1 racing with
            rooftop bars, luxury hotels, incredible dining and an atmosphere
            unlike any other stop on the calendar.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#383232]/80">
            Frontrunner Travel creates premium race-weekend experiences designed
            around convenience, access and elevated city travel.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#383232]/80">
            Whether clients are travelling for grandstand action, hospitality or
            a luxury long weekend in Singapore, every itinerary is designed to
            maximise the experience both on and off the circuit.
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
            src="https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=1200&q=80"
            alt="Singapore skyline"
            className="h-[420px] w-full rounded-[32px] object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
            alt="Singapore nightlife"
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
            Experience Singapore after dark.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Enquire now for Singapore Grand Prix packages, hospitality access
            and tailored premium travel planning.
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
