"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  Trophy,
  MapPin,
  Sparkles,
  CalendarDays,
  Plane,
  Users,
  Star,
  Clock,
  Hotel,
  Ticket,
  Utensils,
  CheckCircle2,
} from "lucide-react";

const events = [
  {
    title: "Australian Open",
    category: "Tennis",
    location: "Melbourne",
    image:
      "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?auto=format&fit=crop&w=1200&q=80",
    line: "Grand Slam tennis, premium hotels, curated Melbourne dining and Centre Court atmosphere.",
  },
  {
    title: "Australian Grand Prix",
    category: "Formula 1",
    location: "Melbourne",
    image:
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80",
    line: "Race weekend travel with hospitality, city energy and the thrill of lights out.",
  },
  {
    title: "Monaco Grand Prix",
    category: "Formula 1",
    location: "Monaco",
    image:
      "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?auto=format&fit=crop&w=1200&q=80",
    line: "The most iconic streets in motorsport, rare access and a weekend with serious bragging rights.",
  },
  {
    title: "Singapore Grand Prix",
    category: "Formula 1",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    line: "Night racing, world-class hospitality and a city built for after-dark spectacle.",
  },
];

const inclusions = [
  { title: "Event tickets & hospitality", icon: Ticket },
  { title: "Premium hotel options", icon: Hotel },
  { title: "Transfers & travel logistics", icon: Plane },
  { title: "Dining, culture & local access", icon: Utensils },
];

const proof = [
  {
    title: "Sports travel specialists",
    text: "We do not just book hotels near stadiums. We build trips around the rhythm, pressure and emotion of major sporting events.",
    icon: Trophy,
  },
  {
    title: "Access that feels rare",
    text: "Hospitality, ticketing, seating, hotels and curated extras designed to make the weekend feel genuinely elevated.",
    icon: Star,
  },
  {
    title: "Personal itineraries",
    text: "Each trip can include restaurants, transfers, recovery time, city experiences and the details that stop travel becoming admin.",
    icon: CalendarDays,
  },
  {
    title: "Built for people who feel it",
    text: "For clients who love the sport, the atmosphere and the story they will still be telling years later.",
    icon: Users,
  },
];

const moments = [
  "The silence before match point.",
  "The heartbeat before lights out.",
  "The roar after the impossible overtake.",
  "The goosebumps when the crowd rises.",
];

