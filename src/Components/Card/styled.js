import styled from "styled-components";

export const Box = styled.div`
	display: flex;
	flex: 1 0 ${(props) => props.boxSize + "%"}; // control through code
	margin: 5px;
	background-color: ${(props) => (props.darkMode ? "#263955" : "#4A5568")};
	cursor: pointer;
	justify-content: center;
	align-items: center;
`;
