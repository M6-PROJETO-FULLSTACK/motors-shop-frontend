import styled from "styled-components";

export const ContainerPage = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.grey7};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
