import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobNavOpen, setMobNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[200] flex items-center justify-between px-4 h-[60px] transition-all duration-300 md:px-6 md:h-[66px]",
        scrolled
          ? "bg-[#0A1628]/95 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,.5)]"
          : "bg-[#0A1628] shadow-[0_2px_24px_rgba(0,0,0,.4)]"
      )}
    >
      {/* Logo */}
      <a className="flex items-center gap-3 no-underline flex-shrink-0" href="#">
        <div className="w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0 md:w-14 md:h-14">
          <img src="/logo-lg.png" alt="TechBridge GH" className="w-full h-full object-contain" />
        </div>
      </a>

      {/* Desktop nav */}
      <nav className="hidden gap-1 md:flex">
        {[
          { label: "Custom Order", href: "#custom" },
          { label: "How It Works", href: "#how" },
          { label: "Contact", href: "#" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-[#94A3B8] no-underline text-xs font-medium px-3 py-2 rounded-md transition-all hover:text-white hover:bg-white/10"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-3">
        {/* Hamburger */}
        <button
          className="md:hidden bg-white/10 border-none text-white w-10 h-10 rounded-lg flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMobNavOpen(true)}
          aria-label="Open menu"
        >
          <span className="block w-4 h-0.5 bg-white rounded" />
          <span className="block w-4 h-0.5 bg-white rounded" />
          <span className="block w-4 h-0.5 bg-white rounded" />
        </button>
      </div>

      {/* Mobile nav */}
      {mobNavOpen && (
        <div className="fixed inset-0 z-[190] bg-[#112240] md:hidden" style={{ top: "60px" }}>
          <div className="p-4 space-y-1">
            {[
              { label: "Custom Order", href: "#custom" },
              { label: "How It Works", href: "#how" },
              { label: "Contact", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-[#94A3B8] no-underline text-sm font-medium py-3 px-4 border-b border-white/6"
                onClick={() => setMobNavOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
