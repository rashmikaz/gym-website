import { useState, useEffect, useRef } from "react";

const ZONES = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
    label: "Power zone",
    desc: "Space for working with free weights",
  },
  {
    src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=700&q=80",
    label: "Cardio zone",
    desc: "High-energy cardio machines & classes",
  },
  {
    src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=700&q=80",
    label: "Main floor",
    desc: "Open training for all members",
  },
  {
    src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&q=80",
    label: "Stretch zone",
    desc: "Mobility, yoga & cool-down",
  },
];

export default function AboutSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrent((c) => (c + 1) % ZONES.length),
      3500,
    );
  };
  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);
    setCurrent((i + ZONES.length) % ZONES.length);
    startTimer();
  };

  const curr = ZONES[current];
  const next = ZONES[(current + 1) % ZONES.length];

  return (
    <section
      style={{
        background: "var(--bg-section)",
        padding: "clamp(60px,8vw,112px) clamp(20px,5vw,64px)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 56,
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* ── Left: Text ── */}
        <div style={{ flexShrink: 0 }} className="about-text">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 28,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#D4940A",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(128,128,128,0.9)",
              }}
            >
              Sport Center
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(1.75rem,3.5vw,2.4rem)",
              color: "var(--text)",
              fontWeight: 900,
              lineHeight: 1.08,
              marginBottom: 24,
            }}
          >
            Welcome to the Fitness SC, where people work on strengthening both
            body and mind.
          </h2>

          <div
            style={{
              width: 40,
              height: 2,
              background: "#D4940A",
              borderRadius: 99,
              marginBottom: 28,
            }}
          />

          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              background: "var(--text)",
              color: "var(--bg-card)",
              border: "none",
              borderRadius: 99,
              padding: "12px 24px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#D4940A")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--text)")
            }
          >
            More
            <span
              style={{
                width: 24,
                height: 24,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
              }}
            >
              ↗
            </span>
          </button>
        </div>

        {/* ── Right: Slider ── */}
        <div
          style={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
            {/* Current card */}
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                flex: "1.15",
                height: "clamp(280px,42vw,420px)",
                cursor: "pointer",
              }}
            >
              <img
                key={current}
                src={curr.src}
                alt={curr.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.4s, transform 0.7s",
                  opacity: animating ? 0.85 : 1,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "rgba(255,255,255,0.92)",
                  color: "#0A0A0A",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  padding: "6px 14px",
                  borderRadius: 99,
                }}
              >
                {curr.label}
              </span>
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(0,0,0,0.3)",
                  backdropFilter: "blur(4px)",
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 10,
                  padding: "4px 10px",
                  borderRadius: 99,
                }}
              >
                {current + 1} / {ZONES.length}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  gap: 12,
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    maxWidth: "55%",
                    margin: 0,
                  }}
                >
                  {curr.desc}
                </p>
                <button
                  onClick={() => goTo(current + 1)}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "#fff",
                    color: "#0A0A0A",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    transition: "all 0.3s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#D4940A";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#fff";
                    e.currentTarget.style.color = "#0A0A0A";
                  }}
                >
                  ↗
                </button>
              </div>
            </div>

            {/* Next peek card */}
            <div
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                flex: "0.78",
                height: "clamp(280px,42vw,420px)",
                cursor: "pointer",
              }}
              onClick={() => goTo(current + 1)}
            >
              <img
                src={next.src}
                alt={next.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.2), rgba(0,0,0,0.1)",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "rgba(255,255,255,0.92)",
                  color: "#0A0A0A",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  padding: "6px 14px",
                  borderRadius: 99,
                }}
              >
                {next.label}
              </span>
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: 20,
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {next.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Nav row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 4px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {ZONES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? 24 : 6,
                    height: 6,
                    borderRadius: 99,
                    background:
                      i === current ? "var(--text)" : "var(--border-strong)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.35s",
                  }}
                />
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => goTo(current - 1)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "1px solid var(--border-strong)",
                  background: "var(--bg-card)",
                  color: "var(--text)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--text)";
                  e.currentTarget.style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--bg-card)";
                  e.currentTarget.style.color = "var(--text)";
                }}
              >
                ←
              </button>
              <button
                onClick={() => goTo(current + 1)}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  border: "none",
                  background: "var(--text)",
                  color: "var(--bg-card)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 14,
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#D4940A")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "var(--text)")
                }
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .about-grid { flex-direction: row !important; gap: 96px !important; }
          .about-text { width: 270px; }
        }
      `}</style>
    </section>
  );
}
