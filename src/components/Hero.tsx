import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import "../App.css";

gsap.registerPlugin(ScrollTrigger);

const floatingShapes = [
  { left: "10%", top: "20%", size: "w-24 h-24", delay: 0 },
  { left: "80%", top: "30%", size: "w-16 h-16", delay: 2 },
  { left: "50%", top: "70%", size: "w-20 h-20", delay: 1 },
  { left: "70%", top: "80%", size: "w-12 h-12", delay: 3 },
  { left: "20%", top: "60%", size: "w-14 h-14", delay: 2.5 },
];

const SciFiBG = () => (
  <div className="fixed inset-0 z-0 pointer-events-none">
    {/* Black glass grid */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(0,255,247,0.06)_0_1px,transparent_1px_60px),repeating-linear-gradient(to_bottom,rgba(0,255,247,0.06)_0_1px,transparent_1px_60px)]" />
    {/* Scanlines */}
    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0_2px,transparent_2px_12px)] mix-blend-overlay pointer-events-none" />
    {/* Floating shapes */}
    {floatingShapes.map((shape, i) => (
      <div
        key={i}
        className={`absolute ${shape.size} rounded-full bg-gradient-to-br from-fuchsia-800/20 to-cyan-400/10 blur-2xl`}
        style={{
          left: shape.left,
          top: shape.top,
          animation: `floatShape 8s ease-in-out ${shape.delay}s infinite alternate`,
        }}
      />
    ))}
    {/* Animated particles */}
    <div className="absolute inset-0">
      {[...Array(24)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-cyan-300 opacity-10 animate-[particle-move_14s_linear_infinite]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${-Math.random() * 14}s`,
          }}
        />
      ))}
      <style>
        {`
        @keyframes particle-move {
          0% { transform: translateY(0) scale(1);}
          100% { transform: translateY(-120vh) scale(0.7);}
        }
        @keyframes floatShape {
          0% { transform: translateY(0) scale(1);}
          100% { transform: translateY(-30px) scale(1.08);}
        }
        `}
      </style>
    </div>
  </div>
);

const features = [
  {
    icon: "⚡",
    title: "Quantum Speed",
    desc: "Lightning-fast performance powered by next-gen algorithms and quantum logic.",
  },
  {
    icon: "🛡️",
    title: "Neon Security",
    desc: "Adaptive, AI-driven encryption keeps your data safe in every dimension.",
  },
  {
    icon: "🤖",
    title: "AI Integration",
    desc: "Seamlessly connect with intelligent systems for automation and insight.",
  },
  {
    icon: "🌌",
    title: "Holographic UI",
    desc: "Interact with a multi-layered, glowing interface that feels out of this world.",
  },
];

const timeline = [
  {
    label: "Initialize",
    desc: "Boot up your system and connect to the grid.",
  },
  {
    label: "Synchronize",
    desc: "Sync your data across the quantum network.",
  },
  {
    label: "Engage",
    desc: "Activate advanced features and AI modules.",
  },
  {
    label: "Transcend",
    desc: "Experience the future—today.",
  },
];

const testimonials = [
  {
    name: "Nova S.",
    avatar: "🧑‍🚀",
    quote: "This platform feels like magic. The speed and visuals are unreal.",
  },
  {
    name: "Kai R.",
    avatar: "👾",
    quote: "The animations are next-level. It’s like using tech from the future.",
  },
  {
    name: "Zara T.",
    avatar: "🤖",
    quote: "My workflow is now lightyears ahead. Love the security and UI!",
  },
];

const LandingPage = () => {
  // Hero refs
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Features refs
  const featureRefs = useRef<HTMLDivElement[]>([]);

  // Timeline refs
  const stepRefs = useRef<HTMLDivElement[]>([]);

  // CTA ref
  const ctaRef = useRef<HTMLDivElement>(null);

  // Footer ref
  const footerRef = useRef<HTMLElement>(null);

  // GSAP Animations
  useGSAP(() => {
    // Hero headline glitch & flicker
    gsap.fromTo(
      headlineRef.current,
      { opacity: 0, y: 100, filter: "blur(12px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.4,
        ease: "expo.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 80%",
        },
        onUpdate: function () {
          if (headlineRef.current) {
            if (Math.random() > 0.7) {
              headlineRef.current.style.transform =
                `translate(${Math.random() * 10 - 5}px, ${Math.random() * 6 - 3}px) skew(${Math.random() * 3 - 1.5}deg)`;
              headlineRef.current.style.opacity = `${0.8 + Math.random() * 0.2}`;
            } else {
              headlineRef.current.style.transform = "";
              headlineRef.current.style.opacity = "1";
            }
          }
        },
        onComplete: function () {
          if (headlineRef.current) {
            headlineRef.current.style.transform = "";
            headlineRef.current.style.opacity = "1";
          }
        },
      }
    );

    // Hero glowing lines
    gsap.fromTo(
      linesRef.current,
      { opacity: 0, scaleX: 0.1 },
      {
        opacity: 1,
        scaleX: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: linesRef.current,
          start: "top 90%",
        },
      }
    );

    // Hero button pulse
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, y: 60, scale: 0.9, boxShadow: "0 0 0px #00fff7" },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: "0 0 32px #00fff7, 0 0 8px #00fff7 inset",
        duration: 1.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
        },
        onComplete: () => {
          gsap.to(buttonRef.current, {
            boxShadow: "0 0 48px #00fff7, 0 0 16px #00fff7 inset",
            repeat: -1,
            yoyo: true,
            duration: 1.2,
            ease: "sine.inOut",
          });
        },
      }
    );

    // Features cards 3D entrance
    gsap.fromTo(
      featureRefs.current,
      { opacity: 0, y: 80, rotateY: 40, scale: 0.92 },
      {
        opacity: 1,
        y: 0,
        rotateY: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.18,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#features",
          start: "top 85%",
        },
      }
    );

    // Timeline steps with connectors
    gsap.fromTo(
      stepRefs.current,
      { opacity: 0, x: -80, scale: 0.9, rotateZ: 8 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        rotateZ: 0,
        duration: 1.1,
        stagger: 0.18,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#timeline",
          start: "top 85%",
        },
      }
    );

    // CTA section
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 90%",
        },
      }
    );

    // Footer
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 98%",
        },
      }
    );
  }, []);

  // Glitch animation for text (CSS only)
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes glitch {
        0% { text-shadow: 2px 0 #ff00c8, -2px 0 #00fff7; }
        20% { text-shadow: -2px 2px #ff00c8, 2px -2px #00fff7; }
        40% { text-shadow: 2px -2px #ff00c8, -2px 2px #00fff7; }
        60% { text-shadow: -2px -2px #ff00c8, 2px 2px #00fff7; }
        80% { text-shadow: 2px 2px #ff00c8, -2px -2px #00fff7; }
        100% { text-shadow: 0 0 #ff00c8, 0 0 #00fff7; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0f1a] to-black overflow-x-hidden font-sans">
      <SciFiBG />

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center justify-center w-full pt-28 pb-16 px-4 min-h-screen">
        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03)_0_2px,transparent_2px_12px)] mix-blend-overlay" />
        <div
          className="w-[80vw] max-w-2xl h-1.5 rounded bg-gradient-to-r from-cyan-400 to-fuchsia-600 shadow-[0_0_32px_#00fff7,0_0_8px_#00fff7_inset] mb-8"
          ref={linesRef}
        ></div>
        <h1
          className="text-4xl md:text-7xl font-extrabold text-cyan-100 tracking-widest text-center mb-8 relative"
          ref={headlineRef}
        >
          <span
            className="inline-block relative animate-[glitch_2s_infinite_linear_alternate-reverse]"
            style={{
              fontFamily: "'Orbitron', 'Segoe UI', monospace",
              letterSpacing: "0.18em",
              textShadow: "0 0 18px #00fff7, 0 0 32px #001f3f",
            }}
          >
            THE BLACK FUTURE
          </span>
        </h1>
        <p className="max-w-xl text-center text-cyan-100/80 text-lg md:text-2xl mb-10">
          Enter a new era of technology. Quantum speed, neon security, and AI-powered everything—wrapped in a holographic interface.
        </p>
        <button
          className="holo-btn px-10 py-4 rounded-lg border-2 border-cyan-400 text-cyan-200 font-orbitron text-xl shadow-[0_0_24px_#00fff7,0_0_8px_#00fff7_inset] bg-cyan-400/10 hover:bg-cyan-400/20 hover:shadow-[0_0_48px_#00fff7,0_0_16px_#00fff7_inset] transition-all duration-200 mt-2"
          ref={buttonRef}
        >
          ENGAGE
        </button>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative z-10 py-20 px-4 bg-black/90 backdrop-blur-md border-t border-b border-cyan-400/10">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 text-center mb-12 tracking-widest">
          <span className="inline-block animate-pulse">FEATURES</span>
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={el => (featureRefs.current[i] = el!)}
              className="relative bg-gradient-to-br from-black via-[#181c22] to-black border border-cyan-400/30 rounded-2xl shadow-[0_0_32px_#00fff7,0_0_12px_#00fff7_inset] p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 hover:rotate-2 hover:shadow-[0_0_64px_#00fff7,0_0_32px_#00fff7_inset] transition-all duration-300 group"
              style={{ perspective: "800px" }}
            >
              <div className="text-4xl mb-4 drop-shadow-[0_0_12px_#00fff7] animate-bounce">{f.icon}</div>
              <h3 className="text-xl font-bold text-cyan-100 mb-2 tracking-wide group-hover:text-cyan-300 transition">{f.title}</h3>
              <p className="text-cyan-100/80 text-center">{f.desc}</p>
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-fuchsia-400/30 blur-md animate-ping"></div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" className="relative z-10 py-20 px-4 bg-gradient-to-br from-black/95 to-[#181c22]/95">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-200 text-center mb-12 tracking-widest">
          <span className="inline-block animate-pulse">HOW IT WORKS</span>
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-10">
          {timeline.map((step, i) => (
            <div
              key={step.label}
              ref={el => (stepRefs.current[i] = el!)}
              className="flex items-start gap-6 bg-cyan-400/5 border-l-4 border-fuchsia-400/40 rounded-xl p-6 shadow-[0_0_24px_#00fff7,0_0_8px_#00fff7_inset] relative"
            >
              <div className="w-6 h-6 rounded-full bg-fuchsia-400 shadow-[0_0_24px_#ff00c8,0_0_8px_#ff00c8_inset] mt-1 animate-pulse"></div>
              <div>
                <h4 className="text-lg font-bold text-cyan-100 mb-1 tracking-wide">{step.label}</h4>
                <p className="text-cyan-100/80">{step.desc}</p>
              </div>
              {/* Futuristic connector */}
              {i < timeline.length - 1 && (
                <div className="absolute left-2 top-full w-1 h-8 bg-gradient-to-b from-fuchsia-400/60 to-transparent rounded-full animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative z-10 py-20 px-4 bg-black/95 border-t border-b border-fuchsia-400/10">
        <h2 className="text-3xl md:text-4xl font-bold text-fuchsia-400 text-center mb-12 tracking-widest">
          <span className="inline-block animate-pulse">WHAT USERS SAY</span>
        </h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative bg-gradient-to-br from-black via-[#181c22] to-black border border-fuchsia-400/30 rounded-2xl shadow-[0_0_32px_#ff00c8,0_0_12px_#ff00c8_inset] p-8 w-full max-w-xs flex flex-col items-center hover:scale-105 hover:-rotate-2 hover:shadow-[0_0_64px_#ff00c8,0_0_32px_#ff00c8_inset] transition-all duration-300 group"
            >
              <div className="text-4xl mb-4 drop-shadow-[0_0_12px_#ff00c8]">{t.avatar}</div>
              <p className="text-cyan-100/90 text-center mb-4 italic">"{t.quote}"</p>
              <div className="text-cyan-200 font-bold">{t.name}</div>
              <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-fuchsia-400/30 blur-md animate-ping"></div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="relative z-10 py-20 px-4 bg-gradient-to-br from-black/95 to-[#181c22]/95">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-cyan-100 mb-6 tracking-widest animate-pulse">
            Ready to Transcend?
          </h2>
          <p className="text-cyan-100/80 text-lg md:text-2xl mb-8">
            Join the next generation of innovators and experience the future today.
          </p>
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-lg border-2 border-fuchsia-400 text-fuchsia-200 font-orbitron text-xl shadow-[0_0_24px_#ff00c8,0_0_8px_#ff00c8_inset] bg-fuchsia-400/10 hover:bg-fuchsia-400/20 hover:shadow-[0_0_48px_#ff00c8,0_0_16px_#ff00c8_inset] transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        ref={footerRef}
        className="relative z-10 bg-black border-t-4 border-gradient-to-r from-fuchsia-400 via-cyan-400 to-fuchsia-400 py-10 px-4 text-center text-cyan-200"
        style={{
          borderImage: "linear-gradient(90deg, #ff00c8 0%, #00fff7 50%, #ff00c8 100%) 1",
        }}
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-8 justify-center items-center">
          <span className="text-cyan-100/80">&copy; 2025 BlackFuture. All rights reserved.</span>
          <span>
            <a href="#" className="hover:text-fuchsia-400 transition">Privacy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-fuchsia-400 transition">Terms</a>
          </span>
        </div>
        <div className="mt-4 text-xs text-cyan-100/40">
          Designed with <span className="text-fuchsia-400">♥</span> for the next generation.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
