import Link from "next/link";
import DoodleIcon, { type IconName } from "./DoodleIcon";

type CategoryCardProps = {
  icon: IconName;
  stroke?: string;
  fill?: string;
  accent?: string;
  title: string;
  chineseTitle: string;
  description: string;
  chineseDescription: string;
  href: string;
  color?: string;
  borderColor?: string;
  className?: string;
};

export default function CategoryCard({
  icon,
  stroke = "#322B25",
  fill,
  accent,
  title,
  chineseTitle,
  description,
  chineseDescription,
  href,
  color = "#fffdf4",
  borderColor = "#5c4f3d",
  className = "",
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`
        group
        relative
        block
        overflow-hidden
        rounded-[28px]
        border-[1.5px]
        p-7
        transition-all
        duration-200
        hover:-translate-y-1
        hover:rotate-[0.5deg]
        hover:shadow-[6px_6px_0px_rgba(92,79,61,0.12)]
        ${className}
      `}
      style={{
        backgroundColor: color,
        borderColor: borderColor,
      }}
    >
      {/* 手绘图标 — hover 时有轻微动态 */}
      <div className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:rotate-[-2deg]">
        <DoodleIcon name={icon} size={44} stroke={stroke} fill={fill} accent={accent} />
      </div>

      {/* 标题 */}
      <div className="mt-5 flex flex-wrap items-baseline gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-[#3b3328]">
          {title}
        </h2>

        <span className="font-cn text-base font-medium text-[#8a7c62]">
          {chineseTitle}
        </span>
      </div>

      {/* 描述 */}
      <p className="mt-4 text-[15px] leading-relaxed text-[#5c5045]">
        {description}
      </p>

      <p className="font-cn mt-1.5 text-sm text-[#958b79]">
        {chineseDescription}
      </p>

      {/* Explore */}
      <p className="mt-7 inline-flex items-center gap-1 text-sm font-semibold text-[#5c4f3d]">
        <span>Explore</span>
        <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        <span className="font-cn ml-1 text-sm font-normal text-[#8a7c62]">
          查看更多
        </span>
      </p>

      {/* 角落装饰小星星 */}
      <div className="absolute -right-1 -top-1 opacity-0 transition-opacity duration-300 group-hover:opacity-70">
        <DoodleIcon name="star" size={28} stroke="#322B25" fill="#F7C948" />
      </div>
    </Link>
  );
}
