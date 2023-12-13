import React from 'react'

function AddModal({
    ammountToAdd, 
    setAmmountToAdd,
    addMoney
} : any) {
    return (
        <div className="fixed z-3 flex items-center justify-center inset-0 bg-[#00000020] ">
            <div className="px-5 pt-5 rounded-md border shadow max-w-[500px] min-w-[350px] bg-white min-h-[200px] flex flex-col items-center gap-10 ">

                <h1 className="font-mono  text-[20px] text-center pt-6">Earnings Today</h1>


                <div className="flex flex-row items-center gap-4">
                    <input
                        value={ammountToAdd}
                        onChange={(e) => setAmmountToAdd(parseInt(e.target.value))}
                        type="number"
                        className="custom-border w-full py-3 pl-4 rounded-md shadow-sm h-[40px]"
                        placeholder="dollars"
                        required />

                    <button onClick={addMoney} className="bg-black flex-1 rounded-md px-5 py-2 text-white h-[40px]">
                        Add
                    </button>
                </div>

            </div>
        </div>
    )
}

export default AddModal
