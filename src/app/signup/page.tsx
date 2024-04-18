"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";


export default function SignUpPage() {
    const [user, setUser] = React.useState({
        username: "",
        email: "",
        password: "",
    })

    const onSignup = async () => {
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
            <div className="w-[460px] h-auto rounded-md px-8 py-12 bg-neutral-950 shadow-md">
                <div className="space-y-6 mb-7">
                    <div className="space-y-1.5">
                        <h1 className="text-2xl">Signup</h1>
                        <p className="text-sm text-neutral-700">
                            Create a free account to start using our platform.
                        </p>
                    </div>
                    <div className="space-y-5">
                        <div className="space-y-1.5">
                            <label
                                htmlFor="username"
                                className="text-neutral-500 block"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                className="w-full h-11 text-neutral-300 bg-transparent outline-none ring-1 ring-neutral-800 focus:ring-1 focus:ring-violet-500 rounded px-3 placeholder:text-neutral-700"
                                placeholder="Enter your username"
                                value={user.username}
                                onChange={(e) => setUser({ ...user, username: e.target.value })}
                            />
                        </div>
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
                    <button onClick={onSignup} className="bg-violet-700 w-full h-11 text-neutral-100 flex items-center justify-center font-medium hover:bg-violet-800 rounded-md">
                        Create an Account
                    </button>
                </div>
                <div className="flex items-center justify-center gap-x-1 text-neutral-800 font-normal">
                    <p>Already have an account?</p>
                    <Link
                        href="/login"
                        className="text-violet-700 hover:text-violet-800 ml-1"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}