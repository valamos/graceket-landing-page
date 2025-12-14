"use client";

import type React from "react";

export function EmailCaptureForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const emailInput = form.elements.namedItem("email") as HTMLInputElement;

    if (!emailInput.value.includes("@")) {
      emailInput.setCustomValidity("Please enter a valid email address.");
      emailInput.reportValidity();
      return;
    }

    emailInput.setCustomValidity("");
    alert("Thanks for joining Graceket! You'll hear from us soon.");
    form.reset();
  };

  return (
    <form className="flex flex-col gap-3 lg:flex-row" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        id="email"
        name="email"
        type="email"
        required
        placeholder="you@example.com"
        className="w-full rounded-full border border-white/30 bg-white/10 px-4 py-3 text-sm placeholder:text-white/70 focus:border-white focus:bg-white/20"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-semibold text-grace-forest shadow-soft hover:bg-grace-rose/80"
      >
        Get updates
        <ArrowRightIcon />
      </button>
    </form>
  );
}

function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`h-5 w-5 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
