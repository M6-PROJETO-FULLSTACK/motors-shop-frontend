import styled from "styled-components";

export const ContainerSection = styled.section`
  margin: 60px 0px;

  .list--cards__empty {
    margin: 30px;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  gap: 25px;
  overflow-x: scroll;
  margin-top: 40px;

  padding: 20px 0px;

  ::-webkit-scrollbar-track {
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.grey8};
  }

  ::-webkit-scrollbar {
    height: 8px;
    width: 12px;
    background-color: ${(props) => props.theme.colors.grey8};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
