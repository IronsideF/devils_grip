import React from "react";
import styled from "styled-components";

const PlayButton = ({ getDeck }) => {
	const handleStart = () => {
		getDeck();
	};

	return (
		<StartButton name="" onClick={handleStart}>
			Start Game
		</StartButton>
	);
};

const StartButton = styled("div")`
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
export default PlayButton;
