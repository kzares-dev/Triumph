"use client";
import { updateUser } from "@/lib/actions/user.actions";
import { authToken, generateUUID } from "@/lib/crypto";
import Image from "next/image"
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import loaderAtom from "@/store/loader";
import alertAtom from "@/store/alert";


function SignUp() {
    //global loader
    const [_, setLoader] = useRecoilState(loaderAtom);

    //global alert
    const [alert, setAlert] = useRecoilState(alertAtom);

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
        setLoader(true)

        await updateUser({
            ...userData,
            userId: generateUUID(),
            authToken: token,
            image: "",
        }).then(() => {
            setLoader(false)
            document.cookie = 'auth=true';
            router.push('/onboarding')
        })
            .catch((error) => {
                setLoader(false)
                setAlert({
                    ...alert,
                    show: true,
                    message: "Operation Failed",
                    secondButtonMsg: "Return",
                    secondCallback: () => setAlert(alert),
                })
            })
    }

    return (
        <div className="w-full min-h-[100vh] flex items-center justify-center bg-gray-50 font-mono">

            <div className="px-5 pt-[5vw] rounded-md border shadow min-w-[500px] bg-white min-h-[500px] flex flex-col items-center gap-10">

                <Image src="/logo.svg" alt="" width={150} height={150} />

                <form onSubmit={(e) => submitForm(e)} className="w-full flex gap-5 flex-col">
                    <input value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} type="text" className="custom-border w-full py-3 pl-4" placeholder="Set a name" required />
                    <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} type="password" className="custom-border w-full py-3 pl-4" placeholder="Set a password" required />
                    <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} type="email" className="custom-border w-full py-3 pl-4" placeholder="Sign in with email" required />


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

export default SignUp   
