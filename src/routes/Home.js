
import { useState, useEffect } from "react";
import Movie from "../components/Movie"
import propTypes, { number } from "prop-types";
import styles from "./Home.module.css";
function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [rating, setRating] = useState(5);

    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=${rating}&sort_by=year`
        );

        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    const onChange = (event) => {
        setRating(event.target.value);
    }

    useEffect(() => {
        getMovies();

    }, [rating]);

    console.log(movies);
    return (
        <div className={styles.container}>
            {loading ? <h1>loading</h1> :
                (
                    <div style={{ textAlign: 'center' }}>

                        <label htmlFor='rating'>Rating: </label>
                        <input
                            value={rating}
                            id="rating"
                            placeholder='Rating'
                            type="number"
                            onChange={onChange} />
                        <h2>More than [{rating}]rating Movie Lists</h2>
                        <div className={styles.movies}>
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    medium_cover_image={movie.medium_cover_image}
                                    title={movie.title}
                                    summary={movie.summary}
                                    genres={movie.genres} />
                            ))}
                        </div>
                    </div>
                )
            }
        </div >
    )
}

Movie.propTypes = {
    //id: propTypes.string.isRequired,
    medium_cover_image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    // genres: propTypes.arrayOf(propTypes.string).isRequired
}

//React Router : 페이지를 전환시키는 거!
// 맨처음에 npm install react-router-dom 해서 설치받아야함
export default Home;
