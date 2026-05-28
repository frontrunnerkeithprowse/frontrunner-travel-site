export default function ContactPage() {
  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  return (
    <main className="min-h-screen bg-[#F9F4EE] px-6 py-28 text-[#383232]">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
            Contact Us
          </p>

          <h1
            style={headingFont}
            className="mt-4 text-6xl font-semibold leading-[0.95] tracking-[-0.04em]"
          >
            Start with the event. We’ll shape the rest.
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-8 text-[#383232]/70">
            Tell us which event you are interested in and the kind of experience
            you want. Frontrunner Travel will help shape the right package,
            itinerary and level of access.
          </p>

          <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm">
            <p className="font-black uppercase tracking-[0.25em] text-[#F35B15]">
              Enquiry Details
            </p>

            <div className="mt-6 space-y-4 text-[#383232]/70">
              <p>
                For launch, this form can be connected to HubSpot, email or
                another CRM.
              </p>
              <p>
                Recommended fields: name, email, phone, event of interest,
                preferred travel dates, number of travellers and package
                preferences.
              </p>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-8 shadow-xl">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              placeholder="First name"
              className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none"
            />

            <input
              placeholder="Last name"
              className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none"
            />

            <input
              placeholder="Email"
              type="email"
              className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none"
            />

            <input
              placeholder="Phone"
              className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none"
            />

            <select className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none">
              <option>Event of interest</option>
              <option>Australian Open</option>
              <option>Australian Grand Prix</option>
              <option>Monaco Grand Prix</option>
              <option>Singapore Grand Prix</option>
            </select>

            <input
              placeholder="Number of travellers"
              className="rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none"
            />

            <textarea
              placeholder="Tell us what you are looking for"
              className="min-h-40 rounded-2xl border border-[#383232]/10 bg-[#F9F4EE] px-5 py-4 outline-none md:col-span-2"
            />
          </div>

          <button className="mt-6 rounded-full bg-[#F35B15] px-8 py-4 font-black uppercase tracking-wide text-white hover:bg-[#d94d0f]">
            Send Enquiry
          </button>

          <p className="mt-5 text-sm leading-6 text-[#383232]/55">
            This is a front-end form placeholder. It will need to be connected to
            HubSpot, email, Formspree, or another form handler before launch.
          </p>
        </form>
      </section>
    </main>
  );
}
