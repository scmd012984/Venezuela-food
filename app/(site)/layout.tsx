import { BottomNav } from "@/app/components/dulce-venezuela/BottomNav";
import { TopNav } from "@/app/components/dulce-venezuela/TopNav";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="texture-page-warm flex min-h-dvh flex-col bg-background font-sans text-base font-normal text-on-surface">
      <TopNav />
      <main className="flex-1 pb-24 md:pb-6">{children}</main>
      <BottomNav />
    </div>
  );
}
