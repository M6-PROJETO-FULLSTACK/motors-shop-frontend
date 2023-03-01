import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { useForm } from 'react-hook-form'
import Input from "../Input";
import { Container, FormContainer, ContainerBox } from "./style";
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";

const FormLogin = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const {register, handleSubmit} = useForm()

  return (
    <>
      <Container>
        <ContainerBox>
          <Text className="heading5" weight="500">
            Login
          </Text>
          <FormContainer onSubmit={handleSubmit(login)}>
            <Input id="email" type="email" title="Usuário" placeholder="Digitar usuário" {...register('email')}/>
            <Input id="password" type="password" title="Senha" placeholder="Digitar Senha" {...register('password')}/>
            <span>
              <Text className="body2" weight="400">
                Esqueci minha senha
              </Text>
            </span>
            <Button type="submit" className="brand">
              Entrar
            </Button>
            <Text className="body2" weight="400">
              Ainda não possui uma conta?
            </Text>
            <Button
              onClick={() => {
                navigate("/register", { replace: true });
              }}
              className="outline"
            >
              Cadastrar
            </Button>
          </FormContainer>
        </ContainerBox>
      </Container>
    </>
  );
};

export default FormLogin;
