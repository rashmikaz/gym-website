import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import AboutSection from "../component/AboutSection";
import FeaturesSection from "../component/FeaturesSection";
import ContactSection from "../component/ContactSection";

// ── Sun / Moon icons ──────────────────────────────────────────────────────────
const IconSun = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);
const IconMoon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

// ── Slider images ─────────────────────────────────────────────────────────────
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
    <div
      className="hero-card"
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      {SLIDE_IMAGES.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.label}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.7s",
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            {SLIDE_IMAGES[current].label}
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              color: "#D4940A",
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(212,148,10,0.4)",
              borderRadius: 99,
              padding: "3px 10px",
            }}
          >
            Limited offer
          </span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 22,
                color: "#fff",
                lineHeight: 1.1,
              }}
            >
              Get 14 days
              <br />
              <span style={{ color: "#D4940A" }}>for free</span>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: 11,
                marginTop: 4,
                marginBottom: 0,
              }}
            >
              Just call or message us in the chat.
            </p>
            <button
              style={{
                marginTop: 10,
                background: "#D4940A",
                border: "none",
                borderRadius: 99,
                padding: "8px 16px",
                fontSize: 11,
                fontWeight: 700,
                color: "#0A0A0A",
                cursor: "pointer",
              }}
            >
              Get started →
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              alignItems: "flex-end",
            }}
          >
            {SLIDE_IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  borderRadius: 99,
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  flexShrink: 0,
                  width: i === current ? 18 : 6,
                  height: 6,
                  background:
                    i === current ? "#D4940A" : "rgba(255,255,255,0.3)",
                  transition: "all 0.3s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mobile Menu ───────────────────────────────────────────────────────────────
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
          maxWidth: 300,
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
            fontSize: 22,
            cursor: "pointer",
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
                paddingBottom: 18,
                marginBottom: 18,
              }}
            >
              <a
                href={`#${item.toLowerCase()}`}
                onClick={onClose}
                style={{
                  color: "#F2EFE7",
                  textDecoration: "none",
                  fontSize: 24,
                  fontWeight: 700,
                  fontFamily: "'Bebas Neue', sans-serif",
                  letterSpacing: "0.06em",
                  display: "block",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#D4940A")}
                onMouseLeave={(e) => (e.target.style.color = "#F2EFE7")}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <button
            style={{
              background: "none",
              border: "1px solid rgba(242,239,231,0.3)",
              color: "#F2EFE7",
              borderRadius: 99,
              padding: 13,
              fontWeight: 600,
              fontSize: 14,
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
              borderRadius: 99,
              padding: 13,
              fontWeight: 700,
              fontSize: 14,
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
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px clamp(20px, 5vw, 40px)",
          transition: "all 0.5s",
          ...(scrolled
            ? {
                background: "rgba(10,10,10,0.88)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }
            : {}),
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 900,
                color: "#D4940A",
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              FS
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(16px,3vw,20px)",
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            FITNESS <span style={{ color: "#D4940A" }}>SC</span>
          </span>
        </div>

        {/* Desktop nav */}
        <ul
          style={{
            display: "none",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
            color: "rgba(255,255,255,0.8)",
            fontSize: 13,
            fontWeight: 500,
          }}
          className="nav-desktop"
        >
          {["Services", "About", "Trainers", "Plans", "Contact"].map((item) => (
            <li
              key={item}
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => (e.target.style.color = "#D4940A")}
              onMouseLeave={(e) => (e.target.style.color = "")}
            >
              <a
                href={`#${item.toLowerCase()}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div
          className="nav-desktop"
          style={{ display: "none", alignItems: "center", gap: 12 }}
        >
          {/* Dark mode toggle */}
          <button
            onClick={toggle}
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
              color: "#F2EFE7",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#D4940A";
              e.currentTarget.style.color = "#D4940A";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.color = "#F2EFE7";
            }}
            title={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>

          <button
            style={{
              background: "none",
              border: "none",
              color: "#F2EFE7",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#D4940A")}
            onMouseLeave={(e) => (e.target.style.color = "#F2EFE7")}
          >
            Log in
          </button>
          <button
            style={{
              background: "#D4940A",
              border: "none",
              borderRadius: 99,
              padding: "9px 22px",
              fontSize: 13,
              fontWeight: 700,
              color: "#0A0A0A",
              cursor: "pointer",
              transition: "background 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F2EFE7")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#D4940A")}
          >
            Join for free
          </button>
        </div>

        {/* Mobile right: theme toggle + hamburger */}
        <div
          style={{ display: "flex", alignItems: "center", gap: 8 }}
          className="nav-mobile"
        >
          <button
            onClick={toggle}
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
              color: "#F2EFE7",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {dark ? <IconSun /> : <IconMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(true)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
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
        </div>
      </nav>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <style>{`
        @media (min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile  { display: none !important; }
        }
        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile  { display: flex !important; }
        }
      `}</style>
    </>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#0A0A0A",
      }}
    >
      <video
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        autoPlay
        muted
        loop
        playsInline
        src="/video/main.mp4"
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10,10,10,0.65)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to right, rgba(10,10,10,0.85), rgba(30,26,12,0.4), transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: "0 clamp(20px,5vw,80px)",
        }}
      >
        {/* Heading */}
        <div style={{ paddingTop: "clamp(100px,18vh,160px)", maxWidth: 800 }}>
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.2rem,8vw,5.5rem)",
              color: "#fff",
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: "clamp(20px,4vh,36px)",
            }}
          >
            <span style={{ display: "block" }}>Be healthier.</span>
            <span style={{ display: "block" }}>Be stronger.</span>
            <span style={{ display: "block", color: "#D4940A" }}>
              Be confident.
            </span>
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#D4940A",
                border: "none",
                borderRadius: 99,
                padding: "clamp(10px,1.5vw,14px) clamp(18px,3vw,28px)",
                fontSize: "clamp(13px,1.5vw,16px)",
                fontWeight: 700,
                color: "#0A0A0A",
                cursor: "pointer",
                transition: "transform 0.3s",
                boxShadow: "0 0 30px rgba(212,148,10,0.4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
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
              style={{
                border: "1px solid rgba(242,239,231,0.4)",
                background: "none",
                borderRadius: 99,
                padding: "clamp(10px,1.5vw,14px) clamp(18px,3vw,28px)",
                fontSize: "clamp(13px,1.5vw,16px)",
                fontWeight: 500,
                color: "#F2EFE7",
                cursor: "pointer",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.background = "none")}
            >
              About Us
            </button>
          </div>
        </div>

        <div style={{ flex: 1 }} />

        {/* Bottom cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
            paddingBottom: "clamp(20px,4vh,36px)",
          }}
          className="hero-cards-grid"
        >
          {/* Members card */}
          <div
            className="hero-card"
            style={{
              borderRadius: 16,
              padding: 20,
              background: "rgba(242,239,231,0.96)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex" }}>
                {[
                  "photo-1534528741775-53994a69daeb",
                  "photo-1507003211169-0a1dd7228f2d",
                  "photo-1488426862026-3ee34a7d66df",
                ].map((id, i) => (
                  <img
                    key={i}
                    src={`https://images.unsplash.com/${id}?w=80&q=80`}
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
                  style={{
                    fontWeight: 900,
                    fontSize: 20,
                    color: "#0A0A0A",
                    lineHeight: 1,
                  }}
                >
                  5,000+
                </div>
                <div style={{ fontSize: 11, color: "#5F5E5A" }}>
                  active members
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: 12,
                color: "#5F5E5A",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Members arrive with different goals and all find the expert
              coaching they need. Est. 2023.
            </p>
          </div>

          {/* Tip card */}
          <div
            className="hero-card"
            style={{
              borderRadius: 16,
              padding: 20,
              background: "rgba(10,10,10,0.75)",
              border: "1px solid rgba(212,148,10,0.15)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.6,
                margin: "8px 0",
              }}
            >
              Recovery is where the gains happen. Pair smart training with 7–9
              hours{" "}
              <span style={{ color: "#D4940A" }}>
                of sleep for maximum results.
              </span>
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 11,
                color: "#888780",
              }}
            >
              <span>Fitness Sports Center</span>
              <span>Est. 2023</span>
            </div>
          </div>

          {/* Slider card */}
          <SliderCard />
        </div>
      </div>

      <style>{`
        .hero-card { height: 200px; min-height: 200px; }
        @media (min-width: 600px) {
          .hero-cards-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-cards-grid > *:last-child { grid-column: 1 / -1; }
          .hero-card { height: 210px; min-height: 210px; }
        }
        @media (min-width: 1024px) {
          .hero-cards-grid { grid-template-columns: 1fr 1fr 1fr !important; }
          .hero-cards-grid > *:last-child { grid-column: auto; }
          .hero-card { height: 220px; min-height: 220px; }
        }
      `}</style>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <ContactSection />
    </div>
  );
}
