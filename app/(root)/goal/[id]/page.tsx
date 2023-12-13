"use client";
import Chart from "@/components/Chart"
import History from "@/components/History"
import Miliestones from "@/components/Miliestones"
import MonthlyQuota from "@/components/MonthlyQuota"
import { getGoal } from "@/lib/actions/goal.action"
import { useEffect, useState } from "react"


function page({
  params: { id },
}: {
  params: {
    id: string
  }
}) {

  const [data, setData] = useState<any>();


  useEffect(() => {


    getGoal(id)
      .then((data) => setData(data[0]))
      .catch((error) => alert(error))

  }, [])

  console.log(data)



  if (data?.id) return <main className="section-container flex space-y-10 w-full flex-col p-5 pt-[200px] bg-gray-50 min-h-[100vh] " >
    <div className="section-container ">
      <h1 className="font-mono text-[150px]"> {data.current} <span className="text-[20px] font-extrabold -mt-5 bg-gray-50  border shadow-sm rounded-md px-3 py-1"> {data.goal} </span> </h1>
    </div>

    <div className="section-container">
      <h1 className="text-[40px] font-mono font-semibold">This Year</h1>

      <Chart />
      <History />
    </div>

    <div className="section-container ">
      <Miliestones milestones={data.milestones} />
    </div>

    <div className="section-container">
      <MonthlyQuota />
    </div>

  </main >

}


export default page
