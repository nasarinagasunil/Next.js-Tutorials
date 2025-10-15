"use client"

import { useRouter } from "next/navigation"
export default function Orders() {
    const router = useRouter();
    const onHandleClick = () => {
        console.log("order placed successfully");
        router.push("/");
    }
    return (
        <>
        <h1>Smart Phones</h1>
        <button onClick={onHandleClick}>Place the Order</button>
        </>
    )
}