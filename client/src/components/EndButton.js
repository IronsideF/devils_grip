import React from 'react'

const EndButton = ({endGame}) => {
  
  const handleClick = () => {
    endGame();
  }
  
  return (
    <button onClick={handleClick}>Give Up?</button>
  )
}

export default EndButton