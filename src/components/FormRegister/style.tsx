import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.grey10};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  button,
  a {
    width: 100%;
  }

  p {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 480px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;

export const ContainerBox = styled.div`
  width: 80%;
`;

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
    margin-bottom: 10px;
  }
`;
