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
  padding-bottom: 30px;

  span {
    width: 90%;
    text-align: start;
    margin-top: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-top: 45px;
  }

  .container__img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    gap: 10px;

    width: 90%;
    height: 80%;

    padding-top: 20px;

    @media screen and (min-width: 768px) {
      padding-top: 15px;
    }

    @media screen and (min-width: 900px) {
      gap: 15px;
      padding-top: 30px;
    }
  }
`;
