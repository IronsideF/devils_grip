import React from "react";
import styled from "styled-components";

const GridItem = ({ cards, setCard, positionX, positionY }) => {
	const topCard = cards.at(-1);

	const handleClick = () => {
		setCard(positionX, positionY);
	};

	return (
		<Wrapper>
			<CardImage onClick={handleClick} src={topCard.image} />
		</Wrapper>
	);
};

const Wrapper = styled("div")`
	padding: 3%;
	margin: 2%;
`;

const CardImage = styled("img")`
	justify-self: center;
	width: 80%;
	margin: 1%;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px;
	&:hover {
		border: solid yellow;
		cursor: pointer;
	}
`;

export default GridItem;
