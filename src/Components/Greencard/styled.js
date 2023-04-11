import styled, { keyframes } from "styled-components";

const renderBox = keyframes`
    0%{
        width: 0;
        height: 0;
    }
    100%{
        width: 100%;
        height: 100%;
    }
`;

export const BoxGreen = styled.div`
	background-color: #40a09a;
	cursor: pointer;
	height: 100%;
	width: 100%;
	animation-name: ${(props) =>
		props.clicked
			? renderBox
			: ""}; // control through code (renderBox), hide, clicked.
	animation-duration: 0.15s;
	animation-delay: 0s;
	display: ${(props) =>
		props.hideCards
			? props.clicked
				? "block"
				: "none"
			: "block"}; // control through code (hide ? (clicked ? block : none) : block)
`;
