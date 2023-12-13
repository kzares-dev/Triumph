"use client"

import loaderAtom from "@/store/loader";
import Image from "next/image"
import { useRecoilState } from "recoil"

function GlobalLoader() {

    const [loader, _] = useRecoilState(loaderAtom);

    if(loader) return (
        <div className="fixed z-10 flex items-center justify-center inset-0 bg-[#00000020] ">
            <Image src="/loader.gif" width={100} height={100} alt='' />
        </div>
    )
}

export default GlobalLoader
