"use client"

import { useEffect } from "react"

export default function ErrorPage({error}: {error: Error}) {
    useEffect(()=>{
        console.log(error)
    },[error]);
    return(
        <div className="flex justify-center items-center h-screen">
            <div className="text-2xl text-red-500">Error fetching users</div>
        </div>
    )

}