import React from "react";
import styled from "styled-components";


const GameOverScreen = ({ score, exitGameOver }) => {
	let evaluation;
	if (score < 73) {
		evaluation = " Did you click give up by mistake?";
	}
	if (score < 50) {
		evaluation = " You've started, and that's the first step to winning";
	}
	if (score < 20) {
		evaluation =
			" That's what I'm talking about, you're really getting there";
	}
	if (score < 10) {
		evaluation = " This is considered a good game by the Devil's Grip pros";
	}
	if (score < 5) {
		evaluation =
			" This is considered an excellent game by the Devil's Grip pros";
	}
	if (score < 3) {
		evaluation = " That's a brilliant game!";
	}
	if (score === 0) {
		evaluation = " You've done it! You are the Devil Gripper!";
	}

	return (
		<>
			<Score>Your Score was: {score}</Score>
			<Message>{evaluation}</Message>
			<DoneButton onClick={exitGameOver}>Done</DoneButton>
		</>
	);
};

const Score = styled("h3")`
	color: white;
`;

const Message = styled("h3")`
	color: white;
`;

const DoneButton = styled("button")`
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

export default GameOverScreen;
