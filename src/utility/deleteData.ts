export async function deleteData(url:string,id:string){
    const response =await fetch(`${url}/${id}`,{
        method:"DELETE",
        
    })

    if(!response.ok)  throw new Error("something went wrong while deleting data")
    return true
}