type AdminStatCardProps = {
  label: string;
  value: string;
};

export function AdminStatCard({ label, value }: AdminStatCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 font-headline text-2xl font-semibold text-slate-900">
        {value}
      </p>
    </article>
  );
}
