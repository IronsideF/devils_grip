import React from "react";
import GridItem from "./GridItem.js";

const DevilGrid = ({ gridCards }) => {
	const cards = gridCards.map(function (card, index) {
		return (
			<GridItem
				suit={card.suit}
				value={card.value}
				image={card.image}
				key={index}
			/>
		);
	});
	return (
		<>
			<div>{cards}</div>
		</>
	);
};

export default DevilGrid;
