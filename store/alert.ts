import { atom } from "recoil";

const alertAtom = atom({
    key: "alert",
    default: {
        show: false,
        message: "",
        type: "",
        firstButtonMsg: "",
        secondButtonMsg: "",
        firstCallback: () => {},
        secondCallback: () => {},
    }
})

export default alertAtom