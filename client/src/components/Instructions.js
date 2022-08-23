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
				After the pack is shuffled, 24 cards are dealt face up in three
				rows of eight columns. At any time, cards may be moved within
				this three-by-eight grid by changing places with one another.
				The remainder of the pack is placed face down to form the stock.
			</Text>
			<SubHeading>The Play</SubHeading>
			<Text>
				Cards may be placed on top of one another if they are of the
				same suit and adhere to one of the following bottom-to-top
				orders:2, 5, 8, J, 3, 6, 9, Q, 4, 7, 10, K The order may seem
				random, but it makes sense visually on the grid: deuces in the
				top row, threes in the middle, fours on the bottom row, then in
				the top row, fives, middle row sixes, and so on.
			</Text>
			<SubHeading>The Spaces</SubHeading>
			<Text>
				When an empty space appears as a result of stacking one card on
				top of another, the top card of the stock is drawn to replace
				it. This is the only way that the base cards deuces, threes and
				fours can make it onto the grid. If there are no empty spaces,
				cards are turned up in the traditional Solitaire manner - groups
				of three - and these cards are left face up in a pile to form
				the talon. Cards of the correct suit may be taken and placed on
				top of appropriate cards already on the grid. Thus, the eight of
				spades may be placed on the five of spades. It is not necessary
				for the five to already be on top of a two of spades.
			</Text>
			<SubHeading>The End</SubHeading>
			<Text>
				Play continues until no more cards can enter the grid. Usually,
				every pile will have a picture card on top. The cards left in
				the talon are counted to become the player's score - the lower
				the better. It is rare to play out the entire deck. A score of
				10 or fewer cards left in the talon is "good"; a score of five
				cards or under is "excellent"; and 2 or fewer cards is
				"brilliant."
			</Text>
		</Wrapper>
	);
};

const Wrapper = styled("div")`
	border: solid black 2px;
	border-radius: 5px;
	text-align: center;
	width: 80%;
	background-color: white;
`;

const MainHeading = styled("h3")`
	font-weight: bold;
	text-decoration: underline;
`;
const SubHeading = styled("h4")`
	font-weight: bold;
	text-decoration: underline;
`;
const Text = styled("p")``;

export default Instructions;
