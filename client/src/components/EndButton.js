import styled from "styled-components";

const EndButton = ({ endGame }) => {
	const handleClick = () => {
		endGame();
	};

	return (
		<EndBut id="end-button" onClick={handleClick}>
			Give Up?
		</EndBut>
	);
};
// CSS styling for the End Button
const EndBut = styled("button")`
	font-size: 2.5vh;
	font-weight: bold;
	width: 30%;
	height: min-content;
	border: 2px solid black;
	border-radius: 10px;
	background-color: green;
	padding: 0.5%;
	margin-right: 4%;
	box-shadow: 5px 5px 3px;
	&:hover {
		cursor: pointer;

		box-shadow: 5px 5px 5px yellow;
	}
`;
export default EndButton;
