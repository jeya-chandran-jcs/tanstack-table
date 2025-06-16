
function errorMessage(error:unknown):string{
  if(error instanceof Error) return error.message
  return "somthing went wrong"
  
}

export default function FunctionErrorBoundary({error}:{error:unknown}) {
  if(!error) return null

  return (
    <div className=''>
      <p className='bg-red-400 font-semibold text-md my-2'>Error:</p>
      <p>{errorMessage(error)}</p>
    </div>
  )
}
