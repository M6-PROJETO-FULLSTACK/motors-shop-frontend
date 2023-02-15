import styled from "styled-components";

export const Container = styled.div`
  .h2__card--auction {
    font-family: "Lexend";
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
  }

  .div__card--auction {
    overflow-x: scroll;
    display: flex;
    gap: 15px;

    ::-webkit-scrollbar-track {
      border-radius: 8px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar {
      height: 8px;
      width: 12px;
      background-color: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`;
