import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Movie = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();
    const baseURL = 'https://movie-api-tan-theta.vercel.app/api/title';
    useEffect(() => {
        fetch(`${baseURL}/${id}`)
            .then(res => res.json())
            .then(resJson => setData(resJson))
            .catch(error => console.error(error))
    }, [baseURL, id]);
    if (data === null) return null;

    return (
        <div className="content-wrap">
            <Header />
            <div className="movie-hero-banner">
                <div>
                    <h1 className="movie-title">{data.title}</h1>
                    <ul className="movie-details">
                        <li>{data.release_year}</li>
                        <li>{data.rating}</li>
                        <li>{data.duration}</li>
                    </ul>
                </div>
                <div className="movie-rating">
                    <FontAwesomeIcon icon={faStar} size="2xl" style={{ color: "#ff9010", display: 'inline-block', paddingRight: '5px' }} />
                    <div style={{ float: 'right' }}>
                        <span style={{ display: 'block' }}>{data.ratings?.filter(rating => rating.Source === "Internet Movie Database")[0].Value}</span>
                        <span>{data.imdbVotes || 'N/A'}</span>
                    </div>
                </div>
            </div>

            <img src={data.poster} alt={data.title} className="movie-poster" />
            <div>
                <ul className="movie-genre-list">
                    {data.listed_in.map((genre, index) => {
                        return <li key={index}>{genre}</li>
                    })}
                </ul>
                <div className="presentation">
                    <p className="movie-description">{data.description}</p>
                    <ul className="metadata-list">
                        <li>
                            <span className="metadata-list__label">Director</span>
                            <ul className="metadata-list__sublist">
                                {data.director.map((director, index) => {
                                    return <li key={index}>{director}</li>
                                })}
                            </ul>
                        </li>
                        <li className="metadata-list__cast">
                            <span className="metadata-list__label">Cast</span>
                            <ul className="metadata-list__sublist">
                                {data.cast.map((director, index) => {
                                    return <li key={index}>{director}</li>
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Movie;