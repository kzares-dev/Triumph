"use client";
import TaskCard from "@/components/TaskCard";
import { getGoals } from "@/lib/actions/goal.action";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Goal {
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

export default function Home() {

  const router = useRouter(); //seting up the router 

  //getting the user from auth0
  const { user } = useUser();

  //loading the user posts and retrieving them
  const [userGoals, setUserGoals] = useState<any>([]);

  useEffect(() => {
    if (!user?.sid) return //verify is user is loaded

    getGoals(user?.sid.toString())
      .then(res => setUserGoals(res))
      .catch(e => console.log(e))
  }, [user])



  return (
    <main className="p-5 pt-[100px] bg-gray-50 min-h-[100vh] ">
      <h1 className="max-w-[1300px] mx-auto w-full text-[100px] md:text-[150px] font-semibold text-gray-900 pl-1 font-mono uppercase ">Triumph</h1>


      <div className={`flex gap-4 flex-wrap max-w-[1300px] mx-auto items-center py-6 `} >

        <div onClick={() => router.push("/goal/create")} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center justify-center min-w-[400px] h-[200px] bg-white shadow border rounded-md p-5 cursor-pointer hover:-rotate-6 hover:scale-105 transition-200 transition ">
          <Image src="/assets/create.svg" width={80} height={80} alt="" />
        </div>

        {userGoals.length === 0 &&
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border border-blue-300 shadow rounded-md p-4 min-w-[400px] h-[200px]">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"> </div>
              <div className="flex flex-1 space-y-10 py-1 flex-col">

                <div className="space-y-6">
                  <div className="h-2 bg-slate-200 rounded"></div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                </div>

                <div className="h-2 bg-slate-200 rounded"></div>

              </div>
            </div>
          </div>
        }

        {userGoals.length === 0 &&
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border border-blue-300 shadow rounded-md p-4 min-w-[400px] h-[200px]">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"> </div>
              <div className="flex flex-1 space-y-10 py-1 flex-col">

                <div className="space-y-6">
                  <div className="h-2 bg-slate-200 rounded"></div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                </div>

                <div className="h-2 bg-slate-200 rounded"></div>

              </div>
            </div>
          </div>
        }

        {userGoals.map((goal: Goal) => (
          <TaskCard
            key={goal.id}
            goal={goal}
          />
        ))}

      </div>

    </main>
  )
}
