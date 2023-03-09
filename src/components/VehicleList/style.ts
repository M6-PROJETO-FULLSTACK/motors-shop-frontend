import styled from "styled-components";

export const ContainerSection = styled.section`
  margin: 60px 0px;

  .list--cards__empty {
    margin: 30px;
  }  
  .carrossel_container{
    width: 100%;
    display: flex;
    justify-content: space-between;

    .carrossel{
      border: none;
      background-color: transparent;
      color: black;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const ContainerList = styled.div`
  display: flex;
  gap: 25px;
  overflow-x: scroll;
  margin-top: 40px;

  padding: 20px 0px;

  ::-webkit-scrollbar{
    display: none;
  }

`;
