import styled from "styled-components";

export const ImgBox = styled.figure`
  width: 30%;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey7};

  border-radius: 5px;

  img {
    width: 90%;
    margin: 0 auto;
  }
`;
