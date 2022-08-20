import React, { useState, useEffect } from "react";
import DevilGrid from "../components/DevilGrid";
import StockSection from "../components/StockSection";
import Buttons from "../components/Buttons";

const DevilContainer = () => {
	const [deck, setDeck] = useState({});
	const [gridCards, setGridCards] = useState([]);

	const deckUrl =
		"https://www.deckofcardsapi.com/api/deck/new/shuffle/?cards=2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH,2S,3S,4S,5S,6S,7S,8S,9S,0S,JS,QS,KS,2C,3C,4C,5C,6C,7C,8C,9C,0C,JC,QC,KC,2D,3D,4D,5D,6D,7D,8D,9D,0D,JD,QD,KD,2H,3H,4H,5H,6H,7H,8H,9H,0H,JH,QH,KH";

	const getDeck = (deckUrl) => {
		fetch(deckUrl)
			.then((res) => res.json())
			.then((result) => {
				setDeck(result);
				return fetch(
					"https://www.deckofcardsapi.com/api/deck/" +
						result.deck_id +
						"/draw/?count=24"
				);
			})
			.then((res) => res.json())
			.then((cards) => {
				setGridCards(cards.cards);
			});
	};

	useEffect(() => {
		getDeck(deckUrl);
	}, []);

	return (
		<>
			<h1>Devil's Grip</h1>
			<p>Deck Id: {deck.deck_id}</p>
			<DevilGrid gridCards={gridCards} />
		</>
	);
};

export default DevilContainer;