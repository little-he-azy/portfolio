"use client";

import { useState } from "react";

const filters = [
  { id: "all", label: "All", labelCn: "全部" },
  { id: "product", label: "Product", labelCn: "产品" },
  { id: "ai", label: "AI / LLM", labelCn: "AI" },
  { id: "data", label: "Data", labelCn: "数据" },
  { id: "others", label: "Others", labelCn: "其他" },
];

export default function InternshipFilters() {
  const [active, setActive] = useState("all");

  return (
    <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
      {filters.map((f) => {
        const isActive = active === f.id;
        return (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`
              inline-flex items-center gap-1 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-all duration-200
              md:px-4 md:py-2 md:text-base
              ${isActive
                ? "border-[#c9a0a0] bg-[#FFF0F0] text-[#3b3328] shadow-[2px_2px_0px_rgba(92,79,61,0.08)]"
                : "border-[#5c4f3d]/15 bg-[#fffdf5] text-[#6d675d] hover:border-[#5c4f3d]/25 hover:bg-[#fff1a8]/40"
              }
            `}
          >
            <span>{f.label}</span>
            <span className="font-cn text-xs opacity-70 md:text-sm">{f.labelCn}</span>
          </button>
        );
      })}
    </div>
  );
}
