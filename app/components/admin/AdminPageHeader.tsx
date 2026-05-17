import type { LucideIcon } from "lucide-react";
import { adminPanelClass } from "@/app/components/admin/admin-styles";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

type AdminPageHeaderProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function AdminPageHeader({
  title,
  description,
  icon: Icon,
}: AdminPageHeaderProps) {
  return (
    <header
      className={`relative overflow-hidden p-6 sm:p-8 ${adminPanelClass}`}
    >
      <div
        className="admin-glow-gold pointer-events-none absolute -right-10 -top-10 size-44 rounded-full blur-2xl"
        aria-hidden
      />
      <div
        className="admin-glow-bone pointer-events-none absolute -bottom-16 left-1/4 size-36 rounded-full blur-2xl"
        aria-hidden
      />

      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
        <span className="admin-icon-feature size-14 shrink-0">
          <Icon className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <span className="admin-badge">Vista previa</span>
          <h1 className="admin-text-heading mt-3 font-headline text-2xl font-semibold sm:text-3xl">
            {title}
          </h1>
          <p className="admin-text-muted mt-2 max-w-2xl text-sm leading-relaxed sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}
