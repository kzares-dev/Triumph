"use client";

import { useRouter } from "next/navigation";

export default function navigate( path: string ) {
    const router = useRouter();

    router.push(path)
}