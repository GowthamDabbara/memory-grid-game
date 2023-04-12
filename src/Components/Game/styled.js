import styled, { keyframes } from "styled-components";

const renderAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const Parent = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 500px;
	aspect-ratio: 1 / 1;
	animation-name: ${renderAnimation};
	animation-duration: 1s;
	background-color: #1a202c;
`;

export const MainContainer = styled.div`
	height: ${window.innerHeight + "px"};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => (props.darkMode ? "#1a202c" : "white")};
`;

export const DetailsContainer = styled.div`
	height: auto;
	width: 400px;
`;

export const TopLevel = styled.div`
	height: auto;
	width: 400px;
	text-align: center;
`;

export const SettingsContainer = styled.div`
	display: flex;
	padding-top: 30px;
	padding-bottom: 15px;
`;
export const CurrentLevel = styled.div`
	height: auto;
	width: 400px;
`;
export const ModeBtn = styled.button`
	height: auto;
	width: 110px;
	padding: 2px;
	margin: 0;
	background: transparent;
`;
