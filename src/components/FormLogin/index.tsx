import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { Container, FormContainer, ContainerBox, ContainerBtn } from "./style";
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";
import ModalBox from "../Modal";
import { ModalContext } from "../../providers/ModalContext";

const FormLogin = () => {
  const navigate = useNavigate();
  const { login, recoverPassword } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const { handleOpen, handleClose } = useContext(ModalContext);

  return (
    <>
      <Container>
        <ModalBox title="Esqueceu sua senha?" small recovery>
          <form onSubmit={handleSubmit(recoverPassword)}>
            <p>Insira seu e-mail e enviaremos uma nova senha.</p>
            <Input
              id="email_recovery"
              type="email"
              title="E-mail"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            <ContainerBtn>
              <Button onClick={handleClose} className="outline">
                Cancelar
              </Button>
              <Button className="brand" type="submit">
                Solicitar senha
              </Button>
            </ContainerBtn>
          </form>
        </ModalBox>

        <ContainerBox>
          <Text className="heading5" weight="500">
            Login
          </Text>
          <FormContainer onSubmit={handleSubmit(login)}>
            <Input
              id="email"
              type="email"
              title="Usuário"
              placeholder="Digitar usuário"
              {...register("email")}
            />
            <Input
              id="password"
              type="password"
              title="Senha"
              placeholder="Digitar Senha"
              {...register("password")}
            />
            <span>
              <Text className="body2" weight="400" onClick={handleOpen}>
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
