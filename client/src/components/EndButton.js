import React from "react";
import styled from "styled-components";

const EndButton = ({ endGame }) => {
	const handleClick = () => {
		endGame();
	};

	return <EndBut id="end-button" onClick={handleClick}>Give Up?</EndBut>;
};

const EndBut = styled("button")`
	margin: 1%;
	border: 2px solid black;
	border-radius: 10px;
	background-color: green;
	padding: 0.5%;
	box-shadow: 5px 5px 3px;
	&:hover {
		cursor: pointer;
	}
`;
export default EndButton;
