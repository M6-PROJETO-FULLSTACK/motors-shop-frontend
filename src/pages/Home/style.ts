import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 30px;
  margin: 0 30px;

  .home-title {
    margin-top: 100px;
  }

  @media screen and (max-width: 320px) {
    .home-title {
      display: none;
    }
  }
`;

export const HomeSection = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: scroll;
  margin-top: 60px;
`;
