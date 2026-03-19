import { useState, useEffect, useRef } from "react";
import AboutSection from "../component/AboutSection";
import FeaturesSection from "../component/FeaturesSection";

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
    <div className="hero-card relative rounded-2xl overflow-hidden cursor-pointer">
      {SLIDE_IMAGES.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.label}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
      <div className="relative z-10 p-5 flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-widest uppercase text-white/50">
            {SLIDE_IMAGES[current].label}
          </span>
          <span
            className="text-xs font-bold uppercase px-2 py-0.5 rounded-full"
            style={{
              color: "#D4940A",
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(212,148,10,0.4)",
            }}
          >
            Limited offer
          </span>
        </div>
        <div className="flex items-end justify-between">
          <div>
            <div className="font-black text-xl text-white leading-tight">
              Get 14 days
              <br />
              <span style={{ color: "#D4940A" }}>for free</span>
            </div>
            <p className="text-white/50 text-xs mt-1">
              Just give us a call or message us in the chat.
            </p>
            <button
              className="mt-3 text-black text-xs font-bold px-4 py-2 rounded-full transition-colors duration-300"
              style={{ background: "#D4940A" }}
              onMouseEnter={(e) => (e.target.style.background = "#F2EFE7")}
              onMouseLeave={(e) => (e.target.style.background = "#D4940A")}
            >
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
                    i === current ? "#D4940A" : "rgba(255,255,255,0.3)",
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

