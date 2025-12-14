"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-grace-forest/15 bg-white/80 p-4 shadow-soft transition hover:-translate-y-0.5">
      <button
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-base font-semibold text-grace-ink">{question}</span>
        <span
          aria-hidden
          className={`flex h-8 w-8 items-center justify-center rounded-full border border-grace-forest/30 text-grace-forest transition-transform ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-grace-ink/80">{answer}</p>
      )}
    </div>
  );
}
