import { Link } from "react-router-dom"
import propTypes from "prop-types";
function Movie({ medium_cover_image, title, summary, genres, id }) {
    return <div>
        <img src={medium_cover_image} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title}</Link>
            {/* Link를 통해 브라우저 전체가 새로고침되는 걸 막을 수 있음! a tag와 같지만 더 효율적!
        또 위에 보이는 거와 같이 property(id)를 넘겨줄 수 있게됨
            */}
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (<li key={g}>{g}</li>)
            )}

            {/* map을 쓰려면 각 교유한 key가 있어야함! */}
        </ul>
    </div>;
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    medium_cover_image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}
export default Movie;