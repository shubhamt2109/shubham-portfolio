"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      w-full
      z-50
      glass
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        flex
        justify-between
        items-center
        p-5
        "
      >
      <Link
        href="#home"
        className="
        font-bold
        text-xl

        transition-all
        duration-300

        hover:text-cyan-400

        hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]
        "
      >
        ST
      </Link>

        <div className="flex gap-8">
      <Link
        href="#about"
        className="
        relative
        group
        "
      >
        About

        <span
          className="
          absolute

          left-0
          -bottom-1

          w-0
          h-[2px]

          bg-cyan-400

          transition-all
          duration-300

          group-hover:w-full
          "
        />
      </Link>
      <Link
        href="#skills"
        className="
        relative
        group
        "
        >
        Skills

        <span
          className="
          absolute

          left-0
          -bottom-1

          w-0
          h-[2px]

          bg-cyan-400

          transition-all
          duration-300

          group-hover:w-full
          "
        />
      </Link>
          <Link
            href="#experience"
            className="
            relative
            group
            "
          >
            Experience

            <span
              className="
              absolute

              left-0
              -bottom-1

              w-0
              h-[2px]

              bg-cyan-400

              transition-all
              duration-300

              group-hover:w-full
              "
            />
          </Link>
          <Link
            href="#projects"
            className="
            relative
            group
            "
          >
            Projects

            <span
              className="
              absolute

              left-0
              -bottom-1

              w-0
              h-[2px]

              bg-cyan-400

              transition-all
              duration-300

              group-hover:w-full
              "
            />
          </Link>
        <Link
          href="#contact"
          className="
          relative
          group
          "
        >
          Contact

          <span
            className="
            absolute

            left-0
            -bottom-1

            w-0
            h-[2px]

            bg-cyan-400

            transition-all
            duration-300

            group-hover:w-full
            "
          />
        </Link>
        </div>
      </div>
    </nav>
  );
}