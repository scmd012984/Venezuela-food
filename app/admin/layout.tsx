import type { Metadata } from "next";
import { AdminShell } from "@/app/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin · Dulce Venezuela",
  description: "Panel de administración de Dulce Venezuela.",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AdminShell>{children}</AdminShell>;
}
