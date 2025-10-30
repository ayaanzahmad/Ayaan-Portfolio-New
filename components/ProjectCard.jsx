import Link from "next/link";
import Image from "next/image";
import GlassCard from "./GlassCard";

export default function ProjectCard({ p }) {
  return (
    <Link href={`/projects/${p.slug}`} className="block group">
      <GlassCard className="p-5">
        <div className="flex gap-4 items-center">
          <div className="relative h-24 w-24 overflow-hidden rounded-xl border border-white/10">
            <Image src={p.cover} alt={p.title} fill className="object-cover transition group-hover:scale-105" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            {p.subtitle && <p className="text-sm text-slate-300">{p.subtitle}</p>}
            {p.highlights && (
              <ul className="mt-2 list-disc ml-5 text-sm text-slate-200">
                {p.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {p.skills.slice(0, 4).map((s) => (
                <span key={s} className="px-2 py-1 text-xs rounded-full border border-white/15 bg-white/5">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
