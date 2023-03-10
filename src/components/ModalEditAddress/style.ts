import styled from "styled-components";

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	gap: 24px;
	font-family: ${({ theme }) => theme.fonts.texts};

	& > div {
		display: flex;
		flex-direction: column;
		gap: 8px;

		& > label {
			font-size: 14px;
			font-weight: 500;
			color: ${({ theme }) => theme.colors.grey1};
		}

		& > input {
			width: 100%;
			height: 48px;
			padding: 0 16px;
			border: 1.5px solid ${({ theme }) => theme.colors.grey7};
			border-radius: 4px;
			font-size: 16px;
			font-weight: 400;
			color: ${({ theme }) => theme.colors.grey1};
			outline: none;
		}

		& > input:focus {
			border: 1.5px solid ${({ theme }) => theme.colors.brand2};
		}

		& > input::placeholder {
			color: ${({ theme }) => theme.colors.grey3};
		}

		& > textarea {
			width: 100%;
			height: 100px;
			padding: 16px;
			border: 1.5px solid ${({ theme }) => theme.colors.grey7};
			border-radius: 4px;
			font-size: 16px;
			font-weight: 400;
			color: ${({ theme }) => theme.colors.grey1};
			outline: none;
			resize: none;
		}

		& > textarea:focus {
			border: 1.5px solid ${({ theme }) => theme.colors.brand2};
		}

		.error-message {
			font-size: 12px;
			font-weight: 400;
			color: ${({ theme }) => theme.colors.alert1};
		}
	}
`;

export const ButtonsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row !important;
	justify-content: flex-end;
	gap: 16px;

	.save-button {
		width: fit-content;
		height: 48px;
		padding: 12px 28px;
		background-color: ${({ theme }) => theme.colors.brand1};
		border: 1.5px solid ${({ theme }) => theme.colors.brand1};
		border-radius: 4px;
		color: ${({ theme }) => theme.colors.whiteFixed};
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}

	.cancel-button {
		width: fit-content;
		height: 48px;
		padding: 12px 28px;
		background-color: ${({ theme }) => theme.colors.grey6};
		border: 1.5px solid ${({ theme }) => theme.colors.grey6};
		border-radius: 4px;
		color: ${({ theme }) => theme.colors.grey2};
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		flex-direction: column !important;
		align-items: center;

		.save-button {
			width: 100%;
			font-size: 14px;
		}

		.cancel-button {
			width: 100%;
		}
	}
`;
