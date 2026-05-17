import { notFound } from "next/navigation";
import { AdminSectionView } from "@/app/components/admin/AdminSectionView";
import { getAdminSection, type AdminSectionSlug } from "@/lib/admin/sections";

type AdminSectionPageProps = {
  slug: AdminSectionSlug;
};

export function AdminSectionPage({ slug }: AdminSectionPageProps) {
  const section = getAdminSection(slug);
  if (!section) notFound();
  return <AdminSectionView section={section} />;
}
