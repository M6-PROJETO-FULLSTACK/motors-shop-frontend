import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.grey7};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerMain = styled.main`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCards = styled.aside`
  width: 90%;
`;
