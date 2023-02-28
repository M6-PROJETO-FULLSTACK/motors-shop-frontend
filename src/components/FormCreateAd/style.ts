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

  .box--checkmark {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
  }

  .form-control--radio {
    max-width: 188px;
    width: 100%;
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
  }

  .form-control--radio input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .form-control--radio span {
    width: 100%;
    height: 38px;
    padding: 12px 28px;
    cursor: pointer;
    border-radius: 4px;

    font-size: 14px;
    font-family: ${props => props.theme.fonts.texts};
    border: 1.5px solid ${props => props.theme.colors.grey1};
    font-weight: 600;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    background-color: #eee;
  }

  .form-control--radio:hover input ~ .checkmark {
    background-color: ${props => props.theme.colors.grey0};
    color: ${props => props => props.theme.colors.whiteFixed};
  }

  .form-control--radio input:checked ~ .checkmark {
    background-color: ${props => props.theme.colors.brand1};
    color: ${props => props => props.theme.colors.whiteFixed};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .form-control--radio input:checked ~ .checkmark:after {
    display: block;
  }
`;