function Movie({ medium_cover_image, title, summary, genres }) {
    return <div>
        <img src={medium_cover_image} alt={title} />
        <h2>{title}</h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (<li key={g}>{g}</li>)
            )}

            {/* map을 쓰려면 각 교유한 key가 있어야함! */}
        </ul>
    </div>;
}

export default Movie;