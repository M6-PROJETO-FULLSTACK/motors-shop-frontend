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

  margin: 10px 10px 15px 10px;
  padding: 10px;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: 55%;
  }

  @media screen and (min-width: 1024px) {
    width: 30%;
  }

  padding-bottom: 30px;

  .container__img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    gap: 10px;

    width: 90%;
    height: 80%;

    padding-top: 20px;
  }
`;
