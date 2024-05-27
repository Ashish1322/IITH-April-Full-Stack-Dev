
import AuthContext from "../contexts/AuthContext"
import {useContext} from "react"

export default function D()
{
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1>D : {user.email}</h1>
        </div>
    )
}