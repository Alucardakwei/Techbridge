import { useEffect, useState } from "react";
import { Shield, Truck, Phone, CheckCircle } from "lucide-react";
import { useParallax } from "@/hooks/use-scroll-animation";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [showCursor, setShowCursor] = useState(false);
  const { ref: parallaxRef, offset } = useParallax(0.15);

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      if (!showCursor) setShowCursor(true);
    };
    const onLeave = () => setShowCursor(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [showCursor]);

  const trustBadges = [
    { icon: Shield, label: "Verified Suppliers", delay: 0 },
    { icon: Truck, label: "Fast Shipping to Accra", delay: 100 },
    { icon: Phone, label: "WhatsApp 24/7", delay: 200 },
    { icon: CheckCircle, label: "Price Guarantee", delay: 300 },
  ];

  return (
    <>
      {/* Cursor trail */}
      {showCursor && (
        <div
          className="cursor-trail hidden md:block"
          style={{
            left: cursorPos.x - 4,
            top: cursorPos.y - 4,
            transform: `scale(${showCursor ? 1 : 0})`,
          }}
        />
      )}

      <section
        ref={parallaxRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#112240] to-[#0D3460] px-5 pt-16 pb-16 text-center md:px-8 md:pt-24 md:pb-24"
      >
        {/* Animated gradient mesh blobs — the visual centerpiece */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="mesh-blob-1 absolute rounded-full"
            style={{
              width: 600, height: 600,
              background: "radial-gradient(circle, rgba(0,180,216,0.45) 0%, transparent 70%)",
              left: "10%", top: "10%",
              transform: `translateY(${offset * 0.3}px)`,
            }}
          />
          <div
            className="mesh-blob-2 absolute rounded-full"
            style={{
              width: 500, height: 500,
              background: "radial-gradient(circle, rgba(0,119,182,0.35) 0%, transparent 70%)",
              right: "5%", top: "20%",
              transform: `translateY(${offset * 0.15}px)`,
            }}
          />
          <div
            className="mesh-blob-3 absolute rounded-full"
            style={{
              width: 400, height: 400,
              background: "radial-gradient(circle, rgba(0,229,255,0.3) 0%, transparent 70%)",
              left: "40%", bottom: "5%",
              transform: `translateY(${offset * 0.5}px)`,
            }}
          />
          {/* Dot grid */}
          <div className="dot-grid absolute inset-0 opacity-40" />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div
            className={`inline-flex items-center gap-2 bg-[#00E5FF]/10 border border-[#00E5FF]/25 text-[#00E5FF] text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide transition-all duration-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
            🇨🇳 China to Ghana 🇬🇭 · Best Prices
          </div>

          {/* Headline */}
          <h1
            className={`font-['Syne',sans-serif] text-4xl font-extrabold text-white leading-[1.1] mb-5 md:text-6xl md:leading-[1.05] transition-all duration-500 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Premium Tech,<br />
            <span className="gradient-text">Ghana Price.</span>
          </h1>

          <p
            className={`text-[#94A3B8] text-base max-w-xl mx-auto mb-8 leading-relaxed md:text-lg transition-all duration-500 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Tell us exactly what you want. We source direct from China and quote you the best deal on WhatsApp.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex gap-3 justify-center flex-wrap mb-12 transition-all duration-500 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <button
              onClick={() => document.getElementById("custom")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white border-none px-7 py-3.5 rounded-lg text-sm font-bold transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_26px_rgba(0,180,216,.5)] shadow-[0_4px_18px_rgba(0,180,216,.35)] hover:scale-105 active:scale-95"
            >
              ✍️ Request a Product
            </button>
            <a
              href="https://wa.me/233593320772"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border-2 border-white/30 px-7 py-3.5 rounded-lg text-sm font-medium transition-all hover:border-[#25D366] hover:bg-[#25D366]/10 hover:scale-105 active:scale-95 inline-flex items-center gap-2"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          {/* Animated trust badges */}
          <div className="flex justify-center gap-3 flex-wrap pt-6 border-t border-white/8 md:gap-6">
            {trustBadges.map(({ icon: Icon, label, delay }) => (
              <div
                key={label}
                className="trust-badge flex items-center gap-1.5 text-xs text-[#94A3B8] font-medium px-3 py-2 rounded-xl bg-white/5 border border-white/8"
                style={{ animationDelay: `${delay}ms` }}
              >
                <Icon className="w-3.5 h-3.5 text-[#00B4D8] flex-shrink-0" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
