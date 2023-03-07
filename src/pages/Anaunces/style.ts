import styled from "styled-components";


export const ContainerUserCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.grey10};
  padding: 30px 0px;

  width: 95%;
  height: 45%;

  margin: 24px 10px 15px 10px;

  @media screen and (min-width: 768px) {
    height: 55%;
    width: 70%
  }
`
export const UserInfo = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  text-align: justify;

  > p {
    margin-bottom: 20px;
  }

  .info__card--heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 20px 0px;
    gap: 8px;

    span {
      background-color: ${(props) => props.theme.colors.brand4};
      color: ${(props) => props.theme.colors.brand1};

      border-radius: 4px;
      padding: 5px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  button {
    width: 80%;
    margin: 20px 0px;
  }

  @media screen and (min-width: 768px) {
    button {
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    button {
      width: 80%;
    }
  }
`
export const UserCardImg = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${props => props.theme.colors.random6};
  margin-bottom: 15px;
  border-radius: 50%;
  max-width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: ${props => props.theme.colors.whiteFixed};
    font-weight: 700;
    font-size: 40px;

  }
`

export const ContainerAnaunces = styled.div`
  width: 100%;
  min-height: 88vh;
  background-color: ${(props) => props.theme.colors.grey7};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`