import React, {useState} from "react";
import styled from "styled-components";
import {postScore} from "../services/DevilService.js"


const GameOverScreen = ({ score, exitGameOver, addScore }) => {

	const [formData, setFormData] = useState('')
	const [submitted, setSubmitted] = useState(false)

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

	const handleSubmit = (event) => {
		event.preventDefault()
		let userScore = {
			name: formData,
			score: score
		}
		postScore(userScore).then((data) => {
			addScore(data);
		})
		setSubmitted(true);
	}

	const handleChange = (event) => {
		setFormData(event.target.value)
	}

	return (
		<>
			<Score>Your Score was: {score}</Score>
			<Message>{evaluation}</Message>
			{submitted ? <Message >Score Submitted</Message> : <form id="score-submit" onSubmit={handleSubmit}>
				<label name="name" id="name"> Name: </label>
				<input type="text" id="name" className="name" placeholder="Input your name here" required onChange={handleChange}/>
				
				<input type="submit" value="Save" id="save" />
			</form>} 
			
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
