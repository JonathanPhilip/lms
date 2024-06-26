import { NavbarRoutes } from "@/components/navbar-routes"
import { MobileSidebar } from "./mobilesidebar"


export const Navbar =() =>{
    return(
    <div className="p-4 border-b h-full flex intems-center bg-white shadow-sm ">
     <MobileSidebar />
     <NavbarRoutes />
    </div>
    )
}