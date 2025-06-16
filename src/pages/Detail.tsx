
import { API } from "../global"
import Table from "../components/Table"
import { useQuery } from "@tanstack/react-query"
import { getData } from "../utility/getData"
import ClassErrorBoundary from "../ErrorCatch/ClassErrorBoundary"


export default function Detail() {

    const {data,error,isLoading}=useQuery({
        queryKey:["foodsTable"],
        queryFn:()=>getData(`${API}/`)
    })

    if(isLoading) return "loading"

    if(error) throw error


if(!data ) return false
  return (
    <ClassErrorBoundary>
          <div className="min-h-screen flex flex-col justify-center items-center py-6">
        
        <Table data={data}/>
    </div>
    </ClassErrorBoundary>
  )
}
