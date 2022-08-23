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
			<h1>
				<u>Devil's Grip Leaderboard</u>
			</h1>
			<Ol>{leaderboardItem}</Ol>
		</Wrapper>
	);
};


const Wrapper = styled("div")`
	border: solid black 2px;
	border-radius: 10px;
	background-color: green;
	padding: 3%;
`;

const Ol = styled("ol")`
	font-size: 2rem;
`;

export default Leaderboard;
