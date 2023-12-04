"use client"
import "./globals.css"
import { RecoilRoot } from "recoil"
type Props = {
    children: any
}

function Root({ children }: Props) {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}

export default Root
