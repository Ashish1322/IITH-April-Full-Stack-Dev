
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
export default function ShowMoviDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=1b4ecd2`)
            .then(res => res.json())
            .then(data => {
                if(data.Error)
                {
                    setMovie(null)
                }
                else
                setMovie(data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                movie != null ? <div>     <img src={movie.Poster} />
                    <h2>{movie.Title}</h2>
                    <p>Description: {movie.Plot}</p>
                    <p>Genre: {movie.Genre}</p>
                    <p>Description: {movie.Plot}</p>
                    <p>Language : {movie.Language}</p>
                    <p>Director: {movie.Director}</p> </div> : <p>Data not Found!</p>
            }

        </div>
    )
}