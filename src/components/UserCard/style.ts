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
`;

export const UserCardImg = styled.img<IUserCardProps>`
  width: ${(props) => props.profile && "80px"};
  margin-bottom: 15px;
  border-radius: 50%;
  max-width: 25%;
`;
