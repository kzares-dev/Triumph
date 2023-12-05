import { atom } from "recoil";

const loaderAtom = atom({
    key: "loader",
    default: false,
})

export default loaderAtom