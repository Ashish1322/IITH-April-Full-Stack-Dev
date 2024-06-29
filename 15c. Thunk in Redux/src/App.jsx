import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/slice/movieslice";

function App() {
  const dispatch = useDispatch();

  const { movies, loading } = useSelector((state) => state);

  return (
    <div>
      <h1>Movies</h1>

      <button onClick={() => dispatch(fetchMovies())}>Fetch Movies</button>
      {loading == true && <p>Please Wait Fetching Data</p>}
      {movies.map((item, index) => (
        <div>
          <img width="300px" src={item.Poster} />
          <p>{item.Title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
