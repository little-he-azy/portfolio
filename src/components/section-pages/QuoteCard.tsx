"use client";

import { SectionTheme } from "./sectionTheme";

interface QuoteCardProps {
  theme: SectionTheme;
  quote: string[];
  doodle: React.ReactNode;
}

export default function QuoteCard({ theme, quote, doodle }: QuoteCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[22px] border-[1.5px] p-6 md:p-7"
      style={{
        backgroundColor: theme.quoteBg,
        borderColor: theme.border,
      }}
    >
      {/* 大引号 */}
      <div className="text-5xl leading-none opacity-30 font-serif select-none" style={{ color: theme.accent }}>
        &ldquo;
      </div>

      <div className="mt-1 space-y-0.5">
        {quote.map((line, i) => (
          <p key={i} className="text-base font-medium leading-relaxed text-[#5c5045] md:text-lg">
            {line}
          </p>
        ))}
      </div>

      {/* 右下角 doodle */}
      <div className="absolute bottom-3 right-3">
        {doodle}
      </div>
    </div>
  );
}
