import styled from "styled-components";

interface IModalStyleProps {
  small?: boolean;
}

export const ContainerModal = styled.div<IModalStyleProps>`
  .button__modal--createad {
    max-width: 9rem;
    width: 100%;
    color: ${(props) => props.theme.colors.brand2};
    border: 2px solid ${(props) => props.theme.colors.brand2};
    background-color: ${(props) => props.theme.colors.whiteFixed};
    display: ${(props) => (props.small ? "none" : "flex")};
    align-items: center;
    :hover {
      background-color: ${(props) => props.theme.colors.brand4};
    }
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;

  button {
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.colors.grey4};
    cursor: pointer;
  }
`;

export const Content = styled.div`
  p {
    margin: 20px 0px;
  }
  button {
    width: 45%;
  }
`;
