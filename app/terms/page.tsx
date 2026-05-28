export default function TermsPage() {
  const headingFont = {
    fontFamily: '"Playfair Display", Georgia, serif',
  };

  return (
    <main className="min-h-screen bg-[#F9F4EE] px-6 py-28 text-[#383232]">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-[#F35B15]">
          Terms & Conditions
        </p>

        <h1
          style={headingFont}
          className="mt-4 text-6xl font-semibold leading-[0.95] tracking-[-0.04em]"
        >
          Booking Conditions & Financial Protection
        </h1>

        <div className="mt-10 space-y-8 rounded-[2rem] bg-white p-8 leading-8 shadow-sm">
          <section>
            <h2 className="text-xl font-black">Your Financial Protection</h2>
            <p className="mt-4 text-[#383232]/75">
              The Association of Bonded Travel Organisers Trust Limited
              (ABTOT) provides financial protection under its ATOL Franchise
              and The Package Travel and Linked Travel Arrangements Regulations
              2018 for Frontrunner Travel UK Limited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">ABTOT & ATOL Details</h2>
            <p className="mt-4 text-[#383232]/75">
              ABTOT number: 5656. ATOL number: 12708.
            </p>
            <p className="mt-4 text-[#383232]/75">
              When you buy an ATOL protected flight or flight-inclusive holiday,
              you will receive an ATOL Certificate. Please check that everything
              you booked is listed on it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">Protection Provided</h2>
            <p className="mt-4 text-[#383232]/75">
              Protection may apply to non-flight packages, flight-inclusive
              packages, flight-only arrangements and linked travel arrangements,
              depending on where and how the booking is made.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black">Important Note</h2>
            <p className="mt-4 text-[#383232]/75">
              This page is a draft placeholder based on the website brief. Final
              wording should be checked by Frontrunner Travel / Keith Prowse
              Travel before launch.
            </p>
          </section>

          <div className="pt-6">
            <a
              href="/contact"
              className="inline-block rounded-full bg-[#F35B15] px-8 py-4 font-black uppercase tracking-wide text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
