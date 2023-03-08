import ModalBox from "../Modal";
import Text from "../../styles/texts";
import { useForm } from "react-hook-form";
import { ButtonsContainer, FormContainer } from "./style";
import { ModalContext } from "../../providers/ModalContext";
import { useContext, useState } from "react";
import ChildModal from "../ConfirmationModal";
import { ModalEditAddressProps } from "../../interfaces/User";

const ModalEditAddress = () => {
	const { handleClose } = useContext(ModalContext);
	const { childOpen, setChildOpen } = useContext(ModalContext);

	const {
		register,
		handleSubmit,
	} = useForm();

	const onSubmit = (data: any) => {
		console.log(data);
		setChildOpen(true);
	};

	// Preenchimento automático por CEP em testes...

	const [address, setAddress] = useState<ModalEditAddressProps>({
		cep: "",
		state: "",
		city: "",
		street: "",
		number: "",
		complement: "",
	} as ModalEditAddressProps);

	const handleCep = (event: any) => {
		console.log(event.target);
		const cep = event.target.value;
		if (cep.length === 8) {
			fetch(`https://viacep.com.br/ws/${cep}/json/`)
				.then((response) => response.json())
				.then((data) => {
					setAddress({
						cep: data.cep,
						state: data.uf,
						city: data.localidade,
						street: data.logradouro,
						number: "",
						complement: "",
					});
				});
		}
	};

	return (
		<ModalBox title="Editar endereço" title_button="Editar Endereço">
			<Text className="body2" weight={500}>
				Informações de endereço
			</Text>

			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="cep">CEP</label>
					<input
						{...register("cep")}
						type="text"
						id="cep"
						placeholder="00000000"
						onChange={handleCep}
						defaultValue={address.cep}
						maxLength={8}
					/>
				</div>

				<div>
					<label htmlFor="state">Estado</label>
					<input
						{...register("state")}
						type="text"
						id="state"
						placeholder="SP"
						defaultValue={address.state}
					/>
				</div>

				<div>
					<label htmlFor="city">Cidade</label>
					<input
						{...register("city")}
						type="text"
						id="city"
						placeholder="São Paulo"
						defaultValue={address.city}
					/>
				</div>

				<div>
					<label htmlFor="street">Rua</label>
					<input
						{...register("street")}
						type="text"
						id="street"
						placeholder="Rua Primeira"
						defaultValue={address.street}
					/>
				</div>

				<div>
					<label htmlFor="number">Número</label>
					<input {...register("number")} type="number" id="number" placeholder="0" />
				</div>

				<div>
					<label htmlFor="complement">Complemento</label>
					<textarea {...register("complement")} id="complement" placeholder="Casa, apartamento, etc." />
				</div>

				<ButtonsContainer>
					<button className="cancel-button" type="button" onClick={handleClose}>
						Cancelar
					</button>
					<button className="save-button" type="submit">
						Salvar alterações
					</button>

					<ChildModal
						childOpen={childOpen}
						setChildOpen={setChildOpen}
						title="Seu usuário foi editado com sucesso!"
					>
						<span>Suas novas informações já informações foram salvas.</span>
					</ChildModal>
				</ButtonsContainer>
			</FormContainer>
		</ModalBox>
	);
};

export default ModalEditAddress;
