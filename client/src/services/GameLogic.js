// const GameLogic = () => {
//giving the card an int value instead of a string one, face cards becom 11, 12, 13 for jack, queen, and king respectively
export const valueConverter = (card) => {
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
export const checkIfStackable = (topArray, botArray, difficulty) => {
	const cardtop = topArray[0];
	const cardbot = botArray.at(-1);
	valueConverter(cardtop);
	valueConverter(cardbot);
	if (difficulty === "Normal") {
		if (cardtop.suit === cardbot.suit) {
			console.log(
				`${cardtop.suit} ${cardtop.value} ${cardbot.suit} ${cardbot.value}`
			);
			if (cardtop.value === cardbot.value + 3) {
				console.log("Can Stack");
				return true;
			} else {
				console.log("Cant stack");
				return false;
			}
		}
	} else if ((difficulty = "Colours")) {
		if (
			(cardtop.suit === "HEARTS" || cardtop.suit === "DIAMONDS") &&
			(cardbot.suit === "HEARTS" || cardbot.suit === "DIAMONDS")
		) {
			if (cardtop.value === cardbot.value + 3) {
				console.log("Can Stack");
				return true;
			} else {
				console.log("Cant stack");
				return false;
			}
		} else if (
			(cardtop.suit === "SPADES" || cardtop.suit === "CLUBS") &&
			(cardbot.suit === "SPADES" || cardbot.suit === "CLUBS")
		) {
			if (cardtop.value === cardbot.value + 3) {
				console.log("Can Stack");
				return true;
			} else {
				console.log("Cant stack");
				return false;
			}
		} else {
			console.log("Cant stack");
			return false;
		}
	}
};

//((cardtop.suit === "SPADES" || cardtop.suit === "CLUBS") || (cardbot.suit === "SPADES" || cardbot.suit === "CLUBS"))

//   return (
//     <div>
//       <button
//         onClick={(event) =>
//           setCard(event, {
//             code: "5C",
//             value: "5",
//             suit: "CLUBS",
//           })
//         }
//       >
//         Card1 5c
//       </button>
//       <button
//         onClick={(event) =>
//           setCard(event, {
//             code: "2C",
//             value: "2",
//             suit: "CLUBS",
//           })
//         }
//       >
//         Card2 2c
//       </button>
//       <button
//         onClick={(event) =>
//           setCard(event, {
//             code: "2H",
//             value: "2",
//             suit: "HEARTS",
//           })
//         }
//       >
//         Card3 2h
//       </button>
//       <button
//         onClick={(event) => checkIfStackable(event, cardtop, cardbot)}
//       >
//         check if stackable
//       </button>
//     </div>
//   );
// };
