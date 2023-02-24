import styled from "styled-components";

export const ContainerPage = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.grey6};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .blue{
    background-color: ${props => props.theme.colors.brand1};
    height: 510px;
    width: 100%;
    position: absolute;
    top: 80px;
  }
  

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    top: 80px;
  }
`;

export const ContainerMain = styled.main`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: transparent;
  z-index: 0;
  
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  `;

export const ContainerCards = styled.aside`
  width: 90%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  z-index: 0;
  
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 100%;
  }
`;

