interface InternshipCardProps {
  company: string;
  position: string;
  positionCn: string;
  period: string;
  description: string;
  descriptionCn: string;
  tags: string[];
}

export default function InternshipCard({
  company,
  position,
  positionCn,
  period,
  description,
  descriptionCn,
  tags,
}: InternshipCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border-[1.5px] border-[#c9a0a0]/30 bg-[#fffdf5] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[5px_5px_0px_rgba(92,79,61,0.08)] md:p-7">
      {/* Logo placeholder */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0F0] border border-[#c9a0a0]/20 text-lg font-bold text-[#8a7c62]">
        {company.charAt(0)}
      </div>

      {/* Company + Position */}
      <div className="mt-4">
        <h3 className="text-xl font-bold text-[#3b3328] md:text-2xl">{company}</h3>
        <p className="mt-1 text-sm font-medium text-[#5c5045]">
          {position}
          <span className="font-cn ml-1.5 text-sm text-[#8a7c62]">· {positionCn}</span>
        </p>
      </div>

      {/* Period */}
      <p className="mt-1.5 text-xs font-medium tracking-wide text-[#a09582] uppercase">
        {period}
      </p>

      {/* Description */}
      <p className="mt-4 text-sm leading-relaxed text-[#5c5045] md:text-[15px]">
        {description}
      </p>
      <p className="font-cn mt-1 text-sm leading-relaxed text-[#8a7c62]">
        {descriptionCn}
      </p>

      {/* Tags */}
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex rounded-full bg-[#fff1a8]/50 px-3 py-1 text-xs font-medium text-[#5c4f3d]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
