import React from "react";
import styled from "styled-components";

const EndButton = ({ endGame }) => {
	const handleClick = () => {
		endGame();
	};

	return <EndBut id="end-button" onClick={handleClick}>Give Up?</EndBut>;
};

const EndBut = styled("button")`
	font-size: 1.5rem;
	font-weight: bold;
	margin: 1%;
	width: 10%;
	height: 50px;
	border: 2px solid black;
	border-radius: 10px;
	background-color: green;
	padding: 0.5%;
	box-shadow: 5px 5px 3px;
	&:hover {
		cursor: pointer;

		box-shadow: 5px 5px 5px yellow;
	}
`;
export default EndButton;
