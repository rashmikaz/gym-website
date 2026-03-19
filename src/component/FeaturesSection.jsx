import { useState, useRef, useEffect } from "react";

const VIDEO_SRC = "/video/main.mp4";

const SERVICES = [
  {
    num: "01",
    title: "Strength Training",
    tag: "Most Popular",
    desc: "Free weights, barbells, machines and cables — built around progressive overload. Every rep engineered for real, measurable muscle and strength gains.",
    chips: ["Barbell", "Dumbbells", "Cables", "Machines"],
  },
  {
    num: "02",
    title: "Cardio & HIIT",
    tag: null,
    desc: "Treadmills, rowers and assault bikes paired with coached HIIT circuits. Burn fat, spike your VO₂ max, and finish stronger than you started.",
    chips: ["Treadmill", "Rower", "Assault Bike", "HIIT"],
  },
  {
    num: "03",
    title: "Personal Training",
    tag: null,
    desc: "Your goals, your timeline. Certified coaches design programs around you — form, progression and accountability built into every session.",
    chips: ["1-on-1", "Custom Program", "Form Check"],
  },
  {
    num: "04",
    title: "Group Classes",
    tag: null,
    desc: "30+ weekly classes — yoga, Pilates, spin, boxing. High energy, expert-led and designed to push you further than you'd go alone.",
    chips: ["Yoga", "Spin", "Boxing", "Pilates"],
  },
  {
    num: "05",
    title: "Recovery & Wellness",
    tag: null,
    desc: "Stretch zone, foam rolling, massage therapy and sauna access. Because how you recover determines how well you perform next session.",
    chips: ["Stretch", "Sauna", "Massage", "Mobility"],
  },
  {
    num: "06",
    title: "Nutrition Coaching",
    tag: null,
    desc: "Personalised meal plans, macro tracking and one-on-one consultations. Training is half the equation — we handle the other half too.",
    chips: ["Meal Plans", "Macros", "Consultation"],
  },
];

