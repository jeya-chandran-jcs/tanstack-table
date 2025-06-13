import {useReactTable,getCoreRowModel,flexRender,getPaginationRowModel, getSortedRowModel} from "@tanstack/react-table";
import type { DataApi } from "../types";
import { columns } from "../utility/column";
import "../App.css"
import Pagination from "./Pagination";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { deleteData } from "../utility/deleteData";
import { API } from "../global";
import Modal from "./Modal";
import { putData } from "../utility/PutData";

export default function Table({data}:{data:DataApi[]}) {
    const [pagination,setPagination]=useState<{pageIndex:number,pageSize:number}>({pageIndex:0,pageSize:7})
    const [sorting,setSorting]=useState([{ id: "id", desc: true }, { id: "name", desc: true },{ id: "description", desc: true }])
    const [tableData, setTableData] = useState<Partial<DataApi>[]>(data);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editData, setEditData] = useState<Partial<DataApi> | null>(null);

     const deleteMutation=useMutation({
        mutationFn:async(id:string)=>{
            return await deleteData(API,id)
        },
        onSuccess:(data,id)=>{
            setTableData((prev)=>prev.filter((item)=>item.id!==id))
        },
        onError:(error)=>{
            console.error(error)
            alert("failed to delete item")
        },
        
    })

    const editMutation = useMutation({
        mutationFn: async ({ id, data }: { id: string; data: Partial<DataApi> }) => {
            return await putData(API, id, data);
            
        },
        onSuccess: (updatedItem, variables) => {
            setTableData((prev) =>
            prev.map((item) => (item.id === variables.id ? updatedItem : item))
            );
            setIsModalOpen(false);
        },
        onError: (error) => {
            console.error(error);
            alert("Failed to update item");
        }
    });

    const handleDelete=(row:Partial<DataApi>)=>{
        const confirmDelete=window.confirm(`Are you sure you want to delete "${row.name}"?`)
        if(!confirmDelete || !row.id)
        {
            return
        }
        deleteMutation.mutate(String(row.id))
    }

    const handleEdit = (row: Partial<DataApi>) => {
    setEditData(row);
    setIsModalOpen(true);
    } 

    const handleSave = () => {
        if (!editData?.id) return;
        editMutation.mutate({
            id: String(editData.id),
            data: editData
        });
        setIsModalOpen(false);
    };

    const table=useReactTable({
        data:tableData,
        columns,
        state:{
            pagination,
            sorting,
        },
        onPaginationChange: setPagination,
        onSortingChange:setSorting,
        getCoreRowModel:getCoreRowModel(),
        getSortedRowModel:getSortedRowModel(),
        getPaginationRowModel:getPaginationRowModel(),
        meta:{
            onDelete:handleDelete,
            onEdit: handleEdit
        }
    })

   

  return (
   <>
     <table className="w-full  max-w-4xl border border-gray-300 rounded-lg shadow-md  border-separate overflow-hidden">
        <thead className="border-b border-gray-400 shadow-md ">
            {table.getHeaderGroups().map((headerGroup)=>(
                <tr key={headerGroup.id} >
                    {headerGroup.headers.map((header)=>(
                        
                        <th key={header.id}className={`py-2 px-4 text-center cursor-pointer select-none transition duration-200 hover:bg-gray-100 
                            ${header.column.getIsSorted() ? "text-blue-600 font-semibold" : ""}`} 
                            onClick={header.column.getToggleSortingHandler()}>
                            
                                {flexRender(header.column.columnDef.header,header.getContext())}
                            
                                {header.column.id!=="actions" && <>{header.column.getIsSorted()==="asc" ? <i className="fas fa-up-long pl-2"></i> : <i className="fas fa-down-long pl-2"></i>}</> }
                              
                        </th>
                    ))}
                </tr>
            ))}
        </thead>
        <tbody className="text-center ">
            
            {table.getRowModel().rows.map((row)=>(
                <tr key={row.id} className="hover:bg-blue-50 ">
                    {row.getVisibleCells().map((cell)=>(
                        <td key={cell.id}  className="py-4 px-3 " >
                            
                            {flexRender(cell.column.columnDef.cell,cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
        
    </table>
    <Pagination table={table}/>
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSave} data={editData} onChange={setEditData} />
   </>
    
  )
}
  