import React, { useState } from "react";

const GameLogic = () => {
  const [cardtop, setCardTop] = useState("");
  const [cardbot, setCardBot] = useState("");

  //giving the card an int value instead of a string one, face cards becom 11, 12, 13 for jack, queen, and king respectively
  const valueConverter = (card) => {
    switch (card.value) {
      case "2":
        card.value = 2;
        break;
      case "3":
        card.value = 3;
        break;
      case "4":
        card.value = 4;
        break;
      case "5":
        card.value = 5;
        break;
      case "6":
        card.value = 6;
        break;
      case "7":
        card.value = 7;
        break;
      case "8":
        card.value = 8;
        break;
      case "9":
        card.value = 9;
        break;
      case "10":
        card.value = 10;
        break;
      case "JACK":
        card.value = 11;
        break;
      case "QUEEN":
        card.value = 12;
        break;
      case "KING":
        card.value = 13;
        break;
    }
  };

  //the first card passed will be stacked onto the 2nd card passed
  const checkIfStackable = (event, cardtop, cardbot) => {
    valueConverter(cardtop);
    valueConverter(cardbot);
    if (cardtop.suit === cardbot.suit) {
      if (cardtop.value === cardbot.value + 3) {
        console.log("stackable");
      } else {
        console.log("not stackable");
      }
    } else {
      console.log("not stackable");
    }
  };

  const setCard = (event, card) => {
    if (cardtop === "") {
      setCardTop(card);
      console.log(cardtop);
    } else if (cardbot === "") {
      setCardBot(card);
    } else {
      console.log("no free slots");
    }
  };

  return (
    <div>
      <button
        onClick={(event) =>
          setCard(event, {
            code: "5C",
            value: "5",
            suit: "CLUBS",
          })
        }
      >
        Card1 5c
      </button>
      <button
        onClick={(event) =>
          setCard(event, {
            code: "2C",
            value: "2",
            suit: "CLUBS",
          })
        }
      >
        Card2 2c
      </button>
      <button
        onClick={(event) =>
          setCard(event, {
            code: "2H",
            value: "2",
            suit: "HEARTS",
          })
        }
      >
        Card3 2h
      </button>
      <button
        onClick={(event) => checkIfStackable(event, cardtop, cardbot)}
      >
        check if stackable
      </button>
    </div>
  );
};

export default GameLogic;
