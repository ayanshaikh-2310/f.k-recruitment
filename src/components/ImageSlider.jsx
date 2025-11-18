import React from "react";
import { motion } from "framer-motion";

export default function ImageSlider() {
  const logos = [
    "/images/img-1.avif",
    "/images/img-2.avif",
    "/images/img-3.avif",
    "/images/labour.jpeg",
    "/images/waiter.jpg",
  ];

  const all = [...logos, ...logos];

  return (
    <section className="py-16 bg-amber-50">
      <div className="overflow-hidden relative h-40">
        <motion.div
          className="flex gap-12 w-max"
          animate={{
            x: ["0%", "-50%"],
            y: [0, -20, 20, -20, 0],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {all.map((src, i) => (
            <div
              key={i}
              className="w-40 h-40 sm:w-44 sm:h-44 rounded-xl overflow-hidden"
            >
              <motion.img
                src={src}
                className="w-full h-full object-cover"
                animate={{
                  y: [0, -12, 12, -12, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
