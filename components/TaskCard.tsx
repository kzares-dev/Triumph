"use client"
import { useRouter } from "next/navigation";
import moment from "moment";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRecoilState } from "recoil";
import selectedGoalAtom from "@/store/selectedGoal";

interface Props {
    goal: {
        id: string,
        userId: string,
        title: string,
        goal: Number,
        current: Number,
        dailyTrack: Array<any>,
        milestones: Array<any>,
        monthlyQuota: Number,
        deadline: string
    }
}


function TaskCard({ goal }: Props) {
    const router = useRouter();

    const { user } = useUser() //load the user to get the profile pic 

    //this is to set a selected goal and display the data in goal page
    const [_, setSelectedGoal] = useRecoilState(selectedGoalAtom)

    return (
        <div onClick={() => { setSelectedGoal(goal); router.push(`/goal/${goal.id}`) } } className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex flex-col justify-between min-w-[400px] h-[200px] bg-white shadow border rounded-md p-5 cursor-pointer">

            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center flex-row gap-3">

                    <img src={user?.picture || "/assets/profile.svg"} className="w-8 h-8 rounded-full bg-white custom-border" />

                    <div>
                        <h1 className="text-[18px] font-semibold text-[#222]"> {goal.title} </h1>
                        <p className="text-[15px] text-[#aaa]"> limit: {moment(goal.deadline).fromNow()} </p>
                    </div>

                </div>

                <div className="w-8 h-8 rounded-full bg-white custom-border flex items-center justify-center text-[12px] font-mono" >
                    {(goal.current * 100 / goal.goal).toFixed()}%
                </div>
            </div>

            <div className="py-2">
                <h1 className="p-1 border rounded-md text-[#666] font-mono text-[15px] font-bold "> {goal.current}$ from {goal.goal} $   </h1>
            </div>

        </div>
    )
}

export default TaskCard
