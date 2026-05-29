"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MapPin, Clock } from "lucide-react";

const events = [
  {
    title: "Australian Open",
    href: "/events/australian-open",
    category: "Tennis",
    location: "Melbourne",
    image: "/australian-open.png",
    text: "Grand Slam tennis, premium hotels and Centre Court atmosphere.",
  },
  {
    title: "Australian Grand Prix",
    href: "/events/australian-grand-prix",
    category: "Formula 1",
    location: "Melbourne",
    image: "/ausgp.webp",
    text: "Race weekend travel with hospitality and the thrill of lights out.",
  },
  {
    title: "Monaco Grand Prix",
    href: "/events/monaco-grand-prix",
    category: "Formula 1",
    location: "Monaco",
    image: "/monaco4.jpg",
    text: "One of the most iconic weekends in motorsport.",
  },
  {
    title: "Singapore Grand Prix",
    href: "/events/singapore-grand-prix",
    category: "Formula 1",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    text: "Night racing, premium hospitality and electric atmosphere.",
  },
];

const moments = [
  "The silence before match point.",
  "The heartbeat before lights out.",
  "The roar after the impossible overtake.",
  "The goosebumps when the crowd rises.",
];

export default function Home() {
  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  return (
    <main className="min-h-screen bg-[#F9F4EE] text-[#0C2340]">
      <section className="relative flex min-h-screen items-center overflow-hidden pt-28">
        <div className="absolute inset-0">
          <img
            src="/australian-open.png"
            alt="Australian Open tennis"
            className="h-full w-full object-cover opacity-25 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F4EE] via-[#F9F4EE]/88 to-[#F9F4EE]/30" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0C2340]/10 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F35B15] shadow-sm">
              <Sparkles size={16} />
              Premium Global Sports Travel
            </p>

            <h1
              style={headingFont}
              className="max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-8xl"
            >
              There is nothing like being{" "}
              <span className="text-[#FF9016]">there.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-[#0C2340]/75">
              Frontrunner Travel creates premium sporting travel experiences
              built around atmosphere, access and unforgettable weekends.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/events"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#FF9016] px-7 py-4 font-black uppercase tracking-wide text-white shadow-xl shadow-[#F35B15]/20"
              >
                Explore Events
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-[#0C2340]/20 bg-white px-7 py-4 font-bold shadow-sm hover:bg-[#0C2340] hover:text-white"
              >
                Start Planning
              </a>
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/australian-open.png"
                alt="Tennis Open"
                className="h-72 rounded-[2rem] object-cover shadow-xl"
              />

              <img
                src="/ausgp.webp"
                alt="Grand Prix"
                className="mt-14 h-72 rounded-[2rem] object-cover shadow-xl"
              />

              <div className="col-span-2 rounded-[2rem] bg-[#0C2340] p-8 text-white shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#FF9016]">
                  Can you feel it?
                </p>

                <div
                  style={headingFont}
                  className="mt-10 grid grid-cols-3 gap-10 text-center text-4xl font-semibold leading-none"
                >
                  <p>The roar.</p>
                  <p>The rumble.</p>
                  <p>The gasp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
              Featured Events
            </p>

            <h2
              style={headingFont}
              className="mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-[-0.03em]"
            >
              Legendary events. Curated, never templated.
            </h2>
          </div>

          <p className="max-w-md text-[#0C2340]/65">
            Premium sports travel experiences built around access, atmosphere
            and intelligent planning.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {events.map((event) => (
            <a
              key={event.title}
              href={event.href}
              className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#0C2340]/10 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/88 via-[#0C2340]/25 to-transparent" />

                <div className="absolute left-5 top-5 rounded-full bg-[#FF9016] px-3 py-1 text-xs font-black uppercase text-white">
                  {event.category}
                </div>

                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 style={headingFont} className="text-3xl font-semibold">
                    {event.title}
                  </h3>

                  <p className="mt-2 flex items-center gap-2 text-sm text-white/85">
                    <MapPin size={15} />
                    {event.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-[#0C2340]/68">{event.text}</p>

                <span className="mt-auto pt-8 font-black uppercase tracking-wide text-[#F35B15]">
                  View Event →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {moments.map((moment) => (
              <div
                key={moment}
                className="rounded-[1.5rem] border border-[#0C2340]/10 bg-[#F9F4EE] p-7 shadow-sm"
              >
                <Clock className="mb-8 text-[#FF9016]" size={24} />

                <p
                  style={headingFont}
                  className="text-3xl font-semibold leading-tight"
                >
                  {moment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
