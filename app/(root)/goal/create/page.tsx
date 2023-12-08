"use client";
import { updateGoal } from "@/lib/actions/goal.action";
import { generateUUID } from "@/lib/crypto";
import alertAtom from "@/store/alert";
import loaderAtom from "@/store/loader";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react";
import { useRecoilState } from "recoil";

interface Milestone {
    value: string;
    deadline: string;
}

interface CollectedData {
    goal: any,
    title: any,
    deadline: any,
    monthly: any,
    milestones: Milestone[]
}


function CreateGoal() {

    const { user } = useUser() //load the user provided by auth0

    const [_, setLoader] = useRecoilState(loaderAtom) // recoil global loader 
    const [alert, setAlert] = useRecoilState(alertAtom) // recoil global alert to handle errors  

    const router = useRouter();

    // State para recolectar los datos del usuario
    const [collectedData, setCollectedData] = useState<CollectedData>({
        goal: "",
        title: "",
        deadline: "",
        monthly: "",
        milestones: []
    });

    // Añadir un hito recolectando datos del usuario
    const [milestone, setMilestone] = useState<Milestone>({ value: "", deadline: "" });


    const addMilestone = () => {
        if (!milestone.value || !milestone.deadline) return

        //push miliestone into the collected data
        setCollectedData(prevData => ({
            ...prevData,
            milestones: [...prevData.milestones, milestone]
        }));

        setMilestone({ value: "", deadline: "" }); // clear fields
    };

    // Request server and update database
    const submitForm = (e: FormEvent<HTMLFormElement>) => {
        setLoader(true)
        e.preventDefault();
        if (!user?.sid) return

        updateGoal({
            id: generateUUID(),
            userId: user.sid.toString(),
            title: collectedData.title,
            goal: collectedData.goal,
            current: 0,
            dailyTrack: [],
            milestones: collectedData.milestones,
            monthlyQuota: collectedData.monthly,
            deadline: collectedData.deadline,
        }).then(() => {
            setLoader(false)
            router.push("/")
        }).catch(() => {
            setLoader(false);
            setAlert({
                ...alert,
                message: "Failed to create Goal",
                show:true,
                firstButtonMsg: "Return",
                firstCallback: () => setAlert(alert),
            })
        })
    }
    return (
        <div className="min-h-[100vh]  bg-gray-50 font-mono ">

            <div className="min-h-[500px] flex px-5 gap-10 justify-center flex-row w-full pt-[20vh]">

                <div className="px-5 pt-[5vw] rounded-md border shadow min-w-[500px] bg-white h-full flex flex-col items-center gap-10 pb-10">

                    <Image src="/logo-full.svg" alt="" width={200} height={200} />

                    <form onSubmit={(e) => submitForm(e)} className="w-full flex gap-5 flex-col">
                        <input
                            value={collectedData.goal}
                            onChange={(e) => setCollectedData({ ...collectedData, goal: e.target.value })}
                            type="number"
                            className="custom-border w-full py-3 pl-4"
                            placeholder="Set a Money Goal"
                            required />

                        <input
                            value={collectedData.title}
                            onChange={(e) => setCollectedData({ ...collectedData, title: e.target.value })}
                            type="text"
                            className="custom-border w-full py-3 pl-4"
                            placeholder="Why you whant to archive money"
                            required />

                        <input
                            value={collectedData.deadline}
                            onChange={(e) => setCollectedData({ ...collectedData, deadline: e.target.value })}
                            type="date"
                            className="custom-border w-full py-3 pl-4"
                            placeholder="max-duration"
                            required />

                        <p className="text-underline  text-gray-500 cursor-pointer " > Enter a deadline limit  </p>



                        <div className="w-full text-right pr-1 pt-5" >
                            <button className="bg-black rounded-md px-5 py-2 text-white ">
                                Create Coal
                            </button>
                        </div>
                    </form>

                </div>

                <div className=" pt-[5vw] px-5 rounded-md border shadow bg-white h-full flex flex-col gap-4 w-full xl:w-[600px] py-10">
                    <h1 className="text-[30px] font-mono text-gray-700  ">Monthly Milestone</h1>

                    <input
                        value={collectedData.monthly}
                        onChange={(e) => setCollectedData({ ...collectedData, monthly: e.target.value })}
                        type="number"
                        className="custom-border w-full py-3 pl-4"
                        placeholder="Monthly Milestone"
                        required />

                    <h1 className="text-[30px] font-mono text-gray-700 ">Custom Milestone</h1>
                    <form className="flex items-center justify-between gap-5 ">

                        <input min={1} onChange={(e) => setMilestone({ ...milestone, value: e.target.value })} value={milestone.value} type="number" className="custom-border w-full py-3 pl-4" placeholder="Money to earn" required />
                        <input min={1} onChange={(e) => setMilestone({ ...milestone, deadline: e.target.value })} value={milestone.deadline} type="number" className="custom-border w-full py-3 pl-4" placeholder="Days to complete" required />

                    </form>
                    <div onClick={addMilestone} className="w-full text-right pr-1 pt-5" >
                        <button className="bg-black rounded-md px-5 py-2 text-white ">
                            Add
                        </button>
                    </div>

                    {collectedData.milestones.length > 0 && (
                        <div className="w-full">
                            <h1 className="text-[40px] font-mono font-semibold">Miliestones</h1>


                            <ul className="bg-gray-50 border shadow-sm rounded-md px-5 py-10 w-full gap-4 flex flex-col">

                                {collectedData.milestones.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 font-mono"> Get {item.value} dollars before {item.deadline} days  </li>
                                ))}

                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </div>

    )
}

export default CreateGoal
