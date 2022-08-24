import React from "react";
import styled from "styled-components";

const GridItem = ({
	cards,
	setCard,
	positionX,
	positionY,
	setSelectedCard,
	selectedCard,
	setCardTopX,
	setCardTopY,
}) => {
	const topCard = cards.at(-1);
	// setup for stacked cards
	let baseCard = null;
	let midBotCard = null;
	let midTopCard = null;

	let isSelected = false;
	if (
		selectedCard &&
		selectedCard[0] === positionX &&
		selectedCard[1] === positionY
	) {
		isSelected = true;
	}

	if (cards.length > 1) {
		baseCard = cards[0];
	}
	if (cards.length > 2) {
		midBotCard = cards[1];
	}
	if (cards.length > 3) {
		midTopCard = cards[2];
	}

	const handleClick = () => {
		setCard(positionX, positionY);
		setSelectedCard([positionX, positionY]);
	};

	const handleUnselect = () => {
		setSelectedCard(null);
		setCardTopX("");
		setCardTopY("");
	};

	return (
		<Wrapper>
			<CardWrapper>
				{baseCard ? <BaseCard src={baseCard.image} /> : null}
				{midBotCard ? <MidBotCard src={midBotCard.image} /> : null}
				{midTopCard ? <MidTopCard src={midTopCard.image} /> : null}
				{isSelected ? (
					<CardImageSelected
						src={topCard.image}
						onClick={handleUnselect}
					/>
				) : (
					<CardImage
						id="card-image"
						onClick={handleClick}
						src={topCard.image}
					/>
				)}
			</CardWrapper>
		</Wrapper>
	);
};
// CSS styling for each card or stack
const Wrapper = styled("div")`
	padding: 3%;
	padding-top: 7%;
	margin: 2%;
	width: 100%;
`;

const CardImage = styled("img")`
	grid-column-start: first-col;
	grid-row-start: first-row;
	justify-self: center;
	margin-top: 14px;
	margin-left: 0px;
	width: 80%;
	margin-bottom: 1%;
	margin-right: 1%;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px;
	&:hover {
		box-shadow: 10px 10px 10px yellow;
		cursor: pointer;
	}
`;

const CardImageSelected = styled("img")`
	grid-column-start: first-col;
	grid-row-start: first-row;
	justify-self: center;
	margin-top: 14px;
	margin-left: 0px;
	width: 80%;
	margin-bottom: 1%;
	margin-right: 1%;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px yellow;
	&:hover {
		cursor: pointer;
	}
`;

const BaseCard = styled.img`
	grid-column-start: first-col;
	grid-row-start: first-row;
	width: 80%;
	justify-self: center;
`;
const MidBotCard = styled.img`
	grid-column-start: first-col;
	grid-row-start: first-row;
	margin-top: 10px;
	margin-left: 0;
	width: 80%;
	justify-self: center;
`;
const MidTopCard = styled.img`
	grid-column-start: first-col;
	grid-row-start: first-row;
	margin-top: 12px;
	margin-left: 0;
	width: 80%;
	justify-self: center;
`;
const CardWrapper = styled.div`
	display: grid;
	grid-template-columns: [first-col] 100%;
	grid-template-rows: [first-row] 100%;
`;

export default GridItem;
