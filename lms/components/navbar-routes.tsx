"use client";
import React from "react"

import { UserButton } from "@clerk/nextjs"
import { usePathname} from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

//adding some hooks ito great a teacher btton
export const NavbarRoutes =()=>{
    const pathname=usePathname();
    
     
    const isTeacherPage = pathname?.startsWith("/teacher");
    const isPlayerPage = pathname?.includes("/chapter");
    return(
        <div className="flex gap-2 ml-auto">
        {isTeacherPage || isPlayerPage?(
            //this will redirect to / page
            <Link href="/">    
            <Button>
            <LogOut className="h-4 w-4 mr-2" />
            Exit
            </Button>
            </Link>
        ) : (
            //this will redircet to that page
            <Link href="/teacher/courses"> 
            <Button size="sm" variant="ghost">
                Teacher mode
            </Button>
            </Link>
        )
    
        }
        

            <UserButton 
            afterSignOutUrl="/" />

        </div>
    )
}