"use client";

import DoodleIcon, { type IconName } from "./DoodleIcon";

type AnimationType = "float" | "sway" | "twinkle" | "drift";

interface DecorationItem {
  icon: IconName;
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  rotate?: number;
  opacity?: number;
  stroke?: string;
  fill?: string;
  accent?: string;
  animation?: AnimationType;
  animDelay?: number;
  animDuration?: number;
}

const defaultDecorations: DecorationItem[] = [
  {
    icon: "star",
    size: 30,
    top: "5%",
    left: "4%",
    rotate: -15,
    opacity: 0.92,
    stroke: "#322B25",
    fill: "#F7C948",
    animation: "twinkle",
    animDelay: 0,
    animDuration: 3.2,
  },
  {
    icon: "flower",
    size: 28,
    top: "10%",
    right: "6%",
    rotate: 20,
    opacity: 0.88,
    stroke: "#322B25",
    fill: "#F2A7A0",
    accent: "#F7C948",
    animation: "sway",
    animDelay: 0.7,
    animDuration: 4.5,
  },
  {
    icon: "sparkle",
    size: 24,
    top: "22%",
    left: "3%",
    rotate: 10,
    opacity: 0.9,
    stroke: "#322B25",
    fill: "#E8A268",
    animation: "twinkle",
    animDelay: 1.3,
    animDuration: 2.8,
  },
  {
    icon: "star",
    size: 22,
    top: "36%",
    right: "5%",
    rotate: 25,
    opacity: 0.85,
    stroke: "#322B25",
    fill: "#8DB9E5",
    animation: "twinkle",
    animDelay: 2,
    animDuration: 3.5,
  },
  {
    icon: "flower",
    size: 26,
    top: "48%",
    left: "8%",
    rotate: -10,
    opacity: 0.85,
    stroke: "#322B25",
    fill: "#F2A7A0",
    accent: "#8FB18B",
    animation: "sway",
    animDelay: 1,
    animDuration: 4,
  },
  {
    icon: "sparkle",
    size: 26,
    top: "62%",
    right: "10%",
    rotate: -20,
    opacity: 0.88,
    stroke: "#322B25",
    fill: "#F7C948",
    animation: "twinkle",
    animDelay: 0.5,
    animDuration: 3.2,
  },
  {
    icon: "heart",
    size: 22,
    top: "74%",
    left: "4%",
    rotate: 15,
    opacity: 0.82,
    stroke: "#322B25",
    fill: "#F3AAA7",
    animation: "float",
    animDelay: 0.3,
    animDuration: 4,
  },
  {
    icon: "star",
    size: 18,
    bottom: "2%",
    right: "6%",
    rotate: -5,
    opacity: 0.85,
    stroke: "#322B25",
    fill: "#A995D1",
    animation: "twinkle",
    animDelay: 2.5,
    animDuration: 4.8,
  },
];

interface DoodleDecorationProps {
  items?: DecorationItem[];
  className?: string;
}

const animClass: Record<AnimationType, string> = {
  float: "animate-float",
  sway: "animate-sway",
  twinkle: "animate-twinkle",
  drift: "animate-drift",
};

export default function DoodleDecoration({
  items = defaultDecorations,
  className = "",
}: DoodleDecorationProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {items.map((item, i) => {
        const anim = item.animation ? animClass[item.animation] : "";
        const delayStyle = item.animDelay ? { animationDelay: `${item.animDelay}s` } : {};
        const durationStyle = item.animDuration
          ? { animationDuration: `${item.animDuration}s` }
          : {};
        return (
          <div
            key={i}
            className="absolute"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              transform: `rotate(${item.rotate ?? 0}deg)`,
              opacity: item.opacity ?? 0.85,
            }}
          >
            {/* 内层负责动画，避免与外层 rotate 冲突 */}
            <div
              className={anim}
              style={{
                ...delayStyle,
                ...durationStyle,
              }}
            >
              <DoodleIcon
                name={item.icon}
                size={item.size}
                stroke={item.stroke ?? "#322B25"}
                fill={item.fill}
                accent={item.accent}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
