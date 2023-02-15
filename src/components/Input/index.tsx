import { Container, InputForm } from "./style";
import { forwardRef } from "react";

interface IinputProps {
  type?: string;
  title?: string;
  placeholder: string;
}

const Input = forwardRef<HTMLInputElement, IinputProps>(
  ({ type, title, placeholder, ...rest }: IinputProps, ref) => {
    return (
      <Container>
        <label htmlFor={title}>{title}</label>
        <InputForm type={type} ref={ref} placeholder={placeholder} {...rest} />
      </Container>
    );
  }
);
export default Input;
