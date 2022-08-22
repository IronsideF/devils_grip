import React from 'react'

const PlayButton = ({getDeck}) => {

  const handleStart = ()=> {
    getDeck()
  }

  return (
    <button name="" onClick={handleStart}>Start Game</button>
  )
}

export default PlayButton