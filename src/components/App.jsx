import { useState } from "react"
import Header from "./header"
import Cardgrid from "./Cardgrid";
import '../style/App.css'
function App() {
    const [scoreboard, setScore] = useState({
        score: 0,
        bestScore: 0
    });
    const [reset, setReset] = useState(true)

    function restartGame() {
        console.log(scoreboard.bestScore)
        if (scoreboard.score > scoreboard.bestScore) {
            scoreboard.bestScore = scoreboard.score;
        }
        setReset(true);
        setScore({...scoreboard, score: 0});
    }

    function incrementScore() {
        setScore({...scoreboard, score: scoreboard.score + 1})
        if (scoreboard.score + 1 === 12 ) {
            checkForWin()
            return
        }
        setReset(false);
    }

    function checkForWin() {
        if (scoreboard.score > scoreboard.bestScore + 1) {
            scoreboard.bestScore = scoreboard.score;
        }
        alert('You\'ve won !!')
        setReset(true);
        setScore({...scoreboard, score: 0});
    }


    return (
        <div>
            <Header scoreboard = {scoreboard} setScore = {setScore}></Header>
            <Cardgrid incrementScore = {incrementScore} restartGame = {restartGame} reset = {reset}></Cardgrid>
        </div>
    )
}
export default App