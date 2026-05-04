import Image from "next/image";

const IMAGES = {
  tresLeches:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA_WxSLnUZb2xvF8ZuSn8IIPvQHS9pyBah-phM5iWfv5oHIk2zg9m9skLQ50quxvnxpFGZy8gjHQlONPK7_-hHY2szP9raCWYPHEVj8y1wexaeF_iN9YiYMibnswosvOHFvB_chpb3t9_NVfvizsefTno6elkwpOmXdRUJC-IsPfLaUASWKMGitHpU2J6U1splxxl0n4U1Sg16RCRllkf7sgs8KY0_x7BmSxUcfh3YPOR3UItNA_U9ZbhAR3MikvvWBH55-1MqylaM4",
  cachitos:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUB_AGOwQgL52Xg3CwB83ZFYQfG-zJifRhdwJFlJ9dM39n8fIj0GniyNqWC-m19F_RSJKdH9VpJDwo6631jQrIvQYIJKEhTjRx0kClGyRwiO-XXFVbDlTBkp0gXIeIIIv2iviGVa0D3i5Jo-3julr878RUeYoJoedGJLohilauls5QInC5OShek6TpNnYlqupSq0BI-kDmF3upBDUAcbUGgg9OGYhQ5RkTqlxn4ZTHHvTvK7OYnNBaNThkvWCg764kzkRz_YKazDvH",
  quesillo:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBozKqZoogbgijyV8-KJUFC5-7LZRILIGALzyZ3H8Rb8GPNANMlpSNOWDvmDKdLPkDHmU7WuWmX3lT21vdBM_6_QdJsOXnVSPIHPk76JdyHh7paE-NAcVoXLNcZImV7IZY81wSPiOYSNfwMNdIFB53UvYN1grgxgAuas_rrsfAzSOwFvfTkgEk9IhJZ8luaXDh1jqEgAT5Ey_ShNMt62MpeiVx_O5bbzlqinGoU0372LZlH6LNs6zZI2DTdGWMEs-k6hlVyPMaKz1Yv",
  /** Imagen de respaldo: la URL de Stitch para golfeados venía truncada */
  golfeados:
    "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80",
} as const;

const FILTER_TAGS = [
  "Todos",
  "Golfeados",
  "Cachitos",
  "Postres Fríos",
  "Quesillos",
] as const;

function TopNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm backdrop-blur-xl transition-all duration-300 dark:border-slate-700/40 dark:bg-slate-900/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="text-blue-800 transition-opacity duration-200 hover:opacity-80 active:scale-95 dark:text-blue-400"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="group relative overflow-hidden rounded-lg px-4 py-1">
            <div className="absolute inset-0 flex flex-col opacity-20 transition-opacity group-hover:opacity-30">
              <div className="h-1/3 bg-[#fed721]" />
              <div className="h-1/3 bg-[#0033a0]" />
              <div className="h-1/3 bg-[#ba1a1a]" />
            </div>
            <div className="absolute inset-0 glass-panel opacity-40" />
            <span className="relative text-2xl font-black tracking-tighter text-primary drop-shadow-sm dark:text-blue-400">
              Dulce Venezuela
            </span>
          </div>
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          <a
            className="font-sans font-light tracking-tight text-slate-500 transition-opacity hover:opacity-80"
            href="#"
          >
            Inicio
          </a>
          <a
            className="font-sans font-bold tracking-tight text-blue-800 transition-opacity hover:opacity-80"
            href="#"
          >
            Tienda
          </a>
          <a
            className="font-sans font-light tracking-tight text-slate-500 transition-opacity hover:opacity-80"
            href="#"
          >
            Favoritos
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            className="relative text-blue-800 transition-opacity duration-200 hover:opacity-80 active:scale-95 dark:text-blue-400"
            aria-label="Carrito, 3 artículos"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="absolute -right-1 -top-1 rounded-full bg-secondary-container px-1.5 text-[10px] font-bold text-on-secondary-container">
              3
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroHeader() {
  return (
    <header className="space-y-8">
      <div className="max-w-2xl">
        <h1 className="mb-4 text-5xl font-black leading-tight tracking-tighter text-primary">
          Sabores que cuentan historias.
        </h1>
        <p className="text-lg font-light leading-relaxed text-on-surface-variant">
          Nuestra repostería es un puente entre la tradición venezolana y el
          refinamiento contemporáneo.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="relative w-full md:max-w-md">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            type="search"
            placeholder="Buscar delicias..."
            className="w-full rounded-2xl border-none bg-surface-container-low py-4 pl-12 pr-4 font-light placeholder:text-outline-variant transition-all focus:ring-2 focus:ring-primary-container"
          />
        </div>
        <div className="no-scrollbar flex flex-wrap gap-3 overflow-x-auto pb-2">
          {FILTER_TAGS.map((tag) => (
            <span
              key={tag}
              className={
                tag === "Todos"
                  ? "cursor-pointer rounded-full bg-primary-container px-6 py-2 text-sm font-medium text-white transition-all"
                  : "glass-panel cursor-pointer rounded-full px-6 py-2 text-sm font-medium text-on-surface-variant transition-all hover:bg-surface-container-high"
              }
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

function ProductGrid() {
  return (
    <section className="grid grid-cols-1 gap-8 pb-12 md:grid-cols-12">
      <div className="glass-panel group relative h-[500px] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,51,160,0.06)] md:col-span-8">
        <Image
          src={IMAGES.tresLeches}
          alt="Tarta Tres Leches"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-10">
          <div className="space-y-2 text-white">
            <span className="rounded-full bg-secondary-container px-3 py-1 text-xs font-bold uppercase tracking-widest text-on-secondary-container">
              Favorito de la Casa
            </span>
            <h3 className="text-4xl font-bold">Tarta Tres Leches</h3>
            <p className="max-w-sm font-light text-white/80">
              Bizcocho esponjoso bañado en tres tipos de leche, coronado con
              merengue suizo y canela.
            </p>
          </div>
          <button
            type="button"
            className="rounded-xl bg-primary-container px-8 py-4 font-bold text-white shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            $8.50
          </button>
        </div>
      </div>

      <div className="glass-panel group relative flex flex-col overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,51,160,0.06)] md:col-span-4">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={IMAGES.cachitos}
            alt="Cachitos de Jamón"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <div className="absolute right-4 top-4">
            <button
              type="button"
              className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-white"
              aria-label="Añadir a favoritos"
            >
              <span className="material-symbols-outlined">favorite</span>
            </button>
          </div>
        </div>
        <div className="flex flex-grow flex-col justify-between space-y-4 p-8">
          <div>
            <h3 className="text-2xl font-bold text-primary">
              Cachitos de Jamón
            </h3>
            <p className="mt-2 text-sm font-light text-on-surface-variant">
              Pan suave relleno de jamón ahumado y tocineta, horneado al
              momento.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xl font-black text-primary">$3.50</span>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-white transition-all hover:scale-110 active:scale-90"
              aria-label="Añadir al carrito"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </div>

      <div className="glass-panel group relative flex flex-col overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,51,160,0.06)] md:col-span-4">
        <div className="relative h-64 overflow-hidden">
          <Image
            src={IMAGES.quesillo}
            alt="Quesillo Tradicional"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="flex flex-grow flex-col justify-between space-y-4 p-8">
          <div>
            <h3 className="text-2xl font-bold text-primary">Quesillo</h3>
            <p className="mt-2 text-sm font-light text-on-surface-variant">
              Nuestra versión del flan con el toque perfecto de ron y vainilla.
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <span className="text-xl font-black text-primary">$5.00</span>
            <button
              type="button"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container text-white transition-all hover:scale-110 active:scale-90"
              aria-label="Añadir al carrito"
            >
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </div>

      <div className="glass-panel group relative h-[400px] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,51,160,0.06)] md:col-span-8">
        <div className="absolute inset-0 flex">
          <div className="z-10 flex w-1/2 flex-col justify-center space-y-6 p-12">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary-fixed-dim">
              Receta de la Abuela
            </span>
            <h3 className="text-3xl font-bold leading-tight text-primary">
              Golfeados con Queso de Mano
            </h3>
            <p className="font-light text-on-surface-variant">
              Rollos de canela y papelón con un toque de anís dulce, servidos
              con queso fresco fundido.
            </p>
            <button
              type="button"
              className="w-fit rounded-full border border-primary px-8 py-3 font-bold text-primary transition-all hover:bg-primary hover:text-white"
            >
              Descubrir Sabor
            </button>
          </div>
          <div className="relative w-1/2">
            <Image
              src={IMAGES.golfeados}
              alt="Golfeados"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BottomNav() {
  return (
    <nav className="pb-safe fixed bottom-0 left-0 z-50 flex w-full justify-around rounded-t-2xl border-t border-white/20 bg-white/80 px-4 pt-2 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:bg-slate-900/80 md:hidden">
      <div className="tap-highlight-none flex flex-col items-center justify-center text-blue-800 transition-transform active:scale-90 dark:text-blue-300">
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          home
        </span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">
          Inicio
        </span>
      </div>
      <div className="tap-highlight-none flex flex-col items-center justify-center text-slate-400 transition-transform active:scale-90">
        <span className="material-symbols-outlined">storefront</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">
          Tienda
        </span>
      </div>
      <div className="tap-highlight-none flex flex-col items-center justify-center text-slate-400 transition-transform active:scale-90">
        <span className="material-symbols-outlined">favorite</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">
          Favoritos
        </span>
      </div>
      <div className="tap-highlight-none flex flex-col items-center justify-center text-slate-400 transition-transform active:scale-90">
        <span className="material-symbols-outlined">shopping_bag</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">
          Carrito
        </span>
      </div>
    </nav>
  );
}

export function DulceVenezuelaHome() {
  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-7xl space-y-16 px-6 pt-12">
        <HeroHeader />
        <ProductGrid />
      </main>
      <BottomNav />
    </>
  );
}
