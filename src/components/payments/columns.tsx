"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Payment = {
  date: string;
  remarque: string;
  index_debut: number;
  index_finale: number;
  kilometrage: number;
  litrage: number;
  consomation: number;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "index_debut",
    header: "Index Debut",
  },
  {
    accessorKey: "index_finale",
    header: "Index Finale",
  },
  {
    accessorKey: "kilometrage",
    header: "Kilometrage",
  },
  {
    accessorKey: "litrage",
    header: "Litrage",
  },
  {
    accessorKey: "consomation",
    header: "Consomation",
  },
  {
    accessorKey: "remarque",
    header: "Remarque",
  },

  // {
  //   accessorKey: "amount",
  //   header: () => <div className="text-right">Amount</div>,
  //   cell: ({ row }) => {
  //     const amount = parseFloat(row.getValue("amount"));
  //     const formatted = new Intl.NumberFormat("en-US", {
  //       style: "currency",
  //       currency: "USD",
  //     }).format(amount);

  //     return <div className="text-right font-medium">{formatted}</div>;
  //   },
  // },
];
