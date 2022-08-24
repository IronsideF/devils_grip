import React from "react";
import styled from "styled-components";

const LeaderboardItem = ({ name, score, difficulty, key }) => {
	return (
		<li>
			<H2 className="player-name">

				{name} - {score} - {difficulty}
			</H2>
		</li>
	);
};
// CSS stylign for the individual scores on leaderboard
const H2 = styled("h2")`
	border: solid black 2px;
	border-radius: 5px;
	text-align: center;
	width: 90%;
	background-color: white;
	font-size: 2rem;
`;
export default LeaderboardItem;
