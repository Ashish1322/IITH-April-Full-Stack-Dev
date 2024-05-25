import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar({search}) {

    const [movieName,setMovieName] = useState("")

    return (
        <nav>
            <Link to="/">
            <img src="https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg" /> </Link>
            <h1>TheaterBox</h1>
            <div>
                <input onChange={ (e) => setMovieName(e.currentTarget.value) } id="moviename" type="text" placeholder="Enter movie name" />
                <button onClick={() => search(movieName)}  id="search">Search</button>
            </div>
        </nav>

    )
}