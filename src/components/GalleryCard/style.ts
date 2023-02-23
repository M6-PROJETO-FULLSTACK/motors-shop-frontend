import styled from "styled-components";

export const ImgBox = styled.figure`
  width: 30%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey7};

  border-radius: 5px;

  padding: 20px 2px;

  img {
    width: 80%;
    margin: 0 auto;
  }
`;
