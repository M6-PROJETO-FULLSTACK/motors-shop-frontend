import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.grey10};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-radius: 5px;

  button {
    width: 100%;
    margin: 10px 0;
  }

  a {
    width: 100%;
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

  > p {
    margin: 15px 0;
  }

  span {
    width: 100%;
    text-align: end;
    margin-bottom: 5px;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ContainerBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  button {
    width: 100%;
    margin: 10px 0px;

    @media screen and (min-width: 768px) {
      width: 45%;
    }
  }
`;
