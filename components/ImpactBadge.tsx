import { ReactNode } from "react";

interface ImpactBadgeProps {
  amount: string;
  variant?: "solid" | "soft";
  icon?: ReactNode;
}

export function ImpactBadge({ amount, variant = "solid", icon }: ImpactBadgeProps) {
  const styles =
    variant === "solid"
      ? "bg-grace-forest text-white"
      : "bg-white/80 text-grace-forest border border-grace-forest/20";

  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold shadow-soft ${styles}`}>
      {icon}
      <span aria-label={`Impact: ${amount}`}>{amount}</span>
    </span>
  );
}
