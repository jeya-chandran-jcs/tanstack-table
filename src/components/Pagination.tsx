
import type { Table } from '@tanstack/react-table'
import type { DataApi } from '../types'

export default function Pagination({table}: { table: Table<Partial<DataApi>> }) {

    const handlePrev=()=>{
        table.previousPage()
    }

        const handleFor=()=>{
        table.nextPage()
    }
  return (
    <div className='flex justify-between items-center gap-6 my-4'>
        <button disabled={!table.getCanPreviousPage()} className='text-white bg-blue-400 font-bold text-md hover:bg-blue-600 transition duration-300 ease-in-out px-3 py-2 rounded-md border border-gray-400 shadow-sm' onClick={handlePrev}><i className="fas fa-backward"></i></button>
            
            <span className='font-semibold'>Page {table.getState().pagination.pageIndex+1} of {table.getPageCount()} </span>
        
        <button disabled={!table.getCanNextPage()} className='text-white bg-blue-400 font-bold text-md hover:bg-blue-600 transition duration-300 ease-in-out px-3 py-2 rounded-md border border-gray-400 shadow-sm' onClick={handleFor}><i className="fas fa-forward"></i></button>
    </div>
  )
}
