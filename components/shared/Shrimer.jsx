
function Shrimer() {
    return (
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
        </div>)
}

export default Shrimer
