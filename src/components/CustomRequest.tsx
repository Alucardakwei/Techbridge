import { useState } from "react";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "233593320772";

const CATEGORIES = [
  { value: "", label: "📋 Select category…" },
  { value: "phones", label: "📱 Phones & Tablets" },
  { value: "laptops", label: "💻 Laptops" },
  { value: "audio", label: "🎧 Audio & Speakers" },
  { value: "watches", label: "⌚ Smartwatches" },
  { value: "gaming", label: "🎮 Gaming" },
  { value: "cameras", label: "📷 Cameras & Drones" },
  { value: "other", label: "❓ Other" },
];

const HINTS = [
  "Xiaomi 15 Ultra",
  "iPhone 16 Pro Max",
  "MacBook Pro M4",
  "Sony WH-1000XM5",
  "Samsung TV",
  "DJI Drone",
  "Watch Ultra",
  "PS5 Slim",
  "Anker Power Bank",
  "GoPro HERO 13",
];

function buildMessage(description: string, category: string): string {
  const catLabel = CATEGORIES.find((c) => c.value === category)?.label ?? "";
  return [
    "Hi TechBridge GH! I want to order:",
    "",
    `Product: ${description}`,
    catLabel ? `Category: ${catLabel}` : "",
  ]
    .filter(Boolean)
    .join("\n");
}

export default function CustomRequest() {
  const [text, setText] = useState("");
  const [cat, setCat] = useState("");
  const hasText = text.trim().length > 0;

  const sendToWhatsApp = () => {
    if (!hasText) return;
    const msg = buildMessage(text.trim(), cat);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  const appendHint = (hint: string) => {
    setText((prev) => (prev ? `${prev}, ${hint}` : hint));
  };

  return (
    <section
      id="custom"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D2137 0%, #0A3A5C 50%, #0D3460 100%)" }}
    >
      <div className="max-w-3xl mx-auto relative px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs font-bold uppercase tracking-widest text-[#00B4D8] mb-2">
          ✍️ Custom Order Request
        </p>
        <h2 className="font-['Syne',sans-serif] text-2xl font-extrabold text-white mb-2 md:text-3xl">
          Can&apos;t find what you need?
          <br />
          Just tell us — we&apos;ll source it.
        </h2>
        <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">
          Type what you want, pick a category, and we&apos;ll send the request straight to our WhatsApp.
        </p>

        <div className="bg-white/4 border border-white/10 rounded-2xl p-5 backdrop-blur-sm md:p-8">
          <div className="relative mb-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={600}
              placeholder={`e.g. Xiaomi 15 Ultra, Black, 1TB, home used\ne.g. Sony WH-1000XM5, Silver, brand new\n\nBe specific — brand, model, color, storage, condition…`}
              className="w-full min-h-28 bg-white/7 border-2 border-white/15 text-white font-['DM_Sans',sans-serif] text-sm p-4 pb-8 rounded-xl outline-none transition-colors placeholder:text-white/30 resize-y"
            />
            <span className="absolute bottom-3 right-4 text-xs text-white/30">
              {text.length}/600
            </span>
          </div>

          <p className="text-xs text-white/40 mb-3">💡 Tap a suggestion to auto-fill:</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {HINTS.map((hint) => (
              <button
                key={hint}
                type="button"
                onClick={() => appendHint(hint)}
                className="bg-[#00B4D8]/12 border border-[#00B4D8]/25 text-[#00E5FF] text-xs font-medium px-3 py-1 rounded-full transition-all hover:bg-[#00B4D8]/25"
              >
                {hint}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-stretch">
            <select
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              className="w-full bg-white/8 border-2 border-white/15 text-white font-['DM_Sans',sans-serif] text-sm px-4 py-2.5 rounded-lg outline-none cursor-pointer md:w-auto md:flex-1 focus:border-[#00B4D8]"
              style={{ colorScheme: "dark" }}
            >
              {CATEGORIES.map((c) => (
                <option
                  key={c.value}
                  value={c.value}
                  className="bg-[#0A1628] text-white"
                >
                  {c.label}
                </option>
              ))}
            </select>

            <button
              type="button"
              onClick={sendToWhatsApp}
              disabled={!hasText}
              className={`flex-1 flex items-center justify-center gap-2 border-none px-5 py-2.5 rounded-lg font-['Syne',sans-serif] text-sm font-bold transition-all ${
                hasText
                  ? "bg-[#25D366] text-white hover:bg-[#128C7E] hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(37,211,102,.4)] cursor-pointer"
                  : "bg-white/10 text-white/40 cursor-not-allowed"
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              {hasText ? "Send to WhatsApp" : "Type a product to send"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
