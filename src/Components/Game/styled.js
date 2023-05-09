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
	animation-name: ${(props) => (props.darkModeToggled ? "" : renderAnimation)};
	animation-duration: 1s;
	background-color: ${(props) => (props.darkMode ? "#1a202c" : "white")};
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
	width: 480px;
`;

export const TopLevel = styled.div`
	height: auto;
	width: 400px;
	margin: auto;
	text-align: center;
	font-size: 24px;
	color: ${(props) => (props.darkMode ? "white" : "black")};
`;

export const SettingsContainer = styled.div`
	display: flex;
	padding-top: 30px;
	padding-bottom: 15px;
	align-items: center;
`;
export const CurrentLevel = styled.div`
	height: auto;
	width: 400px;
	color: ${(props) => (props.darkMode ? "white" : "black")};
	font-size: 24px;
`;
export const ModeBtn = styled.button`
	color: ${(props) => (props.darkMode ? "white" : "black")};
	height: auto;
	width: 200px;
	padding: 10px 10px;
	margin: 0;
	font-size: 22px;
	background: none;
	border: 1px solid;
	cursor: pointer;
`;
