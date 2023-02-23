import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  margin: 24px 10px 15px 10px;
  padding: 36px 28px;
  width: 95%;
  max-width: 751px;
  text-align: justify;

  background-color: ${(props) => props.theme.colors.grey10};
  border-radius: 4px;

  @media (min-width: 700px) {
    margin: 24px 12px 15px 12px;
    padding: 36px 44px;
  }

  @media (min-width: 1000px) {
    margin: 24px 12px 15px 50px;
    width: 50%;
  }

  @media (min-width: 1400px) {
    margin: 24px 12px 15px 90px;
    width: 50%;
  }

  @media (min-width: 1500px) {
    margin: 24px 12px 15px 182px;
    max-width: 751px;
  }

  .title {
    width: 100%;
    margin-bottom: 32px;
  }

  .description {
    color: ${(props) => props.theme.colors.grey2};
  }
`;

export default Container;
