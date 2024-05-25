import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export default function ProtectedRoute({ user, component }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (user == null) {
            navigate("/login")
        }
    }, [])

    return (
        <div>
            {
                user != null ? component : null
            }
        </div>
    )
}