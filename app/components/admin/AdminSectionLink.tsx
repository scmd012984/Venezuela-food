import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

type AdminSectionLinkProps = {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export function AdminSectionLink({
  href,
  label,
  description,
  icon: Icon,
}: AdminSectionLinkProps) {
  return (
    <Link href={href} className="admin-section-link group">
      <span className="admin-section-link-icon">
        <Icon className="size-5" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="admin-text-heading block font-semibold transition group-hover:text-[var(--admin-chocolate)]">
          {label}
        </span>
        <span className="admin-text-muted mt-0.5 line-clamp-2 block text-xs leading-relaxed">
          {description}
        </span>
      </span>
      <ChevronRight
        className="size-4 shrink-0 text-[var(--admin-bone-dark)] transition group-hover:translate-x-0.5 group-hover:text-[var(--admin-gold)]"
        strokeWidth={LUCIDE_ICON_STROKE}
        aria-hidden
      />
    </Link>
  );
}
