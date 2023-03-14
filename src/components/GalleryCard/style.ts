import styled from "styled-components";

export const ImgBox = styled.figure`
  width: 30%;
  /* min-height: 30%; */
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.grey7};
  cursor: pointer;
  opacity: 0.8;

  border-radius: 5px;

  padding: 20px 2px;

  &:hover {
    background-color: ${(props) => props.theme.colors.grey6};
    opacity: 1;
  }

  @media screen and (min-width: 768px) {
    width: 25%;
    padding: 10px 2px;
  }

  @media screen and (min-width: 900px) {
    padding: 20px 2px;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 5px;
  }
`;
