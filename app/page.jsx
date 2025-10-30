"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

const SOCIALS = [
  { label: "Email", href: "mailto:ayaanzahmad@gmail.com" },
  { label: "GitHub", href: "https://github.com/ayaanzahmad" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ayaan-ahmad-071673321/" },
  { label: "Resume (PDF)", href: "/projects/Ayaan_Ahmad_Resume.pdf" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const tags = useMemo(() => ["All", ...Array.from(new Set(projects.flatMap(p => p.skills)))], []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return projects.filter(p => {
      const inTag = activeTag === "All" || p.skills.includes(activeTag);
      const inText = (
        p.title + " " + (p.subtitle || "") + " " + (p.skills || []).join(" ") + " " + (p.highlights || []).join(" ")
      ).toLowerCase().includes(q);
      return inTag && inText;
    });
  }, [query, activeTag]);

  return (
    <div>
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/10 border-b border-white/10">
        <div className="mx-auto max-w-5xl px-2 sm:px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow" />
            <div>
              <h1 className="text-xl font-semibold">Ayaan Ahmad</h1>
              <p className="text-xs text-slate-300">Full‑Stack • Data Pipelines • Automation</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} className="hover:underline" target="_blank" rel="noreferrer">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-2 sm:px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              I build lean systems that turn messy data into <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-cyan-400">useful decisions</span>.
            </h2>
            <p className="mt-3 text-slate-300 leading-relaxed">
              Georgia State CS → aiming to transfer to Georgia Tech (Computer Engineering). I ship applied AI, ETL, and automation projects.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              {["Python","Pandas","FastAPI/Flask","React/Next.js","SQL","APIs","Docker"].map((t) => (
                <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl p-4 shadow">
              <h3 className="text-sm font-medium">Quick Actions</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a className="hover:underline" href="#projects">View Projects ↓</a></li>
                <li><a className="hover:underline" href={SOCIALS.find(s=>s.label.includes("Resume"))?.href} target="_blank" rel="noreferrer">Download Resume</a></li>
                <li><a className="hover:underline" href={SOCIALS.find(s=>s.label==="Email")?.href}>Email Me</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-5xl px-2 sm:px-4 pb-3">
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="flex gap-2 flex-wrap">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag(t)}
                className={`px-3 py-1.5 rounded-full text-sm border ${
                  activeTag === t
                    ? "border-indigo-400 bg-indigo-400/10 text-indigo-200"
                    : "border-white/15 hover:bg-white/10"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tech, features…"
              className="w-full md:w-80 rounded-xl border border-white/15 bg-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-2 sm:px-4 pb-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article key={p.id} className="group">
              <Link href={`/projects/${p.slug || p.id}`} className="block">
                <div className="rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl overflow-hidden hover:bg-white/15 transition">
                  {p.cover && (
                    <div className="relative aspect-video">
                      {/* Use next/image for perf */}
                      <Image src={p.cover} alt={p.title} fill className="object-cover group-hover:scale-[1.02] transition-transform" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-300">{p.subtitle}</p>
                    {p.highlights && (
                      <ul className="mt-3 space-y-1 text-sm list-disc list-inside text-slate-200">
                        {p.highlights.map((h, i) => (<li key={i}>{h}</li>))}
                      </ul>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.skills.slice(0, 4).map((s) => (
                        <span key={s} className="rounded-md border border-white/15 bg-white/5 px-2 py-0.5 text-xs">{s}</span>
                      ))}
                    </div>
                    {p.impact && (<p className="mt-3 text-sm italic text-slate-300">Impact: {p.impact}</p>)}
                    <div className="mt-4 flex gap-3 text-sm">
                      {p.links?.repo && (<a href={p.links.repo} target="_blank" rel="noreferrer" className="underline underline-offset-2">Code</a>)}
                      {p.links?.demo && (<a href={p.links.demo} target="_blank" rel="noreferrer" className="underline underline-offset-2">Demo</a>)}
                      {p.links?.writeup && (<a href={p.links.writeup} target="_blank" rel="noreferrer" className="underline underline-offset-2">Write‑up</a>)}
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-2 sm:px-4 py-10 text-sm text-slate-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© {new Date().getFullYear()} Ayaan Ahmad. All rights reserved.</p>
            <div className="flex gap-4">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="hover:underline" target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
