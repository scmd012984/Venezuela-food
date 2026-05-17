import type { AdminTableColumn } from "@/lib/admin/sections";

type AdminDataTableProps = {
  columns: readonly AdminTableColumn[];
  emptyMessage: string;
};

export function AdminDataTable({ columns, emptyMessage }: AdminDataTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 text-slate-500">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className="px-3 py-2.5 font-medium first:pl-0 last:pr-0"
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              colSpan={columns.length}
              className="px-3 py-10 text-center text-slate-500 first:pl-0 last:pr-0"
            >
              {emptyMessage}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
