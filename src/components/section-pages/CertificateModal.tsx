"use client";

import { useEffect, useCallback } from "react";

interface CertificateModalProps {
  open: boolean;
  title: string;
  date: string;
  organization: string;
  imageSrc: string;
  onClose: () => void;
}

export default function CertificateModal({
  open,
  title,
  date,
  organization,
  imageSrc,
  onClose,
}: CertificateModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!open) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(40, 30, 50, 0.35)" }}
      onClick={onClose}
    >
      <div
        className="relative flex flex-col rounded-[20px] bg-[#FFFBF5] p-5 md:p-6 shadow-xl"
        style={{
          width: "min(880px, 90vw)",
          maxHeight: "86vh",
          animation: "fade-in-up 0.25s ease-out forwards",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-base font-bold text-[#3b3328] md:text-lg truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#8a7c62] transition-colors hover:bg-[#f0ebff] hover:text-[#6d675d]"
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="flex flex-1 items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={`${title} 证书`}
            className="max-h-[68vh] max-w-full object-contain"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        {/* Footer */}
        <div className="mt-3 text-center text-xs text-[#8a7c62] md:text-sm">
          {date} · {organization}
        </div>
      </div>
    </div>
  );
}
