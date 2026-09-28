"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { themes } from "@/components/section-pages/sectionTheme";
import SectionHero from "@/components/section-pages/SectionHero";
import HonorCard from "@/components/section-pages/HonorCard";
import CertificateModal from "@/components/section-pages/CertificateModal";
import DoodleIcon from "@/components/DoodleIcon";
import { allHonors, HonorItem } from "@/data/honors";

const theme = themes.honors;

type FilterId = "all" | "award" | "scholarship" | "honor";

interface FilterItem {
  id: FilterId;
  label: string;
  count: number;
  icon: React.ReactNode;
  badgeBg: string;
  badgeText: string;
}

/* ─── 小图标 ─── */
function TinySparkleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4v12M24 32v12M4 24h12M32 24h12" stroke="#3d342b" strokeWidth="2.4" />
      <path d="M12 12l6 6M30 30l6 6M12 36l6-6M30 18l6-6" stroke="#9678D4" strokeWidth="2" />
      <circle cx="24" cy="24" r="2.5" fill="#9678D4" stroke="#3d342b" strokeWidth="1.2" />
    </svg>
  );
}

function TinyTrophyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8h20v4a10 10 0 0 1-10 10 10 10 0 0 1-10-10V8z" stroke="#3d342b" strokeWidth="2.4" fill="#FAD4C0" fillOpacity="0.4" />
      <path d="M14 10H8v2a6 6 0 0 0 6 6" stroke="#3d342b" strokeWidth="2.4" />
      <path d="M34 10h6v2a6 6 0 0 1-6 6" stroke="#3d342b" strokeWidth="2.4" />
      <path d="M24 22v10" stroke="#3d342b" strokeWidth="2.4" />
    </svg>
  );
}

function TinyStarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M24 4l5 13h13l-10 8 4 13-12-8-12 8 4-13L6 17h13z" stroke="#3d342b" strokeWidth="2.4" fill="#F7E8A0" fillOpacity="0.5" />
    </svg>
  );
}

function TinyBadgeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="24" cy="24" r="14" stroke="#3d342b" strokeWidth="2.4" fill="#D6C8F0" fillOpacity="0.35" />
      <path d="M24 14v4M24 30v4M14 24h4M30 24h4" stroke="#3d342b" strokeWidth="2" />
      <circle cx="24" cy="24" r="3" fill="#F7E8A0" stroke="#3d342b" strokeWidth="1.2" />
    </svg>
  );
}

/* ─── 手绘波浪线 ─── */
function WavyLine({ active }: { active: boolean }) {
  return (
    <svg
      width="70"
      height="9"
      viewBox="0 0 70 9"
      fill="none"
      className="mt-2"
      preserveAspectRatio="none"
    >
      <path
        d="M2 6c7-3 14 3 21 0s14-3 21 0 14 3 21 0 5-3 5-3"
        stroke="#B8A0E8"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          strokeDasharray: 90,
          strokeDashoffset: active ? 0 : 90,
          transition: "stroke-dashoffset 300ms ease-out",
        }}
      />
    </svg>
  );
}

interface ModalState {
  open: boolean;
  title: string;
  date: string;
  organization: string;
  imageSrc: string;
}

