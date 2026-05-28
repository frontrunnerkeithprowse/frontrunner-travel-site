"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
 ShieldCheck,
  Trophy,
  MapPin,
  Sparkles,
} from "lucide-react";

const events = [
  {
    title: "Australian Open",
    category: "Tennis",
    location: "Melbourne",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
    line: "Premium tennis travel built around the first Grand Slam of the year.",
  },
  {
    title: "Australian Grand Prix",
    category: "Formula 1",
    location: "Melbourne",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
    line: "Feel the rumble, the speed and the city-wide spectacle.",
  },
  {
    title: "Monaco Grand Prix",
    category: "Formula 1",
    location: "Monaco",
    image:
      "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?auto=format&fit=crop&w=1200&q=80",
    line:
      "Iconic streets, rare access and a weekend with serious bragging rights.",
  },
  {
    title: "Singapore Grand Prix",
    category: "Formula 1",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    line: "Night racing, electric energy and a city that knows how to host.",
  },
];

const proof = [
  "More exclusive access",
  "More personal itineraries",
  "More premium inclusions",
  "More than sport: travel, culture and community",
];

export default function Home() {
  const bodyFont = {
    fontFamily:
      '"PP Neue Montreal", "Helvetica Neue", Helvetica, Arial, sans-serif',
  };

  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  return (
    <div
      style={bodyFont}
      className="min-h-screen bg-[#F9F4EE] text-[#383232]"
    >
      <header className="fixed top-0 z-50 w-full border-b border-[#383232]/10 bg-[#F9F4EE]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F35B15] font-black text-white">
              FR
            </div>

            <div>
              <p className="text-lg font-black tracking-tight">
                FRONTRUNNER
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#383232]/60">
                Travel
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 md:flex">
            <a href="#events">Events</a>
            <a href="#why">Why us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&w=1800&q=80"
              alt="Sports crowd"
              className="h-full w-full object-cover opacity-20 grayscale"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#F9F4EE] via-[#F9F4EE]/90 to-[#F9F4EE]/60" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#383232]/10 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F35B15]">
                <Sparkles size={16} />
                Can you feel it?
              </p>

              <h1
                style={headingFont}
                className="max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.04em] text-[#383232] sm:text-7xl lg:text-8xl"
              >
                There is nothing like being{" "}
                <span className="text-[#F35B15]">there.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-[#383232]/75">
                Experts in global sporting events and travel packages,
                Frontrunner Travel turns the world’s greatest sporting moments
                into unforgettable travel experiences.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#events"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F35B15] px-7 py-4 font-black uppercase tracking-wide text-white"
                >
                  View featured events
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#383232]/20 bg-white px-7 py-4 font-bold"
                >
                  Start planning
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="events" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
              Featured events
            </p>

            <h2
              style={headingFont}
              className="mt-4 text-5xl font-semibold leading-[1] tracking-[-0.03em]"
            >
              Four launch pages. Big-event energy.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event) => (
              <motion.article
                whileHover={{ y: -8 }}
                key={event.title}
                className="overflow-hidden rounded-[1.75rem] border border-[#383232]/10 bg-white shadow-sm"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#383232]/80 to-transparent" />

                  <div className="absolute left-5 top-5 rounded-full bg-[#F35B15] px-3 py-1 text-xs font-black uppercase text-white">
                    {event.category}
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3
                      style={headingFont}
                      className="text-3xl font-semibold"
                    >
                      {event.title}
                    </h3>

                    <p className="mt-2 flex items-center gap-2 text-sm text-white/85">
                      <MapPin size={15} />
                      {event.location}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-[#383232]/68">{event.line}</p>

                  <button className="mt-5 inline-flex items-center gap-2 font-black uppercase tracking-wide text-[#F35B15]">
                    For more information
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section
          id="why"
          className="border-y border-[#383232]/10 bg-white"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
                Why Frontrunner
              </p>

              <h2
                style={headingFont}
                className="mt-4 text-5xl font-semibold leading-[1]"
              >
                More than a ticket. More than a hotel.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#383232]/70">
                The site needs to sell the total package: sport, travel,
                culture, community and the emotional pull of being there.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {proof.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-[#383232]/10 bg-[#F9F4EE] p-7"
                >
                  <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F35B15] text-white">
                    <Trophy size={20} />
                  </div>

                  <p
                    style={headingFont}
                    className="text-2xl font-semibold leading-tight"
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="newsletter"
          className="mx-auto max-w-7xl px-6 py-24"
        >
          <div className="rounded-[2rem] bg-[#383232] p-8 text-white md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
                  Stay in the know
                </p>

                <h2
                  style={headingFont}
                  className="mt-4 text-5xl font-semibold leading-[1]"
                >
                  First access to new events.
                </h2>

                <p className="mt-5 max-w-2xl text-lg text-white/70">
                  Newsletter sign-up integrated with CRM and event launches.
                </p>
              </div>

              <form className="rounded-[1.5rem] bg-[#F9F4EE] p-4">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="min-h-14 flex-1 rounded-full border border-[#383232]/10 bg-white px-5 text-[#383232]"
                  />

                  <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#F35B15] px-6 font-black uppercase text-white">
                    <Mail size={18} />
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 pb-24"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[#383232]/10 bg-white p-8 lg:col-span-2">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
                Contact us
              </p>

              <h2
                style={headingFont}
                className="mt-4 text-5xl font-semibold leading-[1]"
              >
                Ready to feel more?
              </h2>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <input
                  placeholder="First name"
                  className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4"
                />

                <input
                  placeholder="Last name"
                  className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4"
                />

                <input
                  placeholder="Email"
                  className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4"
                />

                <input
                  placeholder="Event of interest"
                  className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4"
                />

                <textarea
                  placeholder="Tell us what you’re planning"
                  className="min-h-32 rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 md:col-span-2"
                />
              </div>

              <button className="mt-5 rounded-full bg-[#383232] px-7 py-4 font-black uppercase text-white">
                Send enquiry
              </button>
            </div>

            <aside className="rounded-[1.75rem] border border-[#383232]/10 bg-white p-8">
              <ShieldCheck className="text-[#F35B15]" size={34} />

              <h3
                style={headingFont}
                className="mt-5 text-2xl font-semibold"
              >
                Financial protection
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#383232]/70">
                All flights and flight-inclusive holidays are financially
                protected by ABTOT or the ATOL scheme.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="https://www.atol.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#383232]/10 bg-[#F9F4EE] p-4 text-center font-black transition hover:bg-[#F35B15] hover:text-white"
                >
                  ATOL
                </a>

                <a
                  href="https://www.abtot.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#383232]/10 bg-[#F9F4EE] p-4 text-center font-black transition hover:bg-[#F35B15] hover:text-white"
                >
                  ABTOT
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
