import styled from "styled-components";
import { variant } from "styled-system";

export const InputForm = styled.input`
  border: 2px solid #e9ecef;
  padding: 10px;
  border-radius: 4px;
  padding-bottom: 40px;

  &:hover {
    background-color: #f1f3f5;
    transition: ease-in 0.3s;
  }

  ::placeholder {
    color: #868e96;
  }

  &:focus {
    outline: none;
    border: 2px solid #5126ea;
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
`;
