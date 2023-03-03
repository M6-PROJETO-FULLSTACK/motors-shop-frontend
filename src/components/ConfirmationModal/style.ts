import styled from "styled-components";

export const TitleBox = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 40px;

	button {
		border: 0;
		background-color: transparent;
		color: ${(props) => props.theme.colors.grey4};
		cursor: pointer;
	}

	.main-title {
	}
`;

export const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
