import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.grey7};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ContainerMain = styled.main`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 70%;
  }
`;

export const ContainerCards = styled.aside`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: 100%;
  }
`;
