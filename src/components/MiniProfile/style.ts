import styled from "styled-components";

export const MiniProfileContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

    .mini-username {
        color: ${({ theme }) => theme.colors.grey2};
    }
`;

export const MiniProfileAvatar = styled.div`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.whiteFixed};
	font-size: 14px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.brand1};
`;
