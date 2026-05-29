export default function TermsPage() {
  const headingFont = {
    fontFamily: '"Begum Medium", Georgia, serif',
  };

  return (
    <main className="min-h-screen bg-[#F9F4EE] px-6 py-28 text-[#0C2340]">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-[#FF9016]">
          Terms & Conditions
        </p>

        <h1
          style={headingFont}
          className="mt-4 text-6xl font-semibold leading-[0.95] tracking-[-0.04em]"
        >
          Booking Conditions & Financial Protection
        </h1>

        <div className="mt-10 space-y-8 rounded-[2rem] bg-white p-10 shadow-sm border border-[#C0C0C8]/30">
          <section>
            <h2 className="text-xl font-bold text-[#0C2340]">
              Your Financial Protection
            </h2>

            <p className="mt-4 leading-8 text-[#0C2340]/75">
              The Association of Bonded Travel Organisers Trust Limited (ABTOT)
              provides financial protection under its ATOL Franchise and The
              Package Travel and Linked Travel Arrangements Regulations 2018.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0C2340]">
              ABTOT & ATOL Details
            </h2>

            <p className="mt-4 leading-8 text-[#0C2340]/75">
              ABTOT Number: 5656
              <br />
              ATOL Number: 12708
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0C2340]">
              Protection Provided
            </h2>

            <p className="mt-4 leading-8 text-[#0C2340]/75">
              Protection may apply to flight-inclusive packages, non-flight
              packages and linked travel arrangements depending on the booking
              type.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0C2340]">
              Important Information
            </h2>

            <p className="mt-4 leading-8 text-[#0C2340]/75">
              Full booking terms and conditions will be supplied at the time of
              quotation and booking confirmation.
            </p>
          </section>

          <div className="pt-4">
            <a
              href="/contact"
              className="inline-block rounded-full bg-[#0C2340] px-8 py-4 font-bold uppercase tracking-wide text-white hover:bg-[#FF9016]"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
