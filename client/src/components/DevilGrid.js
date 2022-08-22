
import React, { useState } from 'react';
import GridItem from './GridItem.js';

const DevilGrid = ({ gridCards }) => {

  const slots = [
    [[[]], [[]], [[]]], 
    [[[]], [[]], [[]]], 
    [[[]], [[]], [[]]], 
    [[[]], [[]], [[]]], 
    [[[]], [[]], [[]]], 
    [[[]], [[]], [[]]], 
    [[[]], [[]], [[]]], 
    [[[]], [[]], [[]]]
  ];


  const [startGrid, setStartGrid] = useState([])
  const [topcards, setTopCards] = useState([])

  const handleStart = (() => {

    let count = 0;
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 3; y++) {
        slots[x][y][0] = gridCards[count]
        count++;

      }
    }
    setStartGrid(slots)
    setTopCards(gridCards)
  });

  const getTops = () => {
    let temp = [];
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 3; y++) {
        temp.push(startGrid[x][y][0])
      }
    }
    setTopCards(temp)
    
  }

  const topCards = topcards.map((topCard, index) => {
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