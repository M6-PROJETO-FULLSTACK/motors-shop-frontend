import styled from "styled-components";

interface IImgAuctionCard {
  img: string
}

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerCard = styled.div<IImgAuctionCard>`
  * {
    margin: 0px;
  }

  height: 330px;

  @media screen and (max-width: 712px) {
    height: 27rem;
  }

  @media screen and (max-width: 664px) {
    width: 34rem;
  }

  @media screen and (max-width: 561px) {
    width: 30rem;
  }

  @media screen and (max-width: 512px) {
    width: 24rem;
  }

  @media screen and (max-width: 400px) {
    width: 22rem;
  }

  @media screen and (max-width: 369px) {
    width: 17rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  border-radius: 8px 8px 0px 0px;
  

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.29) 0%,
      #000000 100%
    ),
    url(${({img}) => img});
  background-repeat: round;

  .card__infos {
    gap: 65px;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 369px) {
      gap: 20px
    }

    @media screen and (max-width: 712px) {
      justify-content: space-between;
    }

    .card__info--time {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 5px;
      padding: 8px;

      width: 7rem;

      background: #ffffff;
      border-radius: 32px;

      .p__info--time {
        font-family: 'Lexend';
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #212529;
      }
    }
  }
`;

export const DivInfosCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 400px) {
    gap: 8px
  }

  .card__info--name {
    color: #fdfdfd;
  }

  .card__info--description {
    color: #ced4da;
  }

  .div__info--owner {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .info__owner--img {
    width: 32px;
    height: 32px;

    background: #4529e6;
    border-radius: 150px;
  }

  .info__owner--name {
    color: #ffffff;
  }
`;

export const InfosFooterCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40rem;

  @media screen and (max-width: 712px) {
    width: 100%;
  }

  @media screen and (max-width: 512px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }

  .container__footer--price--year {
    display: flex;
    gap: 10px;
  }

  .p__footer--price--year {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;

    background: #edeafd;
    border-radius: 4px;

    line-height: 24px;

    color: #4529e6;
  }

  .p__infos--price {
    color: #ffffff;
  }
`;

export const DivAuctionFooter = styled.div`
  width: 100%;
  height: 62px;

  display: flex;
  align-items: center;
  gap: 26rem;

  background: #4529e6;
  border-radius: 0px 0px 8px 8px;

  
  @media screen and (max-width: 712px) {
    width: 40.276rem;
    gap: 0rem;
    justify-content: space-around;
  }

  @media screen and (max-width: 664px) {
    width: 34rem;
  }
  
  @media screen and (max-width: 561px) {
    width: 30rem;
  }

  @media screen and (max-width: 512px) {
    width: 24rem;
  }

  @media screen and (max-width: 400px) {
    width: 22rem;
  }

  @media screen and (max-width: 369px) {
    width: 17rem;
  }

  .button__footer--card--acess {
    width: 32%;
    padding: 14px 0px;
    background-color: transparent;
    border: none;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    color: #ffffff;

    cursor: pointer;

    @media screen and (max-width: 712px) {
      width: 40%;
    }

    @media screen and (max-width: 512px) {
      width: 12rem;
    }
  }
`;
