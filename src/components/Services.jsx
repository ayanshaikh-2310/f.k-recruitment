import React from "react";
import { Briefcase, Users, CheckCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Permanent Hiring",
    desc: "Find full-time professionals for core roles.",
    icon: Briefcase,
  },
  {
    title: "Contract Staffing",
    desc: "Short-term and project-based hires.",
    icon: Users,
  },
  {
    title: "Resume Screening",
    desc: "Automated + manual shortlisting.",
    icon: FileText,
  },
  {
    title: "HR Consulting",
    desc: "Policies, onboarding & training support.",
    icon: CheckCircle,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-amber-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-white font-bold">Our Services</h2>
        <p className="text-white/60 mt-2">
          Solutions designed to fit your hiring needs.
        </p>

        <div className=" mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }} // scroll par animate
                viewport={{ once: false, amount: 0.3 }} // 30% visible hote hi animation
                transition={{ duration: 0.6, delay: idx * 0.1 }} // smooth stagger effect
                className="p-6 bg-amber-50 rounded-2xl shadow-md"
              >
                <div className=" flex items-center gap-4">
                  <div className=" w-12 h-12 rounded-xl bg-fksoft flex items-center justify-center">
                    <Icon />
                  </div>
                  <div>
                    <div className="font-semibold text-amber-800">{it.title}</div>
                    <div className="text-sm text-gray-600">{it.desc}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
