import type { LucideIcon } from "lucide-react";
import { adminPanelClass } from "@/app/components/admin/admin-styles";

type AdminStatCardProps = {
  label: string;
  value: string;
  icon?: LucideIcon;
};

export function AdminStatCard({ label, value, icon: Icon }: AdminStatCardProps) {
  return (
    <article
      className={`relative overflow-hidden p-5 transition duration-200 hover:-translate-y-0.5 ${adminPanelClass}`}
    >
      {Icon ? (
        <Icon className="admin-stat-watermark pointer-events-none absolute -right-1 -top-1 size-16" aria-hidden />
      ) : null}
      <p className="admin-text-muted text-xs font-semibold uppercase tracking-wide">
        {label}
      </p>
      <p className="admin-text-heading mt-2 font-headline text-3xl font-semibold tracking-tight">
        {value}
      </p>
    </article>
  );
}
