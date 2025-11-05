import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("scroll", close);
    return () => window.removeEventListener("scroll", close);
  }, []);

  return (
    <div className="min-h-screen bg-[#070711] text-white">
      <motion.div style={{ scaleX: progress }} className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left bg-gradient-to-r from-sky-400 via-violet-400 to-fuchsia-400" />

      <Nav open={open} setOpen={setOpen} />

      <main>
        <Hero />
        <About />
        <SkillsStrip />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

function Nav({ open, setOpen }) {
  return (
    <header className="fixed left-0 top-0 z-40 w-full border-b border-white/5 bg-[#070711]/60 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white/90">
          AYUSH<span className="bg-gradient-to-r from-sky-400 to-fuchsia-400 bg-clip-text text-transparent">.DEV</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 transition hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/5 bg-[#070711]/80 p-4 md:hidden">
          <div className="grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function SkillsStrip() {
  const items = [
    "Frontend Magic",
    "Backend Logic",
    "UI/UX Design",
    "AI Integration",
    "Motion Design",
  ];
  return (
    <section className="relative w-full overflow-hidden border-y border-white/5 bg-white/5 py-4">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070711] via-transparent to-[#070711]" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -200, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex gap-10 whitespace-nowrap px-6 text-sm text-white/80"
      >
        {Array.from({ length: 3 }).map((_, round) => (
          <span key={round} className="flex items-center gap-10">
            {items.map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-sky-400 to-fuchsia-400" />
                {t}
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
