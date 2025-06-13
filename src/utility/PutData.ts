import type { DataApi } from "../types"


export async function putData(url:string,id:string|number,body:Partial<DataApi>) {
  const response=await fetch(`${url}/${id}`,{
    "method":"PUT",
    headers: {
  "Content-Type": "application/json"
},
    body:JSON.stringify(body)
  })
  return response.json()
}
