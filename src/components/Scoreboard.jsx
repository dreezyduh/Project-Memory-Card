
function Scoreboard({scoreboard}) {
    return (
        <div className="score">
            <div>Score: {scoreboard.score}</div>
            <div>Best score: {scoreboard.bestScore}</div>
        </div>
    )
}

export default Scoreboard