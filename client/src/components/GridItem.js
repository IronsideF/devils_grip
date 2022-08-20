import React from "react";

const GridItem = ({ suit, value, image, index }) => {
	return (
		<div key={index}>
			<img src={image} />
			<p>
				Card Value: {value}, Card Suit: {suit}
			</p>
		</div>
	);
};

export default GridItem;
