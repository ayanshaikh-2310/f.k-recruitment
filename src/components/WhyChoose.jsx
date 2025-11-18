import React from "react";
import { Star, Clock, Shield, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    title: "Trusted Agency",
    icon: Star,
    desc: "Years of experience & satisfied clients.",
  },
  {
    title: "Quick Hiring",
    icon: Clock,
    desc: "Short time-to-hire with efficient screening.",
  },
  {
    title: "Verified Candidates",
    icon: Shield,
    desc: "Background checks & skill validation.",
  },
  {
    title: "Affordable Plans",
    icon: DollarSign,
    desc: "Flexible pricing for startups to enterprises.",
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-amber-800">
      <div className="max-w-6xl mx-auto px-6">
        <h4 className="text-3xl font-bold text-white">Why Choose Us</h4>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
          {points.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-6 bg-amber-50  rounded-2xl text-center shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-center mb-3 w-12 h-12 rounded-full bg-fksoft mx-auto">
                  <Icon />
                </div>

                <div className="font-semibold text-amber-800">{p.title}</div>
                <div className="text-sm text-gray-600 mt-2">{p.desc}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
