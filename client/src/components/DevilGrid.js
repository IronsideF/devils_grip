import React, { useState } from 'react';
import GridItem from './GridItem.js';

const DevilGrid = ({cardArrays, setCard}) => {

  // let cards = [];

  // const getTops = () => {
  //   let temp = [];
  //   for (let x = 0; x < 8; x++) {
  //     for (let y = 0; y < 3; y++) {
  //       temp.push(gridCards[x][y][gridCards[x][y].length-1])}
  //   }  
  //   setTops(temp)  
  // }
// const handleStart = (() => {
//   getDeck()
// });
const cardNodes = cardArrays.map((object, index) => {
  return <GridItem setCard={setCard} cards={object.cards} positionX={object.positionX} positionY={object.positionY} key={index} />
} )


  // const topCards = tops.map((topCard, index) => {
  //   return <GridItem setCard={setCard} topCard={topCard} key={index} />
  // })

  return (
    <>
      
      <div>
        <br />{cardNodes}
      </div>
    </>
  );
};

export default DevilGrid;