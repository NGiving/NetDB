/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const SearchTable = ({ movies, isFocused }) => {
    return (
        <div className="search-results" style={{ display: isFocused ? 'block' : 'none' }}>
            <ul className='search-results__list'>
                {movies.map(({ show_id, title, release_year, director }) => {
                    return (
                        <li key={show_id}>
                            <Link to={`/title/${show_id}`}>{title} ({release_year}) <span>{director[0]}</span></Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default SearchTable;