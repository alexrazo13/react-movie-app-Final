import { MoviesProvider, useMovies } from '../../Providers/MoviesProviders';

const FavoritesPage = () => {
    const { movies, removeMovie } = useMovies();

    return (
        <div><center>
            <h1>My Favorite Movies</h1>
            {movies.map(movie => (
                <div key={movie.Year}>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Year}</p>
                    <p>{movie.Actors}</p>
                    <button onClick={() => removeMovie(movie.Title)}>
                        Remove</button>
                </div>     
            ))}
            </center>
        </div>
    )
}

export default FavoritesPage; 