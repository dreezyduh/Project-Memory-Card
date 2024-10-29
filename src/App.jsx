import { useState } from "react"
import Header from "./components/Header"
import Cardgrid from "./components/Cardgrid"
import './style/App.css'
import { useEffect } from "react";

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
            return
        }
        setReset(false);
    }

    useEffect(() => {
        checkForWin();
    }, [scoreboard.score])

    function checkForWin() {
        if (scoreboard.score === 12) {
            alert('You\'ve won !!');
            restartGame();
        }
    }


    return (
        <div>
            <Header scoreboard = {scoreboard} setScore = {setScore}></Header>
            <Cardgrid incrementScore = {incrementScore} restartGame = {restartGame} reset = {reset}></Cardgrid>
        </div>
    )
}
export default App