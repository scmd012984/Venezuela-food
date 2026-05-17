import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Package,
  Percent,
  Shapes,
  ShoppingBag,
  Truck,
  Users,
} from "lucide-react";

export type AdminNavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
};

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { href: "/admin/clientes", label: "Clientes", icon: Users, disabled: true },
  { href: "/admin/pedidos", label: "Pedidos", icon: ShoppingBag, disabled: true },
  { href: "/admin/productos", label: "Productos", icon: Package, disabled: true },
  { href: "/admin/categorias", label: "Categorías", icon: Shapes, disabled: true },
  { href: "/admin/stock", label: "Stock", icon: Boxes, disabled: true },
  { href: "/admin/promociones", label: "Promociones", icon: Percent, disabled: true },
  { href: "/admin/logistica", label: "Logística", icon: Truck, disabled: true },
];
