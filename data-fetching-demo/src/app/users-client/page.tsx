"use client"

import { useState, useEffect } from "react"

type User ={
    id: number,
    name: string,
    username: string,
    email: string,
    phone: string,
}

export default function UsersClient() {
    const [users,setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=>{
        async function fetchUsers () {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if(!response.ok) throw new Error("unable fetch users");
                const data =await response.json();
                setUsers(data);
            }
            catch(err){
                if(err instanceof Error){
                    setError(err.message);
                }
                else{
                    setError("unknown error occured");
                }
            }
            finally{
                setLoading(false);
            }
        }
        fetchUsers();
    },[]);

    if(loading) return <div> Loading...</div>
    if(error) return <div> {error} </div>

    return(
        <ul className="space-y-4 p-4">
            {
                users.map((user)=>(
                    <li key={user.id} className="p-4 bg-white shadow-md rounded-lg text-grey-400">
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm">
                            <div>UserName: {user.username}</div>
                            <div>email: {user.email}</div>
                            <div>phone: {user.phone}</div>
                        </div>
                    </li>
                ))
            }

        </ul>
    )
}