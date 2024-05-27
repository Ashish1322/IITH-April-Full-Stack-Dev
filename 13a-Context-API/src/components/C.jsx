import userContext from "../contexts/UserContext"
import {useContext} from "react"

export default function C()
{
    const {name} = useContext(userContext)
    return (
        <div>
            <h1>C : {name} </h1>
        </div>
    )
}