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
        <header className="fixed top-0 z-50 w-full border-b border-[#383232]/10 bg-[#F9F4EE]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-3">
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
            </a>

            <nav className="hidden items-center gap-8 text-sm font-semibold text-[#383232]/75 md:flex">
              <a href="/" className="hover:text-[#F35B15]">
                Home
              </a>
              <a href="/events" className="hover:text-[#F35B15]">
                Events
              </a>
              <a href="/contact" className="hover:text-[#F35B15]">
                Contact
              </a>
              <a href="/terms" className="hover:text-[#F35B15]">
                T&Cs
              </a>
              <a
                href="/contact"
                className="rounded-full bg-[#383232] px-5 py-2 text-white hover:bg-[#F35B15]"
              >
                Enquire
              </a>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-[#383232]/10 bg-white px-6 py-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#383232]/60 md:flex-row md:items-center md:justify-between">
            <p>© Frontrunner Travel. Owned and operated by Keith Prowse Travel.</p>

            <div className="flex flex-wrap gap-5 font-semibold">
              <a href="/events" className="hover:text-[#F35B15]">
                Events
              </a>
              <a href="/contact" className="hover:text-[#F35B15]">
                Contact
              </a>
              <a href="/terms" className="hover:text-[#F35B15]">
                Terms & Conditions
              </a>
              <a
                href="https://www.atol.org.uk/ATOLCertificate"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F35B15]"
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
