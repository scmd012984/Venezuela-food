import { AdminCard } from "@/app/components/admin/AdminCard";
import { AdminDataTable } from "@/app/components/admin/AdminDataTable";
import { AdminPageHeader } from "@/app/components/admin/AdminPageHeader";
import { AdminPageShell } from "@/app/components/admin/AdminPageShell";
import { AdminStatGrid } from "@/app/components/admin/AdminStatGrid";
import type { AdminSection } from "@/lib/admin/sections";

type AdminSectionViewProps = {
  section: AdminSection;
};

export function AdminSectionView({ section }: AdminSectionViewProps) {
  return (
    <AdminPageShell>
      <AdminPageHeader
        title={section.title}
        description={section.description}
        icon={section.icon}
      />
      <AdminStatGrid stats={section.stats} icon={section.icon} />
      <AdminCard title="Listado">
        <AdminDataTable
          columns={section.tableColumns}
          emptyMessage={section.emptyMessage}
        />
      </AdminCard>
    </AdminPageShell>
  );
}
