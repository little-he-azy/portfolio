"use client";

import React from "react";
import type { TechIconName } from "@/data/skills";

interface TechIconProps {
  name: TechIconName;
  size?: number;
  className?: string;
}

// Simple geometric / stylized representations — not official brand logos.
// Replace with accurate SVGs later if desired.
const icons: Record<TechIconName, (size: number) => React.ReactNode> = {
  python: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2c-2 0-3.5.5-4.5 1.5S6 5.5 6 7v2h6v1H5.5C3.5 10 2 11.5 2 14s1.5 4 3.5 4H7v-2c0-2 1.5-3.5 3.5-3.5h4c1.5 0 2.5-1 2.5-2.5V7c0-2-1.5-4-4.5-4h-1zM9 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#4B8BBE" />
      <path d="M12 22c2 0 3.5-.5 4.5-1.5S18 18.5 18 17v-2h-6v-1h6.5c2 0 3.5-1.5 3.5-4s-1.5-4-3.5-4H17v2c0 2-1.5 3.5-3.5 3.5h-4c-1.5 0-2.5 1-2.5 2.5V17c0 2 1.5 4 4.5 4h1zM15 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFD43B" />
    </svg>
  ),
  pandas: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="7" height="18" rx="1" fill="#130654" opacity="0.85" />
      <rect x="14" y="3" width="7" height="18" rx="1" fill="#130654" opacity="0.6" />
      <circle cx="6.5" cy="7" r="1" fill="#fff" />
      <circle cx="17.5" cy="7" r="1" fill="#fff" />
    </svg>
  ),
  numpy: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="#4DABCF" opacity="0.2" stroke="#4DABCF" strokeWidth="1.2" />
      <path d="M12 2v20M2 7l10 5 10-5" stroke="#4DABCF" strokeWidth="1.2" />
    </svg>
  ),
  sql: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#5c4f3d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  fastapi: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 12l10 10 10-10L12 2z" fill="#009688" opacity="0.15" stroke="#009688" strokeWidth="1.2" />
      <path d="M8 12l3 3 5-5" stroke="#009688" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  redis: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <ellipse cx="12" cy="6" rx="9" ry="3" fill="#DC382D" opacity="0.8" />
      <path d="M3 6v4c0 1.66 4 3 9 3s9-1.34 9-3V6" stroke="#DC382D" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="9" ry="3" fill="#DC382D" opacity="0.6" />
      <path d="M3 12v4c0 1.66 4 3 9 3s9-1.34 9-3v-4" stroke="#DC382D" strokeWidth="1.2" />
      <ellipse cx="12" cy="18" rx="9" ry="3" fill="#DC382D" opacity="0.4" />
    </svg>
  ),
  git: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="6" r="2" fill="#F05032" />
      <circle cx="6" cy="18" r="2" fill="#F05032" />
      <circle cx="18" cy="18" r="2" fill="#F05032" />
      <path d="M12 8v3.5c0 1-1 2-2 2H7.5" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 11.5c1 0 2 1 2 2v3" stroke="#F05032" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  github: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.07.63-1.32-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02A9.65 9.65 0 0 1 12 6.8c.85.01 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" fill="#24292f" />
    </svg>
  ),
  docker: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M4 15h2v-2H4v2zm3 0h2v-2H7v2zm3 0h2v-2h-2v2zm-6-3h2v-2H4v2zm3 0h2v-2H7v2zm3 0h2v-2h-2v2zm-3-3h2V7H7v2zm3 0h2V7h-2v2zm8 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2-3c-1.1 0-2 .9-2 2v1H2v-2c0-1.1.9-2 2-2h11.5c.83 0 1.5.67 1.5 1.5V13h-2v-1z" fill="#2496ED" />
    </svg>
  ),
  vscode: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M17 2l4 2v16l-4 2-9-9v9l-4-2V4l4-2 9 9V2z" fill="#007ACC" opacity="0.15" stroke="#007ACC" strokeWidth="1.2" />
      <path d="M8 8l4 4-4 4" stroke="#007ACC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  conda: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" fill="#43B02A" opacity="0.15" stroke="#43B02A" strokeWidth="1.2" />
      <path d="M9 12c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="#43B02A" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  chatgpt: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M22.5 10.5c0-1.5-.5-2.8-1.4-3.8C19.8 5.4 18.2 5 16.5 5c-.5 0-1 0-1.5.1-.6-1.8-2-3.2-3.8-3.8C9.8.9 8.2 1.2 6.8 2.2 5.4 3.2 4.5 4.8 4.5 6.5c0 .5.1 1 .2 1.5-1.8.6-3.2 2-3.8 3.8C.4 13.5.7 15.2 1.7 16.6c1 1.4 2.6 2.3 4.3 2.3.5 0 1 0 1.5-.1.6 1.8 2 3.2 3.8 3.8 1.8.6 3.5.3 4.9-.7 1.4-1 2.3-2.6 2.3-4.3 0-.5-.1-1-.2-1.5 1.8-.6 3.2-2 3.8-3.8.6-1.5.3-3.2-.7-4.6-.9-1.2-2.2-2-3.7-2.2zM12 16.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="#10A37F" />
    </svg>
  ),
  claude: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5h-3l-2-4.5-2 4.5h-3l3.5-7.5-2-4.5h3l1.5 3.5 1.5-3.5h3l-2 4.5 3.5 7.5z" fill="#CC785C" opacity="0.85" />
    </svg>
  ),
  figma: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="3" fill="#F24E1E" />
      <circle cx="12" cy="12" r="3" fill="#A259FF" />
      <circle cx="9" cy="19" r="3" fill="#0ACF83" />
      <circle cx="15" cy="19" r="3" fill="#1ABCFE" />
    </svg>
  ),
  photoshop: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#31A8FF" opacity="0.15" stroke="#31A8FF" strokeWidth="1.2" />
      <text x="7" y="17" fontSize="10" fontWeight="bold" fill="#31A8FF">Ps</text>
    </svg>
  ),
  illustrator: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#FF9A00" opacity="0.15" stroke="#FF9A00" strokeWidth="1.2" />
      <text x="8" y="17" fontSize="10" fontWeight="bold" fill="#FF9A00">Ai</text>
    </svg>
  ),
  capcut: (s) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none">
      <path d="M12 2L4 6v12l8 4 8-4V6l-8-4z" fill="#161823" opacity="0.1" stroke="#161823" strokeWidth="1.2" />
      <path d="M10 9l4 3-4 3V9z" fill="#161823" />
    </svg>
  ),
};

export default function TechIcon({ name, size = 20, className = "" }: TechIconProps) {
  return (
    <span className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size, lineHeight: 0 }}>
      {icons[name](size)}
    </span>
  );
}
