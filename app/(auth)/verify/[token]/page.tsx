"use client"
import Loader from "@/components/ui/Loader";
import { verifyUser } from "@/lib/actions/user.actions";
import sesionAtom from "@/store/sesion";
import { useParams } from "next/navigation"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

function Verify() {
  const router = useRouter()

  //getting the auth token param 
  //this will be use in the email verification
  const { token } = useParams();

  //get recoil state to update
  const [_, setSesion] = useRecoilState(sesionAtom);

  //send a request to db to select the user corresponding to email
  //save at the recoil state
  useEffect(() => {
    verifyUser(token)
      .then(result => {
        setSesion(result);
        router.push("/onboarding")
      })
      .catch((error) => alert(`error: ${error.message}`))
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Loader />
    </div>
  )
}

export default Verify