export default function HonorsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");
  const [isFiltering, setIsFiltering] = useState(false);
  const [modal, setModal] = useState<ModalState>({
    open: false,
    title: "",
    date: "",
    organization: "",
    imageSrc: "",
  });

  const filters = useMemo<FilterItem[]>(() => {
    return [
      {
        id: "all",
        label: "All",
        count: allHonors.length,
        icon: <TinySparkleIcon />,
        badgeBg: "#E8E0FF",
        badgeText: "#6B5CA8",
      },
      {
        id: "award",
        label: "Competition",
        count: allHonors.filter((h) => h.category === "award").length,
        icon: <TinyTrophyIcon />,
        badgeBg: "#FAD4C0",
        badgeText: "#8A5E3C",
      },
      {
        id: "scholarship",
        label: "Scholarships",
        count: allHonors.filter((h) => h.category === "scholarship").length,
        icon: <TinyStarIcon />,
        badgeBg: "#F7E8A0",
        badgeText: "#7A6A2A",
      },
      {
        id: "honor",
        label: "Honor Titles",
        count: allHonors.filter((h) => h.category === "honor").length,
        icon: <TinyBadgeIcon />,
        badgeBg: "#D6C8F0",
        badgeText: "#5E4B8A",
      },
    ];
  }, []);

  const filteredHonors = useMemo(() => {
    if (activeFilter === "all") return allHonors;
    return allHonors.filter((h) => h.category === activeFilter);
  }, [activeFilter]);

  const groupedByYear = useMemo(() => {
    const groups: Record<string, HonorItem[]> = {};
    filteredHonors.forEach((h) => {
      const year = h.date.split(".")[0];
      if (!groups[year]) groups[year] = [];
      groups[year].push(h);
    });
    return Object.entries(groups).sort(
      (a, b) => parseInt(b[0]) - parseInt(a[0])
    );
  }, [filteredHonors]);

  const handleFilterChange = useCallback(
    (id: FilterId) => {
      if (id === activeFilter) return;
      setIsFiltering(true);
      setTimeout(() => {
        setActiveFilter(id);
        setTimeout(() => setIsFiltering(false), 50);
      }, 200);
    },
    [activeFilter]
  );

  const handleCertificateClick = useCallback(
    (honor: HonorItem, imageSrc: string) => {
      setModal({
        open: true,
        title: honor.title,
        date: honor.date,
        organization: honor.organization,
        imageSrc,
      });
    },
    []
  );

  const closeModal = useCallback(() => {
    setModal((prev) => ({ ...prev, open: false }));
  }, []);

  return (
    <main className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 md:px-8">
      {/* Hero */}
      <SectionHero
        theme={theme}
        icon={
          <DoodleIcon name="trophy" size={36} stroke="#322B25" fill="#F7C948" accent="#E8A268" />
        }
        title="Honors"
        chineseTitle="荣誉证书"
        description="Grateful for the recognition."
        chineseDescription="也感谢一路上支持和帮助我的人。"
      />

      {/* ─── Filter Navigation ─── */}
      <div className="mt-14 md:mt-16">
        <div
          className="filter-scroll flex items-center gap-9 overflow-x-auto pb-2 md:gap-10"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>{`
            .filter-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => handleFilterChange(f.id)}
                className="group flex shrink-0 flex-col items-start transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-2">
                  {/* icon */}
                  <span className="opacity-70 transition-all duration-200 group-hover:opacity-100">
                    {f.icon}
                  </span>

                  {/* label */}
                  <span
                    className="text-[17px] transition-all duration-200 md:text-[18px]"
                    style={{
                      fontWeight: isActive ? 700 : 600,
                      color: isActive ? "#3b3328" : "#5c5045",
                    }}
                  >
                    {f.label}
                  </span>

                  {/* count badge */}
                  <span
                    className="relative -top-[1px] inline-flex h-[28px] min-w-[28px] items-center justify-center rounded-full px-1 text-[14px] font-bold transition-transform duration-200"
                    style={{
                      backgroundColor: f.badgeBg,
                      color: isActive ? "#9678D4" : f.badgeText,
                      transform: isActive ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    {f.count}
                  </span>
                </div>

                {/* wavy underline */}
                <WavyLine active={isActive} />
              </button>
            );
          })}
        </div>
      </div>

      {/* ─── Honor list ─── */}
      <div
        className="mt-8 flex flex-col gap-8 transition-all duration-300 md:mt-9"
        style={{
          opacity: isFiltering ? 0 : 1,
          transform: isFiltering ? "translateY(4px)" : "translateY(0)",
        }}
      >
        {groupedByYear.length > 0 ? (
          groupedByYear.map(([year, honors]) => (
            <section key={year}>
              {/* Year divider */}
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm font-bold text-[#9678D4]">
                  {year}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ backgroundColor: "#B8A0E840" }}
                />
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-3">
                {honors.map((honor, i) => (
                  <HonorCard
                    key={honor.id}
                    honor={honor}
                    index={i}
                    onCertificateClick={(src) =>
                      handleCertificateClick(honor, src)
                    }
                  />
                ))}
              </div>
            </section>
          ))
        ) : (
          <div
            className="rounded-[22px] border p-8 text-center"
            style={{
              borderColor: `${theme.border}50`,
              backgroundColor: theme.cardBg,
            }}
          >
            <p className="text-sm text-[#8a7c62]">
              该分类下暂无荣誉
            </p>
          </div>
        )}
      </div>

      {/* Certificate Modal */}
      <CertificateModal
        open={modal.open}
        title={modal.title}
        date={modal.date}
        organization={modal.organization}
        imageSrc={modal.imageSrc}
        onClose={closeModal}
      />
    </main>
  );
}
