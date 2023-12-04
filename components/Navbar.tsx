"use client"
import Image from "next/image"

function Navbar() {

    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-sm border">
            <div className="px-4 py-5 flex items-center justify-between">

                <div className="flex items-center justify-center gap-6">

                    <Image src="/next.svg" alt="" width={70} height={70} />

                    <div className="flex items-center justify-center gap-2 bg-gray-50 pr-4 pl-1 py-1 rounded-md custom-border">
                        <div className="w-6 h-6 rounded-full bg-black"/>
                        <h1 className="text-md font-semibold">User</h1>
                    </div>

                    <h1 className="font-semibold text-md"></h1>

                </div>

                

            </div>
        </div>
    )
}

export default Navbar
