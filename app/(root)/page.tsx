"use client";
import TaskCard from "@/components/TaskCard";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()

  return (
    <main className="p-5 pt-[100px] bg-gray-50 min-h-[100vh] ">
      <h1 className="max-w-[1300px] mx-auto w-full text-[150px] font-semibold text-gray-900 pl-1 font-mono uppercase">Triumph</h1>

      <div className="flex gap-4 flex-wrap max-w-[1300px] mx-auto items-center justify-center py-6">

        <div onClick={ () => router.push("/goal/create") } className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex items-center justify-center min-w-[400px] h-[200px] bg-white shadow border rounded-md p-5 cursor-pointer hover:-rotate-6 hover:scale-105 transition-200 transition ">
          <Image src="/assets/create.svg" width={80} height={80} alt="" />
        </div>

        <TaskCard />
        <TaskCard />

      </div>

    </main>
  )
}
