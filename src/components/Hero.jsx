import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="py-16 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-amber-800">
            Find the Right Talent for Your Business
          </h1>
          <p className="mt-4">
            F.K Recruitment helps companies hire verified, skilled candidates
            fast — from entry-level to leadership. We tailor solutions for each
            business and industry.
          </p>
          <div className="mt-6 flex gap-4 items-center">
            <a
              href="#contact"
              className="inline-block bg-fkblue text-white bg-amber-800 px-6 py-3 rounded-3xl shadow-lg hover:scale-105 transition"
            >
              Get Started
            </a>
            <a
              href="#services"
              class="border border-amber-800 rounded-3xl px-6 py-3 text-amber-800 text-sm hover:text-fkblue hover:border-fkblue transition"
            >
              Our Services <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-gray-600">
            <div className="p-3 rounded-xl bg-fksoft">Quick Hiring</div>
            <div className="p-3 rounded-xl bg-fksoft">Verified Candidates</div>
            <div className="p-3 rounded-xl bg-fksoft">Affordable Plans</div>
            <div className="p-3 rounded-xl bg-fksoft">HR Consulting</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="rounded-3xl shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1698047682091-782b1e5c6536?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVjcnVpdG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt="team"
              className="w-full h-80 object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 bg-white rounded-2xl p-4 shadow-lg w-64">
            <div className="text-xs text-gray-500">Featured</div>
            <div className="font-semibold text-amber-800">Onboarding made simple</div>
            <div className="text-xs text-gray-500 mt-2">
              We handle screening, interviews and initial assessments.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
