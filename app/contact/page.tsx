export default function ContactPage() {
  const headingFont = {
    fontFamily: '"Begum Medium", Georgia, serif',
  };

  return (
    <main className="min-h-screen bg-[#F9F4EE] px-6 py-28 text-[#0C2340]">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#FF9016]">
            Contact Us
          </p>

          <h1
            style={headingFont}
            className="mt-4 text-6xl font-semibold leading-[0.95] tracking-[-0.04em]"
          >
            Start with the event. We’ll shape the rest.
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-8 text-[#0C2340]/70">
            Tell us which event interests you and the type of experience you're
            looking for. We'll help create the right itinerary, package and
            level of access.
          </p>

          <div className="mt-10 rounded-[2rem] bg-white p-8 shadow-sm border border-[#C0C0C8]/30">
            <p className="font-bold uppercase tracking-[0.25em] text-[#FF9016]">
              Enquiry Details
            </p>

            <div className="mt-6 space-y-4 text-[#0C2340]/70">
              <p>
                Complete the form and one of our team will be in touch.
              </p>
              <p>
                We can tailor accommodation, hospitality, dining and travel
                arrangements to suit your requirements.
              </p>
            </div>
          </div>
        </div>

        <form className="rounded-[2rem] bg-white p-8 shadow-xl border border-[#C0C0C8]/30">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              placeholder="First Name"
              className="rounded-2xl border border-[#C0C0C8]/50 bg-[#F9F4EE] px-5 py-4"
            />

            <input
              placeholder="Last Name"
              className="rounded-2xl border border-[#C0C0C8]/50 bg-[#F9F4EE] px-5 py-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="rounded-2xl border border-[#C0C0C8]/50 bg-[#F9F4EE] px-5 py-4"
            />

            <input
              placeholder="Phone"
              className="rounded-2xl border border-[#C0C0C8]/50 bg-[#F9F4EE] px-5 py-4"
            />

            <select className="rounded-2xl border border-[#C0C0C8]/50 bg-[#F9F4EE] px-5 py-4">
              <option>Event of Interest</option>
              <option>Australian Open</option>
              <option>Australian Grand Prix</option>
              <option>Monaco Grand Prix</option>
              <option>Singapore Grand Prix</option>
            </select>

            <input
              placeholder="Number of Travellers"
              className="rounded-2xl border border-[#C0C0C8]/50 bg-[#F9F4EE] px-5 py-4"
            />

            <textarea
              placeholder="Tell us more about your requirements"
              className="min-h-40 rounded-2xl border border-[#C0C0C8]/50 bg-[#F9F4EE] px-5 py-4 md:col-span-2"
            />
          </div>

          <button className="mt-6 rounded-full bg-[#0C2340] px-8 py-4 font-bold uppercase tracking-wide text-white hover:bg-[#FF9016]">
            Send Enquiry
          </button>
        </form>
      </section>
    </main>
  );
}
