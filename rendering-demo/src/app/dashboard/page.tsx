"use client"

import { useState } from "react"
export default function Dashboard() {
    console.log("rendering client component")
    const [name, setName] = useState("");
    return (
        <>
            <h1>Dashboard Page</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <p>name - {name}</p>
        </>
        
    )
}