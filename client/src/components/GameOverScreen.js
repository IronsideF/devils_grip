import React, { useState } from "react";
import styled from "styled-components";
import { postScore } from "../services/DevilService.js";


const GameOverScreen = ({ score, exitGameOver, addScore, difficulty}) => {

	const [formData, setFormData] = useState('')
	const [submitted, setSubmitted] = useState(false)
	// logic for what message to display depending on scores
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
	// handle when Save button is clicked
	const handleSubmit = (event) => {
		event.preventDefault();
		let userScore = {
			name: formData,
			score: score,
			difficulty: difficulty
		}

		postScore(userScore).then((data) => {
			addScore(data);
		});
		setSubmitted(true);
	};
	//Handle change when name is entered 
	const handleChange = (event) => {
		setFormData(event.target.value);
	};

	return (
		<Wrapper>
			<Score>Your Score was: {score}</Score>
			<Message>{evaluation}</Message>
			{submitted ? (
				<Message>Score Submitted</Message>
			) : (
				<NameForm id="score-submit" onSubmit={handleSubmit}>
					<NameLabel name="name" id="name">
						{" "}
						Name:{" "}
					</NameLabel>
					<NameInput
						type="text"
						id="name"
						placeholder="Input your name here"
						required
						onChange={handleChange}
					/>

					<Save type="submit" value="Save" id="save" />
				</NameForm>
			)}

			<DoneButton onClick={exitGameOver}>Home</DoneButton>
		</Wrapper>
	);
};
// CSS styling for Game Over Screen
const Wrapper = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	border: solid black 2px;
	background-color: rgba(254, 254, 254, 0.6);
	border-radius: 10px;
	margin-bottom: 2%;
	padding: 1%;
	width: 60%;
`;

const Score = styled("h3")`
	margin: 1% 0;
	font-size: 3rem;
	font-weight: bold;
	color: black;
`;

const Message = styled("h3")`
	margin: 1% 0;
	font-size: 2rem;
	font-weight: bold;
	color: black;
	padding: 2%;
	text-align: center;
`;

const NameForm = styled("form")`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NameLabel = styled("label")`
	font-weight: bold;
	font-size: 1.5rem;
`;

const NameInput = styled("input")`
	border-radius: 5px;
	width: 200px;
	height: 30px;
	text-align: center;
	margin: 1%;
`;

const Save = styled("input")`
	font-size: 1.5rem;
	font-weight: bold;
	margin-bottom: 5%;
	width: 50%;
	height: 50px;
	border: 2px solid black;
	border-radius: 10px;
	background-color: red;
	padding: 0.5%;
	box-shadow: 5px 5px 3px;
	&:hover {
		cursor: pointer;

		box-shadow: 5px 5px 5px yellow;
	}
`;

const DoneButton = styled("button")`
	font-size: 1.5rem;
	font-weight: bold;
	margin: 1%;
	width: 40%;
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

export default GameOverScreen;
