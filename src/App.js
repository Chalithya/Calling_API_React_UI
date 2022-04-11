import { useState, useEffect } from 'react';

import './App.css';
import MovieCard from './MovieCard';
import searchIcon from './search.svg';

//API URL
const API_URL = 'http://www.omdbapi.com?apikey=38e3ef61';

const movieOne = {
    "Title": "Batman v Superman: Dawn of Justice",
    "Year": "2016",
    "imdbID": "tt2975590",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
};

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //Search movie from api data
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    //To load all the movies when the component is load
    useEffect(() => {
        searchMovies();
    }, []);

    return (
        <div className='app'>
            <h1>Movie Collection</h1>

            <div className='search'>
                <input
                    placeholder='Search for moviies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <img
                    src={searchIcon}
                    alt='Search'
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <MovieCard movie={movie}/>
                            ))}

                        </div>
                    ) :
                    (
                        <div className='empty'>
                            <h2> No movies found</h2>
                        </div>
                    )
            }


        </div>
    );
}

export default App;