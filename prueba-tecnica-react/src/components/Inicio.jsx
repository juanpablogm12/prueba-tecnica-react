import { useSelector } from "react-redux"


export function Inicio() {
    const logIn = useSelector((state) => state.logIn)
    return (
        <h1>{logIn.user}</h1>
    )
}