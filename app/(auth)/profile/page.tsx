"use client";
import sesionAtom from "@/store/sesion"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil"

function Onboarding() {

    //seting up the router
    const router = useRouter()

    //checking if is the user is verify
    const [sesion, setSesion] = useRecoilState(sesionAtom);

    console.log(sesion)

    if (!sesion) return (
        <div className="flex w-full h-[100vh] items-center justify-center flex-row">
            <Image src="/logo.svg" alt="" width={120} height={120} />
            {" "}
            <h1 className=" text-[30px] font-mono text-gray-600">
                | verify your email to continue
            </h1>

        </div>)


    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-gray-50">
            <div className="flex flex-col md:flex-row  bg-white shadow border px-5 pt-3 min-w-[600px] min-h-[300px] items-center md:justify-between rounded-md">

                <div className="w-[150px] h-[150px] rounded-full shadow border bg-gray-50">

                </div>

                <div className="flex flex-col gap-1 ">
                    <input type="text" placeholder={sesion.name} className="placeholder-black font-mono text-[30px] border-none outline-none" />
                    <h1 className="text-gray-400 font-mono text-[20px]"> {sesion.email} </h1>

                    <div className="w-full text-right pr-1 pt-5" >
                        <button onClick={() => router.push("/")} className="bg-black rounded-md px-5 py-2 text-white ">
                            Continue
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Onboarding
