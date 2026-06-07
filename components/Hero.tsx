"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Clouds from "./Clouds";
import Stars from "./Stars";

export default function Hero() {
  return (
      <section
    id="home"
    className="
    relative
    overflow-hidden
    min-h-screen
    flex
    items-center
    justify-center

    bg-gradient-to-b
    from-slate-950
    via-blue-950
    to-slate-950
    "
  >
    <Clouds />
    <Stars />
      <div className="
      flex
      flex-col
      items-center
      justify-center
      text-center
      ">
      
        
      <motion.div
            animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity
        }}
      >
        <div
          className="
          relative
          w-40 h-40
          md:w-52
          md:h-52
          rounded-full
          p-1
          bg-gradient-to-r
          from-cyan-400
          via-purple-500
          to-cyan-400
          shadow-[0_0_40px_rgba(56,189,248,0.5)]
          "
        >
        <div
          className="
          absolute
          w-72
          h-72
          rounded-full

          bg-cyan-500/20

          blur-3xl

          animate-pulse
          "
        />
        
          <div
            className="
            w-full
            h-full
            rounded-full
            overflow-hidden
            bg-slate-900
            "
          >
            <Image
              src="/images/profile.jpg"
              alt="Shubham Turalkar"
              width={176}
              height={176}
              className="
              w-full
              h-full
              object-cover
              "
            />
          </div>
        </div>
      </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="
          text-7xl
          font-bold
          gradient-text
          "
        >
          Shubham Turalkar
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="
          text-2xl
          mt-6
          "
        >
          Cloud Engineer • FinOps Specialist
        </motion.h2>

        <p
          className="
          mt-6
          max-w-3xl
          mx-auto
          text-slate-400
          "
        >
          AWS Cloud Engineer with expertise
          in Cost Optimization,
          Multi-Account Governance,
          Terraform Automation
          and Cloud Architecture.
        </p>

        <div className="mt-10 flex gap-5 justify-center">

         <a
  href="/resume/ShubhamTuralkar.pdf"
  className="
  relative
  overflow-hidden
  group

  px-8
  py-3

  rounded-xl

  bg-cyan-500

  transition-all
  duration-300

  hover:scale-105
  hover:shadow-[0_0_25px_rgba(56,189,248,0.6)]
  "
>
  <span
    className="
    absolute
    inset-0

    translate-x-[-100%]

    bg-white/20

    transition-all
    duration-700

    group-hover:translate-x-[100%]
    "
  />

  <span className="relative z-10">
    Download Resume
  </span>
</a>

         <a
  href="#projects"
  className="
  px-8
  py-3

  rounded-xl

  bg-white/10
  backdrop-blur-md

  border
  border-white/20

  transition-all
  duration-300

  hover:bg-white/20
  hover:border-cyan-400
  hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
  hover:scale-105
  "
>
  View Projects
</a>
        </div>
      </div>
    </section>
  );
}