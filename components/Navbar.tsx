"use client"
import sesionAtom from "@/store/sesion"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil"

function Navbar() {
    //get sesion data 
    const [sesion, setSesion] = useRecoilState(sesionAtom);

    //seting up router
    const router = useRouter();

    //logout function
    //this delete the cookie and setRecoil to {}
    const logout = () => {
        document.cookie = "auth=;";
        setSesion(null);
        router.push("/sign-in");
    }


    return (
        <div className="fixed top-0 left-0 right-0 bg-white shadow-sm border">
            <div className="px-4 py-5 flex items-center justify-between">

                <div className="flex items-center justify-center gap-6">
                    <Image src="/logo.svg" alt="" width={80} height={80} />
                </div>

                <div className="flex flex-row gap-10">
                    {sesion && <div onClick={() => router.push("/profile")} className="flex items-center justify-center gap-2 bg-gray-50 pr-4 pl-1 py-1 rounded-md custom-border cursor-pointer ">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                            <Image src="/assets/user.svg" alt="" width={20} height={20} />
                        </div>
                        <h1 className="text-md font-semibold"> {sesion.name} </h1>
                    </div>}

                    <div onClick={logout} className="relative p-3 rounded-full bg-gray-50 border group cursor-pointer">
                        <Image src="/assets/logout.svg" alt="" width={20} height={20} />
                        <div className="relative group">
                            <span className="absolute -left-[100px] -bottom-5 bg-white z-[2] hidden group-hover:block w-[100px] font-bold font-mono text-center rounded-sm border px-4 py-1"> logout    </span>
                        </div>

                    </div>
                </div>




            </div>
        </div>
    )
}

export default Navbar
