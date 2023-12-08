import { useUser } from "@auth0/nextjs-auth0/client"
import Image from "next/image"

function User() {

    const { user } = useUser()

    return (
        <div className="flex items-center justify-center gap-2 bg-gray-50 pr-4 pl-1 py-1 rounded-md custom-border cursor-pointer ">
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                {user?.picture ?
                    <img src={user.picture} alt="" width={20} height={20} /> :
                    <Image src="/assets/user.svg" alt="" width={20} height={20} />
                    }
            </div>
            <h1 className="text-md font-semibold"> {user?.nickname} </h1>
        </div>
    )
}

export default User
