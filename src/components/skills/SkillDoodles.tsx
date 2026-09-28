"use client";

import React from "react";

const STROKE = "#302A23";
const GREEN = "#8FB18B";
const GREEN_LIGHT = "#A5C9A0";

export type SkillDoodleName = "brain" | "chip" | "code" | "palette";

interface SkillDoodleProps {
  name: SkillDoodleName;
  size?: number;
  className?: string;
}

const doodles: Record<SkillDoodleName, (size: number) => React.ReactNode> = {
  brain: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M16 38c-6-2-10-7-10-13 0-4 2-8 5-10-1-2-1-4 0-6 2-3 6-4 9-2 2-2 5-3 8-3 5 0 9 3 10 7 3 1 5 4 5 7 0 2-1 4-2 5 2 2 3 5 3 8 0 6-5 11-11 12"
        stroke={STROKE}
        strokeWidth="1.6"
        fill={GREEN}
        fillOpacity="0.15"
      />
      <path d="M20 18c2-1 4-1 6 0" stroke={STROKE} strokeWidth="1.4" />
      <path d="M18 24c3-1 6-1 9 0" stroke={STROKE} strokeWidth="1.4" />
      <circle cx="24" cy="32" r="1.5" fill={GREEN} stroke={STROKE} strokeWidth="1.2" />
    </svg>
  ),
  chip: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="12" y="12" width="24" height="24" rx="4" stroke={STROKE} strokeWidth="1.6" fill={GREEN} fillOpacity="0.12" />
      <path d="M18 12V8M24 12V8M30 12V8" stroke={STROKE} strokeWidth="1.4" />
      <path d="M18 40V36M24 40V36M30 40V36" stroke={STROKE} strokeWidth="1.4" />
      <path d="M12 18H8M12 24H8M12 30H8" stroke={STROKE} strokeWidth="1.4" />
      <path d="M40 18H36M40 24H36M40 30H36" stroke={STROKE} strokeWidth="1.4" />
      <circle cx="24" cy="24" r="4" stroke={STROKE} strokeWidth="1.4" fill={GREEN} fillOpacity="0.2" />
      <circle cx="24" cy="24" r="1.5" fill={GREEN} stroke={STROKE} strokeWidth="1" />
    </svg>
  ),
  code: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 16l-6 8 6 8" stroke={STROKE} strokeWidth="1.8" />
      <path d="M34 16l6 8-6 8" stroke={STROKE} strokeWidth="1.8" />
      <path d="M22 38l4-28" stroke={STROKE} strokeWidth="1.6" />
      <circle cx="36" cy="36" r="2" fill={GREEN} stroke={STROKE} strokeWidth="1.2" />
    </svg>
  ),
  palette: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="24" rx="16" ry="12" transform="rotate(-15 24 24)" stroke={STROKE} strokeWidth="1.6" fill="#F8D4D1" fillOpacity="0.25" />
      <circle cx="18" cy="20" r="2.5" fill={GREEN} stroke={STROKE} strokeWidth="1.2" />
      <circle cx="26" cy="18" r="2.5" fill={GREEN_LIGHT} stroke={STROKE} strokeWidth="1.2" />
      <circle cx="30" cy="26" r="2.5" fill="#91BCE3" stroke={STROKE} strokeWidth="1.2" />
      <path d="M32 32c2 0 4-1 4-3s-2-3-4-3" stroke={STROKE} strokeWidth="1.4" fill={GREEN} fillOpacity="0.3" />
    </svg>
  ),
};

export default function SkillDoodle({ name, size = 48, className = "" }: SkillDoodleProps) {
  return (
    <span className={`inline-block ${className}`} style={{ width: size, height: size, lineHeight: 0 }}>
      {doodles[name](size)}
    </span>
  );
}
