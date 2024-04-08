import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const MovieList = () => {
    const { page } = useParams();
    const [movies, setMovies] = useState([]);
    const [count, setCount] = useState(0);
    const baseURL = 'https://netdb-api.vercel.app/api';
    useEffect(() => {
        fetch(`${baseURL}/titles/${page}`)
            .then(res => res.json())
            .then(data => setMovies(data))

        fetch(`${baseURL}/titles/count`)
            .then(res => res.json())
            .then(data => setCount(data.count))        
    }, [baseURL, page])

    const prevDisplay = {
        display: parseInt(page) === 1 ? 'none' : 'block'
    };

    const nextDisplay = {
        display: parseInt(page) > Math.ceil(count/50) ? 'none' : 'block'
    };

    return (
        <div className="movie-list">
            <section className="block-header">
                <p>There are {count} films.</p>
            </section>
            <ul>
                {movies.map(({ show_id, title, release_year }) =>
                    <li 
                        key={show_id}
                        className='movie'
                    >
                        <Link 
                            to={`/title/${show_id}`}
                            title={`${title} (${release_year})`}
                        >
                            <h2 className='title'>{title}</h2>
                        </Link>
                        <small>{release_year}</small>
                    </li>
                )}
            </ul>
            <div className="pagination">
                <span className="prev-page" style={prevDisplay}><Link to={`/titles/${parseInt(page)-1}`}>Previous</Link></span>
                <span className="next-page" style={nextDisplay}><Link to={`/titles/${parseInt(page)+1}`}>Next</Link></span>
            </div>
        </div>

    )
}

export default MovieList;