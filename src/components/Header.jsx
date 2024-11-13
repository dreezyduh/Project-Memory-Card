import Scoreboard from "./Scoreboard"
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <div className="header">
            <div className="title">
                  <h1>Memory Game</h1>
                  <span>Earn points by clicking on stickers. If you click more than once on the same sticker the score resets</span>
            </div>
            <Scoreboard scoreboard = {props.scoreboard} setScore = {props.setScore}>
            
            </Scoreboard>
        </div>
    )
}

Header.propTypes = {
    scoreboard: PropTypes.object, 
    setScore: PropTypes.func
}

export default Header