import Scoreboard from "./scoreboard"

function Header({scoreboard, setScore}) {
    return (
        <div className="header">
            <div className="title">
                  <h1>Memory Game</h1>
                  <span>Earn points by clicking on stickers. If you click more than once on the same sticker the score resets</span>
            </div>
            <Scoreboard scoreboard = {scoreboard} setScore = {setScore}>
            
            </Scoreboard>
        </div>
    )
}

export default Header