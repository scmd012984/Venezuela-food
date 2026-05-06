import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Inicio" },
  { href: "/menu", label: "Menu" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="border-b border-outline-variant/50 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-primary sm:text-xl"
        >
          Dulce Venezuela
        </Link>

        <ul className="flex items-center gap-2 sm:gap-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-on-surface/80 transition hover:bg-surface-container-low hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
