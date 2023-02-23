import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
`;

export const UserInfo = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  text-align: justify;

  button {
    width: 80%;
  }
`;

export const UserCardImg = styled.img`
  border-radius: 50%;
  max-width: 25%;
`;
