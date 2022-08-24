import React, {useState} from "react";
import LeaderboardItem from "./LeaderboardItem.js";
import styled from "styled-components";

const Leaderboard = ({ scores }) => {

	const [filterDifficulty, setFilterDifficulty] = useState('all')

	const changeFilter = (event) => {
		setFilterDifficulty(event.target.value);
	}
	const leaderboardAll = scores.map((score, index) => {

		return (
			<LeaderboardItem
				name={score.name}
				score={score.score}
				key={index}
				difficulty={score.difficulty}
			/>

		);})

		const normals = scores.filter(score => score.difficulty === "normal" );
		const leaderboardNormal = normals.map((score, index) => {
			return (
				<LeaderboardItem
				name={score.name}
				score={score.score}
				key={index}
				difficulty={score.difficulty}
			/>
			)
		})

		const colours = scores.filter(score => score.difficulty === "colours" );
		const leaderboardColours = colours.map((score, index) => {
			return (
				<LeaderboardItem
				name={score.name}
				score={score.score}
				key={index}
				difficulty={score.difficulty}
			/>
			)
		})

	return (
		<Wrapper>
			<Title>
				<u>Devil's Grip Leaderboard</u>
			</Title>
			<label htmlFor="filter">Choose a Difficulty: </label>
			<select name="filter" id ="filter" onChange={changeFilter}>
				<option defaultValue="all" value="all">All</option>
				<option value="normal">Normal</option>
				<option value="colours">Matching Colours</option>

			</select>
			<Title>Player Name - Score - Difficulty</Title>
			{ filterDifficulty === "all" ? <List>{leaderboardAll}</List> : filterDifficulty === "normal" ? <List>{leaderboardNormal}</List> : filterDifficulty === "colours" ? <List>{leaderboardColours}</List> : <p>npotjing</p>}
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

const Title = styled("h1")`
	text-align: center;
`;

const List = styled("ol")`
	font-size: 2rem;
`;

export default Leaderboard;
