'use client';
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"

export default function Header() {
    const session = useSession();
    console.log(session);
    const status = session?.status;
    const userData = session?.data?.user;
    let userName = userData?.name || userData?.email;

    if (userName && userName && userName.includes(' ')) {
        userName = userName.split(' ')[0].toUpperCase();
    }

    return (
        <header className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-4 md:py-6">
            <Link href={"/"} className="text-blue-600 text-3xl bold font-semibold">EDULAB</Link>
            <nav className="flex items-center gap-8 text-white font-semibold mt-4 md:mt-0">
                <Link href={"/"}>Home</Link>
                <Link href={"/allcourses"}>All Courses</Link>
                <Link href={"/#about"}>About</Link>
                <Link href={"/#Contact"}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-5 text-white font-semibold mt-4 md:mt-0">
                {status === 'authenticated' && (
                    <>
                        <Link className="whitespace-nowrap" href="/profile">Hello, {userName}</Link>
                        <button onClick={() => signOut()} className="bg-blue-500 rounded-full text-white px-8 py-2 border-0">Logout</button>
                    </>
                )}
                {status === 'unauthenticated' && (
                    <>
                        <Link href={"/login"}>Login</Link>
                        <Link href={"/register"} className="bg-blue-500 rounded-full text-white px-8 py-2">Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}
