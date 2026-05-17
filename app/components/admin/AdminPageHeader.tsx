import type { LucideIcon } from "lucide-react";
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
    <header className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="size-5" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-primary">Vista previa</p>
          <h1 className="mt-0.5 font-headline text-2xl font-semibold text-slate-900 sm:text-3xl">
            {title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </header>
  );
}
