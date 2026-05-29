import "./globals.css";

export const metadata = {
  title: "Frontrunner Travel",
  description: "Premium global sports travel experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed top-0 z-50 w-full border-b border-[#C0C0C8]/40 bg-[#F9F4EE]/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/frontrunnerlogo.png"
                alt="Frontrunner Travel"
                className="h-14 w-auto object-contain md:h-20"
              />
            </a>

            <nav className="hidden items-center gap-8 text-sm font-bold text-[#0C2340] md:flex">
              <a href="/" className="hover:text-[#FF9016]">Home</a>
              <a href="/events" className="hover:text-[#FF9016]">Events</a>
              <a href="/contact" className="hover:text-[#FF9016]">Contact</a>
              <a href="/terms" className="hover:text-[#FF9016]">T&Cs</a>
              <a
                href="/contact"
                className="rounded-full bg-[#0C2340] px-5 py-2 text-[#F9F4EE] hover:bg-[#FF9016]"
              >
                Enquire
              </a>
            </nav>

            <a
              href="/contact"
              className="rounded-full bg-[#0C2340] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#F9F4EE] md:hidden"
            >
              Enquire
            </a>
          </div>

          <nav className="flex justify-center gap-5 border-t border-[#C0C0C8]/30 px-4 py-3 text-xs font-bold uppercase tracking-wide text-[#0C2340] md:hidden">
            <a href="/">Home</a>
            <a href="/events">Events</a>
            <a href="/contact">Contact</a>
            <a href="/terms">T&Cs</a>
          </nav>
        </header>

        {children}

        <footer className="border-t border-[#C0C0C8]/40 bg-[#F9F4EE] px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#0C2340]/70 md:flex-row md:items-center md:justify-between">
            <p>© Frontrunner Travel. Owned and operated by Keith Prowse Travel.</p>

            <div className="flex flex-wrap gap-5 font-bold">
              <a href="/events" className="hover:text-[#FF9016]">
                Events
              </a>
              <a href="/contact" className="hover:text-[#FF9016]">
                Contact
              </a>
              <a href="/terms" className="hover:text-[#FF9016]">
                Terms & Conditions
              </a>
              <a
                href="https://www.atol.org.uk/ATOLCertificate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FF9016]"
              >
                ATOL Certificate
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
