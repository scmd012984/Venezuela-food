import { AdminEmptyState } from "@/app/components/admin/AdminEmptyState";
import type { AdminTableColumn } from "@/lib/admin/sections";

type AdminDataTableProps = {
  columns: readonly AdminTableColumn[];
  emptyMessage: string;
};

export function AdminDataTable({ columns, emptyMessage }: AdminDataTableProps) {
  return (
    <div className="admin-table-wrap">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="admin-table-head">
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="admin-text-muted px-4 py-3 text-xs font-semibold uppercase tracking-wide first:pl-5 last:pr-5"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="admin-table-body">
            <tr>
              <td colSpan={columns.length} className="p-0">
                <AdminEmptyState message={emptyMessage} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
