import type { ReactNode } from "react";
import { adminPanelClass } from "@/app/components/admin/admin-styles";

type AdminCardProps = {
  title: string;
  children: ReactNode;
};

export function AdminCard({ title, children }: AdminCardProps) {
  return (
    <section className={`overflow-hidden ${adminPanelClass}`}>
      <div className="admin-panel-header px-5 py-3.5">
        <h2 className="admin-text-heading font-headline text-sm font-semibold">
          {title}
        </h2>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </section>
  );
}
