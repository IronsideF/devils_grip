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
					src={cardImage}
					alt="Card Back"
					onClick={drawThreeFromStock}
				/>
			)}
		</>
	);
};

const StockHolder = styled.div`
	border: solid 5px black;
	border-radius: 5px;
	width: 10vw;
	height: 149px;
`;
const CardImage = styled("img")`
	margin: 2%;
	width: 10vw;
	border-radius: 10px;
	background-color: black;
	box-shadow: 10px 10px 10px;
	&:hover {
		cursor: pointer;
	}
`;
export default StockPile;
