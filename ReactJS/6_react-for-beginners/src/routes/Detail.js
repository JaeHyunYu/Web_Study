import { useEffect } from 'react';
import { useParams } from "react-router-dom"

function Detail() {

    const { id } = useParams();
    // 이렇게만 하면 parameter(url에 있는) 값가져와서 사용할 수 잇음!
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();

        console.log(json);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return <h1>Detail</h1>

    // 숙제 loading 만들기, json을 state에 넣어서 더 많은 정보 제공!
}

export default Detail;