// ── Service Row ───────────────────────────────────────────────────────────────
function ServiceRow({ service, isHovered, onEnter, onLeave }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isHovered) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    } else {
      vid.pause();
    }
  }, [isHovered]);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "relative",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: isHovered ? "rgba(212,148,10,0.03)" : "transparent",
        transition: "background 0.3s",
      }}
    >
      {/* Left gold accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 2,
          background: "#D4940A",
          transformOrigin: "top",
          transform: isHovered ? "scaleY(1)" : "scaleY(0)",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
          borderRadius: 2,
        }}
      />

      {/* ── Header row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(10px, 2vw, 32px)",
          padding:
            "clamp(16px, 2.5vw, 26px) clamp(16px, 5vw, 52px) clamp(16px, 2.5vw, 26px) 20px",
          cursor: "crosshair",
        }}
      >
        {/* Number */}
        <span
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 11,
            letterSpacing: "0.18em",
            color: isHovered ? "#D4940A" : "rgba(255,255,255,0.15)",
            flexShrink: 0,
            width: 28,
            transition: "color 0.3s",
          }}
        >
          {service.num}
        </span>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(1.3rem, 3.5vw, 2.4rem)",
            fontWeight: 400,
            letterSpacing: "0.05em",
            color: isHovered ? "#F2EFE7" : "rgba(242,239,231,0.38)",
            margin: 0,
            flex: 1,
            lineHeight: 1,
            transition: "color 0.35s",
          }}
        >
          {service.title}
        </h3>

        {/* Tag pill */}
        {service.tag && (
          <span
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#D4940A",
              border: "1px solid rgba(212,148,10,0.35)",
              borderRadius: 99,
              padding: "3px 10px",
              flexShrink: 0,
              display: "none",
            }}
            className="fsc-tag"
          >
            {service.tag}
          </span>
        )}

        {/* Arrow */}
        <div
          style={{
            flexShrink: 0,
            width: "clamp(30px, 4vw, 38px)",
            height: "clamp(30px, 4vw, 38px)",
            borderRadius: "50%",
            border: `1px solid ${isHovered ? "#D4940A" : "rgba(255,255,255,0.1)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isHovered ? "#D4940A" : "rgba(255,255,255,0.2)",
            fontSize: 14,
            transform: isHovered ? "rotate(45deg)" : "rotate(0deg)",
            transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          ↗
        </div>
      </div>

      {/* ── Expanded panel ── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isHovered ? "1fr" : "0fr",
          transition: "grid-template-rows 0.5s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          {/* Mobile: stack, Desktop: side by side */}
          <div className="fsc-panel">
            {/* Left: chips + desc + CTA */}
            <div>
              {/* Chips */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 14,
                }}
              >
                {service.chips.map((chip) => (
                  <span
                    key={chip}
                    style={{
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(212,148,10,0.85)",
                      background: "rgba(212,148,10,0.08)",
                      border: "1px solid rgba(212,148,10,0.2)",
                      borderRadius: 4,
                      padding: "4px 9px",
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: "clamp(12px, 1.3vw, 14px)",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.85,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {service.desc}
              </p>

              {/* CTA */}
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "none",
                  border: "1px solid rgba(212,148,10,0.5)",
                  color: "#D4940A",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  padding: "10px 20px",
                  borderRadius: 4,
                  cursor: "pointer",
                  transition: "all 0.25s",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#D4940A";
                  e.currentTarget.style.color = "#0A0A0A";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "none";
                  e.currentTarget.style.color = "#D4940A";
                }}
              >
                Get Started <span style={{ fontSize: 13 }}>→</span>
              </button>
            </div>

            {/* Right: Video */}
            <div
              className="fsc-video-wrap"
              style={{
                borderRadius: 14,
                overflow: "hidden",
                position: "relative",
                background: "#111",
                boxShadow: isHovered
                  ? "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(212,148,10,0.12)"
                  : "none",
                transition: "box-shadow 0.5s",
                aspectRatio: "16/9",
              }}
            >
              {/* Placeholder shimmer */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg,#141414 0%,#1c1c1c 50%,#141414 100%)",
                }}
              />

              <video
                ref={videoRef}
                src={VIDEO_SRC}
                muted
                loop
                playsInline
                preload="none"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.6s ease",
                }}
              />

              {/* Vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />

              {/* Live badge */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  background: "rgba(0,0,0,0.6)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 99,
                  padding: "4px 10px 4px 7px",
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(-4px)",
                  transition: "opacity 0.4s 0.25s, transform 0.4s 0.25s",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#D4940A",
                    display: "inline-block",
                    animation: "fsc-pulse 1.6s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Preview
                </span>
              </div>

              {/* Service title on video */}
              <div
                style={{
                  position: "absolute",
                  bottom: 10,
                  left: 12,
                  right: 12,
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? "translateY(0)" : "translateY(5px)",
                  transition: "opacity 0.4s 0.3s, transform 0.4s 0.3s",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {service.title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function FeaturesSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        background: "#080808",
        fontFamily: "'DM Sans', sans-serif",
        padding: "clamp(60px, 10vw, 110px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes fsc-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.3; transform: scale(1.6); }
        }

        /* Expanded panel layout */
        .fsc-panel {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0 clamp(16px, 5vw, 52px) clamp(20px, 3vw, 32px) 20px;
        }

        /* Video hidden on mobile, shown md+ */
        .fsc-video-wrap {
          display: none;
        }

        /* Tag pill shown sm+ */
        .fsc-tag {
          display: none;
        }

        @media (min-width: 640px) {
          .fsc-tag { display: inline !important; }
        }

        @media (min-width: 768px) {
          .fsc-panel {
            display: grid;
            grid-template-columns: 1fr clamp(200px, 28vw, 360px);
            gap: clamp(20px, 3vw, 48px);
            align-items: center;
          }
          .fsc-video-wrap {
            display: block;
          }
        }
      `}</style>

      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.013) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.013) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Gold glow */}
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -60,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(212,148,10,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative" }}>
        {/* ── Header ── */}
        <div
          style={{
            padding: "0 clamp(20px, 6vw, 80px)",
            marginBottom: "clamp(36px, 5vw, 60px)",
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div style={{ width: 28, height: 1, background: "#D4940A" }} />
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4940A",
              }}
            >
              What We Offer
            </span>
          </div>

          {/* Heading + subtitle */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.8rem, 9vw, 6.5rem)",
                  fontWeight: 400,
                  color: "#F2EFE7",
                  lineHeight: 0.93,
                  margin: 0,
                  letterSpacing: "0.03em",
                }}
              >
                WHAT WE
                <br />
                <span
                  style={{
                    WebkitTextStroke: "1px rgba(242,239,231,0.22)",
                    color: "transparent",
                  }}
                >
                  CAN DO
                </span>
              </h2>

              <p
                style={{
                  fontSize: "clamp(12px, 1.2vw, 13px)",
                  color: "rgba(255,255,255,0.28)",
                  lineHeight: 1.75,
                  maxWidth: 260,
                  margin: 0,
                  alignSelf: "flex-end",
                }}
              >
                Six specialised zones, each designed to move you closer to the
                body and lifestyle you're after.
              </p>
            </div>
          </div>
        </div>

        {/* Top divider */}
        <div
          style={{
            margin: "0 clamp(20px, 6vw, 80px) 0",
            height: 1,
            background: "rgba(255,255,255,0.06)",
          }}
        />

        {/* ── List ── */}
        <div style={{ padding: "0 clamp(4px, 1vw, 0px)" }}>
          {SERVICES.map((service, i) => (
            <ServiceRow
              key={service.num}
              service={service}
              isHovered={hovered === i}
              onEnter={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            margin: "0 clamp(20px, 6vw, 80px)",
            paddingTop: "clamp(20px, 3vw, 36px)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.14)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Complete solution · From 0 to 100%
          </span>
          <span
            style={{
              fontSize: 10,
              color: "rgba(255,255,255,0.14)",
              letterSpacing: "0.08em",
            }}
          >
            Est. 2023
          </span>
        </div>
      </div>
    </section>
  );
}
