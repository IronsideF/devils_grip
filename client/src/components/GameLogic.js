import React, { useState } from "react";

const GameLogic = () => {
    const card1 = { 
        code: "8C",
        value: "8",
        suit: "CLUBS"
    }

    const card2 = { 
        code: "JC",
        value: "JACK",
        suit: "CLUBS"
    }

    const card3 = { 
        code: "2C",
        value: "2",
        suit: "CLUBS"},

    const card4 = { 
        code: "5H",
        value: "5",
        suit: "HEARTS"}
  ;

  //giving the card an int value instead of a string one, face cards becom 11, 12, 13 for jack, queen, and king respectively
  const valueConverter = (card) => {
    switch(card) {
        case card.value === "2":
            card.value = 2;
            break;
        case card.value === "3":
            card.value = 3;
            break;
        case card.value === "4":
            card.value = 4;
            break;
        case card.value === "5":
            card.value = 5;
            break;
        case card.value === "6":
            card.value = 6;
            break;
        case card.value === "7":
            card.value = 7;
            break;
        case card.value === "8":
            card.value = 8;
            break;
        case card.value === "9":
            card.value = 9;
            break;
        case card.value === "10":
            card.value = 10;
            break;
        case card.value === "11":
            card.value = 11;
            break;
        case card.value === "12":
            card.value = 12;
            break;
        case card.value === "13":
            card.value = 13;
            break;
    }
  }

  const checkIfStackable = (card1, card2) => {
    if ()
  }

  return <div>GameLogic</div>;
};

export default GameLogic;
