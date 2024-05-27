import C from "./C"
import AuthContext from "../contexts/AuthContext"
import userContext from "../contexts/UserContext"
import { useContext } from "react"
export default function B()
{
    const {name} = useContext(userContext)
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h1>B Name : {name}, email : {user.email}</h1>
            <C  />
        </div>
    )
}