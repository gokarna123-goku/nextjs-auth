"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const onLogin = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
        } catch (error) {

        }
    }


    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-[460px] h-auto rounded-md px-10 py-12 bg-neutral-950 shadow-md">
                <div className="space-y-6 mb-7">
                    <div className="space-y-1.5">
                        <h1 className="text-2xl">Login</h1>
                        <p className="text-sm text-neutral-700">
                            Welcome back. Please enter your details.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <div className="space-y-1.5">
                            <label
                                htmlFor="email"
                                className="text-neutral-500 block"
                            >
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="w-full h-11 text-neutral-300 bg-transparent outline-none ring-1 ring-neutral-800 focus:ring-1 focus:ring-violet-500 rounded px-3 placeholder:text-neutral-700"
                                placeholder="Enter your email"
                                value={user.email}
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label
                                htmlFor="password"
                                className="text-neutral-500 block"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="w-full h-11 text-neutral-300 bg-transparent outline-none ring-1 ring-neutral-800 focus:ring-1 focus:ring-violet-500 rounded px-3 placeholder:text-neutral-700"
                                placeholder="Enter your password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                        </div>
                    </div>
                    <button onClick={onLogin} className="bg-violet-700 w-full h-11 text-neutral-100 flex items-center justify-center font-medium hover:bg-violet-800 rounded-md">
                        Login Now
                    </button>
                </div>
                <div className="flex items-center justify-center gap-x-1 text-neutral-800 font-normal">
                    <p>Don't have an account?</p>
                    <Link
                        href="/signup"
                        className="text-violet-700 hover:text-violet-800 ml-1"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    );
}