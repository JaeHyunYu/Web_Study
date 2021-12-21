import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Detail() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [info, setInfo] = useState([]);
    // 이렇게만 하면 parameter(url에 있는) 값가져와서 사용할 수 잇음!
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json.data.movie);
        setInfo(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? <h1>loading</h1> :
                <div>
                    <h1>Title : {(info.title)}</h1>
                    <h2>Rating : {info.rating}</h2>

                    <Link to={`/`}>Home</Link>
                </div>
            }
        </div >
    )

    // 숙제 loading 만들기, json을 state에 넣어서 더 많은 정보 제공!
}

export default Detail;

