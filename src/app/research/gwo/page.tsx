import Link from "next/link";
import { notFound } from "next/navigation";
import { publications, RE } from "@/data/research";

const publication = publications.find((p) => p.slug === "gwo");

export const metadata = {
  title: publication ? `${publication.title} | AZY HE` : "Research | AZY HE",
  description: publication?.summary || "Research paper details.",
};

export default function PaperDetailPage() {
  if (!publication) {
    notFound();
  }

  return (
    <main className="relative mx-auto w-full max-w-[900px] px-6 pb-16 md:px-8">
      {/* Breadcrumb */}
      <div className="pt-6 pb-4 md:pt-8 md:pb-6">
        <Link
          href="/research"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#8a7c62] transition-colors hover:text-[#64A8E8]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Research
          <span className="font-cn text-xs">科研</span>
          <span className="text-[#c8d9c4]">/</span>
          <span className="text-[#3b3328]">{publication.title}</span>
        </Link>
      </div>

      {/* Paper Header */}
      <div className="animate-reveal rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
            style={{ backgroundColor: RE.tagBg, color: RE.tagText }}
          >
            {publication.level}
          </span>
          <span className="text-xs font-medium text-[#a09582]">{publication.year}</span>
        </div>

        <h1 className="mt-3 text-xl font-bold leading-snug text-[#3b3328] md:text-2xl">
          {publication.title}
        </h1>
        <p className="font-cn mt-1 text-sm text-[#8a7c62]">{publication.titleZh}</p>

        <p className="mt-3 text-sm text-[#8a7c62]">
          {publication.authors} · {publication.venue}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {publication.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium"
              style={{ borderColor: RE.tagBorder, backgroundColor: RE.tagBg, color: RE.tagText }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="animate-reveal mt-6">
        <div className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: RE.accent }}>
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
          <h2 className="text-lg font-bold text-[#3b3328] md:text-xl">Overview</h2>
          <span className="font-cn text-sm font-medium text-[#8a7c62]">概览</span>
          <div className="ml-auto hidden h-[1px] flex-1 md:block" style={{ backgroundColor: `${RE.border}40` }} />
        </div>

        <div className="mt-4 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-5 md:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a09480]">Role</span>
              <p className="mt-1 text-sm font-semibold text-[#3b3328]">{publication.role}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a09480]">Period</span>
              <p className="mt-1 text-sm font-semibold text-[#3b3328]">{publication.period}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a09480]">Venue</span>
              <p className="mt-1 text-sm font-semibold text-[#3b3328]">{publication.venue}</p>
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#a09480]">Year</span>
              <p className="mt-1 text-sm font-semibold text-[#3b3328]">{publication.year}</p>
            </div>
          </div>

          <div className="mt-5 border-t border-dashed border-[#c8d9c4] pt-5">
            <p className="text-sm leading-relaxed text-[#5c5045]">{publication.summary}</p>
            {publication.summaryZh && (
              <p className="font-cn mt-2 text-sm leading-relaxed text-[#8a7c62]">{publication.summaryZh}</p>
            )}
          </div>
        </div>
      </section>

      {/* Read the Paper */}
      <section className="animate-reveal mt-6">
        <div className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: RE.accent }}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
          <h2 className="text-lg font-bold text-[#3b3328] md:text-xl">Read the Paper</h2>
          <span className="font-cn text-sm font-medium text-[#8a7c62]">阅读论文</span>
          <div className="ml-auto hidden h-[1px] flex-1 md:block" style={{ backgroundColor: `${RE.border}40` }} />
        </div>

        <div className="mt-4">
          {publication.paperUrl && publication.paperUrl !== "#" ? (
            <a
              href={publication.paperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] px-6 py-3 text-sm font-semibold text-[#3b3328] transition-all hover:-translate-y-0.5 hover:border-[#91BCE8] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={RE.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Open Paper PDF
              <span className="text-xs text-[#8a7c62]">↗</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 rounded-2xl border border-dashed border-[#c8d9c4] bg-[#faf8f3] px-6 py-3 text-sm font-medium text-[#b0a58f]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b0a58f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Paper link coming soon
            </div>
          )}
        </div>
      </section>

      {/* Research Moments */}
      <section className="animate-reveal mt-6">
        <div className="flex items-center gap-3">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: RE.accent }}>
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <h2 className="text-lg font-bold text-[#3b3328] md:text-xl">Research Moments</h2>
          <span className="font-cn text-sm font-medium text-[#8a7c62]">研究历程</span>
          <div className="ml-auto hidden h-[1px] flex-1 md:block" style={{ backgroundColor: `${RE.border}40` }} />
        </div>

        <div className="mt-4 relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] rounded-full" style={{ backgroundColor: `${RE.border}50` }} />

          <div className="flex flex-col gap-5">
            {publication.researchMoments.map((moment, i) => (
              <div key={i} className="relative flex items-start gap-4 pl-1">
                {/* Dot */}
                <div
                  className="relative z-10 mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 bg-[#fffdf5]"
                  style={{ borderColor: RE.accent }}
                />

                <div className="flex-1 rounded-xl border border-[#c8d9c4] bg-[#fffdf5] p-4 transition-all hover:border-[#91BCE8]">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: RE.accent }}
                  >
                    {moment.date}
                  </span>
                  <h3 className="mt-1 text-sm font-bold text-[#3b3328]">{moment.title}</h3>
                  <p className="mt-1 text-sm text-[#5c5045]">{moment.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
