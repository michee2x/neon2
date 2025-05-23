import { useRef } from "react";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const container = useRef<HTMLDivElement>(null);
  const ball = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const cube = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ball morphs, rotates, glows, and floats
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ball.current,
          start: "top 80%",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      })
      .to(ball.current, {
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #00fff7, #0e0e2c 80%)",
        boxShadow: "0 0 80px 20px #00fff7, 0 0 200px 80px #0e0e2c",
        scale: 1.5,
        y: 200,
        rotateZ: 360,
        filter: "blur(2px)",
        duration: 2,
        ease: "power2.inOut",
      })
      .to(ball.current, {
        scale: 0.8,
        background: "linear-gradient(135deg, #ff00ea, #00fff7 80%)",
        boxShadow: "0 0 120px 40px #ff00ea, 0 0 200px 80px #00fff7",
        filter: "blur(0px)",
        y: 0,
        duration: 2,
        ease: "expo.inOut",
      });

    // Ring spins, scales, and colorizes
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ring.current,
          start: "top 90%",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(ring.current, {
        rotateZ: 720,
        scale: 1.8,
        borderColor: "#00fff7",
        boxShadow: "0 0 60px 10px #00fff7",
        duration: 2,
        ease: "power2.inOut",
      })
      .to(ring.current, {
        scale: 1,
        borderColor: "#ff00ea",
        boxShadow: "0 0 120px 40px #ff00ea",
        duration: 2,
        ease: "expo.inOut",
      });

    // Cube 3D rotates, morphs, and glows
    gsap
      .timeline({
        scrollTrigger: {
          trigger: cube.current,
          start: "top 95%",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(cube.current, {
        rotateY: 360,
        rotateX: 180,
        scale: 1.6,
        background: "linear-gradient(45deg, #00fff7, #ff00ea)",
        boxShadow: "0 0 80px 20px #ff00ea, 0 0 200px 80px #00fff7",
        duration: 2,
        ease: "power2.inOut",
      })
      .to(cube.current, {
        scale: 1,
        rotateY: 0,
        rotateX: 0,
        background: "linear-gradient(135deg, #0e0e2c, #00fff7)",
        boxShadow: "0 0 120px 40px #00fff7",
        duration: 2,
        ease: "expo.inOut",
      });

    // Container background morphs
    gsap.to(container.current, {
      background: "linear-gradient(120deg, #0e0e2c 0%, #00fff7 100%)",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={container}
      className="min-h-[300vh] px-6 w-full transition-all duration-1000 flex flex-col items-center justify-start py-32"
      style={{
        background: "linear-gradient(120deg, #0e0e2c 0%, #ff00ea 100%)",
        transition: "background 1s",
      }}
    >
      <h1 className="text-5xl font-extrabold text-white mb-32 tracking-widest drop-shadow-[0_2px_20px_#00fff7]">
        Futuristic Scroll Animation
      </h1>
      <div
        ref={ball}
        className="w-40 h-40 rounded-[10px] flex items-center justify-center text-white text-2xl font-bold shadow-2xl mb-40 transition-all"
        style={{
          background: "linear-gradient(135deg, #0e0e2c, #ff00ea)",
          boxShadow: "0 0 40px 10px #ff00ea",
        }}
      >
        <span className="mix-blend-difference">NEON</span>
      </div>
      <div
        ref={ring}
        className="w-56 h-56 border-8 border-[#ff00ea] rounded-full flex items-center justify-center mb-40 transition-all"
        style={{
          boxShadow: "0 0 40px 10px #ff00ea",
        }}
      >
        <span className="text-[#00fff7] text-3xl font-bold tracking-widest">
          RING
        </span>
      </div>
      <div
        ref={cube}
        className="w-32 h-32 bg-gradient-to-br from-[#0e0e2c] to-[#00fff7] rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-2xl transition-all"
        style={{
          boxShadow: "0 0 40px 10px #00fff7",
          perspective: "800px",
        }}
      >
        <span className="mix-blend-difference">CUBE</span>
      </div>
      <div className="h-[120vh]" />
    </div>
  );
}

export default App;
