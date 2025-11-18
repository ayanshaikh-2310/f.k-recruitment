import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full bg-amber-800 text-white backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <div className="font-semibold text-2xl">F.K Recruitment</div>
            <div className="text-xs text-white/60">
              Trusted hiring partners ...
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="hover:text-fkblue transition">
            Home
          </a>
          <a href="#services" className="hover:text-fkblue transition">
            Services
          </a>
          <a href="#about" className="hover:text-fkblue transition">
            About
          </a>
          <a href="#contact" className="hover:text-fkblue transition">
            Contact
          </a>
          <button
            className="ml-2 text-amber-800 bg-white px-4 py-2 rounded-3xl shadow-md hover:scale-105 transition"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started
          </button>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md focus-ring"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-amber-800 shadow-md"
        >
          <div className="flex flex-col px-6 py-4 gap-3">
            <a href="#home" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#services" onClick={() => setOpen(false)}>
              Services
            </a>
            <a href="#about" onClick={() => setOpen(false)}>
              About
            </a>
            <a href="#contact" onClick={() => setOpen(false)}>
              Contact
            </a>
            <button
              className="mt-2 bg-white text-amber-800 px-4 py-2 rounded-2xl"
              onClick={() => {
                setOpen(false);
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
