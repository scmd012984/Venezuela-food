import type { ReactNode } from "react";

type AdminPageShellProps = {
  children: ReactNode;
};

export function AdminPageShell({ children }: AdminPageShellProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {children}
    </div>
  );
}
