import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import GlassCard from "@/components/GlassCard";

const getProject = (slug) => {
  return projects.find((p) => p.slug === slug || p.id === slug);
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug || p.id }));
}
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const p = getProject(params.slug);
  if (!p) return {};
  const title = `${p.title} • Ayaan Ahmad`;
  const description = p.subtitle || (p.paragraphs?.[0] ?? "");
  const image = p.cover?.startsWith("http") ? p.cover : (p.cover ? `https://ayaanahmad.org${p.cover}` : undefined);
  return {
    title,
    description,
    openGraph: { title, description, images: image ? [{ url: image }] : undefined },
    twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined }
  };
}

export default function ProjectPage({ params }) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  return (
    <div className="space-y-6">
      <Link href="/" className="inline-flex items-center text-sm text-cyan-300 hover:underline">
        &larr; Back to Home
      </Link>

      <div className="flex items-start gap-6 flex-col lg:flex-row">
        {/* Left: image + skills + links */}
        <div className="lg:w-5/12 w-full">
          <GlassCard className="p-4">
            {p.cover && (
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
                <Image src={p.cover} alt={p.title} fill className="object-cover" />
              </div>
            )}
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-200 mb-2">Skills used</h4>
              <div className="flex flex-wrap gap-2">
                {p.skills.map((s) => (
                  <span key={s} className="px-2 py-1 text-xs rounded-full border border-white/15 bg-white/5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {(p.links?.repo || p.links?.demo || p.links?.writeup) && (
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                {p.links?.repo && <a className="underline hover:text-cyan-300" target="_blank" href={p.links.repo}>GitHub Repo</a>}
                {p.links?.demo && <a className="underline hover:text-cyan-300" target="_blank" href={p.links.demo}>Live Demo</a>}
                {p.links?.writeup && <a className="underline hover:text-cyan-300" target="_blank" href={p.links.writeup}>Write-up</a>}
              </div>
            )}
          </GlassCard>
        </div>

        {/* Right: deep dive */}
        <div className="lg:w-7/12 w-full">
          <GlassCard className="p-6">
            <h1 className="text-2xl font-bold">{p.title}</h1>
            {p.subtitle && <p className="mt-1 text-slate-300">{p.subtitle}</p>}
            <div className="mt-5 space-y-4 leading-7 text-slate-100">
              {(p.paragraphs || []).map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
