import { useState, useEffect, useRef } from "react";

// ── Auto-sliding CTA Card ─────────────────────────────────────────────────────
const SLIDE_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80",
    label: "Power Zone",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
    label: "Cardio Zone",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&q=80",
    label: "Main Floor",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    label: "Stretch Zone",
  },
];

function SliderCard() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % SLIDE_IMAGES.length),
      3000,
    );
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setCurrent(i);
    startTimer();
  };

  return (
    <div className="hero-card relative rounded-2xl overflow-hidden cursor-pointer group">
      {SLIDE_IMAGES.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.label}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
      <div className="relative z-10 p-5 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest uppercase text-white/50">
            {SLIDE_IMAGES[current].label}
          </span>
          <span className="text-xs font-bold uppercase text-[#c8ff00] bg-black/30 border border-[#c8ff00]/40 px-2 py-0.5 rounded-full">
            Limited offer
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="font-black text-xl text-white leading-tight">
              Get 14 days
              <br />
              <span className="text-[#c8ff00]">for free</span>
            </div>
            <p className="text-white/50 text-xs mt-1">
              Just give us a call or message us in the chat.
            </p>
            <button className="mt-3 bg-[#c8ff00] text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              Get started →
            </button>
          </div>
          <div className="flex flex-col gap-2 items-end">
            {SLIDE_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  borderRadius: "9999px",
                  transition: "all 0.3s",
                  width: i === current ? "18px" : "7px",
                  height: "7px",
                  background:
                    i === current ? "#c8ff00" : "rgba(255,255,255,0.3)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <span className="text-white font-black text-2xl tracking-tighter titan-font">
        .TITAN
      </span>
      <ul className="hidden md:flex gap-8 text-sm text-white/80 font-medium tracking-wide">
        {["Services", "Schedule", "Gallery", "Plans", "Contacts"].map(
          (item) => (
            <li
              key={item}
              className="hover:text-[#c8ff00] transition-colors cursor-pointer"
            >
              {item}
            </li>
          ),
        )}
      </ul>
      <div className="flex items-center gap-3">
        <button className="text-white text-sm font-medium hover:text-[#c8ff00] transition-colors">
          Log in
        </button>
        <button className="bg-white text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-[#c8ff00] transition-colors duration-300">
          Try for free
        </button>
      </div>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full overflow-hidden hero-section">
      {/* Video BG */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/src/assets/video/background.mp4"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* ── Inner layout ── */}
      <div className="relative z-10 flex flex-col hero-section px-6 md:px-16">
        {/* Heading + buttons */}
        <div className="pt-36 pb-0 max-w-4xl">
          <h1 className="hero-heading text-white font-black leading-none mb-8">
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Be healthier.
            </span>
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "0.25s" }}
            >
              Be stronger.
            </span>
            <span
              className="block animate-fade-up"
              style={{ animationDelay: "0.4s" }}
            >
              Be confident.
            </span>
          </h1>

          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="flex items-center gap-2 bg-[#c8ff00] text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(200,255,0,0.4)] text-sm md:text-base">
              Try for free
              <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-[#c8ff00] text-xs">
                →
              </span>
            </button>
            <button className="border border-white/40 text-white font-medium px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-300 text-sm md:text-base">
              More about Titan
            </button>
          </div>
        </div>

        {/* Spacer pushes cards to bottom */}
        <div className="flex-1" />

        {/* ── Bottom cards ── */}
        <div
          className="pb-8 grid grid-cols-1 sm:grid-cols-3 gap-4 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          {/* Clients card */}
          <div className="hero-card bg-white/95 rounded-2xl p-5 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2 shrink-0">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`client ${i + 1}`}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <div className="font-black text-xl leading-none">10,000+</div>
                  <div className="text-xs text-gray-500">satisfied clients</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                They arrive with different goals, yet they all find the support
                and motivation they need. Their success is the ultimate
                validation of our method.
              </p>
            </div>
          </div>

          {/* Tip card */}
          <div className="hero-card bg-black/70 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-white flex flex-col justify-between">
            <span className="text-gray-400 text-xs self-start">◀</span>
            <p className="text-sm font-medium leading-snug my-2">
              Your muscles grow while you sleep.
              <br />
              Make 7–9 hours your secret weapon
              <br />
              for maximum progress.
            </p>
            <div className="flex justify-between text-gray-500 text-xs">
              <span>Moscow, Russia</span>
              <span>Nov.20</span>
            </div>
          </div>

          {/* Slider card */}
          <SliderCard />
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700;900&display=swap');

        .titan-font { font-family: 'Bebas Neue', sans-serif; }

        .hero-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
        }

        body, * { font-family: 'DM Sans', sans-serif; }

        /* Full-screen section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Guaranteed card height via CSS class */
        .hero-card {
          height: 220px !important;
          min-height: 220px !important;
          box-sizing: border-box;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }
      `}</style>

      <Navbar />
      <Hero />
    </div>
  );
}
