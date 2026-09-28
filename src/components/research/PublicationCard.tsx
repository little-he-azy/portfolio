import Link from "next/link";
import { RE, Publication } from "@/data/research";

interface PublicationCardProps {
  publication: Publication;
  index?: number;
}

export default function PublicationCard({ publication, index = 0 }: PublicationCardProps) {
  return (
    <Link
      href={`/research/${publication.slug}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-[#c8d9c4] bg-[#fffdf5] p-5 transition-all hover:-translate-y-0.5 hover:border-[#91BCE8] hover:shadow-[0_4px_12px_rgba(70,50,30,0.05)] md:flex-row md:items-start md:gap-5"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Left: document icon */}
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
        style={{
          backgroundColor: RE.bgLight,
          borderColor: `${RE.border}40`,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={RE.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      </div>

      {/* Right: content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <h3 className="text-base font-bold text-[#3b3328] md:text-lg leading-snug">
            {publication.title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-[11px] font-bold"
              style={{ backgroundColor: RE.tagBg, color: RE.tagText }}
            >
              {publication.level}
            </span>
            <span className="text-xs font-medium text-[#a09582] whitespace-nowrap">
              {publication.year}
            </span>
          </div>
        </div>

        <p className="font-cn mt-1 text-sm text-[#8a7c62]">{publication.titleZh}</p>

        <p className="mt-1.5 text-sm text-[#8a7c62]">
          {publication.authors} · {publication.venue}
        </p>

        <p className="mt-2 text-sm leading-relaxed text-[#5c5045]">
          {publication.summary}
        </p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {publication.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-2.5 py-0.5 text-[11px] font-medium"
              style={{ borderColor: RE.tagBorder, backgroundColor: RE.tagBg, color: RE.tagText }}
            >
              {tag}
            </span>
          ))}
          <span className="ml-auto text-sm text-[#c8d9c4] transition-colors group-hover:text-[#64A8E8]">
            View ↗
          </span>
        </div>
      </div>
    </Link>
  );
}
