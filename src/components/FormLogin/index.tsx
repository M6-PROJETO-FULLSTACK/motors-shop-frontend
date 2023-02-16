import Input from "../Input";
import { Container, FormContainer, ContainerBox } from "./style";
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";

const FormLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <ContainerBox>
          <Text className="heading5" weight="500">
            Login
          </Text>
          <FormContainer>
            <Input type="text" title="Usuário" placeholder="Digitar usuário" />
            <Input type="password" title="Senha" placeholder="Digitar Senha" />
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
