import Input from "../Input";
import { Container, FormContainer, ContainerBox } from "./style";
import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";
import ModalBox from "../Modal";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../../providers/ModalContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthContext";

const FormRegister = () => {
  const navigate = useNavigate();
  const { handleOpen } = useContext(ModalContext);
  const { registerUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  return (
    <Container>
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
            <Input
              type="email"
              title="Email"
              placeholder="Ex: samuel@kenzie.com.br"
              {...register("email")}
            />
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
            <Input
              type="date"
              title="Data de nascimento"
              placeholder="00/00/0000"
              {...register("birthdate")}
            />
            <Input
              type="text"
              title="Descrição"
              placeholder="Digitar descrição"
              large
              {...register("bio")}
            />
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
            <Input
              type="password"
              title="Senha"
              placeholder="Digitar Senha"
              {...register("password")}
            />
            <Input
              type="password"
              title="Confirmar Senha"
              placeholder="Digitar Senha"
              {...register("password")}
            />
          </section>
          <Button type="submit" className="brand" onClick={handleOpen}>
            Finalizar cadastro
          </Button>
        </FormContainer>
      </ContainerBox>
    </Container>
  );
};

export default FormRegister;
