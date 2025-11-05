import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, ArrowRight } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-[#070711] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#070711]/40 to-[#070711]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#070711] via-[#070711]/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-fuchsia-400 shadow-[0_0_12px_3px] shadow-fuchsia-500/60" />
          <span className="text-sm text-white/80">Crafting next‑gen interfaces</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-6xl md:text-7xl"
        >
          Hi, I’m Ayush Kumar
          <span className="block bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Futuristic Web Developer & Creative Designer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-6 max-w-2xl text-balance text-base text-white/70 sm:text-lg"
        >
          I build next‑generation web experiences with stunning visuals and uncompromising performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px] shadow-fuchsia-500/60 transition-transform duration-300 hover:scale-[1.03]"
          >
            Let’s Connect
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="ml-2 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur">
            <IconLink href="https://github.com" label="GitHub">
              <Github className="h-5 w-5" />
            </IconLink>
            <IconLink href="https://www.linkedin.com" label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </IconLink>
            <IconLink href="mailto:hello@example.com" label="Email">
              <Mail className="h-5 w-5" />
            </IconLink>
            <IconLink href="https://twitter.com" label="Twitter">
              <Twitter className="h-5 w-5" />
            </IconLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="group relative rounded-lg p-2 text-white/80 transition hover:text-white"
    >
      <span className="pointer-events-none absolute inset-0 -z-[0] rounded-lg bg-gradient-to-r from-sky-500/0 via-fuchsia-500/0 to-violet-500/0 opacity-0 blur transition-opacity duration-500 group-hover:opacity-70" />
      {children}
    </a>
  );
}
