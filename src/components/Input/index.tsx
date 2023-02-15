import { Container, InputForm } from "./style";
import { forwardRef } from "react";

export interface IinputProps {
  type?: string;
  title?: string;
  large?: boolean;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, IinputProps>(
  ({ type, title, placeholder, large, ...rest }: IinputProps, ref) => {
    return (
      <Container>
        <label htmlFor={title}>{title}</label>
        <InputForm
          type={type}
          ref={ref}
          placeholder={placeholder}
          large={large}
          {...rest}
        />
      </Container>
    );
  }
);
export default Input;
