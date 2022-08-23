import React from "react";
import LeaderboardItem from "./LeaderboardItem.js";
import styled from "styled-components";

const Leaderboard = ({ scores }) => {
	const leaderboardItem = scores.map((score, index) => {
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
			<Title>Player Name - Score - Difficulty</Title>
			<List>{leaderboardItem}</List>
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
