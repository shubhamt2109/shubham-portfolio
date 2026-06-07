"use client";

import { motion } from "framer-motion";

export default function Clouds() {

  return (
    <>
      <motion.div
        animate={{ x: [0, 200, 0] }}
        transition={{
          duration: 35,
          repeat: Infinity
        }}
        className="
        absolute
        top-20
        left-10
        text-8xl
        opacity-10
        "
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{ x: [0, -200, 0] }}
        transition={{
          duration: 40,
          repeat: Infinity
        }}
        className="
        absolute
        top-32
        right-20
        text-8xl
        opacity-10
        "
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{ x: [0, 150, 0] }}
        transition={{
          duration: 45,
          repeat: Infinity
        }}
        className="
        absolute
        bottom-20
        left-20
        text-7xl
        opacity-5
        "
      >
        ☁️
      </motion.div>

      <motion.div
        animate={{ x: [0, -150, 0] }}
        transition={{
          duration: 38,
          repeat: Infinity
        }}
        className="
        absolute
        bottom-24
        right-20
        text-7xl
        opacity-5
        "
      >
        ☁️
      </motion.div>
    </>
  );
}