import { useState, useEffect } from "react"

function Card({img, randomizeArray, restartGame, incrementScore, reset}) {
    const [active, setActive] = useState(false);
    const isActive = active === true
    
    function handleClick() {
        if (!isActive) {
            setActive(!active)
            incrementScore();
        } else {
            restartGame();
        }
        randomizeArray();
    }

    useEffect(() => {
		if (reset) {
			setActive(false);
		}
	}, [reset]);

    return (
        <div className='card' onClick={handleClick}>
            <img src={img}/>
            {/* <span>{title}</span> */}
        </div>
    )
}

export default Card