const gallery = [
  "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1542144582-1ba00456b5e3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=80",
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
    <div style={bodyFont} className="min-h-screen bg-[#F9F4EE] text-[#383232]">
      <header className="fixed top-0 z-50 w-full border-b border-[#383232]/10 bg-[#F9F4EE]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F35B15] font-black text-white">
              FR
            </div>
            <div>
              <p className="text-lg font-black tracking-tight">FRONTRUNNER</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#383232]/60">Travel</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#383232]/75 md:flex">
            <a href="#events" className="hover:text-[#F35B15]">Events</a>
            <a href="#packages" className="hover:text-[#F35B15]">Packages</a>
            <a href="#protection" className="hover:text-[#F35B15]">Protection</a>
            <a href="#contact" className="rounded-full bg-[#383232] px-5 py-2 text-white hover:bg-[#F35B15]">Enquire</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?auto=format&fit=crop&w=1800&q=80"
              alt="Sports crowd"
              className="h-full w-full object-cover opacity-28 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9F4EE] via-[#F9F4EE]/88 to-[#F9F4EE]/30" />
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#F9F4EE] to-transparent" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#383232]/10 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.2em] text-[#F35B15] shadow-sm">
                <Sparkles size={16} /> Premium global sports travel
              </p>

              <h1 style={headingFont} className="max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.04em] text-[#383232] sm:text-7xl lg:text-8xl">
                There is nothing like being <span className="text-[#F35B15]">there.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl leading-8 text-[#383232]/75">
                Frontrunner Travel turns the world’s greatest sporting events into unforgettable travel experiences — with premium access, hospitality, hotels and the details handled properly.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="/events" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F35B15] px-7 py-4 font-black uppercase tracking-wide text-white shadow-xl shadow-[#F35B15]/20">
                  View featured events <ArrowRight size={18} />
                </a>
                <a href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#383232]/20 bg-white px-7 py-4 font-bold shadow-sm hover:bg-[#383232] hover:text-white">
                  Start planning
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80" alt="Live sport atmosphere" className="h-72 rounded-[2rem] object-cover shadow-xl" />
                <img src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80" alt="Stadium crowd" className="mt-14 h-72 rounded-[2rem] object-cover shadow-xl" />
                <div className="col-span-2 rounded-[2rem] bg-[#383232] p-8 text-white shadow-xl">
                  <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">Can you feel it?</p>
                  <div style={headingFont} className="mt-10 grid grid-cols-3 gap-6 text-4xl font-semibold leading-none">
                    <p>The roar.</p>
                    <p>The rumble.</p>
                    <p>The gasp.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-y border-[#383232]/10 bg-white py-5">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm font-semibold text-[#383232]/70 md:flex-row md:items-center md:justify-between">
            <span>Featured launch events: Australian Open · Australian Grand Prix · Monaco Grand Prix · Singapore Grand Prix</span>
            <span className="text-[#F35B15]">Owned and operated by Keith Prowse Travel</span>
          </div>
        </section>

        <section id="events" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">Featured events</p>
              <h2 style={headingFont} className="mt-4 max-w-3xl text-5xl font-semibold leading-[1] tracking-[-0.03em]">
                Four iconic events. One expert way in.
              </h2>
            </div>
            <p className="max-w-md text-[#383232]/65">
              Each event should lead to a dedicated landing page with package details, inclusions and enquiry capture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event) => (
              <motion.article whileHover={{ y: -8 }} key={event.title} className="group overflow-hidden rounded-[1.75rem] border border-[#383232]/10 bg-white shadow-sm transition hover:shadow-2xl">
                <div className="relative h-80 overflow-hidden">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#383232]/88 via-[#383232]/25 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-[#F35B15] px-3 py-1 text-xs font-black uppercase text-white">{event.category}</div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <h3 style={headingFont} className="text-3xl font-semibold leading-none">{event.title}</h3>
                    <p className="mt-2 flex items-center gap-2 text-sm text-white/85"><MapPin size={15} /> {event.location}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="min-h-20 text-[#383232]/68">{event.line}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-black uppercase tracking-wide text-[#F35B15]">
                    Register interest <ArrowRight size={18} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="packages" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">Package intelligence</p>
                <h2 style={headingFont} className="mt-4 text-5xl font-semibold leading-[1] tracking-[-0.03em]">
                  This is not just a ticket and a room.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#383232]/70">
                  The strongest version of Frontrunner sells the complete event weekend: where to stay, where to sit, how to move, what to do between sessions and how to make the trip feel effortless.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {inclusions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-center gap-3 rounded-2xl bg-[#F9F4EE] p-4 font-bold">
                        <Icon className="text-[#F35B15]" size={20} /> {item.title}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2rem] bg-[#383232] p-6 text-white shadow-xl">
                <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80" alt="Premium event crowd" className="h-96 w-full rounded-[1.5rem] object-cover opacity-80" />
                <div className="absolute bottom-10 left-10 right-10 rounded-[1.25rem] bg-[#383232]/90 p-6 backdrop-blur">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F35B15]">Built around the event</p>
                  <p style={headingFont} className="mt-3 text-3xl font-semibold leading-none">Hospitality. Hotels. Access. Atmosphere.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">Feel more</p>
                <h2 style={headingFont} className="mt-4 text-5xl font-semibold leading-[1] tracking-[-0.03em]">
                  The moments people travel across the world for.
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {moments.map((moment) => (
                  <div key={moment} className="rounded-[1.5rem] border border-[#383232]/10 bg-white p-7 shadow-sm">
                    <Clock className="mb-8 text-[#F35B15]" size={24} />
                    <p style={headingFont} className="text-2xl font-semibold leading-tight">{moment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">The experience</p>
                <h2 style={headingFont} className="mt-4 text-5xl font-semibold leading-[1] tracking-[-0.03em]">
                  Travel with atmosphere, not admin.
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#383232]/70">
                  The site needs to show that Frontrunner understands the whole trip — the event, the city, the food, the crowd, the downtime and the details that make premium travel feel seamless.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {gallery.map((image, index) => (
                  <img key={image} src={image} alt={`Sports travel gallery ${index + 1}`} className={`rounded-[1.25rem] object-cover shadow-sm ${index === 0 || index === 3 ? "h-64" : "h-48"} ${index === 1 || index === 4 ? "mt-10" : ""}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="border-y border-[#383232]/10 bg-[#F9F4EE]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">Why Frontrunner</p>
              <h2 style={headingFont} className="mt-4 text-5xl font-semibold leading-[1]">More than a ticket. More than a hotel.</h2>
              <p className="mt-6 text-lg leading-8 text-[#383232]/70">
                A premium sporting trip lives or dies on the quality of the planning. The details are not decoration — they are the product.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {proof.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-[#383232]/10 bg-white p-7 shadow-sm">
                    <div className="mb-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#F35B15] text-white"><Icon size={20} /></div>
                    <h3 style={headingFont} className="text-2xl font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-4 leading-7 text-[#383232]/65">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="protection" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-8 rounded-[2rem] border border-[#383232]/10 bg-[#F9F4EE] p-8 shadow-sm lg:grid-cols-[0.8fr_1.2fr] lg:p-12">
              <div>
                <ShieldCheck className="text-[#F35B15]" size={38} />
                <h2 style={headingFont} className="mt-5 text-4xl font-semibold leading-none">Financial protection matters.</h2>
                <p className="mt-5 text-[#383232]/70">Clear protection wording should be visible, not buried. It builds trust before anyone enquires.</p>
              </div>
              <div className="space-y-5 text-sm leading-7 text-[#383232]/75">
                <p>
                  All the flights and flight inclusive holidays on this website are financially protected either by ABTOT or the ATOL scheme. When you pay for something protected by the ATOL scheme you will be supplied with an ATOL Certificate. Please ask for it and check to ensure everything you booked is listed on it.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <a href="https://www.atol.org.uk/ATOLCertificate" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-[#383232]/10 bg-white p-5 font-black text-[#383232] transition hover:bg-[#F35B15] hover:text-white">
                    ATOL Certificate information<br /><span className="text-sm font-semibold opacity-70">Membership no. 12708</span>
                  </a>
                  <a href="https://www.abtot.com" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-[#383232]/10 bg-white p-5 font-black text-[#383232] transition hover:bg-[#F35B15] hover:text-white">
                    ABTOT protection<br /><span className="text-sm font-semibold opacity-70">Membership no. 5656</span>
                  </a>
                </div>
                <p className="text-xs text-[#383232]/55">
                  Full booking conditions and Package Travel Regulations wording should sit on a dedicated terms page before launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="mx-auto max-w-7xl px-6 py-24">
          <div className="overflow-hidden rounded-[2rem] bg-[#383232] text-white shadow-xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
              <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80" alt="Event crowd atmosphere" className="h-full min-h-80 object-cover opacity-75" />
              <div className="p-8 md:p-12 lg:p-16">
                <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">Stay in the know</p>
                <h2 style={headingFont} className="mt-4 text-5xl font-semibold leading-[1]">First access to new events.</h2>
                <p className="mt-5 max-w-2xl text-lg text-white/70">Be first to hear when new major-event packages, hospitality releases and limited-access experiences open.</p>
                <form className="mt-8 rounded-[1.5rem] bg-[#F9F4EE] p-4">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input type="email" placeholder="Email address" className="min-h-14 flex-1 rounded-full border border-[#383232]/10 bg-white px-5 text-[#383232] outline-none" />
                    <button className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#F35B15] px-6 font-black uppercase text-white">
                      <Mail size={18} /> Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-[#383232]/10 bg-white p-8 shadow-sm lg:col-span-2">
              <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">Contact us</p>
              <h2 style={headingFont} className="mt-4 text-5xl font-semibold leading-[1]">Start with the event. We’ll shape the rest.</h2>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <input placeholder="First name" className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none" />
                <input placeholder="Last name" className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none" />
                <input placeholder="Email" className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none" />
                <input placeholder="Event of interest" className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none" />
                <textarea placeholder="Tell us what you’re planning" className="min-h-32 rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none md:col-span-2" />
              </div>
              <button className="mt-5 rounded-full bg-[#383232] px-7 py-4 font-black uppercase text-white hover:bg-[#F35B15]">Send enquiry</button>
            </div>

            <aside className="rounded-[1.75rem] border border-[#383232]/10 bg-white p-8 shadow-sm">
              <CheckCircle2 className="text-[#F35B15]" size={34} />
              <h3 style={headingFont} className="mt-5 text-2xl font-semibold">Launch requirements</h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#383232]/70">
                <li>HubSpot enquiry form integration</li>
                <li>Dedicated event landing pages</li>
                <li>Booking conditions page</li>
                <li>ATOL and ABTOT logo assets</li>
                <li>Official Keith Prowse Travel ownership logo</li>
              </ul>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
