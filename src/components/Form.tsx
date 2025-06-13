import {useState, type ChangeEvent, type FormEvent } from 'react'
import type { DataApi } from '../types'
import { useMutation } from '@tanstack/react-query'
import { postData } from '../utility/postData'
import { API } from '../global'
import { useNavigate } from '@tanstack/react-router'

export default function Form({data}:{data:DataApi[]}) {
    const [formData,setFormData]=useState<Partial<DataApi >>({name:"",description:""})  
    const navigate=useNavigate()  
    if(data)
    {
        console.log("data from form",data)
    }
    const mutation=useMutation({
        mutationFn:(newData:DataApi)=>postData(API,newData),
        onSuccess:(data)=>{
            console.log("data, successfully added",data)
            setFormData({name:"",description:""})
        },
        onError:(error)=>{
            console.error("error while posting data",error)
        }
    })

    

 
    const handleChange=(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit=(e:FormEvent)=>{
        e.preventDefault()  
        const id:number=data.length +1

        const addData={
            id: id,
            name: formData.name!,
            description:formData.description!
        }
        mutation.mutate(addData)
        alert("data added successfully")
        navigate({to:"/details"})
        
    }

   

  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center'>
        <h1 className='mb-8 bg-gray-300 w-3/4 rounded-md font-extrabold text-2xl py-3 text-center'>TanStack  </h1>
            <form onSubmit={handleSubmit} className='w-3/4 max-w-2xl border border-gray-300 rounded-md shadow-md hover:shadow-blue-300 transition duration 300 ease-in-out px-6 py-4 flex flex-col'>
                <h2 className='font-bold text-lg text-gray-600 text-center'>Add Your Favourite Food</h2>
                <div className='mt-4'>
                    <input required  placeholder='food name...' name="name" onChange={handleChange} value={formData.name} className='w-full border border-gray-400 rounded-md shadow-md px-4 py-2 font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration 300 ease-in-out' />
                
                </div>
                <div className='mt-6'>
                    <textarea required placeholder='Explain how it taste!!' onChange={handleChange} name="description" value={formData.description} rows={4} className='w-full pl-4 border border-gray-400 rounded-md font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration 300 ease-in-out' />
                
                </div>
                
                {mutation.isPending ? 
                <div className=" w-full flex justify-center my-2">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin "></div>
                </div>
                :     
                <button className='mt-4 border border-gray-300 rounded-md bg-blue-400 text-white font-bold text-lg py-2 hover:bg-blue-600 transition duration 300 ease-in-out'>Add</button>
                }
        
            </form>    
        
    </main>
  )
}
