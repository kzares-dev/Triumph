"use client";
import Image from "next/image"
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/actions/user.actions";
import { useRecoilState } from "recoil";
import loaderAtom from "@/store/loader";
import alertAtom from "@/store/alert";
import sesionAtom from "@/store/sesion";


function SignIn() {

    //global loader
    const [_, setLoader] = useRecoilState(loaderAtom);

    //load the sesion to uupdate 
    const [sesion, setSesion] = useRecoilState(sesionAtom);

    //global alert
    const [alert, setAlert] = useRecoilState(alertAtom);

    //mounting the router to redirect
    const router = useRouter()

    //state that stores the user data
    const [userData, setUserData] = useState({
        password: "",
        email: "",
    })

    //this function call a server action and update the data on database
    const submitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoader(true);

        await signIn({ email: userData.email, password: userData.password })
            .then(res => {
                setLoader(false)
                
                //checking if a user match with the credentials
                if (!res.id) {
                    setAlert({
                        ...alert,
                        show: true,
                        message: "User dosent exists",
                        secondButtonMsg: "Return",
                        secondCallback: () => setAlert(alert),
                    })
                } else {
                    const expirationDate = new Date();
                    expirationDate.setDate(expirationDate.getDate() + 7); // Agregar una semana
                    const expirationDateString = expirationDate.toUTCString(); // Convertir a formato UTC

                    document.cookie = `auth=true; expires=${ expirationDateString }`;
                    setSesion(res)
                    router.push('/')
                }
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

            <div className="px-5 pt-[10vw] rounded-md border shadow min-w-[500px] bg-white min-h-[500px] flex flex-col items-center gap-10">

                <Image src="/next.svg" alt="" width={150} height={150} />

                <form onSubmit={(e) => submitForm(e)} className="w-full flex gap-5 flex-col">
                    <input value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} type="email" className="custom-border w-full py-3 pl-4" placeholder="Type your email" required />
                    <input value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} type="password" className="custom-border w-full py-3 pl-4" placeholder="Enter your password" required />


                    <div className="w-full text-right pr-1 pt-5" >
                        <button className="bg-black rounded-md px-5 py-2 text-white ">
                            Sign In
                        </button>
                    </div>

                    <p onClick={() => router.push("/sign-up")} className="text-underline underline text-gray-400 cursor-pointer" >Create an account</p>
                </form>




            </div>

        </div>
    )
}

export default SignIn   
