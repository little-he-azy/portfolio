export default function InternshipQuote() {
  return (
    <div className="relative overflow-hidden rounded-[24px] border-[1.5px] border-[#c9a0a0]/25 bg-[#FFF0F0] p-6 md:p-7">
      {/* 大引号 */}
      <div className="text-5xl leading-none text-[#c9a0a0]/40 font-serif select-none">
        &ldquo;
      </div>

      <p className="mt-1 text-base font-medium leading-relaxed text-[#5c5045] md:text-lg">
        Stay curious,
        <br />
        stay humble,
        <br />
        keep building.
      </p>

      {/* 右下角小植物 doodle */}
      <div className="absolute bottom-3 right-3">
        <PlantDoodle />
      </div>
    </div>
  );
}

function PlantDoodle() {
  return (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 38V20" stroke="#302A23" strokeWidth="1.6" />
      <path d="M18 20c0-6-4-10-9-10 0 6 3 11 9 12z" stroke="#302A23" strokeWidth="1.6" fill="#94B991" fillOpacity="0.4" />
      <path d="M18 16c0-5 3-8 8-8 0 5-3 9-8 10z" stroke="#302A23" strokeWidth="1.6" fill="#94B991" fillOpacity="0.4" />
      <circle cx="24" cy="8" r="2" fill="#F7C948" stroke="#302A23" strokeWidth="1.2" />
    </svg>
  );
}
