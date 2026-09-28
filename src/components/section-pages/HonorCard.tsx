"use client";

import DoodleIcon from "@/components/DoodleIcon";
import { HonorItem, categoryLabels } from "@/data/honors";

interface HonorCardProps {
  honor: HonorItem;
  index?: number;
  onCertificateClick?: (imageSrc: string) => void;
}

function CategoryIcon({ category }: { category: HonorItem["category"] }) {
  if (category === "award") {
    return (
      <DoodleIcon
        name="trophy"
        size={36}
        stroke="#322B25"
        fill="#F7C948"
        accent="#E8A268"
      />
    );
  }
  if (category === "scholarship") {
    return (
      <DoodleIcon
        name="star"
        size={36}
        stroke="#322B25"
        fill="#F7C948"
      />
    );
  }
  return (
    <DoodleIcon
      name="sparkle"
      size={36}
      stroke="#322B25"
      fill="#A995D1"
    />
  );
}

function Tag({
  children,
  bg,
  text,
}: {
  children: React.ReactNode;
  bg?: string;
  text?: string;
}) {
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[11px] font-medium md:text-xs"
      style={{
        backgroundColor: bg || "#E8E0FF",
        color: text || "#6B5CA8",
      }}
    >
      {children}
    </span>
  );
}

function CertificateThumb({
  src,
  onClick,
  stackIndex,
}: {
  src: string;
  onClick: () => void;
  stackIndex?: number;
}) {
  const rotation = stackIndex === 0 ? "rotate-2" : stackIndex === 1 ? "-rotate-1" : "";
  const offset = stackIndex === 0 ? "right-0 top-0" : stackIndex === 1 ? "right-1.5 top-1" : "";

  if (stackIndex !== undefined) {
    return (
      <button
        onClick={onClick}
        className={`absolute ${offset} w-[78px] h-[54px] md:w-[82px] md:h-[58px] rounded-lg bg-white p-1 shadow-sm border border-[#E8E0FF] transition-transform duration-200 hover:scale-[1.02] ${rotation}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt="证书缩略图"
          className="h-full w-full object-contain"
        />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="h-[58px] w-[82px] rounded-lg bg-white p-1 shadow-sm border border-[#E8E0FF] transition-transform duration-200 hover:scale-[1.02]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="证书缩略图"
        className="h-full w-full object-contain"
      />
    </button>
  );
}

export default function HonorCard({
  honor,
  index = 0,
  onCertificateClick,
}: HonorCardProps) {
  const certs: string[] =
    honor.certificates && honor.certificates.length > 0
      ? honor.certificates
      : honor.certificate
        ? [honor.certificate]
        : [];

  const tagBgColors = ["#E8E0FF", "#FFF1C7", "#FFD6E0"];
  const tagTextColors = ["#6B5CA8", "#8A6D1F", "#8A4B5E"];

  const tags: { label: string; bg: string; text: string }[] = [];

  tags.push({
    label: categoryLabels[honor.category],
    bg: tagBgColors[0],
    text: tagTextColors[0],
  });

  if (honor.level) {
    tags.push({
      label: honor.level,
      bg: tagBgColors[1],
      text: tagTextColors[1],
    });
  }

  if (honor.prize) {
    tags.push({
      label: honor.prize,
      bg: tagBgColors[2],
      text: tagTextColors[2],
    });
  }

  return (
    <div
      className="group flex flex-col gap-3 rounded-[20px] border p-4 transition-all duration-200 hover:-translate-y-0.5 md:flex-row md:items-center md:gap-4 md:p-5 animate-fade-in-up"
      style={{
        backgroundColor: "#FAF8FF",
        borderColor: "#E8E0FF",
        boxShadow: "0 4px 12px rgba(120, 90, 180, 0.04)",
        animationDelay: `${Math.min(index * 60, 400)}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Left: icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEE6FF]">
        <CategoryIcon category={honor.category} />
      </div>

      {/* Middle: content */}
      <div className="min-w-0 flex-1">
        <h3 className="text-[15px] font-bold leading-snug text-[#3b3328] md:text-base">
          {honor.title}
        </h3>
        <p className="mt-0.5 text-[13px] text-[#8a7c62]">
          {honor.organization}
        </p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.map((t, i) => (
            <Tag key={i} bg={t.bg} text={t.text}>
              {t.label}
            </Tag>
          ))}
        </div>
      </div>

      {/* Right: date + certificate */}
      <div className="flex items-center justify-between gap-3 md:flex-col md:items-end">
        <span className="shrink-0 text-[13px] font-semibold text-[#9678D4]">
          {honor.date}
        </span>

        {certs.length === 1 && onCertificateClick && (
          <CertificateThumb
            src={certs[0]}
            onClick={() => onCertificateClick(certs[0])}
          />
        )}

        {certs.length > 1 && onCertificateClick && (
          <div className="relative h-[58px] w-[88px] md:h-[62px] md:w-[92px]">
            {certs.map((src, i) => (
              <CertificateThumb
                key={src}
                src={src}
                stackIndex={i}
                onClick={() => onCertificateClick(src)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
