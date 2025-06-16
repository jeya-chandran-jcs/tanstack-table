import { useQuery } from "@tanstack/react-query"
import { getData } from "../utility/getData"
import { API } from "../global"
import Form from "../components/Form"
import FunctionErrorBoundary from "../ErrorCatch/FunctionErrorBoundary"



export default function Home() {
    const {data,isLoading,error}=useQuery({
        queryKey:["users"],
        queryFn:()=>getData(`${API}`),
        retry:false
    })


    if(isLoading)
    {
      return(
      <div className="h-screen w-full  felx justify-center items-center">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin "></div>
      </div>   
      )
    }

    if(!data)
    {
      return <FunctionErrorBoundary error={"no data found"}/>
    }


  if(error)
  {
    return <FunctionErrorBoundary error={error}/>
  }

  return <Form data={data}/>
}
