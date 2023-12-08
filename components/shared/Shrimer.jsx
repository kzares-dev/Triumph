import React from 'react'
import Shimmer from "react-shimmer-effect";

function Shrimer() {
    return (
        <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 border border-blue-300 shadow rounded-md p-4 min-w-[400px] h-[200px]">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-slate-200 h-10 w-10"></div>
                <div class="flex flex-1 space-y-10 py-1 flex-col">

                    <div class="space-y-6">
                        <div class="h-2 bg-slate-200 rounded"></div>

                        <div class="grid grid-cols-3 gap-4">
                            <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                            <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                        </div>
                    </div>

                    <div class="h-2 bg-slate-200 rounded"></div>

                </div>
            </div>
        </div>)
}

export default Shrimer