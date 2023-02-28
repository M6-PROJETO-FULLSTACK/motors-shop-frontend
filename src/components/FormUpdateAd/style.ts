import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  section {
    width: 100%;
  }

  .input--box {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 5px;
  }

  .input--box_button {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .button__add--img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    gap: 10px;

    width: 100%;
    height: 38px;

    background: ${(props) => props.theme.colors.brand4};
    border: 1.5px solid ${(props) => props.theme.colors.brand4};
    border-radius: 4px;

    font-family: ${(props) => props.theme.fonts.texts};
    font-weight: 600;
    font-size: 12px;
    color: ${(props) => props.theme.colors.brand1};
  }
`;