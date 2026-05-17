import { LayoutDashboard } from "lucide-react";
import { AdminCard } from "@/app/components/admin/AdminCard";
import { AdminPageHeader } from "@/app/components/admin/AdminPageHeader";
import { AdminPageShell } from "@/app/components/admin/AdminPageShell";
import { AdminStatGrid } from "@/app/components/admin/AdminStatGrid";
import { ADMIN_SECTION_LIST } from "@/lib/admin/sections";
import type { AdminStat } from "@/lib/admin/sections";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";
import Link from "next/link";

const DASHBOARD_STATS: readonly AdminStat[] = [
  { label: "Pedidos hoy", value: "—" },
  { label: "Productos activos", value: "—" },
  { label: "Clientes", value: "—" },
];

export default function AdminPage() {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title="Panel de administración"
        description="Accede a cada área del negocio desde el menú lateral."
        icon={LayoutDashboard}
      />

      <AdminStatGrid stats={DASHBOARD_STATS} />

      <AdminCard title="Secciones">
        <ul className="grid gap-2 sm:grid-cols-2">
          {ADMIN_SECTION_LIST.map((section) => {
            const Icon = section.icon;
            return (
              <li key={section.slug}>
                <Link
                  href={`/admin/${section.slug}`}
                  className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-3 text-sm font-medium text-slate-700 transition hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon
                      className="size-4"
                      strokeWidth={LUCIDE_ICON_STROKE}
                      aria-hidden
                    />
                  </span>
                  <span>
                    <span className="block font-semibold">{section.label}</span>
                    <span className="mt-0.5 block text-xs font-normal text-slate-500">
                      {section.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </AdminCard>
    </AdminPageShell>
  );
}
