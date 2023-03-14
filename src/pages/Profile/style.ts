import styled from "styled-components";

export const ContainerPage = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.grey7};

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ProductsContainer = styled.div`
  width: 95%;
  margin-bottom: 90px;

  .list--cards__empty {
    margin-top: 30px;
    width: 100%;
    text-align: center;

    p {
      margin-top: 20px;
    }
  }
`;

export const VehicleSection = styled.section`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  margin-top: 60px;

  .text {
    text-align: center;
    margin-top: 30px;
  }
`;
