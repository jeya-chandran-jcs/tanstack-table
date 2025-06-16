import { createColumnHelper } from "@tanstack/react-table";
import type { DataApi } from "../types";


const columnHelper=createColumnHelper<DataApi>()

export const columns=[
    columnHelper.accessor("id",{
        header:"ID",
        cell:(info)=>info.getValue(),
         enableSorting: true,
    }),
    columnHelper.accessor("name",{
        header:"Food",
        cell:(info)=>info.getValue(),
         enableSorting: true,
    }),
    columnHelper.accessor("description",{
        header:"Taste",
        cell:(info)=>info.getValue(),
         enableSorting: true,
    }),
    columnHelper.display({
        id:"actions",
        header:"Actions",
        cell: (info) => (
  <div className="flex items-center gap-2">
    <button
      className="bg-yellow-400 px-3 py-2 rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out"
      onClick={() => info.table.options.meta?.onEdit(info.row.original)}
    >
      <i className="fa-regular fa-pen-to-square text-white font-bold"></i>
    </button>
    <button
      className="bg-red-400 px-3 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
      onClick={() => info.table.options.meta?.onDelete(info.row.original)}
    >
      <i className="fa-regular fa-trash text-white"></i>
    </button>
  </div>
),
    })

]

