import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import ImageSlider from "./components/ImageSlider";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "F.K Recruitment";

  useEffect(() => {
    let index = 0;

    // Typewriter effect
    const typer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typer);

        // Website load after typing finished
        setTimeout(() => setLoading(false), 400);
      }
    }, 120);

    return () => clearInterval(typer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-amber-800 flex items-center justify-center z-50">
        
        {/* Typing Text */}
        <motion.h1
          className="text-white text-4xl md:text-6xl font-bold tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.h1>

      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WhyChoose />
        <ImageSlider/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
