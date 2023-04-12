import styled, { keyframes } from "styled-components";

const renderBoxSecond = keyframes`
    0%{
        width: 0;
        height: 0;
    }
    100%{
        width: 100%;
        height: 100%;
    }
`;

const renderBoxFirst = keyframes`
    0%{
        width: 100%;
        height: 100%;
    }
    100%{
        width: 0;
        height: 0;
    }
`;

export const BoxGreen = styled.div`
	background-color: #40a09a;
	cursor: pointer;
	height: ${(props) => (props.hideCards ? "0%" : "100%")};
	width: ${(props) => (props.hideCards ? "0%" : "100%")};
	animation-name: ${(props) => (props.hideCards ? renderBoxFirst : "")};
	animation-duration: 0.15s;
	animation-delay: 0s;
	display: block; // control through code (hide ? (clicked ? block : none) : block)
`;

export const BoxGreenTwo = styled.div`
	background-color: #40a09a;
	cursor: pointer;
	height: 100%;
	width: 100%;
	animation-name: ${renderBoxSecond};
	animation-duration: 0.15s;
	animation-delay: 0s;
	display: ${(props) =>
		props.clicked
			? "block"
			: "none"}; // control through code (hide ? (clicked ? block : none) : block)
`;
