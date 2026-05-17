import type { LucideIcon } from "lucide-react";
import { AdminStatCard } from "@/app/components/admin/AdminStatCard";
import type { AdminStat } from "@/lib/admin/sections";

type AdminStatGridProps = {
  stats: readonly AdminStat[];
  icon?: LucideIcon;
};

export function AdminStatGrid({ stats, icon }: AdminStatGridProps) {
  return (
    <section
      className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      aria-label="Resumen"
    >
      {stats.map((stat) => (
        <AdminStatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          icon={icon}
        />
      ))}
    </section>
  );
}
