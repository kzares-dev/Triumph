import React from 'react'

function Milestones({ milestones }: any) {

    if (milestones?.length > 0) return (
        <div className="w-full">
            <h1 className="text-[40px] font-mono font-semibold">Milestones</h1>


            <ul className="bg-gray-50 border shadow-sm rounded-md px-5 py-10 w-full gap-4 flex flex-col">

                {milestones.map((milestone: {value: string, deadline: string}) => {
                    <li className="flex items-center gap-3 font-mono"> <span className="w-[10px] h-[10px] bg-black" /> Get {milestone.value}$ in { milestone.deadline} days </li>
                })}


            </ul>
        </div>
    )
}

export default Milestones
