"use client"
import alertAtom from "@/store/alert"
import { useRecoilState } from "recoil"

function Alert() {

    //load the alert atom that contains all the data nesesary this comp
    const [alert, setAlert] = useRecoilState(alertAtom)

    if(alert.show) return (
        <div className="fixed z-10 flex items-center justify-center inset-0 bg-[#00000090] ">

            <div className="px-5 pt-5 rounded-md border shadow max-w-[500px] min-w-[350px] bg-white min-h-[200px] flex flex-col items-center gap-10">

                <h1 className="font-mono  text-[20px] text-center"> {alert.message} </h1>

                <div className="flex items-center w-full mb-5 gap-5">

                    {alert.firstButtonMsg &&
                        <button onClick={alert.firstCallback} className="bg-black flex-1 rounded-md px-5 py-2 text-white ">
                            {alert.firstButtonMsg}
                        </button>}

                    {alert.secondButtonMsg &&
                        <button onClick={alert.secondCallback} className="bg-black flex-1 rounded-md px-5 py-2 text-white ">
                            {alert.secondButtonMsg}
                        </button>}

                </div>
            </div>

        </div>
    )
}

export default Alert
