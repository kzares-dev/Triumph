import Chart from "@/components/Chart"
import History from "@/components/History"
import Miliestones from "@/components/Miliestones"
import MonthlyQuota from "@/components/MonthlyQuota"
import { getGoal } from "@/lib/actions/goal.action"


async function page({
  params: { id },
}: {
  params: {
    id: string
  }
}) {


  await getGoal(id)
    .then((data) =>  console.log(data) )
    .catch((error) => alert(error))


  return < main className="section-container flex space-y-10 w-full flex-col p-5 pt-[200px] bg-gray-50 min-h-[100vh] " >
    <div className="section-container ">
      <h1 className="font-mono text-[150px]">  <span className="text-[20px] font-extrabold -mt-5 bg-gray-50  border shadow-sm rounded-md px-3 py-1">  </span> </h1>
    </div>

    <div className="section-container">
      <h1 className="text-[40px] font-mono font-semibold">This Year</h1>

      <Chart />
      <History />
    </div>

    <div className="section-container ">
      <Miliestones />
    </div>

    <div className="section-container">
      <MonthlyQuota />
    </div>

  </main >
}




export default page
