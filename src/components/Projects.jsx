import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Nebula UI",
    desc: "A component library with holographic theming and motion‑first primitives.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1400&auto=format&fit=crop",
    tech: ["React", "Framer Motion", "Tailwind"],
    url: "https://example.com",
  },
  {
    title: "Flux Studio",
    desc: "Visual playground for generative art, shaders, and timeline animations.",
    img: "https://images.unsplash.com/photo-1545665277-5937489579cc?q=80&w=1400&auto=format&fit=crop",
    tech: ["WebGL", "Three.js", "Vite"],
    url: "https://example.com",
  },
  {
    title: "Pulse Analytics",
    desc: "Real‑time dashboards with AI insights and cinematic transitions.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop",
    tech: ["Next.js", "Edge", "D3"],
    url: "https://example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#070711] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.10),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(240,171,252,0.10),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-2xl font-bold sm:text-3xl"
        >
          Selected Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} i={i} />)
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, i }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: i * 0.05, duration: 0.6 }}
      className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
      style={{ perspective: 1000 }}
    >
      <div className="relative">
        <img src={project.img} alt={project.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070711] via-[#070711]/30 to-transparent opacity-80" />
      </div>
      <div className="relative p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <ExternalLink className="h-4 w-4 text-white/60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
        </div>
        <p className="text-sm text-white/70">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
              {t}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 translate-y-10 bg-gradient-to-t from-fuchsia-500/10 via-violet-500/10 to-sky-500/10 opacity-0 blur-2xl transition duration-700 group-hover:translate-y-0 group-hover:opacity-100" />
      </div>
    </motion.a>
  );
}
