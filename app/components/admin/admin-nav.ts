import { ADMIN_SECTION_LIST } from "@/lib/admin/sections";

export const ADMIN_NAV_ITEMS = ADMIN_SECTION_LIST.map((section) => ({
  href: `/admin/${section.slug}`,
  label: section.label,
  icon: section.icon,
}));
