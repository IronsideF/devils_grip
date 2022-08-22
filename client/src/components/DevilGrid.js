
import React, { useState } from 'react';
import GridItem from './GridItem.js';

const DevilGrid = ({gridCards, setCard}) => {

  const slots = [
    [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], [],
    [], [], [], [], [], [], [], []
  ];

  const [startGrid, setStartGrid] = useState([])

  const handleStart = (() => {
    gridCards.map((card) => {
      const slotNumber = gridCards.indexOf(card)
      const slot = slots[slotNumber]
      slot.push(card)
      setStartGrid(slots)
    })
  });

  const slotCards = startGrid.map((slot) => {
    return slot[0]
  });

  const topCards = slotCards.map((topCard, index) => {
    return <GridItem setCard={setCard} topCard={topCard} index={index} key={index}/>
  });

  return (
    <>
      <button name="" onClick={handleStart}>Start Game</button>
      <div>
          <br/>{topCards}
      </div>
    </>
  );
};

export default DevilGrid;