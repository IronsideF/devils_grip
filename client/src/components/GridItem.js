import React from "react";
import styled from "styled-components";

const GridItem = ({ cards, setCard, positionX, positionY }) => {
	const topCard = cards.at(-1);

	const handleClick = () => {
		setCard(positionX, positionY);
	};

	return (
		<span>
			<CardImage
				onClick={handleClick}
				src={topCard.image}
				width="10.5%"
			/>
		</span>
	);
};
const CardImage = styled("img")`
	margin: 1%;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px;
	&:hover {
		border: solid yellow;
	}
`;

export default GridItem;
