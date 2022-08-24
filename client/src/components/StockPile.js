import React from "react";
import styled from "styled-components";
import cardImage from "../Images/voodoo.webp";

const StockPile = ({ drawThreeFromStock, resetStock, deckAtZero }) => {
	return (
		<>
			{deckAtZero ? (
				<StockHolder onClick={resetStock}></StockHolder>
			) : (
				<CardImage
					id="card-back"
					src={cardImage}
					alt="Card Back"
					onClick={drawThreeFromStock}
				/>
			)}
		</>
	);
};
// CSS styling for Stock Cards
const StockHolder = styled.div`
	border: solid 5px black;
	border-radius: 5px;
	padding: 3%;
	width: 40%;
	height: min-content;
`;
const CardImage = styled("img")`
	margin-right: 5%;
	width: 40%;
	height: min-content;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px;
	&:hover {
		cursor: pointer;
	}
`;
export default StockPile;
