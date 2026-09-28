import React from "react";

export type IconName =
  | "briefcase"
  | "book"
  | "computer"
  | "pencil"
  | "trophy"
  | "sprout"
  | "star"
  | "flower"
  | "sparkle"
  | "wave"
  | "heart"
  | "arrowUp";

interface DoodleIconProps {
  name: IconName;
  size?: number;
  stroke?: string;
  fill?: string;
  accent?: string;
  className?: string;
  style?: React.CSSProperties;
}

const STROKE_DEFAULT = "#322B25";

const icons: Record<
  IconName,
  (stroke: string, fill?: string, accent?: string) => React.ReactElement
> = {
  // ===== 功能图标 =====

  briefcase: (s, f, a) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 18h32v22a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V18z" stroke={s} strokeWidth="2" fill={f || "#F2A7A0"} fillOpacity="0.35" />
      <path d="M16 18v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4" stroke={s} strokeWidth="2" />
      <circle cx="24" cy="28" r="2" fill={a || "#F7C948"} stroke={s} strokeWidth="1.5" />
    </svg>
  ),

  book: (s, f, a) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12z" stroke={s} strokeWidth="2" fill={f || "#8DB9E5"} fillOpacity="0.3" />
      <path d="M8 16h32" stroke={s} strokeWidth="2" />
      <path d="M14 24h12" stroke={s} strokeWidth="1.8" />
      <path d="M14 30h9" stroke={s} strokeWidth="1.8" />
      <circle cx="36" cy="34" r="3" fill={a || "#F7C948"} stroke={s} strokeWidth="1.5" />
      <path d="M38 32l2-2" stroke={s} strokeWidth="1.5" />
    </svg>
  ),

  computer: (s, f, a) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="8" width="36" height="24" rx="3" stroke={s} strokeWidth="2" fill={f || "#E8A268"} fillOpacity="0.3" />
      <path d="M6 28h36" stroke={s} strokeWidth="2" />
      <path d="M20 36h8" stroke={s} strokeWidth="2" />
      <path d="M18 36l-2 5h16l-2-5" stroke={s} strokeWidth="2" />
      <path d="M16 18l5 5 9-9" stroke={a || "#F7C948"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  pencil: (s, f, a) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M34 6l8 8-26 26H8v-8L34 6z" stroke={s} strokeWidth="2" fill={f || "#8FB18B"} fillOpacity="0.35" />
      <path d="M30 10l8 8" stroke={s} strokeWidth="1.5" />
      <path d="M8 40v-8l8 8H8z" stroke={s} strokeWidth="2" fill={a || "#F7C948"} fillOpacity="0.5" />
      <path d="M12 36l4-4" stroke={s} strokeWidth="1.5" />
    </svg>
  ),

  trophy: (s, f, a) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8h20v4a10 10 0 0 1-10 10 10 10 0 0 1-10-10V8z" stroke={s} strokeWidth="2" fill={f || "#F7C948"} fillOpacity="0.35" />
      <path d="M14 10H8v2a6 6 0 0 0 6 6" stroke={s} strokeWidth="2" />
      <path d="M34 10h6v2a6 6 0 0 1-6 6" stroke={s} strokeWidth="2" />
      <path d="M20 32h8" stroke={s} strokeWidth="2" />
      <path d="M18 36h12v4H18z" stroke={s} strokeWidth="2" fill={a || "#E8A268"} fillOpacity="0.4" />
      <path d="M24 22v10" stroke={s} strokeWidth="2" />
    </svg>
  ),

  sprout: (s, f, a) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 44V28" stroke={s} strokeWidth="2" />
      <path d="M24 28c0-8-6-12-12-12 0 8 4 14 12 14z" stroke={s} strokeWidth="2" fill={f || "#8FB18B"} fillOpacity="0.35" />
      <path d="M24 28c0-6 4-10 10-10 0 6-4 12-10 12z" stroke={s} strokeWidth="2" fill={f || "#8FB18B"} fillOpacity="0.35" />
      <path d="M24 20c-2-4-6-6-10-6" stroke={s} strokeWidth="1.5" />
      <path d="M24 16c2-3 5-5 8-5" stroke={s} strokeWidth="1.5" />
      <circle cx="30" cy="10" r="2" fill={a || "#A995D1"} stroke={s} strokeWidth="1.5" />
    </svg>
  ),

  // ===== 装饰图标 =====

  star: (s, f) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4l5 13h13l-10 8 4 13-12-8-12 8 4-13L6 17h13z" stroke={s} strokeWidth="2" fill={f || "#F7C948"} fillOpacity="0.5" />
    </svg>
  ),

  flower: (s, f, a) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="20" r="5" stroke={s} strokeWidth="1.8" fill={f || "#F2A7A0"} fillOpacity="0.45" />
      <circle cx="24" cy="9" r="4" stroke={s} strokeWidth="1.8" fill={f || "#F2A7A0"} fillOpacity="0.45" />
      <circle cx="35" cy="20" r="4" stroke={s} strokeWidth="1.8" fill={f || "#F2A7A0"} fillOpacity="0.45" />
      <circle cx="13" cy="20" r="4" stroke={s} strokeWidth="1.8" fill={f || "#F2A7A0"} fillOpacity="0.45" />
      <circle cx="30" cy="12" r="4" stroke={s} strokeWidth="1.8" fill={f || "#F2A7A0"} fillOpacity="0.45" />
      <circle cx="18" cy="12" r="4" stroke={s} strokeWidth="1.8" fill={f || "#F2A7A0"} fillOpacity="0.45" />
      <circle cx="24" cy="15" r="3" fill={a || "#F7C948"} stroke={s} strokeWidth="1.2" />
      <path d="M24 26v8" stroke="#8FB18B" strokeWidth="2" />
      <path d="M20 34q4 4 8 0" stroke="#8FB18B" strokeWidth="2" />
    </svg>
  ),

  sparkle: (s, f) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4v12M24 32v12M4 24h12M32 24h12" stroke={s} strokeWidth="2" />
      <path d="M12 12l6 6M30 30l6 6M12 36l6-6M30 18l6-6" stroke={f || "#F7C948"} strokeWidth="1.8" />
      <circle cx="24" cy="24" r="2" fill={f || "#F7C948"} stroke={s} strokeWidth="1.2" />
    </svg>
  ),

  wave: (s, f) => (
    <svg viewBox="0 0 120 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12c8-8 16 8 24 0s16-8 24 0 16 8 24 0 16-8 24 0 16 8 20 0" stroke={f || s} strokeWidth="2.5" />
    </svg>
  ),

  heart: (s, f) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42C24 42 6 30 6 18a9 9 0 0 1 18 0 9 9 0 0 1 18 0c0 12-18 24-18 24z" stroke={s} strokeWidth="2" fill={f || "#F3AAA7"} fillOpacity="0.4" />
    </svg>
  ),

  arrowUp: (s) => (
    <svg viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 40V12" stroke={s} strokeWidth="2.2" />
      <path d="M12 20l12-12 12 12" stroke={s} strokeWidth="2.2" />
    </svg>
  ),
};

export default function DoodleIcon({
  name,
  size = 48,
  stroke = STROKE_DEFAULT,
  fill,
  accent,
  className = "",
  style,
}: DoodleIconProps) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{ width: size, height: size, lineHeight: 0, ...style }}
    >
      {icons[name](stroke, fill, accent)}
    </span>
  );
}
