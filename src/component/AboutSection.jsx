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
    desc: "Space for working with free weights",
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
    <section className="bg-[#F7F7F5] px-6 md:px-16 py-20 md:py-28">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
        {/* ── Left: Text ── */}
        <div className="flex-shrink-0 lg:w-[270px]">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4940A]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[#888]">
              Sport center
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#0A0A0A] font-black leading-[1.08] mb-6"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1.75rem, 3.5vw, 2.4rem)",
            }}
          >
            Welcome to the Fitness SC, where people work on strengthening both
            body and mind.
          </h2>

          {/* Subtle divider */}
          <div className="w-10 h-[2px] bg-[#D4940A] rounded-full mb-7" />

          {/* CTA */}
          <button className="group inline-flex items-center gap-3 bg-[#0A0A0A] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-300 hover:bg-[#D4940A] cursor-pointer border-none">
            More
            <span className="w-6 h-6 rounded-full bg-white/15 text-white flex items-center justify-center text-xs font-black leading-none transition-all duration-300 group-hover:bg-white group-hover:text-[#D4940A]">
              ↗
            </span>
          </button>
        </div>

        {/* ── Right: Dual card slider ── */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Cards */}
          <div className="flex gap-3 items-stretch">
            {/* Current card — bigger */}
            <div
              className="relative rounded-[28px] overflow-hidden flex-[1.15] cursor-pointer"
              style={{ height: "clamp(300px, 42vw, 420px)" }}
            >
              <img
                key={current}
                src={curr.src}
                alt={curr.label}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{
                  opacity: animating ? 0.85 : 1,
                  transition: "opacity 0.4s, transform 0.7s",
                }}
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Zone tag — pill with blur */}
              <span className="absolute top-4 left-4 backdrop-blur-sm bg-white/90 text-[#0A0A0A] text-xs font-bold tracking-wide px-4 py-1.5 rounded-full shadow-sm">
                {curr.label}
              </span>

              {/* Counter badge */}
              <span className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white/70 text-[11px] font-medium px-3 py-1 rounded-full">
                {current + 1} / {ZONES.length}
              </span>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end gap-3">
                <p className="text-white text-lg font-semibold leading-snug max-w-[55%]">
                  {curr.desc}
                </p>
                <button
                  onClick={() => goTo(current + 1)}
                  className="w-10 h-10 rounded-full bg-white text-[#0A0A0A] flex items-center justify-center text-sm cursor-pointer border-none transition-all duration-300 hover:bg-[#D4940A] hover:text-white flex-shrink-0 shadow-md"
                >
                  ↗
                </button>
              </div>
            </div>

            {/* Next card — peek, slightly dimmed */}
            <div
              className="relative rounded-[28px] overflow-hidden flex-[0.78] cursor-pointer"
              style={{ height: "clamp(300px, 42vw, 420px)" }}
              onClick={() => goTo(current + 1)}
            >
              <img
                src={next.src}
                alt={next.label}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

              <span className="absolute top-4 left-4 backdrop-blur-sm bg-white/90 text-[#0A0A0A] text-xs font-bold tracking-wide px-4 py-1.5 rounded-full shadow-sm">
                {next.label}
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-lg font-semibold leading-snug">
                  {next.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Nav row: dots left, arrows right */}
          <div className="flex items-center justify-between px-1 pt-1">
            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {ZONES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  style={{
                    width: i === current ? "24px" : "6px",
                    height: "6px",
                    borderRadius: "9999px",
                    background: i === current ? "#0A0A0A" : "#C8C8C4",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.35s",
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => goTo(current - 1)}
                className="w-11 h-11 rounded-full border border-[#0A0A0A]/20 bg-white text-[#0A0A0A] flex items-center justify-center text-sm cursor-pointer transition-all duration-300 hover:border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white shadow-sm font-mono"
              >
                ←
              </button>
              <button
                onClick={() => goTo(current + 1)}
                className="w-11 h-11 rounded-full bg-[#0A0A0A] text-white flex items-center justify-center text-sm cursor-pointer border-none transition-all duration-300 hover:bg-[#D4940A] shadow-sm font-mono"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
