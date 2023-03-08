import styled from "styled-components";

export const ProductCardContainer = styled.div`
  min-width: 312px;
  min-height: 350px;
  max-width: 312px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  /* border: 1px solid red; */

  .productLink {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.grey1};
  }

  .card__container-header {
    width: 100%;
    height: 48%;
    position: relative;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
    }
  }

  .card--status {
    padding: 4px 9px;
    color: ${({ theme }) => theme.colors.grey8};
    position: absolute;
    left: 8px;
    top: 8px;
  }

  .active {
    background-color: ${({ theme }) => theme.colors.brand1};
  }

  .inactive {
    background-color: ${({ theme }) => theme.colors.grey4};
  }

  @media screen and (max-width: 375px) {
    min-width: 80vw;
    min-height: 100vh;
  }
`;

export const ProductCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  justify-content: space-between;

  & > .body2 {
    color: ${({ theme }) => theme.colors.grey2};
  }

  @media screen and (max-width: 375px) {
    max-width: 90%;
    min-height: 50vh;
  }
`;

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & > :nth-child(-n + 2) {
    color: ${({ theme }) => theme.colors.brand1};
  }
`;

export const ProductCardBtn = styled.div`
  width: 100%;
  margin-top: 10px;

  button {
    margin-right: 10px;
    padding: 15px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media screen and (max-width: 375px) {
      width: 40%;
    }
  }
`;
