import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	gap: 30px;
	margin: 0 30px;

	@media screen and (max-width: 320px) {
		.home-title {
			display: none;
		}
	}
`;

export const HomeSection = styled.div`
	display: flex;
	gap: 15px;
	overflow-x: scroll;

	::-webkit-scrollbar-track {
		border-radius: 8px;
		background-color: ${(props) => props.theme.colors.grey8};
	}

	::-webkit-scrollbar {
		height: 8px;
		width: 12px;
		background-color: ${(props) => props.theme.colors.grey8};
	}

	::-webkit-scrollbar-thumb {
		border-radius: 8px;
		background-color: rgba(0, 0, 0, 0.3);
	}
`;
