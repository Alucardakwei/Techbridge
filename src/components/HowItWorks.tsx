import { useScrollReveal } from "@/hooks/use-scroll-animation";

const steps = [
  {
    num: "1",
    title: "Choose or Request",
    desc: "Browse our catalogue or describe any product from any brand.",
    icon: "🛍",
  },
  {
    num: "2",
    title: "We Source It",
    desc: "We find your exact product from verified Chinese suppliers.",
    icon: "🏭",
  },
  {
    num: "3",
    title: "Get Your Quote",
    desc: "We WhatsApp you the final price including shipping to Ghana.",
    icon: "📱",
  },
  {
    num: "4",
    title: "Pay & Receive",
    desc: "Confirm, pay, and your tech arrives right here in Accra.",
    icon: "📦",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useScrollReveal(0.2);

  return (
    <section id="how" className="bg-[#0A1628] px-5 py-16 text-center md:px-8 md:py-20">
      {/* Background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="mesh-blob-1 absolute rounded-full" style={{ width: 400, height: 400, background: "radial-gradient(circle, rgba(0,180,216,0.3) 0%, transparent 70%)", left: "-10%", top: "20%" }} />
        <div className="mesh-blob-2 absolute rounded-full" style={{ width: 350, height: 350, background: "radial-gradient(circle, rgba(0,229,255,0.2) 0%, transparent 70%)", right: "-5%", bottom: "10%" }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <p className="text-xs font-bold uppercase tracking-widest text-[#00B4D8] mb-3">Simple Process</p>
        <h2 className="font-['Syne',sans-serif] text-2xl font-extrabold text-white mb-4 md:text-3xl">
          How TechBridge GH Works
        </h2>
        <p className="text-[#94A3B8] text-sm max-w-md mx-auto mb-12 leading-relaxed">
          From China factory floor to your door in Accra — four simple steps.
        </p>

        {/* Step cards */}
        <div
          ref={ref}
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`bg-white/6 border border-white/10 rounded-2xl p-5 transition-all hover:bg-white/12 hover:border-[#00B4D8]/30 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,180,216,.15)] ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] text-white font-['Syne',sans-serif] font-extrabold text-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                style={{ boxShadow: "0 4px 16px rgba(0,180,216,0.3)" }}
              >
                {step.num}
              </div>
              <div className="text-2xl mb-2">{step.icon}</div>
              <h3 className="text-white font-['Syne',sans-serif] font-bold text-sm mb-2">{step.title}</h3>
              <p className="text-xs text-[#94A3B8] leading-relaxed">{step.desc}</p>
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full h-px bg-gradient-to-r from-[#00B4D8]/50 to-transparent" style={{ width: 40 }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
