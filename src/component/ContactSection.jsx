import { useState } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconPin = () => (
  <svg
    width="16"
    height="16"
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
    width="16"
    height="16"
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
    width="16"
    height="16"
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
    width="16"
    height="16"
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
    width="14"
    height="14"
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
    borderBottom: `1.5px solid ${error ? "rgba(200,50,50,0.5)" : focused ? "#D4940A" : "var(--border-strong)"}`,
    borderRadius: 0,
    padding: lifted ? "24px 0 10px" : "17px 0 10px",
    color: "var(--text)",
    fontSize: 15,
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 400,
    outline: "none",
    resize: "none",
    boxSizing: "border-box",
    display: "block",
    lineHeight: 1.6,
    caretColor: "#D4940A",
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <label
        style={{
          position: "absolute",
          left: 0,
          top: lifted ? 2 : 17,
          fontSize: lifted ? 10 : 14,
          fontWeight: lifted ? 700 : 400,
          letterSpacing: lifted ? "0.14em" : "0.02em",
          textTransform: lifted ? "uppercase" : "none",
          color: error
            ? "rgba(200,50,50,0.8)"
            : lifted
              ? "#D4940A"
              : "var(--text-muted)",
          pointerEvents: "none",
          transition: "all 0.22s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {label}
      </label>

      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows || 4}
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

      {/* gold sweep */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "1.5px",
          background: "#D4940A",
          width: focused ? "100%" : "0%",
          transition: "width 0.38s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      {error && (
        <span
          style={{
            position: "absolute",
            bottom: -20,
            left: 0,
            fontSize: 11,
            color: "rgba(200,50,50,0.85)",
            letterSpacing: "0.08em",
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
      e.email = "Invalid email";
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
        background: "var(--bg-section)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes cs-spin   { to { transform: rotate(360deg); } }
        @keyframes cs-fadein { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:none; } }
        @keyframes cs-check  { from { stroke-dashoffset: 40; } to { stroke-dashoffset: 0; } }
        @keyframes cs-pulse  {
          0%,100% { box-shadow: 0 0 0 0 rgba(212,148,10,0); }
          50%     { box-shadow: 0 0 24px 6px rgba(212,148,10,0.18); }
        }

        html:not(.dark) input:-webkit-autofill,
        html:not(.dark) textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #ffffff inset !important;
          -webkit-text-fill-color: #0A0A0A !important;
        }
        html.dark input:-webkit-autofill,
        html.dark textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px #161616 inset !important;
          -webkit-text-fill-color: #F2EFE7 !important;
        }

        /* ── Layout ── */
        .cs-outer {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 768px) {
          .cs-outer { flex-direction: row; min-height: 820px; }
        }

        /* ── Image col ── */
        .cs-img-block {
          position: relative;
          width: 100%;
          height: 60vw;
          min-height: 300px;
          max-height: 440px;
          overflow: hidden;
          flex-shrink: 0;
        }
        @media (min-width: 768px) {
          .cs-img-block { width: 42%; height: auto; max-height: none; min-height: unset; }
        }
        @media (min-width: 1100px) {
          .cs-img-block { width: 44%; }
        }

        /* ── Form col ── */
        .cs-form-block {
          flex: 1;
          padding: 48px 24px 60px;
          background: var(--bg-section);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 480px) { .cs-form-block { padding: 56px 36px 68px; } }
        @media (min-width: 768px) { .cs-form-block { padding: 72px 52px 80px; } }
        @media (min-width: 1100px) { .cs-form-block { padding: 88px 76px 96px; } }

        /* ── Form inner ── */
        .cs-row2 { display: flex; flex-direction: column; gap: 36px; }
        @media (min-width: 520px) {
          .cs-row2 { display: grid !important; grid-template-columns: 1fr 1fr; gap: 28px; }
        }

        .cs-chips { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
        @media (min-width: 460px) { .cs-chips { grid-template-columns: repeat(3, 1fr); } }

        .cs-info-grid { display: flex; flex-direction: column; gap: 14px; }
        @media (min-width: 400px) {
          .cs-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 24px; }
        }

        .cs-submit-row { display: flex; flex-direction: column; gap: 14px; align-items: flex-start; }
        @media (min-width: 480px) {
          .cs-submit-row { flex-direction: row; align-items: center; justify-content: space-between; }
        }

        .cs-card {
          background: var(--bg-card);
          border-radius: 20px;
          padding: clamp(28px, 5vw, 48px);
          box-shadow: 0 2px 8px rgba(10,10,10,0.06), 0 16px 48px rgba(10,10,10,0.1), 0 0 0 1px var(--border);
          position: relative;
          overflow: hidden;
          max-width: 560px;
        }
      `}</style>

      {/* gold glow */}
      <div
        style={{
          position: "absolute",
          bottom: -80,
          right: -60,
          width: 440,
          height: 440,
          borderRadius: "50%",
          pointerEvents: "none",
          background:
            "radial-gradient(circle, rgba(212,148,10,0.06) 0%, transparent 68%)",
        }}
      />

      <div className="cs-outer">
        {/* ══ IMAGE SIDE ══════════════════════════════════════════════════════ */}
        <div className="cs-img-block">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=88"
            alt="Fitness SC gym"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
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
                "linear-gradient(to bottom, transparent 40%, rgba(10,10,10,0.75) 100%)",
            }}
          />

          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "clamp(24px, 4vw, 52px)",
            }}
          >
            {/* Brand */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: "1.5px solid #D4940A",
                  background: "rgba(212,148,10,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: 13,
                    color: "#D4940A",
                  }}
                >
                  FS
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 17,
                  color: "rgba(255,255,255,0.88)",
                  letterSpacing: "0.08em",
                }}
              >
                FITNESS <span style={{ color: "#D4940A" }}>SC</span>
              </span>
            </div>

            {/* Bottom content */}
            <div>
              {/* Eyebrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 16,
                }}
              >
                <div style={{ width: 20, height: 1, background: "#D4940A" }} />
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#D4940A",
                  }}
                >
                  Contact Us
                </span>
              </div>

              {/* Heading */}
              <h2
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.2rem, 6vw, 4.6rem)",
                  fontWeight: 400,
                  letterSpacing: "0.03em",
                  lineHeight: 0.93,
                  margin: "0 0 24px",
                }}
              >
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

              {/* Info grid */}
              <div className="cs-info-grid" style={{ marginBottom: 24 }}>
                {INFO.map(({ Icon, label, value }, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 34,
                        height: 34,
                        borderRadius: 9,
                        flexShrink: 0,
                        border: "1px solid rgba(212,148,10,0.35)",
                        background: "rgba(212,148,10,0.1)",
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
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "rgba(212,148,10,0.9)",
                          marginBottom: 3,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "rgba(242,239,231,0.8)",
                          lineHeight: 1.5,
                        }}
                      >
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Instagram", "Facebook", "WhatsApp"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: 4,
                      padding: "7px 14px",
                      textDecoration: "none",
                      transition: "all 0.22s",
                      minHeight: 32,
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D4940A";
                      e.currentTarget.style.borderColor =
                        "rgba(212,148,10,0.45)";
                      e.currentTarget.style.background =
                        "rgba(212,148,10,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.14)";
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

        {/* ══ FORM SIDE ═══════════════════════════════════════════════════════ */}
        <div className="cs-form-block">
          {/* Eyebrow */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 14,
            }}
          >
            <div style={{ width: 22, height: 1, background: "#D4940A" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#D4940A",
              }}
            >
              Inquiry Form
            </span>
          </div>

          {/* Heading */}
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 400,
              letterSpacing: "0.04em",
              color: "var(--text)",
              lineHeight: 1,
              margin: "0 0 8px",
            }}
          >
            Let's Talk
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              lineHeight: 1.8,
              margin: "0 0 32px",
            }}
          >
            One of our coaches will reach out within the hour.
          </p>

          {/* ── Card ── */}
          <div className="cs-card">
            {/* corner glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 160,
                height: 160,
                pointerEvents: "none",
                background:
                  "radial-gradient(circle at top right, rgba(212,148,10,0.07) 0%, transparent 65%)",
              }}
            />

            {status === "success" ? (
              /* ── Success ── */
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 20,
                  minHeight: 340,
                  justifyContent: "center",
                  animation: "cs-fadein 0.55s ease forwards",
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    border: "1px solid rgba(212,148,10,0.35)",
                    background: "rgba(212,148,10,0.07)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    animation: "cs-pulse 2.5s ease infinite",
                  }}
                >
                  <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
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
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#D4940A",
                      marginBottom: 10,
                    }}
                  >
                    Message Received
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                      color: "var(--text)",
                      margin: "0 0 12px",
                      letterSpacing: "0.04em",
                      fontWeight: 400,
                    }}
                  >
                    We'll be in touch,
                    <br />
                    {form.name.split(" ")[0]}.
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--text-muted)",
                      lineHeight: 1.8,
                      margin: 0,
                      maxWidth: 300,
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
                    gap: 8,
                    background: "none",
                    border: "none",
                    color: "var(--text-muted)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    padding: 0,
                    minHeight: 40,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#D4940A")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  Send another <IconArrow />
                </button>
              </div>
            ) : (
              /* ── Form fields ── */
              <div
                style={{ display: "flex", flexDirection: "column", gap: 36 }}
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
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--text-faint)",
                      marginBottom: 12,
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
                              ? "var(--accent-dim)"
                              : "var(--border)",
                            border: `1px solid ${on ? "var(--accent-border)" : "var(--border-strong)"}`,
                            borderRadius: 6,
                            padding: "10px 12px",
                            fontSize: 11,
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: on ? "#D4940A" : "var(--text-muted)",
                            cursor: "pointer",
                            transition: "all 0.18s",
                            textAlign: "left",
                            fontFamily: "'DM Sans', sans-serif",
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            minHeight: 40,
                          }}
                        >
                          {on && (
                            <svg
                              width="9"
                              height="9"
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
                <div style={{ paddingBottom: 4 }}>
                  <Field
                    label="Your Goals / Message"
                    name="message"
                    as="textarea"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                  />
                </div>

                {/* Submit */}
                <div className="cs-submit-row">
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      background: "var(--text)",
                      border: "none",
                      borderRadius: 6,
                      padding: "16px 32px",
                      color: "var(--bg)",
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      opacity: status === "loading" ? 0.6 : 1,
                      transition: "all 0.25s",
                      fontFamily: "'DM Sans', sans-serif",
                      minHeight: 52,
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
                      e.currentTarget.style.background = "var(--text)";
                      e.currentTarget.style.color = "var(--bg)";
                      e.currentTarget.style.transform = "none";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <span
                          style={{
                            width: 13,
                            height: 13,
                            border: "2px solid rgba(255,255,255,0.2)",
                            borderTopColor: "var(--bg)",
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
                      fontSize: 11,
                      color: "var(--text-faint)",
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
