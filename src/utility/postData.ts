import type { DataApi } from "../types"


export async function postData(url:string,body:DataApi) {
  const response=await fetch(url,{
    "method":"POST",
    headers: {
  "Content-Type": "application/json"
},
    body:JSON.stringify(body)
  })
  return response.json()
}
