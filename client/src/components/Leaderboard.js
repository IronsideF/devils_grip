import React, { useState } from "react";
import LeaderboardItem from "./LeaderboardItem.js";
import styled from "styled-components";

const Leaderboard = ({ scores }) => {
	const [filterDifficulty, setFilterDifficulty] = useState("all");

	const changeFilter = (event) => {
		setFilterDifficulty(event.target.value);
	};
	const leaderboardAll = scores.map((score, index) => {
		return (
			<LeaderboardItem
				name={score.name}
				score={score.score}
				key={index}
				difficulty={score.difficulty}
			/>
		);
	});

	const normals = scores.filter((score) => score.difficulty === "Normal");
	const leaderboardNormal = normals.map((score, index) => {
		return (
			<LeaderboardItem
				name={score.name}
				score={score.score}
				key={index}
				difficulty={score.difficulty}
			/>
		);
	});

	const colours = scores.filter((score) => score.difficulty === "Colours");
	const leaderboardColours = colours.map((score, index) => {
		return (
			<LeaderboardItem
				name={score.name}
				score={score.score}
				key={index}
				difficulty={score.difficulty}
			/>
		);
	});

	return (
		<Wrapper>
			<Title>
				<u>Devil's Grip Leaderboard</u>
			</Title>
			<FilterLabel htmlFor="filter">Choose a Difficulty: </FilterLabel>
			<FilterSelect name="filter" id="filter" onChange={changeFilter}>
				<option defaultValue="all" value="all">
					All
				</option>
				<option value="Normal">Normal</option>
				<option value="Colours">Matching Colours</option>
			</FilterSelect>
			<Title>Player Name - Score - Difficulty</Title>
			{filterDifficulty === "all" ? (
				<List>{leaderboardAll}</List>
			) : filterDifficulty === "Normal" ? (
				<List>{leaderboardNormal}</List>
			) : filterDifficulty === "Colours" ? (
				<List>{leaderboardColours}</List>
			) : (
				<p>npotjing</p>
			)}
		</Wrapper>
	);
};

// CSS styling for leaderboard
const Wrapper = styled("div")`
	border: solid black 2px;
	border-radius: 10px;
	background-color: green;
	padding: 3%;
	width: max-content;
`;

const FilterLabel = styled("label")`
	font-size: 3vh;
	font-weight: bold;
	color: white;
`;

const FilterSelect = styled("select")`
	border-radius: 10px;
	background-color: red;
	width: min-content;
	font-size: 3.5vh;
	font-weight: bold;
	padding: 0.5%;
	margin-bottom: 2%;
	text-align: center;
`;

const Title = styled("h1")`
	text-align: center;
	font-size: 4vh;
`;

const List = styled("ol")`
	font-size: 3vh;
`;

export default Leaderboard;
