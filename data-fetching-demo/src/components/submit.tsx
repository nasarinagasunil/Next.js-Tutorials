"use client"
import { useFormStatus } from "react-dom"
export const Submit = () =>{
    const {pending} = useFormStatus();
    return(
        <button type="submit" 
            className="w-full rounded-md text-black p-2 mt-2 bg-blue-600 disabled:bg-gray-400" disabled={pending}>
                Submit
        </button>

    )
}