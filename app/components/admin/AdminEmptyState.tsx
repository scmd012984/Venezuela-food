import { Inbox } from "lucide-react";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

type AdminEmptyStateProps = {
  message: string;
};

export function AdminEmptyState({ message }: AdminEmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-14 text-center">
      <span className="admin-empty-icon">
        <Inbox className="size-6" strokeWidth={LUCIDE_ICON_STROKE} aria-hidden />
      </span>
      <p className="admin-text-muted mt-4 max-w-sm text-sm leading-relaxed">
        {message}
      </p>
    </div>
  );
}
