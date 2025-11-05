import { motion } from "framer-motion";
import { Mail, MapPin, ArrowUp } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#070711] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.10),transparent_40%)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-2xl font-bold sm:text-3xl"
        >
          Let’s Build the Future Together
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2">
          <GlassForm />
          <SideInfo />
        </div>

        <footer className="mt-20 flex items-center justify-between text-sm text-white/60">
          <p>Designed with ⚡ Passion & Precision.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 backdrop-blur transition hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
            Top
          </button>
        </footer>
      </div>
    </section>
  );
}

function GlassForm() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      onSubmit={(e) => e.preventDefault()}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      <div className="grid gap-4">
        <Input label="Your Name" placeholder="Neo of the Web" />
        <Input label="Email" type="email" placeholder="you@future.dev" />
        <div>
          <label className="mb-2 block text-sm text-white/70">Message</label>
          <textarea
            rows={5}
            className="w-full rounded-xl border border-white/10 bg-[#0b0b15]/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-0 transition focus:border-fuchsia-400/40"
            placeholder="Tell me about your vision…"
          />
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_-8px] shadow-fuchsia-500/60 transition-transform hover:scale-[1.02]"
        >
          Send Message
        </button>
      </div>
    </motion.form>
  );
}

function Input({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm text-white/70">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-[#0b0b15]/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none ring-0 transition focus:border-sky-400/40"
      />
    </div>
  );
}

function SideInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 backdrop-blur-md"
    >
      <div className="pointer-events-none absolute -inset-1 bg-[conic-gradient(from_0deg_at_50%_50%,#22d3ee11_0deg,#a78bfa11_120deg,#f0abfc11_240deg,#22d3ee11_360deg)] blur-xl" />
      <div className="relative">
        <div className="mb-6">
          <p className="text-sm text-white/70">
            Prefer email? I’m quick to respond.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-2 inline-flex items-center gap-2 text-sm text-sky-300 hover:underline"
          >
            <Mail className="h-4 w-4" /> hello@example.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-sm text-white/70">
          <MapPin className="h-4 w-4 text-fuchsia-300" /> Remote • Global
        </div>
        <ul className="mt-8 grid gap-2 text-sm text-white/70">
          <li>• Availability: limited for select projects</li>
          <li>• Time‑to‑value focus, performance‑first builds</li>
          <li>• Collaborative, transparent process</li>
        </ul>
      </div>
    </motion.div>
  );
}
