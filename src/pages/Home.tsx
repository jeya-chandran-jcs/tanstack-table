import { useQuery } from "@tanstack/react-query"
import { getData } from "../utility/getData"
import { API } from "../global"
import Form from "../components/Form"



export default function Home() {
    const {data}=useQuery({
        queryKey:["users"],
        queryFn:()=>getData(`${API}`)
    })

  // console.log("data",data)
  return (
    <Form data={data}/>
  )
}
