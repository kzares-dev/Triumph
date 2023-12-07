"use client";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react";

function CreateGoal() {

    //set up router
    const router = useRouter();

    //state to collect the user data 
    const [collectedData, setCollectedData] = useState({
        miliestones: []
    })

    //this function call a server action and update the data on database
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {

    }

    return (
        <div className="w-full min-h-[100vh] flex items-center bg-gray-50 font-mono px-5 gap-10 justify-center flex-row">

            <div className="px-5 pt-[5vw] rounded-md border shadow min-w-[500px] bg-white min-h-[500px] flex flex-col items-center gap-10">

                <Image src="/logo-full.svg" alt="" width={200} height={200} />

                <form onSubmit={(e) => submitForm(e)} className="w-full flex gap-5 flex-col">
                    <input type="number" className="custom-border w-full py-3 pl-4" placeholder="Set a Money Goal" required />
                    <input type="text" className="custom-border w-full py-3 pl-4" placeholder="Why you whant to archive money" required />
                    <input type="date" className="custom-border w-full py-3 pl-4" placeholder="max-duration" required />
                    <p className="text-underline  text-gray-500 cursor-pointer " > Enter a deadline limit  </p>



                    <div className="w-full text-right pr-1 pt-5" >
                        <button className="bg-black rounded-md px-5 py-2 text-white ">
                            Sign In
                        </button>
                    </div>
                </form>

            </div>

            <div className=" pt-[5vw] px-5 rounded-md border shadow bg-white min-h-[500px] flex flex-col gap-4 w-full xl:w-[600px] py-10">
                <h1 className="text-[30px] font-mono text-gray-700  ">Monthly Miliestone</h1>

                <input type="number" className="custom-border w-full py-3 pl-4" placeholder="Monthly miliestone" required />

                <h1 className="text-[30px] font-mono text-gray-700 ">Custom Miliestone</h1>
                <div className="bg-gray-50 px-2 py-4 rounded-md border">

                    <form className="flex flex-row items-center text-[20px] "> Get <input type="number" placeholder="x" required className="border mx-1 rounded-sm w-[40px] h-[30px] text-center" /> dollars in  <input className="border mx-1 rounded-sm w-[40px] h-[30px] text-center" type="number" placeholder="y" required /> days </form>

                </div>

            </div>
        </div>

    )
}

export default CreateGoal
