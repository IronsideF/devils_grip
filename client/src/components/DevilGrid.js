
import React, { useState } from 'react';
import GridItem from './GridItem.js';

const DevilGrid = ({ gridCards }) => {

  const [tops, setTops] = useState([])

  const handleStart = (() => {
    getTops();
  });

  const getTops = () => {
    let temp = [];
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 3; y++) {
        temp.push(gridCards[x][y][gridCards[x][y].length-1])

      }
    }  
    setTops(temp)  
  }

  const topCards = tops.map((topCard, index) => {
    return <GridItem topCard={topCard} key={index} />
  })

  return (
    <>
      <button name="" onClick={handleStart}>Start Game</button>
      <div>
        <br />{topCards}
      </div>
    </>
  );
};

export default DevilGrid;