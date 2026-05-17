import { LayoutDashboard } from "lucide-react";
import { AdminCard } from "@/app/components/admin/AdminCard";
import { AdminPageHeader } from "@/app/components/admin/AdminPageHeader";
import { AdminPageShell } from "@/app/components/admin/AdminPageShell";
import { AdminSectionLink } from "@/app/components/admin/AdminSectionLink";
import { AdminStatGrid } from "@/app/components/admin/AdminStatGrid";
import { ADMIN_SECTION_LIST } from "@/lib/admin/sections";
import type { AdminStat } from "@/lib/admin/sections";

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
        description="Accede a cada área del negocio desde el menú lateral o las tarjetas de abajo."
        icon={LayoutDashboard}
      />

      <AdminStatGrid stats={DASHBOARD_STATS} icon={LayoutDashboard} />

      <AdminCard title="Secciones">
        <ul className="grid gap-3 sm:grid-cols-2">
          {ADMIN_SECTION_LIST.map((section) => (
            <li key={section.slug}>
              <AdminSectionLink
                href={`/admin/${section.slug}`}
                label={section.label}
                description={section.description}
                icon={section.icon}
              />
            </li>
          ))}
        </ul>
      </AdminCard>
    </AdminPageShell>
  );
}
