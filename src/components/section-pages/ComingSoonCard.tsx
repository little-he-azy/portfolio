"use client";

import { SectionTheme } from "./sectionTheme";

interface ComingSoonCardProps {
  theme: SectionTheme;
  progress?: number;
}

export default function ComingSoonCard({ theme, progress = 70 }: ComingSoonCardProps) {
  return (
    <div
      className="mx-auto w-full max-w-lg rounded-[26px] border-[1.5px] p-8 md:p-10 text-center"
      style={{
        backgroundColor: theme.cardBg,
        borderColor: `${theme.border}60`,
        boxShadow: "0 5px 15px rgba(70,50,30,0.04)",
      }}
    >
      {/* 小植物图标 */}
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full" style={{ backgroundColor: theme.bgLight }}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke={theme.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M24 44V28" />
          <path d="M24 28c0-8-6-12-12-12 0 8 4 14 12 14z" fill={theme.accent} fillOpacity="0.2" />
          <path d="M24 28c0-6 4-10 10-10 0 6-4 12-10 12z" fill={theme.accent} fillOpacity="0.2" />
          <circle cx="30" cy="10" r="2" fill={theme.accent} />
        </svg>
      </div>

      <h2 className="mt-5 text-2xl font-bold text-[#3b3328] md:text-3xl">
        Still cooking ...
      </h2>

      {/* 进度条 */}
      <div className="mt-5 mx-auto w-full max-w-xs">
        <div
          className="h-3 w-full rounded-full overflow-hidden"
          style={{ backgroundColor: `${theme.border}30` }}
        >
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: theme.accent,
            }}
          />
        </div>
        <p className="mt-2 text-sm font-semibold" style={{ color: theme.accent }}>
          {progress}%
        </p>
      </div>

      <p className="font-cn mt-4 text-sm text-[#8a7c62]">
        更多内容正在路上，敬请期待！
      </p>
    </div>
  );
}
