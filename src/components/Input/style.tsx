import styled from "styled-components";
import { IinputProps } from ".";

export const InputForm = styled.input<IinputProps>`
  border: 2px solid ${(props) => props.theme.colors.grey7};
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.grey10};
  padding-bottom: ${(props) => props.large && "40px"};

  &:hover {
    background-color: ${(props) => props.theme.colors.grey8};
    transition: ease-in 0.3s;
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.brand2};
    transition: 0.5s;
  }

  &:focus::placeholder {
    color: transparent;
    transition: 0.2s;
  }
`;

export const Container = styled.div`
  gap: 5px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;
