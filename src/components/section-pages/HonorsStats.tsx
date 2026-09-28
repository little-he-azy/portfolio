"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { allHonors, HonorCategory } from "@/data/honors";

interface HonorsStatsProps {
  active: "all" | HonorCategory;
  onChange: (id: "all" | HonorCategory) => void;
}

/* ─── 手绘图标 ─── */
function TrophyIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8h20v4a10 10 0 0 1-10 10 10 10 0 0 1-10-10V8z" stroke="#3d342b" strokeWidth="2" fill="#FAD4C0" fillOpacity="0.35" />
      <path d="M14 10H8v2a6 6 0 0 0 6 6" stroke="#3d342b" strokeWidth="2" />
      <path d="M34 10h6v2a6 6 0 0 1-6 6" stroke="#3d342b" strokeWidth="2" />
      <path d="M24 22v10" stroke="#3d342b" strokeWidth="2" />
      <path d="M20 32h8" stroke="#3d342b" strokeWidth="2" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4l5 13h13l-10 8 4 13-12-8-12 8 4-13L6 17h13z" stroke="#3d342b" strokeWidth="2" fill="#F7E8A0" fillOpacity="0.45" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="14" stroke="#3d342b" strokeWidth="2" fill="#D6C8F0" fillOpacity="0.3" />
      <path d="M24 14v4M24 30v4M14 24h4M30 24h4" stroke="#3d342b" strokeWidth="1.8" />
      <circle cx="24" cy="24" r="3" fill="#F7E8A0" stroke="#3d342b" strokeWidth="1.2" />
    </svg>
  );
}

function Sparkle({ size = 10, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className} style={style}>
      <path d="M24 4l3 9h9l-7 5 3 9-8-5-8 5 3-9-7-5h9z" fill="#9678D4" fillOpacity="0.45" />
    </svg>
  );
}

/* ─── 数字递增 hook ─── */
function useCountUp(target: number, triggered: boolean, duration = 900) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [triggered, target, duration]);

  return value;
}

/* ─── 节点数据 ─── */
const NODE_CONFIG = [
  { id: "award" as const, labelCn: "竞赛获奖", labelEn: "Competition", Icon: TrophyIcon },
  { id: "scholarship" as const, labelCn: "奖学金", labelEn: "Scholarship", Icon: StarIcon },
  { id: "honor" as const, labelCn: "荣誉称号", labelEn: "Honor Titles", Icon: BadgeIcon },
];

