import GridItem from "./GridItem.js";
import styled from "styled-components";

const DevilGrid = ({
	cardArrays,
	setCard,
	setSelectedCard,
	selectedCard,
	setCardTopX,
	setCardTopY,
}) => {
	const cardNodes = cardArrays.map((object, index) => {
		return (
			<GridItem
				setCard={setCard}
				cards={object.cards}
				positionX={object.positionX}
				positionY={object.positionY}
				key={index}
				setSelectedCard={setSelectedCard}
				selectedCard={selectedCard}
				setCardTopX={setCardTopX}
				setCardTopY={setCardTopY}
			/>
		);
	});

	// const topCards = tops.map((topCard, index) => {
	//   return <GridItem setCard={setCard} topCard={topCard} key={index} />
	// })

	return (
		<GridWrapper>
			<Wrapper>{cardNodes}</Wrapper>
		</GridWrapper>
	);
};

// CSS Styling for the Grid
const GridWrapper = styled("div")`
	display: flex;
	justify-content: center;
	align-content: center;
`;
const Wrapper = styled("div")`
	border: solid black 5px;
	border-radius: 10px;
	margin: 0 10%;
	padding: 1%;
	background-color: green;
	width: 70%;
	column-gap: 1%;
	row-gap: 8%;

	display: grid;
	place-items: center;
	justify-items: center;
	justify-content: center;

	grid-template-columns: repeat(8, 10%);
	grid-template-rows: repeat(3, 25%);
`;

export default DevilGrid;
