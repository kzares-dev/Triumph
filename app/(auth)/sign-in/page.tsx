"use client";
import { updateUser } from "@/lib/actions/user.actions";
import { authToken, generateUUID } from "@/lib/crypto";
import Image from "next/image"
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";


function SignIn() {
    //mounting the router to redirect
    const router = useRouter()
    
    //state that stores the user data
    const [userData, setUserData] = useState({
        name: "",
        password: "",
        email: "",
    })

    //this function call a server action and update the data on database
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = authToken()
        console.log(token)

        await updateUser({
            ...userData,
            userId: generateUUID(),
            authToken: token,
            image: "",
        }).then(() => {
            document.cookie = 'auth=true';
            console.log("object")
            router.push('/onboarding')
        })
    }

    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center bg-gray-50 font-mono">

            <div className="px-5 pt-[5vw] rounded-md border shadow min-w-[500px] bg-white min-h-[500px] flex flex-col items-center gap-10">

                <Image src="/next.svg" alt="" width={150} height={150} />

                <form onSubmit={(e) => submitForm(e)} className="w-full flex gap-5 flex-col">
                    <input value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} type="text" className="custom-border w-full py-3 pl-4" placeholder="Set a name" required />
                    <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} type="password" className="custom-border w-full py-3 pl-4" placeholder="Set a password" required />
                    <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} type="email" className="custom-border w-full py-3 pl-4" placeholder="Sign in with email" required />


                    <div className="w-full text-right pr-1 pt-5" >
                        <button className="bg-black rounded-md px-5 py-2 text-white ">
                            Sign In
                        </button>
                    </div>
                </form>




            </div>

        </div>
    )
}

export default SignIn   