export default function HonorsStats({ active, onChange }: HonorsStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stats = useMemo(() => {
    const total = allHonors.length;
    const award = allHonors.filter((h) => h.category === "award").length;
    const scholarship = allHonors.filter((h) => h.category === "scholarship").length;
    const honor = allHonors.filter((h) => h.category === "honor").length;
    return { total, award, scholarship, honor };
  }, []);

  const totalVal = useCountUp(stats.total, visible);
  const awardVal = useCountUp(stats.award, visible);
  const scholarshipVal = useCountUp(stats.scholarship, visible);
  const honorVal = useCountUp(stats.honor, visible);

  const countMap: Record<string, number> = {
    all: totalVal,
    award: awardVal,
    scholarship: scholarshipVal,
    honor: honorVal,
  };

  return (
    <div ref={ref} className="relative w-full">
      <style>{`
        @keyframes float-gentle {
          0% { transform: translateY(-1.5px); }
          100% { transform: translateY(1.5px); }
        }
        @keyframes sparkle-gentle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
      `}</style>

      {/* ─── 顶部总数 ─── */}
      <button
        onClick={() => onChange("all")}
        className="group mx-auto flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-2">
          <Sparkle size={12} style={{ animation: "sparkle-gentle 3.2s ease-in-out infinite", animationDelay: "0s" }} />
          <span className="text-[32px] font-extrabold leading-none text-[#9678D4] md:text-[36px]">
            {totalVal}
          </span>
          <span className="text-[15px] font-bold tracking-[0.08em] text-[#3b3328] md:text-[17px]">
            HONORS COLLECTED
          </span>
          <Sparkle size={12} style={{ animation: "sparkle-gentle 3.8s ease-in-out infinite", animationDelay: "0.8s" }} />
        </div>
        <p className="mt-1 text-[12px] text-[#8a7c62]">{stats.total} 份闪闪发光的收获</p>
      </button>

      {/* ─── 荣誉轨迹 + 节点 ─── */}
      <div className="relative mx-auto mt-5 w-full max-w-[720px] md:mt-6">
        {/* 手绘轨迹 SVG */}
        <svg
          className="absolute left-0 top-[44px] w-full overflow-visible md:top-[48px]"
          viewBox="0 0 720 20"
          preserveAspectRatio="none"
          style={{ height: "20px" }}
        >
          <path
            d="M10 14c30-6 60 6 90 0s60-6 90 0 60 6 90 0 60-6 90 0 60 6 90 0 60-6 90 0 60 6 80 0"
            fill="none"
            stroke="rgba(150,120,190,0.28)"
            strokeWidth="1.5"
            strokeLinecap="round"
            style={{
              strokeDasharray: 780,
              strokeDashoffset: visible ? 0 : 780,
              transition: "stroke-dashoffset 800ms ease-out",
            }}
          />
        </svg>

        {/* 三个节点 */}
        <div className="relative flex justify-between px-2 md:px-8">
          {NODE_CONFIG.map((node, idx) => {
            const isActive = active === node.id;
            const count = countMap[node.id];
            const delay = 800 + idx * 120;

            return (
              <button
                key={node.id}
                onClick={() => onChange(node.id)}
                className="group flex flex-col items-center text-center"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
                  transition: `opacity 450ms ease-out ${delay}ms, transform 450ms ease-out ${delay}ms`,
                }}
              >
                {/* 图标 + float */}
                <div
                  className="transition-transform duration-200 group-hover:rotate-[-4deg]"
                  style={{
                    animation: visible ? `float-gentle ${4 + idx * 0.8}s ease-in-out infinite alternate` : "none",
                    animationDelay: `${idx * 0.5}s`,
                  }}
                >
                  <node.Icon />
                </div>

                {/* 数字 */}
                <span
                  className="mt-1.5 text-[26px] font-bold leading-none transition-colors duration-200 md:text-[30px]"
                  style={{ color: isActive ? "#9678D4" : "#3b3328" }}
                >
                  {count}
                </span>

                {/* 中文 */}
                <span className="mt-1 text-[13px] font-semibold text-[#5c5045] md:text-[14px]">
                  {node.labelCn}
                </span>

                {/* 英文 */}
                <span className="mt-0.5 text-[11px] text-[#8a7c62] opacity-55 md:text-xs">
                  {node.labelEn}
                </span>

                {/* 选中波浪线 */}
                <div
                  className="mt-1.5 h-[2px] rounded-full transition-all duration-300"
                  style={{
                    width: isActive ? "22px" : "0px",
                    backgroundColor: "#B8A0E8",
                    opacity: isActive ? 0.7 : 0,
                  }}
                />

                {/* hover 光点 */}
                <div
                  className="mt-1 h-1 w-1 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: "#9678D4",
                    opacity: isActive ? 0.4 : 0,
                    transform: isActive ? "scale(1)" : "scale(0)",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── 与 Timeline 的连接 ─── */}
      <div className="mt-3 flex flex-col items-center md:mt-4">
        <div className="h-[18px] w-px" style={{ backgroundColor: "rgba(184,160,232,0.22)" }} />
        <div className="mt-0.5 h-[5px] w-[5px] rounded-full" style={{ backgroundColor: "rgba(150,120,190,0.3)" }} />
      </div>

      {/* sparkle 装饰 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Sparkle size={8} className="absolute left-[18%] top-[12%]" style={{ animation: "sparkle-gentle 4s ease-in-out infinite", animationDelay: "1.2s" }} />
        <Sparkle size={6} className="absolute right-[20%] top-[8%]" style={{ animation: "sparkle-gentle 3.5s ease-in-out infinite", animationDelay: "2.1s" }} />
        <Sparkle size={7} className="absolute left-[32%] top-[55%]" style={{ animation: "sparkle-gentle 4.2s ease-in-out infinite", animationDelay: "0.8s" }} />
        <Sparkle size={6} className="absolute right-[30%] top-[52%]" style={{ animation: "sparkle-gentle 3.8s ease-in-out infinite", animationDelay: "1.8s" }} />
        <Sparkle size={5} className="absolute left-[48%] top-[70%]" style={{ animation: "sparkle-gentle 3.2s ease-in-out infinite", animationDelay: "2.5s" }} />
      </div>
    </div>
  );
}
