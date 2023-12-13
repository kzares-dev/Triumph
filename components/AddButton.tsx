import Image from "next/image"


function AddBotton({ onClickEvent } : any) {
  return (
    <div onClick={onClickEvent} className="fixed bottom-5 bg-white shadow border right-5 px-5 py-5 z-[999] rounded-md cursor-pointer custom-border">
        <Image src="/assets/bank.png" height={40} width={40} alt="" />
      
    </div>
  )
}

export default AddBotton
