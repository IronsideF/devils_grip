import styled from "styled-components";
import React, { useState, useEffect } from "react";
import DevilGrid from "../components/DevilGrid.js";
import StockSection from "../components/StockSection.js";
import { checkIfStackable } from "../services/GameLogic.js";
import Buttons from "../components/Buttons.js";
import PlayButton from "../components/PlayButton.js";
import { drawFromDeck, resetDeck } from "../services/DevilService.js";
import Instructions from "../components/Instructions.js";

const DevilContainer = () => {
	const [deck, setDeck] = useState(null);
	const [gridCards, setGridCards] = useState(null);
	const [talon, setTalon] = useState([]);
	const [deckAtZero, setDeckAtZero] = useState(false);
	const [cardTopX, setCardTopX] = useState("");
	const [cardTopY, setCardTopY] = useState("");
	const [cardBotX, setCardBotX] = useState("");
	const [cardBotY, setCardBotY] = useState("");
	const [score, setScore] = useState(null);
	const [cardArrays, setCardArrays] = useState(null);

	const deckUrl =
		"https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH";

	const getDeck = () => {
		return fetch(deckUrl)
			.then((res) => res.json())
			.then((result) => {
				setDeck(result);
				console.log(result.deck_id);
				return fetch(
					"https://www.deckofcardsapi.com/api/deck/" +
						result.deck_id +
						"/draw/?count=24"
				);
			})
			.then((res) => res.json())
			.then((cards) => {
				setGrid(cards.cards);
				setScore(72);
			});
	};

	const drawThreeFromStock = () => {
		drawFromDeck(deck.deck_id, 3)
			.then((data) => {
				const copyTalon = [...talon].concat(data.cards);
				setTalon(copyTalon);
				return data.remaining;
			})
			.then((deckCount) => {
				if (deckCount === 0) {
					setDeckAtZero(true);
				}
			});
	};

	const stackFromTalon = () => {
		const copyGridCards = [...gridCards];
		copyGridCards[cardBotX][cardBotY].push(cardTopX);
		setGridCards(copyGridCards);
		takeFromTalon();
	};
	const takeFromTalon = () => {
		const copyTalon = [...talon];
		copyTalon.pop();
		setTalon(copyTalon);
		setScore(score - 1);
	};
	const resetStock = () => {
		resetDeck(talon).then((newDeck) => setDeck(newDeck));
		setTalon([]);
		setDeckAtZero(false);
	};
	const setCard = (x, y) => {
		if (cardTopX === "") {
			setCardTopX(x);
			setCardTopY(y);
			console.log(cardTopX);
		} else if (cardBotX === "") {
			setCardBotX(x);
			setCardBotY(y);
		} else {
			console.log("no free slots");
		}
	};

	const setFromTalon = (object) => {
		setCardTopX(object);
	};

	const swapGridCards = () => {
		const copyGridCards = [...gridCards];
		const card1 = gridCards[cardTopX][cardTopY];
		const card2 = gridCards[cardBotX][cardBotY];
		copyGridCards[cardTopX][cardTopY] = card2;
		copyGridCards[cardBotX][cardBotY] = card1;
		setGridCards(copyGridCards);
	};
	const stackGridCards = () => {
		const copyGridCards = [...gridCards];
		const card1 = gridCards[cardTopX][cardTopY];
		copyGridCards[cardBotX][cardBotY] =
			copyGridCards[cardBotX][cardBotY].concat(card1);
		drawFromDeck(deck.deck_id, 1).then((newCards) => {
			copyGridCards[cardTopX][cardTopY] = newCards.cards;
			setGridCards(copyGridCards);
			setScore(score - 1);
		});
	};

	const setGrid = (cards) => {
		let count = 0;
		let temp = [
			[[[]], [[]], [[]]],
			[[[]], [[]], [[]]],
			[[[]], [[]], [[]]],
			[[[]], [[]], [[]]],
			[[[]], [[]], [[]]],
			[[[]], [[]], [[]]],
			[[[]], [[]], [[]]],
			[[[]], [[]], [[]]],
		];
		for (let x = 0; x < 8; x++) {
			for (let y = 0; y < 3; y++) {
				temp[x][y][0] = cards[count];
				count++;
			}
		}
		setGridCards(temp);
	};
	const getCardArrays = () => {
		let temp = [];
		for (let y = 0; y < 3; y++) {
			for (let x = 0; x < 8; x++) {
				temp.push({
					cards: gridCards[x][y],
					positionX: x,
					positionY: y,
				});
			}
		}
		setCardArrays(temp);
	};

	useEffect(() => {
		if (!(cardBotX === "") && !cardTopX.code) {
			const canStack = checkIfStackable(
				gridCards[cardTopX][cardTopY],
				gridCards[cardBotX][cardBotY]
			);
			if (canStack) {
				stackGridCards();
				setCardTopX("");
				setCardTopY("");
				setCardBotX("");
				setCardBotY("");
			} else {
				swapGridCards();
				setCardTopX("");
				setCardTopY("");
				setCardBotX("");
				setCardBotY("");
			}
		} else if (!(cardBotX === "")) {
			const canStack = checkIfStackable(
				[cardTopX],
				gridCards[cardBotX][cardBotY]
			);
			if (canStack) {
				stackFromTalon();
				setCardTopX("");
				setCardBotX("");
				setCardBotY("");
			} else {
				setCardTopX("");
				setCardTopY("");
				setCardBotX("");
				setCardBotY("");
			}
		}
	}, [cardBotX]);

	useEffect(() => {
		if (gridCards) {
			getCardArrays();
		}
	}, [gridCards]);

	return (
		<Wrapper>
			<h1>Devil's Grip</h1>
			{deck ? <p>Deck Id: {deck.deck_id}</p> : null}
			{cardArrays ? (
				<DevilGrid cardArrays={cardArrays} setCard={setCard} />
			) : (
				<PlayButton getDeck={getDeck} />
			)}
			{deck ? (
				<StockSection
					talon={talon}
					drawThreeFromStock={drawThreeFromStock}
					setFromTalon={setFromTalon}
					resetStock={resetStock}
					deckAtZero={deckAtZero}
				/>
			) : null}
			<Instructions />
		</Wrapper>
	);
};

const Wrapper = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export default DevilContainer;
