"use client"
import axios from "axios"
import Link from "next/link"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import React, { useState } from "react"


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get("/api/users/logout")
            toast.success("Logout successful")
            // window.location.href = "/login"
            router.push("/login")
        } catch (error: any) {
            // console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data)
        setData(res.data.data._id)

    }

    return (
        <div className="flex min-h-screen flex-col items-center p-24 space-y-8">
            <button
                onClick={logout}
                className="bg-violet-500 rounded text-base font-normal px-5 py-1.5">
                Logout
            </button>
            <div className="w-[460px] h-auto rounded-md px-8 py-12 bg-neutral-950 shadow-md">
                <h1 className="text-2xl">Profile Page</h1> <br />
                <h2 className="text-lg mt-3 text-neutral-100">
                    {
                    data === "nothing" ? "Nothing" 
                    : <Link href={`/profile/${data}`}></Link>}
                    {data}
                </h2>
            </div>
            <button
                onClick={getUserDetails}
                className="bg-indigo-500 rounded text-base font-normal px-5 py-1.5">
                Get User Detail
            </button>
        </div>
    )
}