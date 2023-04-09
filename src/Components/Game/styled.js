import styled, { keyframes } from "styled-components";

const renderAnimation = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

export const Parent = styled.div`
	display: flex;
	flex-wrap: wrap;
	min-width: 400px;
	max-width: 500px;
	aspect-ratio: 1 / 1;
	animation-name: ${renderAnimation};
	animation-duration: 1s;
`;
