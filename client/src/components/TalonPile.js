import React from "react";
import styled from "styled-components";

const TalonPile = ({ talon, setFromTalon, selectedCard, setSelectedCard }) => {
	const topCard = talon.at(-1);
	let botCard = null;
	let midCard = null;
	if (talon.length > 2) {
		botCard = talon.at(-3);
	}
	if (talon.length > 1) {
		midCard = talon.at(-2);
	}
	let isSelected = false;
	if (
		selectedCard && selectedCard[0]===0&&selectedCard[1]===4
	) {
		isSelected = true;
	}
	const handleClick = () => {
		setFromTalon(topCard);
		setSelectedCard([0,4]);
	};
	const handleUnselect = () => {
		setSelectedCard(null);
		setFromTalon("");
	};

	return (
		<>
			{talon.length ? (
				<TalonWrapper>
					{botCard ? <BotCard src={botCard.image} /> : null}
					{midCard ? <MidCard src={midCard.image} /> : null}
					{isSelected ? (
						<CardImageSelected
							src={topCard.image}
							onClick={handleUnselect}
						/>
					) : (
						<CardImage
							id="tallon-top-card"
							src={topCard.image}
							alt={topCard.code}
							onClick={handleClick}
						/>
					)}
				</TalonWrapper>
			) : (
				<TalonHolder></TalonHolder>
			)}
		</>
	);
};
// CSS styling for Talon
const TalonHolder = styled.div``;
const CardImage = styled.img`
	grid-column-start: first-col;
	grid-row-start: first-row;
	margin-top: 30px;
	margin-left: 20px;
	width: 75%;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px;
	&:hover {
		cursor: pointer;
		box-shadow: 10px 10px 10px yellow;
	}
`;
const CardImageSelected = styled.img`
	grid-column-start: first-col;
	grid-row-start: first-row;
	margin-top: 30px;
	margin-left: 20px;
	width: 75%;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px yellow;
	&:hover {
		cursor: pointer;
	}
`;
const TalonWrapper = styled.div`
	display: grid;
	grid-template-columns: [first-col] 100%;
	grid-template-rows: [first-row] 100%;
`;
const MidCard = styled.img`
	grid-column-start: first-col;
	grid-row-start: first-row;
	margin-top: 15px;
	margin-left: 10px;
	width: 75%;
`;
const BotCard = styled.img`
	grid-column-start: first-col;
	grid-row-start: first-row;
	width: 75%;
`;
export default TalonPile;