// ── Mobile Drawer Menu ────────────────────────────────────────────────────────
function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          zIndex: 90,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.3s",
        }}
      />
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "72vw",
          maxWidth: "300px",
          background: "#0A0A0A",
          borderLeft: "1px solid rgba(212,148,10,0.2)",
          zIndex: 95,
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.22,1,0.36,1)",
          display: "flex",
          flexDirection: "column",
          padding: "80px 28px 40px",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: "#F2EFE7",
            fontSize: "22px",
            cursor: "pointer",
            lineHeight: 1,
          }}
        >
          ✕
        </button>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, flex: 1 }}>
          {["Services", "About", "Trainers", "Plans", "Contact"].map((item) => (
            <li
              key={item}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                paddingBottom: "18px",
                marginBottom: "18px",
              }}
            >
              <a
                href="#"
                onClick={onClose}
                style={{
                  color: "#F2EFE7",
                  textDecoration: "none",
                  fontSize: "24px",
                  fontWeight: 700,
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.06em",
                  display: "block",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#D4940A")}
                onMouseLeave={(e) => (e.target.style.color = "#F2EFE7")}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            style={{
              background: "none",
              border: "1px solid rgba(242,239,231,0.3)",
              color: "#F2EFE7",
              borderRadius: "9999px",
              padding: "13px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Log in
          </button>
          <button
            style={{
              background: "#D4940A",
              border: "none",
              color: "#0A0A0A",
              borderRadius: "9999px",
              padding: "13px",
              fontWeight: 700,
              fontSize: "14px",
              cursor: "pointer",
            }}
          >
            Join for free
          </button>
        </div>
      </div>
    </>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-8 py-4 transition-all duration-500`}
        style={
          scrolled
            ? {
                background: "rgba(10,10,10,0.88)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }
            : {}
        }
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2px solid #D4940A",
              background: "#1E1A0C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "13px",
                fontWeight: 900,
                color: "#D4940A",
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              FS
            </span>
          </div>
          <span
            className="text-white font-black tracking-tighter fitness-font"
            style={{ fontSize: "clamp(16px, 3vw, 20px)" }}
          >
            FITNESS <span style={{ color: "#D4940A" }}>SC</span>
          </span>
        </div>

        {/* Desktop nav */}
        <ul
          className="hidden md:flex gap-6 lg:gap-8 text-sm text-white/80 font-medium tracking-wide"
          style={{ listStyle: "none", margin: 0, padding: 0 }}
        >
          {["Services", "About", "Trainers", "Plans", "Contact"].map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-colors"
              onMouseEnter={(e) => (e.target.style.color = "#D4940A")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            className="text-sm font-medium transition-colors"
            style={{
              background: "none",
              border: "none",
              color: "#F2EFE7",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#D4940A")}
            onMouseLeave={(e) => (e.target.style.color = "#F2EFE7")}
          >
            Log in
          </button>
          <button
            className="text-sm font-bold px-5 py-2 rounded-full transition-colors duration-300"
            style={{
              background: "#D4940A",
              color: "#0A0A0A",
              border: "none",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#F2EFE7")}
            onMouseLeave={(e) => (e.target.style.background = "#D4940A")}
          >
            Join for free
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
          aria-label="Open menu"
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#F2EFE7",
              borderRadius: 2,
            }}
          />
          <span
            style={{
              display: "block",
              width: 15,
              height: 2,
              background: "#D4940A",
              borderRadius: 2,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "#F2EFE7",
              borderRadius: 2,
            }}
          />
        </button>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative w-full overflow-hidden hero-section">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="/src/assets/video/background.mp4"
      />
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,10,10,0.65)" }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(10,10,10,0.85), rgba(30,26,12,0.4), transparent)",
        }}
      />

      <div
        className="relative z-10 flex flex-col hero-section"
        style={{ padding: "0 clamp(20px, 5vw, 80px)" }}
      >
        {/* Heading + CTA */}
        <div
          style={{ paddingTop: "clamp(100px, 18vh, 160px)", maxWidth: "800px" }}
        >
          <h1
            className="hero-heading text-white font-black leading-none"
            style={{ marginBottom: "clamp(20px, 4vh, 36px)" }}
          >
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
              style={{ animationDelay: "0.4s", color: "#D4940A" }}
            >
              Be confident.
            </span>
          </h1>

          <div
            className="flex flex-wrap gap-3 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              className="flex items-center gap-2 text-black font-bold rounded-full transition-transform duration-300 hover:scale-105"
              style={{
                background: "#D4940A",
                boxShadow: "0 0 30px rgba(212,148,10,0.4)",
                padding: "clamp(10px,1.5vw,14px) clamp(18px,3vw,28px)",
                fontSize: "clamp(13px, 1.5vw, 16px)",
                border: "none",
                cursor: "pointer",
              }}
            >
              Join for free
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#0A0A0A",
                  color: "#D4940A",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 12,
                }}
              >
                →
              </span>
            </button>
            <button
              className="border text-white font-medium rounded-full transition-colors duration-300"
              style={{
                borderColor: "rgba(242,239,231,0.4)",
                background: "none",
                padding: "clamp(10px,1.5vw,14px) clamp(18px,3vw,28px)",
                fontSize: "clamp(13px, 1.5vw, 16px)",
                cursor: "pointer",
                color: "#F2EFE7",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = "")}
            >
              About Us
            </button>
          </div>
        </div>

        <div className="flex-1" />

        {/* Bottom cards */}
        <div
          className="cards-grid animate-fade-up"
          style={{
            animationDelay: "0.8s",
            paddingBottom: "clamp(20px, 4vh, 36px)",
          }}
        >
          {/* Members card */}
          <div
            className="hero-card rounded-2xl p-5 flex flex-col justify-between"
            style={{ background: "rgba(242,239,231,0.96)" }}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex shrink-0" style={{ marginRight: 4 }}>
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
                    "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=80&q=80",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`member ${i + 1}`}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid white",
                        marginLeft: i > 0 ? -8 : 0,
                      }}
                    />
                  ))}
                </div>
                <div>
                  <div
                    className="font-black text-xl leading-none"
                    style={{ color: "#0A0A0A" }}
                  >
                    5,000+
                  </div>
                  <div className="text-xs" style={{ color: "#5F5E5A" }}>
                    active members
                  </div>
                </div>
              </div>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#5F5E5A" }}
              >
                Members arrive with different goals — weight loss, strength,
                endurance — and all find the expert coaching and motivation they
                need. Est. 2023.
              </p>
            </div>
          </div>

          {/* Tip card */}
          <div
            className="hero-card backdrop-blur-md rounded-2xl p-5 flex flex-col justify-between"
            style={{
              background: "rgba(10,10,10,0.75)",
              border: "1px solid rgba(212,148,10,0.15)",
            }}
          >
            <span style={{ color: "#5F5E5A", fontSize: 12 }}>◀</span>
            <p
              className="text-sm font-medium leading-snug text-white"
              style={{ margin: "8px 0" }}
            >
              Recovery is where the gains happen.
              <br />
              Pair smart training with 7–9 hours
              <br />
              <span style={{ color: "#D4940A" }}>
                of sleep for maximum results.
              </span>
            </p>
            <div
              className="flex justify-between text-xs"
              style={{ color: "#888780" }}
            >
              <span>Fitness Sports Center</span>
              <span>Est. 2023</span>
            </div>
          </div>

          {/* Slider card */}
          <div className="slider-col">
            <SliderCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0A" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; }
        html, body { overflow-x: hidden; margin: 0; padding: 0; }
        body, * { font-family: 'DM Sans', sans-serif; }

        .fitness-font { font-family: 'Bebas Neue', sans-serif; }

        .hero-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.2rem, 8vw, 5.5rem);
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .hero-card {
          height: 200px;
          min-height: 200px;
        }

        /* Cards grid — 1 col mobile, 2 col tablet, 3 col desktop */
        .cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 600px) {
          .cards-grid {
            grid-template-columns: 1fr 1fr;
          }
          .slider-col {
            grid-column: 1 / -1;
          }
          .hero-card {
            height: 210px;
            min-height: 210px;
          }
        }
        @media (min-width: 1024px) {
          .cards-grid {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 16px;
          }
          .slider-col {
            grid-column: auto;
          }
          .hero-card {
            height: 220px;
            min-height: 220px;
          }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards;
        }

        /* Touch-friendly tap targets */
        @media (max-width: 768px) {
          button { min-height: 44px; }
        }
      `}</style>

      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
    </div>
  );
}
