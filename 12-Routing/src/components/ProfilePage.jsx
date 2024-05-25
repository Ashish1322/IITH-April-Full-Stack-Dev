
import {useParams} from "react-router-dom"

function ProfilePage()
{
    const {username} = useParams();
    return (
        <div>
            <h1>This is the Profile of {username}</h1>
        </div>
    )
}
export default ProfilePage