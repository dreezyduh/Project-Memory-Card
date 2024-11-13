import PropTypes from 'prop-types';

function Scoreboard({scoreboard}) {
    return (
        <div className="score">
            <div>Score: {scoreboard.score}</div>
            <div>Best score: {scoreboard.bestScore}</div>
        </div>
    )
}

Scoreboard.propTypes = {
    scoreboard: PropTypes.object
}

export default Scoreboard