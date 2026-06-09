import { useScrollReveal } from "@/hooks/use-scroll-animation";

export default function Footer() {
  const { ref, visible } = useScrollReveal(0.3);

  return (
    <footer
      ref={ref}
      className={`relative overflow-hidden bg-[#0A1628] px-5 py-12 text-center text-sm leading-relaxed transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="dot-grid absolute inset-0 opacity-10" />
        <div className="mesh-blob-2 absolute rounded-full" style={{ width: 300, height: 300, background: "radial-gradient(circle, rgba(0,180,216,0.15) 0%, transparent 70%)", right: "-5%", top: "-10%" }} />
      </div>

      <div className="relative">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00B4D8] to-[#00E5FF] flex items-center justify-center text-xs">
            📦
          </div>
          <span className="font-['Syne',sans-serif] font-extrabold text-sm text-white">
            Tech<span className="text-[#00E5FF]">Bridge</span> GH
          </span>
        </div>

        <p className="text-[#94A3B8] mb-1">© 2025 TechBridge GH · Premium Tech from China to Ghana 🇨🇳→🇬🇭</p>
        <p className="text-[#475569] text-xs">Delivering quality tech from Shenzhen to Accra since 2024</p>

        <div className="flex justify-center gap-6 flex-wrap mt-6 mb-6">
          {[
            { label: "WhatsApp", href: "https://wa.me/233593320772", icon: "💬" },
            { label: "Instagram", href: "#", icon: "📸" },
            { label: "Facebook", href: "#", icon: "👍" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 text-[#00B4D8] no-underline text-xs font-medium hover:text-[#00E5FF] transition-colors"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {["Verified Suppliers", "Price Guarantee", "Fast Delivery"].map((tag) => (
            <span key={tag} className="text-xs text-[#475569] bg-white/5 border border-white/8 px-3 py-1 rounded-full">
              ✓ {tag}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
