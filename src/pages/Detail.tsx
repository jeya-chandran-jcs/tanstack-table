
import { API } from "../global"
import Table from "../components/Table"
import { useQuery } from "@tanstack/react-query"
import { getData } from "../utility/getData"


export default function Detail() {

    const {data}=useQuery({
        queryKey:["foodsTable"],
        queryFn:()=>getData(`${API}/`)
    })
if(!data ) return false
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-6">
        
        <Table data={data}/>
    </div>
  )
}
