"use client";
import AddAmount from "@/components/AddButton";
import AddModal from "@/components/AddModal";
import Chart from "@/components/Chart"
import Miliestones from "@/components/Miliestones"
import MonthlyQuota from "@/components/MonthlyQuota"
import Loader from "@/components/ui/Loader";
import { getGoal, updateGoal } from "@/lib/actions/goal.action"
import alertAtom from "@/store/alert";
import loaderAtom from "@/store/loader";
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil";


function page({
  params: { id },
}: {
  params: {
    id: string
  }
}) {

  //seting up the alert handler
  const [alert, setAlert] = useRecoilState(alertAtom);

  //setign up the loader and the global loader
  const [_, setLoader] = useRecoilState(loaderAtom);
  const [glLoader, serGlLoader] = useState(false)


  //separing the getGoal Function to reuse it
  const _getGoal = () => {
    getGoal(id)
      .then((data) => setData(data[0]))
      .catch(() => {
        setAlert({
          ...alert,
          message: "Failed to load Goal",
          show: true,
          firstButtonMsg: "retry",
          firstCallback: () => { _getGoal(); setAlert(alert) },
        })

        setLoader(false);
        setAddModal(false);
      })
  }

  //get the data from database and save it in a client state
  const [data, setData] = useState<any>();

  useEffect(() => {
    _getGoal()
  }, [])

  //add money modal functionality
  const [addModal, setAddModal] = useState(false);
  const [ammountToAdd, setAmmountToAdd] = useState()

  //this function call the `updateGoal` action
  //and pass all the past params exept the `current` field is increased
  const addMoney = () => {
    if (!ammountToAdd) return //cheking for ts
    setLoader(true);

    //update today earned money 
    const foo = { ...data.dailyTrack[0] };
    const today = "15-12-2023" // moment(new Date).format("DD-MM-YYYY"); //geting the today date and fotmating 

    //console.log(foo)
    foo[today] = (foo[today] || 0) + ammountToAdd;
    console.log({ "message": foo })
    console.log(foo[today])

    updateGoal({
      ...data,
      dailyTrack: [foo],
      current: parseInt(data.current) + ammountToAdd
    }).then(() => {
      setLoader(false);
      setAddModal(false);
      _getGoal()


    }).catch(() => {
      setAlert({
        ...alert,
        message: "Failed to update Goal",
        show: true,
        firstButtonMsg: "Return",
        firstCallback: () => setAlert(alert),
      })

      setLoader(false);
      setAddModal(false);
    })


  }


  if (data?.current >= data?.goal) {
    return <div className="w-full h-[100vh] flex items-center justify-center">
      <h1 className="max-w-[1300px] mx-auto w-full text-[100px] md:text-[150px] font-semibold text-gray-900 pl-1 font-mono uppercase ">Task Completed</h1>

    </div>
  }

  if (data?.id) {
    return <main className="flex space-y-10 w-full flex-col p-5 pt-[200px] bg-gray-50 min-h-[100vh] " >

      <AddAmount onClickEvent={() => setAddModal(true)} />

      {addModal && <AddModal setAmmountToAdd={setAmmountToAdd} ammountToAdd={ammountToAdd} addMoney={addMoney} />}

      <div className="section-container ">
        <h1 className="font-mono text-[150px]"> {data.current} <span className="text-[20px] font-extrabold -mt-5 bg-gray-50  border shadow-sm rounded-md px-3 py-1"> {data.goal} </span> </h1>
      </div>


    </main >
  } else {
    return <div className="flex w-full h-screen items-center justify-center "><Loader /></div>

  }

}


export default page
