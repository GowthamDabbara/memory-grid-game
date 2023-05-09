import styled from "styled-components";

export const Box = styled.div`
	display: flex;
	flex: 1 0 ${(props) => props.boxSize + "%"}; // control through code
	margin: ${(props) =>
		props.level < 4 ? "5px" : props.level > 6 ? "3px" : "4px"};
	background-color: ${(props) => (props.darkMode ? "#263955" : "#4A5568")};
	cursor: pointer;
	justify-content: center;
	align-items: center;
`;
