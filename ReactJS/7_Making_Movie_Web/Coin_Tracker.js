import Button from "./Button"
import styles from "./App.module.css"
import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(1);
    const [value, setValue] = useState(1);

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onCng = (event) => {
        setMoney(event.target.value);
    }
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
        // 위에 fetch를 이용해서 coinpaprik에서 tickers들을 json형식으로 불러들여 coins라는 스테이트(배열)에 넣어줌
    }, [])
    return (
        <div>
            <h1>
                The Coins ({coins.length})
            </h1>
            {loading ? <strong>Loading...</strong> :
                <div>
                    <input placeholder='money' onChange={onCng}></input>
                    <br></br>
                    <select onChange={onChange}>
                        {coins.map((coin) => <option id={coin.name} value={coin.quotes.USD.price} value2={coin.name}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>)}
                    </select>
                    {money != 1 && value != 1} ?<p>You can change {money} USD into {money / value} coin </p> : null

                </div>
            }
        </div >
    )
}

// coinpaprika라는 api는 매우 많은 코인의 정보를 넘겨줌
// api.coinpaprika.com/v1/tickers
export default App;