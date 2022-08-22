import React from "react";
import styled from "styled-components";

const TalonPile = ({ talon, setFromTalon }) => {
	const topCard = talon.at(-1);
	const handleClick = () => {
		setFromTalon(topCard);
	};

	return (
		<>
			{talon.length ? (
				<CardImage
					src={topCard.image}
					alt={topCard.code}
					onClick={handleClick}
				/>
			) : (
				<TalonHolder></TalonHolder>
			)}
		</>
	);
};

const TalonHolder = styled.div`
	border: solid 5px red;
	border-radius: 5px;
`;
const CardImage = styled("img")`
	margin: 2%;
	width: 40%;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px;
	&:hover {
		cursor: pointer;
	}
`;

export default TalonPile;
