import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdminSectionPage } from "@/app/components/admin/AdminSectionPage";
import {
  ADMIN_SECTION_SLUGS,
  getAdminSection,
  isAdminSectionSlug,
} from "@/lib/admin/sections";

type PageProps = {
  params: Promise<{ section: string }>;
};

export function generateStaticParams() {
  return ADMIN_SECTION_SLUGS.map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { section: slug } = await params;
  const section = isAdminSectionSlug(slug) ? getAdminSection(slug) : undefined;
  if (!section) return { title: "Admin · Dulce Venezuela" };
  return {
    title: `${section.title} · Admin · Dulce Venezuela`,
  };
}

export default async function AdminSectionRoutePage({ params }: PageProps) {
  const { section: slug } = await params;
  if (!isAdminSectionSlug(slug)) notFound();
  return <AdminSectionPage slug={slug} />;
}
