"use client";

import { ColumnDef } from "@tanstack/react-table";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  qtd: number;
  product: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "product",
    header: "Produto",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("product")}</div>
    ),
  },
  {
    accessorKey: "qtd",
    header: () => <div className="text-center">Qtd.</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center font-medium">{row.getValue("qtd")}</div>
      );
    },
  },
  {
    id: "edit",
    cell: ({ row }) => (
      <Button className="table-edit" variant="secondary">
        <PencilSquareIcon className="h-5 w-5" />
      </Button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "exclude",
    cell: ({ row }) => (
      <Button className="table-edit" variant="destructive">
        <TrashIcon className="h-5 w-5" />
      </Button>
    ),
    enableSorting: false,
    enableHiding: false,
  },
];
