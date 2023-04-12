import styled, { keyframes } from "styled-components";

const renderBox = keyframes`
    0%{
        width: 0;
        height: 100%;
    }
    100%{
        width: 100%;
        height: 100%;
    }
`;

export const BoxRed = styled.div`
	background-color: #e55451;
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
		props.clicked
			? "block"
			: "none"}; // control through code (hide ? (clicked ? block : none) : block)
`;
