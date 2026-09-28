"use client";

import React from "react";

const STROKE = "#302A23";

export type HeroDoodleType =
  | "cloud"
  | "bow"
  | "cherry"
  | "moon"
  | "paw"
  | "paperPlane"
  | "sprout"
  | "sparkle"
  | "dots";

export type HeroDoodleAnimation = "blink" | "blink-float" | "float" | "sway";

interface HeroDoodleProps {
  type: HeroDoodleType;
  size?: number;
  animation?: HeroDoodleAnimation;
  duration?: number;
  delay?: number;
  className?: string;
}

const doodleSvgs: Record<HeroDoodleType, (size: number) => React.ReactNode> = {
  cloud: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M10 34c-3.5 0-6.5-3-6.5-6.5s3-6.5 6-6.5c.5-4.5 4.5-8 9-8 4 0 7 2.5 8.5 6 .5 0 1 0 1.5 0 4 0 7 3 7 7s-3.5 7-7.5 7H10z"
        stroke={STROKE}
        strokeWidth="1.8"
        fill="#D6E8F7"
        fillOpacity="0.4"
      />
    </svg>
  ),

  bow: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M24 18c-4-3.5-9-3.5-11 0s2 6 5.5 5c-3 1-4 3-2.5 4.5s5.5.5 8-2.5 5.5 3 8 2.5 3.5 3.5 2.5 4.5-5.5 1-8-2.5c3.5 1 6.5-2 4.5-5s-7-3-11.5.5z"
        stroke={STROKE}
        strokeWidth="1.8"
        fill="#F8D4D1"
        fillOpacity="0.45"
      />
      <circle cx="24" cy="20" r="2.5" fill="#F4C44E" stroke={STROKE} strokeWidth="1.4" />
    </svg>
  ),

  cherry: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="17" cy="30" r="6.5" stroke={STROKE} strokeWidth="1.8" fill="#F8D4D1" fillOpacity="0.45" />
      <circle cx="31" cy="32" r="6.5" stroke={STROKE} strokeWidth="1.8" fill="#F1A7A2" fillOpacity="0.45" />
      <path d="M17 23.5q7-9 14-2.5" stroke={STROKE} strokeWidth="1.6" fill="none" />
      <path d="M24 13.5q4.5-2.5 7 2q-3.5 3-7-.5z" stroke={STROKE} strokeWidth="1.6" fill="#94B991" fillOpacity="0.5" />
    </svg>
  ),

  moon: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path
        d="M28 7c-7 0-12.5 5.5-12.5 12.5S21 32 28 32c-4.5-2.5-7-7-7-12.5S23.5 9.5 28 7z"
        stroke={STROKE}
        strokeWidth="1.8"
        fill="#FFF8D6"
        fillOpacity="0.55"
      />
    </svg>
  ),

  paw: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="24" cy="32" rx="9" ry="7" stroke={STROKE} strokeWidth="1.8" fill="#F8D4D1" fillOpacity="0.35" />
      <circle cx="13" cy="17" r="3" stroke={STROKE} strokeWidth="1.5" fill="#F1A7A2" fillOpacity="0.5" />
      <circle cx="24" cy="12" r="3" stroke={STROKE} strokeWidth="1.5" fill="#F1A7A2" fillOpacity="0.5" />
      <circle cx="35" cy="17" r="3" stroke={STROKE} strokeWidth="1.5" fill="#F1A7A2" fillOpacity="0.5" />
      <circle cx="24" cy="22" r="2.5" stroke={STROKE} strokeWidth="1.5" fill="#F1A7A2" fillOpacity="0.5" />
    </svg>
  ),

  paperPlane: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 38L42 10L22 40L20 27z" stroke={STROKE} strokeWidth="1.8" fill="#D6E8F7" fillOpacity="0.4" />
      <path d="M42 10L20 27" stroke={STROKE} strokeWidth="1.5" />
    </svg>
  ),

  sprout: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 42V24" stroke={STROKE} strokeWidth="1.8" />
      <path d="M24 24c-5-7-12-7-14-2s4.5 9 9 6.5" stroke={STROKE} strokeWidth="1.8" fill="#94B991" fillOpacity="0.4" />
      <path d="M24 20c5-6 12-6 14-1.5s-4.5 8-9 5.5" stroke={STROKE} strokeWidth="1.8" fill="#94B991" fillOpacity="0.4" />
    </svg>
  ),

  sparkle: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 6v16M24 26v16M8 24h16M28 24h16" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="24" cy="24" r="2" fill="#F4C44E" stroke={STROKE} strokeWidth="1.2" />
    </svg>
  ),

  dots: (size) => (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="14" cy="24" r="3" stroke={STROKE} strokeWidth="1.5" fill="#F4C44E" fillOpacity="0.5" />
      <circle cx="26" cy="18" r="2.5" stroke={STROKE} strokeWidth="1.5" fill="#91BCE3" fillOpacity="0.5" />
      <circle cx="36" cy="26" r="3" stroke={STROKE} strokeWidth="1.5" fill="#F1A7A2" fillOpacity="0.5" />
    </svg>
  ),
};

export default function HeroDoodle({
  type,
  size = 40,
  animation = "blink",
  duration = 3.5,
  delay = 0,
  className = "",
}: HeroDoodleProps) {
  const animClass =
    animation === "blink" || animation === "blink-float"
      ? "animate-doodle-blink"
      : animation === "float"
      ? "animate-doodle-float-gentle"
      : animation === "sway"
      ? "animate-doodle-sway"
      : "";

  const floatClass = animation === "blink-float" ? "animate-doodle-float-gentle" : "";

  return (
    <div
      className={`pointer-events-none ${animClass} ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        lineHeight: 0,
      }}
    >
      {floatClass ? (
        <div
          className={floatClass}
          style={{
            animationDuration: `${duration * 1.15}s`,
            animationDelay: `${delay * 0.6}s`,
            lineHeight: 0,
          }}
        >
          {doodleSvgs[type](size)}
        </div>
      ) : (
        doodleSvgs[type](size)
      )}
    </div>
  );
}
