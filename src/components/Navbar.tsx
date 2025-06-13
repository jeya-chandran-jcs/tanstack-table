import { useNavigate } from "@tanstack/react-router"


export default function Navbar() {
    const navigate=useNavigate()
    return (
 <nav className="w-full flex justify-around items-center bg-gray-200 py-2 border-b shadow-md sticky top-0 z-50">


        <h1 className="font-bold text-lg font-sans">FoodList</h1>
        <div className="space-x-3 p-2 ">
            <a className="border-2 border-blue-400 rounded-md px-3 py-2 text-blue-600 bg-white font-semibold text-md hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out" onClick={()=>navigate({to:"/"})}>Form</a>
            <a className="border-2 border-green-400 rounded-md px-3 py-2 text-green-600 bg-white font-semibold text-md hover:bg-green-400 hover:text-white transition duration-300 ease-in-out" onClick={()=>navigate({to:"/details"})}>Table</a>
        </div>

    </nav>
  )
}
