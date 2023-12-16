"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import User from "./User";


function Navbar() {

    //seting up router
    const router = useRouter();

    return (
        <div className="fixed top-0 left-0 right-0 ahite shadow-sm border bg-white">
            <div className="px-4 py-5 flex items-center justify-between">

                <div onClick={() => router.push("/")} className="flex items-center justify-center gap-6 cursor-pointer">
                    <Image src="/logo.svg" alt="" width={80} height={80} />
                </div>

                <div className="flex flex-row gap-10">
                    <User />

                    <a href="/api/auth/logout" className="relative p-3 rounded-full bg-gray-50 border group cursor-pointer">
                        <Image src="/assets/logout.svg" alt="" width={20} height={20} />
                        <div className="relative group">
                            <span className="absolute -left-[100px] -bottom-5 bg-white z-[2] hidden group-hover:block w-[100px] font-bold font-mono text-center rounded-sm border px-4 py-1"> logout    </span>
                        </div>

                    </a>
                </div>




            </div>
        </div>
    )
}

export default Navbar
