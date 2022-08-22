import React from 'react'

const GameOverScreen = ({score, exitGameOver}) => {
  
    let evaluation;
    if (score<73){
        evaluation= ' Did you click give up by mistake?'
    } if (score<50){
        evaluation= " You've started, and that's the first step to winning"
    } if (score<20){
        evaluation=" That's what I'm talking about, you're really getting there"
    } if (score<10){
        evaluation=" This is considered a good game by the Devil's Grip pros"
    } if (score<5) {
        evaluation=" This is considered an excellent game by the Devil's Grip pros"
    } if (score<3) {
        evaluation=" That's a brilliant game!"
    } if (score===0) {
        evaluation=" You've done it! You are the Devil Gripper!"
    }
  
    return (
    <>
        <h3>Your Score was: {score}</h3>
        <p>{evaluation}</p>
        <button onClick={exitGameOver}>Done</button>
    </>
  )
}

export default GameOverScreen