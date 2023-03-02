import ModalBox from "../Modal";
import Text from "../../styles/texts";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonsContainer, FormContainer } from "./style";
import { ModalContext } from "../../providers/ModalContext";
import { useContext } from "react";

export interface ModalEditUserProps {
	name: string;
	email: string;
	cpf: string;
	phone: string;
	birthdate: Date;
	bio: string;
}

const ModalEditUser = () => {

    const { handleClose } = useContext(ModalContext);

	const schema = yup.object({
		name: yup.string().required("Nome obrigatório"),
		email: yup.string().required("E-mail obrigatório"),
		cpf: yup.string().required("CPF obrigatório"),
		phone: yup.string().required("Telefone obrigatório"),
		birthdate: yup.date().required("Data de nascimento obrigatória").typeError("Data de nascimento inválida"),
		bio: yup.string()
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		console.log(data);
	};

	return (
		<ModalBox title="Editar perfil" title_button="Editar perfil">
			<Text className="body2" weight={500}>
				Informações pessoais
			</Text>

			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="name">Nome:</label>
                    <input {...register("name")} type="text" id="name" placeholder="João Silva" />
                    {errors.name && <span className="error-message">{errors.name.message?.toString()}</span>}
				</div>

				<div>
					<label htmlFor="email">E-mail:</label>
					<input {...register("email")} type="email" id="email" placeholder="joao@email.com" />
					{errors.email && <span className="error-message">{errors.email.message?.toString()}</span>}
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
							e.target.value = e.target.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
						}}
						maxLength={14}
						placeholder="000.000.000-00"
                    />
                    {errors.cpf && <span className="error-message">{errors.cpf.message?.toString()}</span>}
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
							e.target.value = e.target.value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
						}}
						maxLength={15}
						placeholder="(00) 00000-0000"
                    />
                    {errors.phone && <span className="error-message">{errors.phone.message?.toString()}</span>}
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
                    {errors.birthdate && <span className="error-message">{errors.birthdate.message?.toString()}</span>}
				</div>

				<div>
					<label htmlFor="bio">Descrição:</label>
                    <textarea {...register("bio")} id="bio" placeholder="Escreva uma breve descrição sobre você." />
                    {errors.bio && <span className="error-message">{errors.bio.message?.toString()}</span>}
                </div>
                
                <ButtonsContainer>
                    <button className="cancel-button" type="button" onClick={handleClose}>Cancelar</button>
                    <button className="save-button" type="submit">Salvar alterações</button>
                </ButtonsContainer>
            </FormContainer>
		</ModalBox>
	);
};

export default ModalEditUser;
