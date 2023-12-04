import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

const sesionAtom = atom({
    key: "sesion",
    default: null,
    effects_UNSTABLE: [persistAtom]
})

export default sesionAtom