import React from "react";
import styled from "styled-components";

const Instructions = () => {
	return (
		<Wrapper id="instructions">
			<MainHeading>How To Play</MainHeading>
			<SubHeading>Object of the Game</SubHeading>
			<Text>
				The goal is to place the entire deck into the piles on the grid,
				winding up with jacks on top in the top row, queens on top in
				the middle row, and kings on top in the bottom row.
			</Text>
			<SubHeading>The Deck</SubHeading>
			<Text>
				Two standard 52-card packs are stripped of all the aces, leaving
				a deck of 96 cards.
			</Text>
			<SubHeading>The Deal</SubHeading>
			<Text>
				The grid is populated with 24 random cards face up. One card on
				each pile <br />
				At any time, cards may be moved within the three-by-eight grid
				by changing places with one another. The remainder of the pack
				is placed face down to form the stock.
			</Text>
			<SubHeading>The Play</SubHeading>
			<Text>
				Cards may be placed on top of one another if they are of the
				same suit and adhere to one of the following bottom-to-top
				orders:
				<br />
				2, 5, 8, J <br />
				3, 6, 9, Q <br />
				4, 7, 10, K <br />
				The order may seem random, but it makes sense visually on the
				grid: deuces in the top row, threes in the middle, fours on the
				bottom row, then in the top row, fives, middle row sixes, and so
				on.
			</Text>
			<SubHeading>The Spaces</SubHeading>
			<Text>
				When an empty space appears after stacking one card on top of
				another, the top card of the stock is automatically put into the
				new space. This is the only way that the base cards deuces,
				threes and fours can make it onto the grid. <br />
				If there are no empty spaces, cards are turned up in groups of
				three, with only the top card accessible. Cards of the correct
				suit may be taken and placed on top of appropriate cards already
				on the grid. <br />
				Thus, the eight of spades may be placed on the five of spades.
				It is not necessary for the five to already be on top of a two
				of spades.
			</Text>
			<SubHeading>The End</SubHeading>
			<Text>
				Play continues until no more cards can enter the grid. The cards
				left in the talon are counted to become the player's score - the
				lower the better. <br />
				It is rare to play out the entire deck. A score of 10 or fewer
				cards left in the talon is "good"; a score of five cards or
				under is "excellent"; and 2 or fewer cards is "brilliant."
			</Text>
		</Wrapper>
	);
};
// CSS for displaying the instructions
const Wrapper = styled("div")`
	border: solid black 2px;
	border-radius: 5px;
	text-align: center;
	width: 80%;
	background-color: rgba(254, 254, 254, 0.8);
	padding: 2%;
`;

const MainHeading = styled("h3")`
	font-weight: bold;
	text-decoration: underline;
	font-size: 3.5vh;
	margin: 0;
`;
const SubHeading = styled("h4")`
	font-weight: bold;
	text-decoration: underline;
	font-size: 3vh;
	margin: 1%;
`;
const Text = styled("p")`
	font-size: 2vh;
`;

export default Instructions;
