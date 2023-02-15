import Input from "../Input";
import { Container, FormContainer, ContainerBox } from "./style";
import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";

const FormRegister = () => {
  return (
    <Container>
      <ContainerBox>
        <Text className="heading5" weight="500">
          Cadastro
        </Text>
        <FormContainer>
          <section>
            <Text className="body2" weight="500">
              Informações pessoais
            </Text>
            <Input type="text" title="Nome" placeholder="Ex: Samuel Leão" />
            <Input
              type="email"
              title="Email"
              placeholder="Ex: samuel@kenzie.com.br"
            />
            <Input type="text" title="CPF" placeholder="000.000.000-00" />
            <Input type="text" title="Celular" placeholder="(DDD) 90000-0000" />
            <Input
              type="text"
              title="Data de nascimento"
              placeholder="00/00/00"
            />
            <Input
              type="text"
              title="Descrição"
              placeholder="Digitar descrição"
              large
            />
          </section>
          <section>
            <Text className="body2" weight="500">
              Informações de endereço
            </Text>
            <Input type="text" title="CEP" placeholder="00000.000" />
            <div className="input--box">
              <Input type="text" title="Estado" placeholder="Digitar Estado" />
              <Input type="text" title="Cidade" placeholder="Digitar Cidade" />
            </div>
            <Input type="text" title="Rua" placeholder="Digitar endereço" />
            <div className="input--box">
              <Input type="text" title="Número" placeholder="Digitar número" />
              <Input
                type="text"
                title="Complemento"
                placeholder="Ex: apart. 307"
              />
            </div>
          </section>
          <section>
            <Text className="body2" weight="500">
              Tipo de conta
            </Text>
            <div className="input--box input--box_button">
              <Button className="brand">Comprador</Button>
              <Button className="outline">Anuciante</Button>
            </div>
            <Input type="password" title="Senha" placeholder="Digitar Senha" />
            <Input
              type="password"
              title="Confirmar Senha"
              placeholder="Digitar Senha"
            />
          </section>
          <Button type="submit" className="brand">
            Finalizar cadastro
          </Button>
        </FormContainer>
      </ContainerBox>
    </Container>
  );
};

export default FormRegister;
