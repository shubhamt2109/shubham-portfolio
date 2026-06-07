"use client";

import { motion } from "framer-motion";

const stars = [
  { top: "10%", left: "15%", size: 2 },
  { top: "20%", left: "80%", size: 3 },
  { top: "30%", left: "40%", size: 2 },
  { top: "15%", left: "60%", size: 2 },
  { top: "45%", left: "90%", size: 3 },
  { top: "65%", left: "20%", size: 2 },
  { top: "75%", left: "70%", size: 3 },
  { top: "85%", left: "45%", size: 2 },
  { top: "55%", left: "10%", size: 2 },
  { top: "35%", left: "25%", size: 3 },
  { top: "60%", left: "55%", size: 2 },
  { top: "90%", left: "85%", size: 2 },
];

export default function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan-300"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + (index % 3),
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}