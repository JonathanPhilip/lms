"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"

import { usePathname , useRouter } from "next/navigation";

//import { useNavigate } from "next/navigation";
import React from "react"

interface SidebarItemsProps{
  icon: LucideIcon;
  label:string;
  href: string;
};

export const SidebarItem =({
 icon: Icon,
  label,
  href,
}:SidebarItemsProps) => {
  const pathname=usePathname();
  const router= useRouter();
  //const navigate = useNavigate();

//this are used to chech in which page
  const isActive=
 (pathname=="/"&& href =="/")||
 pathname==href ||
 pathname?.startsWith('${href}/');

   const onClick =()=>{
     router.push(href);
     //navigate(href);
 }

  
  return(

  <button
        onClick={onClick}
       type="button"
        className={cn(
       "flex items-center gap-x-2 text-slate-500 text-sm font-[500]  pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
         isActive &&" text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
       )}>
       <div className="flex items-center gap-x-2 py-4">
       <Icon
         size={22}
         className={cn("text-slate-500",
        isActive &&"text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700")}
 />
{label}

</div>
 </button>
 
)

}

