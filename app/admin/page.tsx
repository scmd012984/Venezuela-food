import { Package, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { LUCIDE_ICON_STROKE } from "@/lib/lucide-icon-stroke";

const SUMMARY_CARDS = [
  {
    label: "Pedidos hoy",
    value: "—",
    hint: "Conecta el backend para ver datos",
    icon: ShoppingBag,
  },
  {
    label: "Productos activos",
    value: "—",
    hint: "Catálogo pendiente de sincronizar",
    icon: Package,
  },
  {
    label: "Clientes",
    value: "—",
    hint: "Vista de clientes en desarrollo",
    icon: Users,
  },
  {
    label: "Ingresos del mes",
    value: "—",
    hint: "Métricas disponibles próximamente",
    icon: TrendingUp,
  },
] as const;

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-6">
      <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-medium text-primary">Vista previa</p>
        <h2 className="mt-1 font-headline text-2xl font-semibold text-slate-900 sm:text-3xl">
          Bienvenida al panel
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Por ahora solo está el front del administrador. Usa el botón del menú
          para ocultar o mostrar la barra lateral.
        </p>
      </section>

      <section
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
        aria-label="Resumen"
      >
        {SUMMARY_CARDS.map((card) => {
          const Icon = card.icon;
          return (
            <article
              key={card.label}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-slate-500">{card.label}</p>
                  <p className="mt-1 font-headline text-2xl font-semibold text-slate-900">
                    {card.value}
                  </p>
                </div>
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon
                    className="size-5"
                    strokeWidth={LUCIDE_ICON_STROKE}
                    aria-hidden
                  />
                </span>
              </div>
              <p className="mt-3 text-xs text-slate-500">{card.hint}</p>
            </article>
          );
        })}
      </section>

      <section className="rounded-xl border border-dashed border-slate-300 bg-slate-50/80 p-6 text-center">
        <p className="text-sm font-medium text-slate-700">
          Área de contenido principal
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Aquí irán tablas, formularios y detalle de pedidos cuando conectes el
          backend.
        </p>
      </section>
    </div>
  );
}
