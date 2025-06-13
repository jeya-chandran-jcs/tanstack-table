import { RouterProvider,createRootRoute,createRouter,createRoute, Outlet } from "@tanstack/react-router"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import Navbar from "../components/Navbar"


const rootRoute=createRootRoute({
    component:()=>
    <div >
    <Navbar />
    <Outlet />
    </div>
})

const homeRoute=createRoute({
    path:"/",
    getParentRoute:()=>rootRoute,
    component:Home
})

const detailsRoute=createRoute({
    path:"/details",
    getParentRoute:()=>rootRoute,
    component:Detail
})

const routeTree=rootRoute.addChildren({
    homeRoute,
    detailsRoute
})

const router =createRouter({routeTree})

export default function AppRouter(){
    return <RouterProvider router={router}/>
}
