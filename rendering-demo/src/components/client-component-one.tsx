"use client"

import { useState } from "react"

export const ClientComponentOne = ({children}: {children: React.ReactNode}) =>{
    const [name,setName] = useState("batman")
    return(
        <>
            <h1>Client Component One</h1>
            {children}  
            {
            //nesting server component inside a client component doesnt support in next js
            // instead you can pass it as children
            }
        </>
    ) 
}