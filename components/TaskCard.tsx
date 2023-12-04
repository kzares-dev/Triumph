"use client"
import { useRouter } from "next/navigation"


function TaskCard() {
    const router = useRouter();


    return (
        <div onClick={() => router.push("/goal/id")} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col justify-between min-w-[400px] h-[200px] bg-white shadow border rounded-md p-5 cursor-pointer">

            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center flex-row gap-3">

                    <div className="w-8 h-8 rounded-full bg-white custom-border" />

                    <div className="">
                        <h1 className="text-[18px] font-semibold text-[#222]">Get 1m dollars</h1>
                        <p className="text-[15px] text-[#aaa]"> last activity: 4d ago </p>
                    </div>

                </div>

                <div className="w-6 h-6 rounded-full bg-black" />
            </div>

            <div className="py-2">
                <h1 className="p-1 bg-gray-50 shadow-sm border rounded-md text-[#666]">// Here I dont know what to put on</h1>
            </div>

        </div>
    )
}

export default TaskCard
