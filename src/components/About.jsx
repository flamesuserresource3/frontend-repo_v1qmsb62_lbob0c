import { motion } from "framer-motion";
import { Sparkles, Code2, Palette, BrainCircuit } from "lucide-react";

const timeline = [
  {
    year: "2016",
    title: "HTML & CSS",
    text: "Foundations of structure and style — the spark of creation.",
  },
  {
    year: "2019",
    title: "React & Motion",
    text: "Component thinking, animation systems, and design systems.",
  },
  {
    year: "2021",
    title: "Full‑Stack",
    text: "APIs, databases, scalability, and cloud-native workflows.",
  },
  {
    year: "2024",
    title: "AI‑Augmented",
    text: "Intelligent interfaces powered by embeddings, LLMs, and agents.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#070711] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-3"
        >
          <Sparkles className="h-6 w-6 text-fuchsia-400" />
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Fueled by code, creativity, and curiosity</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05, duration: 0.8 }}
          className="max-w-3xl text-white/70"
        >
          I design digital experiences that merge art and logic — crafted for elegance, speed, and meaning. My work blends human‑centered design with technical precision to build interfaces that feel alive.
        </motion.p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <GlowCard icon={<Code2 />} title="Frontend Magic" text="React ecosystems, design systems, animation, and WebGL‑powered visuals." />
          <GlowCard icon={<BrainCircuit />} title="Backend Logic" text="Fast APIs, resilient data, auth, and real‑time experiences at scale." />
          <GlowCard icon={<Palette />} title="UI/UX Design" text="Intentional, cinematic visuals that guide attention and delight." />
          <GlowCard icon={<Sparkles />} title="Motion Design" text="Micro‑interactions and smooth narrative transitions with purpose." />
        </div>

        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-8 text-xl font-semibold text-white/90"
          >
            Journey
          </motion.h3>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-400/70 via-violet-400/40 to-sky-400/0" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className="relative ml-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
                >
                  <div className="absolute -left-[23px] top-5 h-3 w-3 rounded-full bg-fuchsia-400 shadow-[0_0_14px_4px] shadow-fuchsia-500/40" />
                  <div className="flex items-center justify-between text-white/80">
                    <span className="text-sm">{item.year}</span>
                    <span className="text-sm font-semibold text-white">{item.title}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GlowCard({ icon, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
    >
      <div className="pointer-events-none absolute -inset-1 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee22_0deg,#a78bfa22_120deg,#f0abfc22_240deg,#22d3ee22_360deg)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-fuchsia-500/20 text-fuchsia-300">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/70">{text}</p>
      </div>
    </motion.div>
  );
}
