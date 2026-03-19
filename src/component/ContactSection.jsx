import { useState } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconPin = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);
const IconClock = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconPhone = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.86-.86a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
  </svg>
);
const IconMail = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconArrow = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const INFO = [
  { Icon: IconPin, label: "Location", value: "42 Ironworks Ave, Colombo 03" },
  { Icon: IconClock, label: "Hours", value: "Mon–Fri 5 AM – 11 PM" },
  { Icon: IconPhone, label: "Phone", value: "+94 11 234 5678" },
  { Icon: IconMail, label: "Email", value: "hello@fitnesssc.lk" },
];

const INTERESTS = [
  "Strength",
  "Cardio & HIIT",
  "Personal Training",
  "Group Classes",
  "Recovery",
  "Nutrition",
];

// ── Floating label ────────────────────────────────────────────────────────────
function Field({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  as,
  rows,
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  const base = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${error ? "rgba(200,50,50,0.5)" : focused ? "#D4940A" : "rgba(10,10,10,0.1)"}`,
    borderRadius: 0,
    padding: lifted ? "20px 0 7px" : "14px 0 7px",
    color: "#0A0A0A",
    fontSize: 13,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    outline: "none",
    resize: "none",
    boxSizing: "border-box",
    display: "block",
    lineHeight: 1.6,
    transition: "border-color 0.25s, padding 0.22s",
    caretColor: "#D4940A",
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <label
        style={{
          position: "absolute",
          left: 0,
          top: lifted ? 1 : 14,
          fontSize: lifted ? 8 : 12,
          fontWeight: lifted ? 700 : 400,
          letterSpacing: lifted ? "0.18em" : "0.03em",
          textTransform: lifted ? "uppercase" : "none",
          color: error
            ? "rgba(200,50,50,0.8)"
            : lifted
              ? "#D4940A"
              : "rgba(10,10,10,0.32)",
          pointerEvents: "none",
          transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows || 3}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={base}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={base}
        />
      )}

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 1,
          background: "#D4940A",
          width: focused ? "100%" : "0%",
          transition: "width 0.38s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {error && (
        <span
          style={{
            position: "absolute",
            bottom: -16,
            left: 0,
            fontSize: 8,
            color: "rgba(200,50,50,0.8)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [interests, setInterests] = useState([]);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: "" }));
  };
  const toggle = (item) =>
    setInterests((p) =>
      p.includes(item) ? p.filter((i) => i !== item) : [...p, item],
    );

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setStatus("loading");
    setTimeout(() => setStatus("success"), 1800);
  };

  return (
    <section
      id="contact"
      style={{
        background: "#F2F0EC",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');

        @keyframes cs-spin   { to { transform: rotate(360deg); } }
        @keyframes cs-fadein { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:none; } }
        @keyframes cs-check  { from { stroke-dashoffset: 40; } to { stroke-dashoffset: 0; } }
        @keyframes cs-pulse  {
          0%,100% { box-shadow: 0 0 0 0 rgba(212,148,10,0); }
          50%     { box-shadow: 0 0 24px 6px rgba(212,148,10,0.18); }
        }

        input:-webkit-autofill, textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
          -webkit-text-fill-color: #0A0A0A !important;
        }

        /* ── Root layout: mobile = single col stacked ── */
        .cs-outer {
          display: flex;
          flex-direction: column;
        }

        /* ── Image block ── */
        .cs-img-block {
          position: relative;
          width: 100%;
          height: 56vw;          /* tall-ish on mobile */
          min-height: 280px;
          max-height: 420px;
          overflow: hidden;
          flex-shrink: 0;
        }

        /* ── Form block ── */
        .cs-form-block {
          width: 100%;
          padding: 40px 20px 52px;
          background: #F2F0EC;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* ── sm (480px+): form padding grows ── */
        @media (min-width: 480px) {
          .cs-form-block {
            padding: 48px 32px 60px;
          }
        }

        /* ── md (768px+): side by side, image taller ── */
        @media (min-width: 768px) {
          .cs-outer {
            flex-direction: row;
            min-height: 720px;
          }
          .cs-img-block {
            width: 42%;
            height: auto;
            max-height: none;
            min-height: unset;
            flex-shrink: 0;
            position: sticky;
            top: 0;
            align-self: stretch;
          }
          .cs-form-block {
            flex: 1;
            padding: 64px 48px 72px;
            overflow-y: auto;
          }
        }

        /* ── lg (1100px+): more breathing room ── */
        @media (min-width: 1100px) {
          .cs-img-block { width: 44%; }
          .cs-form-block { padding: 80px 72px 88px; }
        }

        /* ── Name + email: stack mobile, 2-col 520px+ ── */
        .cs-row2 {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        @media (min-width: 520px) {
          .cs-row2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
        }

        /* ── Chips: 2-col mobile, 3-col 460px+ ── */
        .cs-chips {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
        }
        @media (min-width: 460px) {
          .cs-chips { grid-template-columns: repeat(3, 1fr); }
        }

        /* ── Info grid on image: 1-col mobile, 2-col 400px+ ── */
        .cs-info-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        @media (min-width: 400px) {
          .cs-info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 14px 20px;
          }
        }

        /* ── Submit row: stack mobile, row 480px+ ── */
        .cs-submit-row {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: flex-start;
        }
        @media (min-width: 480px) {
          .cs-submit-row {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }

        /* ── Heading size clamps ── */
        .cs-img-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          letter-spacing: 0.03em;
          line-height: 0.93;
          margin: 0 0 20px;
          font-size: clamp(2rem, 6vw, 4.4rem);
        }
        .cs-form-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          letter-spacing: 0.04em;
          line-height: 1;
          color: #0A0A0A;
          margin: 0 0 6px;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
        }
        .cs-success-heading {
          font-family: 'Bebas Neue', sans-serif;
          font-weight: 400;
          letter-spacing: 0.04em;
          color: #0A0A0A;
          margin: 0 0 10px;
          font-size: clamp(1.7rem, 3.5vw, 2.5rem);
        }
      `}</style>

      <div className="cs-outer">
        {/* ══ IMAGE SIDE ═══════════════════════════════════════════════════════ */}
        <div className="cs-img-block">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=88"
            alt="Fitness SC gym floor"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />

          {/* Layered gradients */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(10,10,10,0.78) 0%, rgba(10,10,10,0.22) 55%, rgba(10,10,10,0.6) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.72) 100%)",
            }}
          />

          {/* Content over image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "clamp(20px, 4vw, 52px)",
            }}
          >
            {/* Top: brand */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  border: "1.5px solid #D4940A",
                  background: "rgba(212,148,10,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 11,
                    color: "#D4940A",
                    letterSpacing: "0.04em",
                  }}
                >
                  FS
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.88)",
                  letterSpacing: "0.08em",
                }}
              >
                FITNESS <span style={{ color: "#D4940A" }}>SC</span>
              </span>
            </div>

            {/* Bottom: heading + info + socials */}
            <div>
              {/* eyebrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <div style={{ width: 18, height: 1, background: "#D4940A" }} />
                <span
                  style={{
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#D4940A",
                  }}
                >
                  Contact Us
                </span>
              </div>

              {/* heading */}
              <h2 className="cs-img-heading">
                <span style={{ color: "#F2EFE7", display: "block" }}>
                  START YOUR
                </span>
                <span
                  style={{
                    display: "block",
                    WebkitTextStroke: "1px rgba(242,239,231,0.28)",
                    color: "transparent",
                  }}
                >
                  JOURNEY
                </span>
              </h2>

              {/* info grid */}
              <div className="cs-info-grid" style={{ marginBottom: 20 }}>
                {INFO.map(({ Icon, label, value }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 9,
                    }}
                  >
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 7,
                        flexShrink: 0,
                        border: "1px solid rgba(212,148,10,0.3)",
                        background: "rgba(212,148,10,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#D4940A",
                        marginTop: 1,
                      }}
                    >
                      <Icon />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 7,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(212,148,10,0.85)",
                          marginBottom: 2,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: "rgba(242,239,231,0.72)",
                          lineHeight: 1.4,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* socials */}
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {["Instagram", "Facebook", "WhatsApp"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.36)",
                      border: "1px solid rgba(255,255,255,0.13)",
                      borderRadius: 3,
                      padding: "5px 10px",
                      textDecoration: "none",
                      transition: "all 0.22s",
                      minHeight: 28,
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D4940A";
                      e.currentTarget.style.borderColor =
                        "rgba(212,148,10,0.4)";
                      e.currentTarget.style.background =
                        "rgba(212,148,10,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.36)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.13)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ FORM SIDE ════════════════════════════════════════════════════════ */}
        <div className="cs-form-block">
          {/* eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
            }}
          >
            <div style={{ width: 20, height: 1, background: "#D4940A" }} />
            <span
              style={{
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4940A",
              }}
            >
              Inquiry Form
            </span>
          </div>

          <h3 className="cs-form-heading">Let's Talk</h3>
          <p
            style={{
              fontSize: 13,
              color: "rgba(10,10,10,0.38)",
              lineHeight: 1.8,
              margin: "0 0 28px",
            }}
          >
            One of our coaches will reach out within the hour.
          </p>

          {/* White card */}
          <div
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: "clamp(22px, 5vw, 40px)",
              boxShadow:
                "0 2px 8px rgba(10,10,10,0.04), 0 12px 40px rgba(10,10,10,0.08), 0 0 0 1px rgba(10,10,10,0.03)",
              position: "relative",
              overflow: "hidden",
              maxWidth: 540,
            }}
          >
            {/* corner glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 150,
                height: 150,
                background:
                  "radial-gradient(circle at top right, rgba(212,148,10,0.07) 0%, transparent 65%)",
                pointerEvents: "none",
              }}
            />

            {status === "success" ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 16,
                  minHeight: 300,
                  justifyContent: "center",
                  animation: "cs-fadein 0.55s ease forwards",
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    border: "1px solid rgba(212,148,10,0.35)",
                    background: "rgba(212,148,10,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "cs-pulse 2.5s ease infinite",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M6 16l8 8L26 8"
                      stroke="#D4940A"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeDasharray="40"
                      strokeDashoffset="0"
                      style={{ animation: "cs-check 0.55s 0.2s ease forwards" }}
                    />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#D4940A",
                      marginBottom: 8,
                    }}
                  >
                    Message Received
                  </div>
                  <h3 className="cs-success-heading">
                    We'll be in touch,
                    <br />
                    {form.name.split(" ")[0]}.
                  </h3>
                  <p
                    style={{
                      fontSize: 12,
                      color: "rgba(10,10,10,0.36)",
                      lineHeight: 1.8,
                      margin: 0,
                      maxWidth: 280,
                    }}
                  >
                    Expect a message from one of our coaches within the hour.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setForm({ name: "", email: "", phone: "", message: "" });
                    setInterests([]);
                    setStatus("idle");
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    background: "none",
                    border: "none",
                    color: "rgba(10,10,10,0.28)",
                    fontSize: 8,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    padding: 0,
                    transition: "color 0.2s",
                    fontFamily: "'DM Sans', sans-serif",
                    minHeight: 36,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D4940A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(10,10,10,0.28)")
                  }
                >
                  Send another <IconArrow />
                </button>
              </div>
            ) : (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 28 }}
              >
                {/* Name + Email */}
                <div className="cs-row2">
                  <Field
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={errors.name}
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                    type="email"
                  />
                </div>

                {/* Phone */}
                <Field
                  label="Phone — optional"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                />

                {/* Interests */}
                <div>
                  <div
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(10,10,10,0.24)",
                      marginBottom: 10,
                    }}
                  >
                    I'm Interested In
                  </div>
                  <div className="cs-chips">
                    {INTERESTS.map((item) => {
                      const on = interests.includes(item);
                      return (
                        <button
                          key={item}
                          onClick={() => toggle(item)}
                          style={{
                            background: on
                              ? "rgba(212,148,10,0.07)"
                              : "rgba(10,10,10,0.02)",
                            border: `1px solid ${on ? "rgba(212,148,10,0.4)" : "rgba(10,10,10,0.07)"}`,
                            borderRadius: 5,
                            padding: "9px 8px",
                            fontSize: 8,
                            fontWeight: 700,
                            letterSpacing: "0.09em",
                            textTransform: "uppercase",
                            color: on ? "#D4940A" : "rgba(10,10,10,0.32)",
                            cursor: "pointer",
                            transition: "all 0.18s",
                            textAlign: "left",
                            fontFamily: "'DM Sans', sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            minHeight: 36,
                          }}
                        >
                          {on && (
                            <svg
                              width="7"
                              height="7"
                              viewBox="0 0 12 12"
                              fill="none"
                              stroke="#D4940A"
                              strokeWidth="2.4"
                              strokeLinecap="round"
                            >
                              <polyline points="1 6 4.5 9.5 11 2.5" />
                            </svg>
                          )}
                          {item}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message */}
                <div style={{ paddingBottom: 2 }}>
                  <Field
                    label="Your Goals / Message"
                    name="message"
                    as="textarea"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                </div>

                {/* Submit row */}
                <div className="cs-submit-row">
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      background: "#0A0A0A",
                      border: "none",
                      borderRadius: 5,
                      padding: "14px 28px",
                      color: "#F2EFE7",
                      fontSize: 9,
                      fontWeight: 800,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      opacity: status === "loading" ? 0.6 : 1,
                      transition: "all 0.25s",
                      fontFamily: "'DM Sans', sans-serif",
                      minHeight: 48,
                      flexShrink: 0,
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading") {
                        e.currentTarget.style.background = "#D4940A";
                        e.currentTarget.style.color = "#0A0A0A";
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.boxShadow =
                          "0 12px 32px rgba(212,148,10,0.25)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#0A0A0A";
                      e.currentTarget.style.color = "#F2EFE7";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <span
                          style={{
                            width: 11,
                            height: 11,
                            border: "1.5px solid rgba(255,255,255,0.2)",
                            borderTopColor: "#F2EFE7",
                            borderRadius: "50%",
                            animation: "cs-spin 0.7s linear infinite",
                            display: "inline-block",
                            flexShrink: 0,
                          }}
                        />
                        Sending
                      </>
                    ) : (
                      <>
                        {" "}
                        Send Message <IconArrow />{" "}
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      fontSize: 8,
                      color: "rgba(10,10,10,0.2)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      margin: 0,
                    }}
                  >
                    No spam. Privacy respected.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
