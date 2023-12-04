import TaskCard from "@/components/TaskCard";

export default function Home() {
  return (
    <main className="p-5 pt-[100px] bg-gray-50 min-h-[100vh] ">
      <h1 className="max-w-[1300px] mx-auto w-full text-[150px] font-bold pl-5">Triumph</h1>

      <div className="flex gap-4 flex-wrap max-w-[1300px] mx-auto items-center justify-center">
        <TaskCard />
        <TaskCard />
        <TaskCard />

      </div>

    </main>
  )
}
