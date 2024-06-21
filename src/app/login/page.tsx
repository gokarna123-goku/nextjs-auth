"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    const [showPassword, setShowPassword] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);

            const response = await axios.post("/api/users/login", user);
            console.log(response, " login successful");

            if (response.status === 200) {
                toast.success("Login successful");
                router.push("/profile");
            } else {
                toast.error("Invalid credentials");
            }

        } catch (error: any) {
            console.log(error)
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="w-[460px] h-auto rounded-md px-10 py-12 bg-neutral-950 shadow-md">
                <div className="space-y-6 mb-7">
                    <div className="space-y-1.5">
                        <h1 className="text-2xl font-semibold">
                            {loading ? "Logging in..." : "Login"}
                        </h1>
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
                        <div className="space-y-1.5 relative">
                            <label
                                htmlFor="password"
                                className="text-neutral-500 block"
                            >
                                Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                className="w-full h-11 text-neutral-300 bg-transparent outline-none ring-1 ring-neutral-800 focus:ring-1 focus:ring-violet-500 rounded ps-3 pr-10 placeholder:text-neutral-700"
                                placeholder="Enter your password"
                                value={user.password}
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            {/* show and hide password */}
                            <div className="flex items-center justify-between absolute right-3 top-[2.2rem]">
                                {!showPassword ? (
                                    <button className="text-neutral-700" onClick={() => setShowPassword(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                ) : (
                                    <button className="text-neutral-700" onClick={() => setShowPassword(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" />
                                        </svg>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    {buttonDisabled ? (
                        <button disabled
                            className="w-full h-11 text-neutral-600 flex items-center justify-center font-medium rounded-md ease-out duration-300 bg-neutral-900/60 cursor-not-allowed">
                            {loading ? "logging..." : "Login Now"}
                        </button>
                    ) : (
                        <button onClick={onLogin}
                            className="w-full h-11 text-neutral-100 flex items-center justify-center bg-violet-700 hover:bg-violet-800 cursor-pointer font-medium rounded-md ease-out duration-300">
                            {loading ? "logging..." : "Login Now"}
                        </button>
                    )}
                </div>
                <div className="flex items-center justify-center gap-x-1 text-neutral-700 font-normal">
                    <p>Don't have an account?</p>
                    <Link
                        href="/signup"
                        className="text-violet-900 hover:text-violet-800 ml-1 ease-out duration-300"
                    >
                        Create Account
                    </Link>
                </div>
            </div>
        </div>
    );
}