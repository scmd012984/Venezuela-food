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

export const ADMIN_SECTION_SLUGS = [
  "clientes",
  "pedidos",
  "productos",
  "categorias",
  "stock",
  "promociones",
  "logistica",
] as const;

export type AdminSectionSlug = (typeof ADMIN_SECTION_SLUGS)[number];

export type AdminStat = {
  label: string;
  value: string;
};

export type AdminTableColumn = {
  key: string;
  label: string;
};

export type AdminSection = {
  slug: AdminSectionSlug;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stats: readonly AdminStat[];
  tableColumns: readonly AdminTableColumn[];
  emptyMessage: string;
};

export const ADMIN_SECTIONS: Record<AdminSectionSlug, AdminSection> = {
  clientes: {
    slug: "clientes",
    label: "Clientes",
    title: "Clientes",
    description: "Consulta y gestiona la base de clientes de la tienda.",
    icon: Users,
    stats: [
      { label: "Total clientes", value: "—" },
      { label: "Nuevos este mes", value: "—" },
      { label: "Clientes activos", value: "—" },
    ],
    tableColumns: [
      { key: "name", label: "Nombre" },
      { key: "email", label: "Email" },
      { key: "phone", label: "Teléfono" },
      { key: "orders", label: "Pedidos" },
    ],
    emptyMessage: "Aún no hay clientes registrados. Los datos aparecerán aquí.",
  },
  pedidos: {
    slug: "pedidos",
    label: "Pedidos",
    title: "Pedidos",
    description: "Supervisa pedidos recientes, estados y totales.",
    icon: ShoppingBag,
    stats: [
      { label: "Pendientes", value: "—" },
      { label: "En preparación", value: "—" },
      { label: "Entregados hoy", value: "—" },
    ],
    tableColumns: [
      { key: "id", label: "#" },
      { key: "customer", label: "Cliente" },
      { key: "status", label: "Estado" },
      { key: "total", label: "Total" },
      { key: "date", label: "Fecha" },
    ],
    emptyMessage: "No hay pedidos para mostrar en este momento.",
  },
  productos: {
    slug: "productos",
    label: "Productos",
    title: "Productos",
    description: "Administra el catálogo de productos y su disponibilidad.",
    icon: Package,
    stats: [
      { label: "Productos activos", value: "—" },
      { label: "En borrador", value: "—" },
      { label: "Sin stock", value: "—" },
    ],
    tableColumns: [
      { key: "name", label: "Producto" },
      { key: "category", label: "Categoría" },
      { key: "price", label: "Precio" },
      { key: "status", label: "Estado" },
    ],
    emptyMessage: "El catálogo está vacío. Añade productos cuando conectes el backend.",
  },
  categorias: {
    slug: "categorias",
    label: "Categorías",
    title: "Categorías",
    description: "Organiza el catálogo por familias y colecciones.",
    icon: Shapes,
    stats: [
      { label: "Total categorías", value: "—" },
      { label: "Con productos", value: "—" },
      { label: "Vacías", value: "—" },
    ],
    tableColumns: [
      { key: "name", label: "Categoría" },
      { key: "products", label: "Productos" },
      { key: "order", label: "Orden" },
    ],
    emptyMessage: "No hay categorías configuradas todavía.",
  },
  stock: {
    slug: "stock",
    label: "Stock",
    title: "Stock",
    description: "Controla inventario, mínimos y alertas de reposición.",
    icon: Boxes,
    stats: [
      { label: "Bajo mínimo", value: "—" },
      { label: "Agotados", value: "—" },
      { label: "Unidades totales", value: "—" },
    ],
    tableColumns: [
      { key: "product", label: "Producto" },
      { key: "available", label: "Disponible" },
      { key: "minimum", label: "Mínimo" },
      { key: "location", label: "Ubicación" },
    ],
    emptyMessage: "Sin movimientos de stock registrados.",
  },
  promociones: {
    slug: "promociones",
    label: "Promociones",
    title: "Promociones",
    description: "Crea y revisa descuentos, cupones y campañas.",
    icon: Percent,
    stats: [
      { label: "Activas", value: "—" },
      { label: "Programadas", value: "—" },
      { label: "Finalizadas", value: "—" },
    ],
    tableColumns: [
      { key: "name", label: "Nombre" },
      { key: "discount", label: "Descuento" },
      { key: "period", label: "Vigencia" },
      { key: "status", label: "Estado" },
    ],
    emptyMessage: "No hay promociones creadas.",
  },
  logistica: {
    slug: "logistica",
    label: "Logística",
    title: "Logística",
    description: "Coordina entregas, zonas y repartidores.",
    icon: Truck,
    stats: [
      { label: "En ruta", value: "—" },
      { label: "Para hoy", value: "—" },
      { label: "Entregados", value: "—" },
    ],
    tableColumns: [
      { key: "order", label: "Pedido" },
      { key: "zone", label: "Zona" },
      { key: "driver", label: "Repartidor" },
      { key: "status", label: "Estado" },
    ],
    emptyMessage: "No hay entregas programadas.",
  },
};

export const ADMIN_SECTION_LIST = ADMIN_SECTION_SLUGS.map(
  (slug) => ADMIN_SECTIONS[slug],
);

export function isAdminSectionSlug(value: string): value is AdminSectionSlug {
  return (ADMIN_SECTION_SLUGS as readonly string[]).includes(value);
}

export function getAdminSection(
  slug: string,
): AdminSection | undefined {
  if (!isAdminSectionSlug(slug)) return undefined;
  return ADMIN_SECTIONS[slug];
}

export function getAdminSectionByPath(pathname: string): AdminSection | null {
  const segment = pathname.replace(/^\/admin\/?/, "").split("/")[0];
  if (!segment) return null;
  return getAdminSection(segment) ?? null;
}
