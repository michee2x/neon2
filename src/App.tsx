import { useState } from "react";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "./components/Hero";

function App() {
  return <div className="page">
    <Hero />
  </div>;
}

export default App;
