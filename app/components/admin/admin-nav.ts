import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Package,
  Settings,
  ShoppingBag,
  Users,
} from "lucide-react";

export type AdminNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
};

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { href: "/admin", label: "Panel", icon: LayoutDashboard },
  { href: "/admin", label: "Pedidos", icon: ShoppingBag, disabled: true },
  { href: "/admin", label: "Productos", icon: Package, disabled: true },
  { href: "/admin", label: "Clientes", icon: Users, disabled: true },
  { href: "/admin", label: "Ajustes", icon: Settings, disabled: true },
];
