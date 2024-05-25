import {Link} from "react-router-dom"
export default function Card({image,movieName,id})
{
    return (
        <Link to={`/movie/${id}`}>
        <div className="card">
            <img src={image} />
            <p>{movieName}</p>
        </div>
        </Link>
    )
}