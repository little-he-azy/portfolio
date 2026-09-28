"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function HeroIntro() {
  const [helloText, setHelloText] = useState("");
  const [cnName, setCnName] = useState("");
  const [enName, setEnName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [cursorFading, setCursorFading] = useState(false);
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    const helloStr = "Hello, I'm";
    const cnStr = "何晓冉";
    const enStr = "Azy He";

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    for (let i = 0; i < helloStr.length; i++) {
      timeouts.push(
        setTimeout(() => {
          setHelloText(helloStr.slice(0, i + 1));
        }, i * 55)
      );
    }

    const cnStart = helloStr.length * 55 + 200;
    for (let i = 0; i < cnStr.length; i++) {
      timeouts.push(
        setTimeout(() => {
          setCnName(cnStr.slice(0, i + 1));
        }, cnStart + i * 130)
      );
    }

    const enStart = cnStart + cnStr.length * 130 + 200;
    for (let i = 0; i < enStr.length; i++) {
      timeouts.push(
        setTimeout(() => {
          setEnName(enStr.slice(0, i + 1));
        }, enStart + i * 90)
      );
    }

    const done = enStart + enStr.length * 90 + 500;
    timeouts.push(
      setTimeout(() => {
        setCursorFading(true);
      }, done)
    );

    timeouts.push(
      setTimeout(() => {
        setShowCursor(false);
        setShowRest(true);
      }, done + 400)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  const helloStr = "Hello, I'm";
  const cnStr = "何晓冉";
  const enStr = "Azy He";

  const isTypingHello = helloText.length < helloStr.length;
  const isTypingCn =
    !isTypingHello && cnName.length < cnStr.length && helloText.length === helloStr.length;
  const isTypingEn =
    !isTypingHello && !isTypingCn && enName.length < enStr.length && cnName.length === cnStr.length;
  const isDone =
    helloText.length === helloStr.length &&
    cnName.length === cnStr.length &&
    enName.length === enStr.length;

  const cursorClass = cursorFading ? "animate-fade-out" : "animate-blink";

  return (
    <div className="text-center">
      {/* Hello, I'm */}
      <p className="min-h-[1.75rem] text-lg font-medium text-[#8a7c62]">
        {helloText}
        {isTypingHello && showCursor && (
          <span
            className={`ml-0.5 inline-block h-[1.1em] w-[2px] align-middle bg-[#322B25] ${cursorClass}`}
          />
        )}
      </p>

      {/* 头像 */}
      <div className="mt-2 flex justify-center md:mt-2.5">
        <div className="relative h-[132px] w-[132px] md:h-[158px] md:w-[158px] lg:h-[172px] lg:w-[172px]">
          <Image
            src="/avatar.png"
            alt="AZY HE"
            fill
            priority
            className="rounded-full object-cover border-2 border-[#4a4035] shadow-[0_6px_20px_rgba(70,55,40,0.12)]"
            sizes="(max-width: 768px) 132px, (max-width: 1024px) 158px, 172px"
          />
        </div>
      </div>

      {/* 何晓冉 Azy He */}
      <div className="mt-3 flex flex-wrap items-end justify-center gap-3 md:mt-4 md:gap-4">
        <h1 className="min-h-[1em] font-cn text-5xl font-semibold leading-none tracking-tight text-[#3b3328] md:text-6xl lg:text-7xl">
          {cnName}
          {isTypingCn && showCursor && (
            <span
              className={`ml-0.5 inline-block h-[0.9em] w-[2px] align-middle bg-[#322B25] ${cursorClass}`}
            />
          )}
        </h1>

        <span className="min-h-[1em] font-[family-name:var(--font-fredoka)] text-2xl font-medium leading-none tracking-wide text-[#665b4c] md:text-3xl lg:text-4xl">
          {enName}
          {isTypingEn && showCursor && (
            <span
              className={`ml-0.5 inline-block h-[0.9em] w-[2px] align-middle bg-[#322B25] ${cursorClass}`}
            />
          )}
          {isDone && showCursor && (
            <span
              className={`ml-0.5 inline-block h-[0.9em] w-[2px] align-middle bg-[#322B25] ${cursorClass}`}
            />
          )}
        </span>
      </div>

      {/* 1111111 */}
      <div
        className={`mx-auto mt-2 max-w-2xl transition-opacity duration-500 ${showRest ? "opacity-100" : "opacity-0"}`}
      >
        <p className="text-base font-medium leading-tight text-[#6d675d] md:text-lg">
          1111111
        </p>
      </div>
    </div>
  );
}
