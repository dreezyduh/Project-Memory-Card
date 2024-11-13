import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function Card(props) {
    const [active, setActive] = useState(false);
    const isActive = active === true
    
    function handleClick() {
        if (!isActive) {
            setActive(!active)
            props.incrementScore();
        } else {
            props.restartGame();
        }
        props.randomizeArray();
    }

    useEffect(() => {
		if (props.reset) {
			setActive(false);
		}
	}, [props.reset]);

    return (
        <div className='card' onClick={handleClick}>
            <img src={props.img}/>
            {/* <span>{title}</span> */}
        </div>
    )
}

Card.propTypes = {
    img: PropTypes.string,
    randomizeArray: PropTypes.func,
    restartGame: PropTypes.func,
    incrementScore: PropTypes.func,
    reset: PropTypes.bool
}

export default Card