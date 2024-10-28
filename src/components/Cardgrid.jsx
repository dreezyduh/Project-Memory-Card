import Card from "./Card"
import { useEffect, useState } from "react";

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

function Cardgrid({incrementScore, restartGame, reset}) {
    const [cards, setCards] = useState(null)
    let ignore = false

    useEffect(() => {
        if (!ignore) {
            try {
                fetch(params.url + params.api_key + params.q + params.limit)
                .then(response => response.json())
                .then(respData => setCards(respData.data))
            } catch (error) {
                console.error(error)
            }
            ignore = true;
            console.log('DATA DOWNLOADED')
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
    
    return (
        <div className="cardGrid">
            { cards ? cards.map((card) => 
                <Card img = {card.images.original.url} key = {card.id} randomizeArray = {randomizeArray} restartGame = {restartGame} incrementScore = {incrementScore} reset = {reset}></Card>
            ) : <Card></Card>}
        </div>
    )
}



export default Cardgrid