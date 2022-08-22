import React from "react";
import StockPile from "./StockPile.js";
import TalonPile from "./TalonPile.js";
import styled from "styled-components";

const StockSection = ({
	talon,
	drawThreeFromStock,
	setFromTalon,
	resetStock,
	deckAtZero,
}) => {
	return (
		<Wrapper>
			<StockPile
				drawThreeFromStock={drawThreeFromStock}
				resetStock={resetStock}
				deckAtZero={deckAtZero}
			/>
			<TalonPile talon={talon} setFromTalon={setFromTalon} />
		</Wrapper>
	);
};
const Wrapper = styled("div")`
	border: solid 2px black;
	border-radius: 10px;
	width: 25%;
	margin: 2%;
	padding: 1%;
	background-color: red;
`;

export default StockSection;
