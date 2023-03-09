import Input from "../Input";
import { Container, FormContainer, ContainerBox, ModalContent } from "./style";
import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";
import { ModalContext } from "../../providers/ModalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ChildModal from "../ConfirmationModal";
import { useNavigate } from "react-router-dom";

export interface RegisterUserProps {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  bio: string;
  userType: boolean;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement: string;
}

const FormRegister = () => {
  const { setChildOpen, childOpen } = useContext(ModalContext);
  const { registerUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const schema = yup.object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    cpf: yup.string().required("CPF obrigatório"),
    phone: yup.string().required("Telefone obrigatório"),
    birthdate: yup
      .date()
      .required("Data de nascimento obrigatória")
      .typeError("Data de nascimento inválida"),
    bio: yup.string(),
    userType: yup.string().required("Tipo de usuário obrigatório"),
    cep: yup.string().required("CEP obrigatório"),
    state: yup.string().required("Estado é obrigatório"),
    city: yup.string().required("Cidade é obrigatória"),
    street: yup.string().required("Rua é obrigatória"),
    number: yup.number().required("Número é obrigatório"),
    complement: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Container>
        <ChildModal
          setChildOpen={setChildOpen}
          childOpen={childOpen}
          title="Sua conta foi criada com sucesso!"
        >
          <ModalContent>
            <Text weight="400" className="body1">
              Agora você poderá ver seus negócios crescendo em grande escala
            </Text>
            <Button
              className="brand"
              onClick={() => {
                navigate("/login", { replace: true });
                setChildOpen(false);
              }}
            >
              Ir para o login
            </Button>
          </ModalContent>
        </ChildModal>
        <ContainerBox>
          <Text className="heading5" weight="500">
            Cadastro
          </Text>
          <FormContainer onSubmit={handleSubmit(registerUser)}>
            <section>
              <Text className="body2" weight="500">
                Informações pessoais
              </Text>
              <Input
                type="text"
                title="Nome"
                placeholder="Ex: Samuel Leão"
                {...register("name")}
              />
              {errors.name && (
                <span className="error-message">
                  {errors.name.message?.toString()}
                </span>
              )}
              <Input
                type="email"
                title="Email"
                placeholder="Ex: samuel@kenzie.com.br"
                {...register("email")}
              />
              {errors.email && (
                <span className="error-message">
                  {errors.email.message?.toString()}
                </span>
              )}
              <Input
                type="text"
                title="CPF"
                {...register("cpf")}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/(\s)/, "");
                  e.target.value = e.target.value.replace(/(\D)/, "");
                  e.target.value = e.target.value.replace(
                    /(\d{3})(\d{3})(\d{3})(\d{2})/,
                    "$1.$2.$3-$4"
                  );
                }}
                maxLength={14}
                placeholder="000.000.000-00"
              />
              {errors.cpf && (
                <span className="error-message">
                  {errors.cpf.message?.toString()}
                </span>
              )}
              <Input
                type="text"
                title="Celular"
                {...register("phone")}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/(\s)/, "");
                  e.target.value = e.target.value.replace(/(\D)/, "");
                  e.target.value = e.target.value.replace(
                    /(\d{2})(\d{5})(\d{4})/,
                    "($1) $2-$3"
                  );
                }}
                maxLength={15}
                placeholder="(00) 00000-0000"
              />
              {errors.phone && (
                <span className="error-message">
                  {errors.phone.message?.toString()}
                </span>
              )}
              <Input
                type="date"
                title="Data de nascimento"
                placeholder="00/00/0000"
                {...register("birthdate")}
              />
              {errors.birthdate && (
                <span className="error-message">
                  {errors.birthdate.message?.toString()}
                </span>
              )}
              <Input
                type="text"
                title="Descrição"
                placeholder="Digitar descrição"
                large
                {...register("bio")}
              />
              {errors.bio && (
                <span className="error-message">
                  {errors.bio.message?.toString()}
                </span>
              )}
            </section>
            <section>
              <Text className="body2" weight="500">
                Informações de endereço
              </Text>
              <Input
                type="text"
                title="CEP"
                {...register("cep")}
                placeholder="00000-000"
                onChange={(event) => {
                  event.target.value = event.target.value
                    .replace(/[^0-9]/g, "")
                    .replace(/(\d{5})(\d)/, "$1-$2");
                }}
                maxLength={9}
              />
              {errors.cep && (
                <span className="error-message">
                  {errors.cep.message?.toString()}
                </span>
              )}
              <div className="input--box">
                <Input
                  type="text"
                  title="Estado"
                  placeholder="Digitar Estado"
                  {...register("state")}
                />
                <Input
                  type="text"
                  title="Cidade"
                  placeholder="Digitar Cidade"
                  {...register("city")}
                />
              </div>
              {(errors.state || errors.city) && (
                <span className="error-message">
                  Estado e Cidade são obrigatórios
                </span>
              )}
              <Input
                type="text"
                title="Rua"
                placeholder="Digitar endereço"
                {...register("street")}
              />
              <div className="input--box">
                <Input
                  type="text"
                  title="Número"
                  placeholder="Digitar número"
                  {...register("number")}
                />
                <Input
                  type="text"
                  title="Complemento"
                  placeholder="Ex: apart. 307"
                  {...register("complement")}
                />
              </div>
              {(errors.street || errors.number) && (
                <span className="error-message">
                  Rua e Número são obrigatórios
                </span>
              )}
            </section>
            <section>
              <Text className="body2" weight="500">
                Tipo de conta
              </Text>
              <div className="box--checkmark">
                <label className="form-control--radio">
                  <input
                    type="radio"
                    value="true"
                    {...register("userType")}
                    defaultChecked
                  />
                  <span className="checkmark">Vendedor</span>
                </label>

                <label className="form-control--radio">
                  <input type="radio" value="false" {...register("userType")} />
                  <span className="checkmark">Comprador</span>
                </label>
              </div>
              {errors.userType && (
                <span className="error-message">
                  {errors.userType.message?.toString()}
                </span>
              )}
              <Input
                type="password"
                title="Senha"
                placeholder="Digitar Senha"
                {...register("password")}
                id="password"
              />
              {errors.password && (
                <span className="error-message">
                  {errors.password.message?.toString()}
                </span>
              )}
              <Input
                type="password"
                title="Confirmar Senha"
                placeholder="Digitar Senha"
                name="confirmPassword"
                id="confirmPassword"
              />
              {errors.confirmPassword && (
                <span className="error-message">
                  {errors.confirmPassword.message?.toString()}
                </span>
              )}
            </section>
            <Button type="submit" className="brand">
              Finalizar cadastro
            </Button>
          </FormContainer>
        </ContainerBox>
      </Container>
    </>
  );
};

export default FormRegister;
