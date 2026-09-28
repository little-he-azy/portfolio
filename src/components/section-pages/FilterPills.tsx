"use client";

import { useState } from "react";
import { SectionTheme } from "./sectionTheme";

interface FilterOption {
  id: string;
  label: string;
  labelCn: string;
}

interface FilterPillsProps {
  theme: SectionTheme;
  filters: FilterOption[];
  onChange?: (id: string) => void;
}

export default function FilterPills({ theme, filters, onChange }: FilterPillsProps) {
  const [active, setActive] = useState(filters[0]?.id || "all");

  const handleClick = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
      {filters.map((f) => {
        const isActive = active === f.id;
        return (
          <button
            key={f.id}
            onClick={() => handleClick(f.id)}
            className={`
              inline-flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200
              md:px-5 md:py-2 md:text-base
              ${isActive
                ? "text-[#3b3328]"
                : "border-[#5c4f3d]/12 bg-white/70 text-[#6d675d] hover:border-[#5c4f3d]/20 hover:bg-white"
              }
            `}
            style={
              isActive
                ? {
                    backgroundColor: theme.filterActiveBg,
                    borderColor: theme.border,
                    borderWidth: "1.5px",
                  }
                : { borderWidth: "1.5px" }
            }
          >
            <span>{f.label}</span>
            <span className="font-cn text-xs opacity-70 md:text-sm">{f.labelCn}</span>
          </button>
        );
      })}
    </div>
  );
}
