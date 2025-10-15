"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import "./styles.css"

export default function AuthLayout({children}: {children: React.ReactNode}) {
    const navLinks = [
        {name: "Login", href:"/login"},
        {name: "Register", href:"/register"},
        {name: "Forgot Password", href:"/forgot-password"},
    ]
    const pathName = usePathname();
    console.log("pathname: ", pathName);

    const [input, setInput] = useState("");
    return (
        
        <>
            <input value={input} onChange={(e)=>setInput(e.target.value)} />
            {
                navLinks.map((link) => { 
                    const isActive = pathName === link.href || (pathName.startsWith(link.href) && link.href !== "/");
                    return (
                        <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
                    )
                })
            }
            {children}
        </>
        
    )
}