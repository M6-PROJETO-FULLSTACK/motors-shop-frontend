import styled from "styled-components";

export const Container = styled.div`
  .div__card--auction {
    overflow-x: scroll;
    display: flex;
    gap: 15px;

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
  }
`;
