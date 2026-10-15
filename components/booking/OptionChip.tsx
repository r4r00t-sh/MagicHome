"use client";

import type { ReactNode } from "react";

type OptionChipProps = {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
};

export function OptionChip({
  selected,
  onClick,
  children,
  className = "",
  ariaLabel,
}: OptionChipProps) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
        selected
          ? "border-primary bg-primary text-white shadow-md"
          : "border-primary/10 bg-surface text-primary hover:border-primary/30"
      } ${className}`}
    >
      {children}
    </button>
  );
}
