import styled from "styled-components";

const BoxImage = styled.div`
  width: 95%;
  max-width: 752px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 45px 10px 17px 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey10};

  img {
    width: 293px;
    height: 252px;
  }

  @media (min-width: 700px) {
    margin: 45px 12px 15px 12px;
    padding: 36px 44px;
    img {
      width: 441px;
      height: 252px;
    }
  }

  @media (min-width: 1000px) {
    margin: 45px 0px 15px 0px;
    width: 95%;
  }

  @media (min-width: 1400px) {
    margin: 45px 12px 15px 90px;
    width: 50%;
  }

  @media (min-width: 1500px) {
    margin: 45px 12px 15px 182px;
    max-width: 751px;
  }
`;

export default BoxImage;
