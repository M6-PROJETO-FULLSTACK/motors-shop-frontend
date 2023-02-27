import styled from "styled-components";

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;

  button {
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.colors.grey4};
    cursor: pointer;
  }
`;

export const Content = styled.div`
  p {
    margin: 20px 0px;
  }
  button {
    width: 45%;
  }
`;
