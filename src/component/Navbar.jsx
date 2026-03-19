import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

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
export default function Navbar() {
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
