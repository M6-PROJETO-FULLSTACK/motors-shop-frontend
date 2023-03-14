import ModalBox from "../Modal";
import Text from "../../styles/texts";
import { useForm } from "react-hook-form";
import { ButtonsContainer, FormContainer } from "./style";
import { ModalContext } from "../../providers/ModalContext";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";

export interface ModalEditUserProps {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: Date;
  bio: string;
}

const ModalEditUser = () => {
  const { handleCloseEditUser, handleOpenEditUser, openEditUser } =
    useContext(ModalContext);

  const { editUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  return (
    <ModalBox
      recovery
      title="Editar perfil"
      title_button="Editar perfil"
      open={openEditUser}
      handleClose={handleCloseEditUser}
      handleOpen={handleOpenEditUser}
    >
      <Text className="body2" weight={500}>
        Informações pessoais
      </Text>

      <FormContainer onSubmit={handleSubmit(editUser)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="João Silva"
          />
        </div>

        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="joao@email.com"
          />
        </div>

        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            {...register("cpf")}
            type="text"
            id="cpf"
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
        </div>

        <div>
          <label htmlFor="phone">Celular:</label>
          <input
            {...register("phone")}
            type="text"
            id="phone"
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
        </div>

        <div>
          <label htmlFor="birthdate">Data de nascimento:</label>
          <input
            {...register("birthdate")}
            type="text"
            id="birthdate"
            placeholder="25/12/0001"
            onFocus={(e) => {
              e.target.type = "date";
            }}
            onBlur={(e) => {
              e.target.type = "text";
            }}
          />
        </div>

        <div>
          <label htmlFor="bio">Descrição:</label>
          <textarea
            {...register("bio")}
            id="bio"
            placeholder="Escreva uma breve descrição sobre você."
          />
        </div>

        <ButtonsContainer>
          <button
            className="cancel-button"
            type="button"
            onClick={handleCloseEditUser}
          >
            Cancelar
          </button>
          <button className="save-button" type="submit">
            Salvar alterações
          </button>
        </ButtonsContainer>
      </FormContainer>
    </ModalBox>
  );
};

export default ModalEditUser;
