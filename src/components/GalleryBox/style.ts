import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: start;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.grey10};

  width: 95%;
  height: 45%;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: 55%;
  }

  @media screen and (min-width: 1024px) {
    width: 30%;
  }

  margin: 0 auto;

  .container__img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    gap: 10px;

    width: 90%;
    height: 70%;
  }
`;
