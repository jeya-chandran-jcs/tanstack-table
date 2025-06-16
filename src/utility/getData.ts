

export async function getData(url:string) {
  const controller =new AbortController()
  const timeOut=setTimeout(()=>controller.abort(),5000)
  try{
    const response=await fetch(url)
    clearTimeout(timeOut)
    if(!response.ok) throw new Error("failed to fetch data: "+ response.statusText)
    return response.json()
  }
  catch(error)
  {
    clearTimeout(timeOut)
    throw error
  }
  
}
