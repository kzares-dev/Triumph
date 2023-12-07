"use client";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent } from "react";

function CreateGoal() {

    const router = useRouter();

    //this function call a server action and update the data on database
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {

    }

    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center bg-gray-50 font-mono">

            <div className="px-5 pt-[5vw] rounded-md border shadow min-w-[500px] bg-white min-h-[500px] flex flex-col items-center gap-10">

                <Image src="/logo.svg" alt="" width={150} height={150} />

                <form onSubmit={(e) => submitForm(e)} className="w-full flex gap-5 flex-col">
                    <input type="text" className="custom-border w-full py-3 pl-4" placeholder="Set a name" required />
                    <input type="password" className="custom-border w-full py-3 pl-4" placeholder="Set a password" required />
                    <input type="email" className="custom-border w-full py-3 pl-4" placeholder="Sign in with email" required />


                    <div className="w-full text-right pr-1 pt-5" >
                        <button className="bg-black rounded-md px-5 py-2 text-white ">
                            Sign In
                        </button>
                    </div>
                    <p onClick={() => router.push("/sign-in")} className="text-underline underline text-gray-400 cursor-pointer" >Login to your account</p>
                </form>




            </div>
        </div>

    )
}

export default CreateGoal
