import Card from "./Card"
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const arr = [];
for (let i = 0; i < 12; i++) {
    arr.push(i)
}

const params = {
    url: 'https://api.giphy.com/v1/stickers/search',
    api_key: '?api_key=UMXcHlCiB6thAvGBslJqPTj6lBR28uQf',
    q: '&q=cat',
    limit: '&limit=12'
}

function Cardgrid(props) {
    const [cards, setCards] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    let ignore = false;

    useEffect(() => {
        if (!ignore) {
                fetch(params.url + params.api_key + params.q + params.limit)
                .then((response) => {
                    if (response.status >= 400) {
                        throw new Error ('server error');
                    }
                   return response.json()
                })
                .then(respData => setCards(respData.data))
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
            console.log('DATA DOWNLOADED')
        }
        return () => {
            ignore = true;
        }
    }, [])

    function randomizeArray() {
        const indexList = new Array(...cards)
        const removedIndexes = [];
        while (indexList.length > 0) {
            const random = Math.floor(Math.random() * indexList.length);
            removedIndexes.push(indexList[random]);
            indexList.splice(random, 1);
        }
        console.log(removedIndexes);
        setCards(removedIndexes)
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>A network error was encountered</p>
    
    return (
        <div className="cardGrid">
            { cards ? cards.map((card) => 
                <Card img = {card.images.original.url} key = {card.id} randomizeArray = {randomizeArray} restartGame = {props.restartGame} incrementScore = {props.incrementScore} reset = {props.reset}></Card>
            ) : <Card></Card>}
        </div>
    )
}

Cardgrid.propTypes = {
    incrementScore: PropTypes.func, 
    restartGame: PropTypes.func, 
    reset: PropTypes.bool
}



export default Cardgrid