import React from 'react'
import styled from 'styled-components'

const LeaderboardItem = ({name, score, difficulty, key}) => {
  return (
    <li><H2>{name} - {score} - {difficulty}</H2></li>
  )
}
const H2 = styled("h2")`
	border: solid black 2px;
	border-radius: 5px;
	text-align: center;
	width: 80%;
	background-color: white;
`;
export default LeaderboardItem