import styled from "styled-components";
import { IUserCardProps } from ".";

export const Container = styled.div<IUserCardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  background-color: ${(props) => props.theme.colors.grey10};
  padding: ${(props) => (props.profile ? "30px 0px" : "10px 0px")};

  width: 95%;
  height: 45%;

  margin: 24px 10px 15px 10px;

  @media screen and (min-width: 768px) {
    height: 55%;
    width: ${(props) => (props.profile ? "70%" : "80%")};
  }
`;

export const UserInfo = styled.div<IUserCardProps>`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: ${(props) => (props.profile ? "flex-start" : "center")};

  text-align: justify;

  > p {
    margin-bottom: 20px;
  }

  .info__card--heading {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: ${(props) => (props.profile ? "20px 0px" : "15px 0px")};
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

  a {
    width: 100%;
    margin: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 768px) {
    a {
      width: 100%;
    }
  }

  @media screen and (min-width: 900px) {
    button {
      width: 80%;
    }
  }
`;

export const UserCardImg = styled.div<IUserCardProps>`
  width:80px;
  height: 80px;
  background-color: ${props => props.theme.colors.random6};
  margin-bottom: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: ${props => props.theme.colors.whiteFixed};
    font-weight: 700;
    font-size: 35px;
    padding: 5px;
  }

`;

export const ContainerModalAd = styled.div`
  width: 90%;
  height: 90%;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow-y: scroll;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.grey10};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;

  .button__add--img {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 20px;
    height: 38px;
    background: ${(props) => props.theme.colors.brand4};
    border: 1.5px solid ${(props) => props.theme.colors.brand4};
    border-radius: 4px;
    cursor: pointer;
  }

  button,
  a {
    width: 100%;
  }

  p {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 480px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;

export const ContainerBoxModalAd = styled.div`
  width: 80%;

  .div__header--modalad {
    display: flex;
    align-self: center;
    justify-content: space-between;
  }

  .header__button--close {
    color: ${(props) => props.theme.colors.grey4};
    cursor: pointer;
    :hover {
      color: ${(props) => props.theme.colors.grey2};
    }
  }
  
`;