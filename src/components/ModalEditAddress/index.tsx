import ModalBox from "../Modal";
import Text from "../../styles/texts";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonsContainer, FormContainer } from "./style";
import { ModalContext } from "../../providers/ModalContext";
import { useContext, useState } from "react";
// import ChildModal from "../ModalConfirmation";


export interface ModalEditAddressProps {
	cep: string;
	state: string;
	city: string;
	street: string;
	number: string;
	complement: string;
}

const ModalEditAddress = () => {
	const { handleClose } = useContext(ModalContext);
	// const { childOpen, setChildOpen } = useContext(ModalContext); // Remover comentário quando o modal de confirmação tiver sido mergeado

	const schema = yup.object({
		cep: yup.string().required("CEP é obrigatório"),
		state: yup.string().required("Estado é obrigatório"),
		city: yup.string().required("Cidade é obrigatória"),
		street: yup.string().required("Rua é obrigatória"),
		number: yup.string().required("Número é obrigatório"),
		complement: yup.string(),
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
		// setChildOpen(true); // Remover comentário quando o modal de confirmação tiver sido mergeado
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
						placeholder="00000-000"
                        onChange={
                            (event) => {
                                event.target.value = event.target.value.replace(/[^0-9]/g, "").replace(/(\d{5})(\d)/, "$1-$2");

                            }
                        }
                        defaultValue={address.cep}
                        maxLength={9}
					/>
					{errors.cep && <span className="error-message">{errors.cep.message?.toString()}</span>}
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
					{errors.state && <span className="error-message">{errors.state.message?.toString()}</span>}
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
					{errors.city && <span className="error-message">{errors.city.message?.toString()}</span>}
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
					{errors.street && <span className="error-message">{errors.street.message?.toString()}</span>}
				</div>

				<div>
					<label htmlFor="number">Número</label>
					<input {...register("number")} type="number" id="number" placeholder="0" />
					{errors.number && <span className="error-message">{errors.number.message?.toString()}</span>}
				</div>

				<div>
					<label htmlFor="complement">Complemento</label>
					<textarea {...register("complement")} id="complement" placeholder="Casa, apartamento, etc." />
					{errors.complement && (
						<span className="error-message">{errors.complement.message?.toString()}</span>
					)}
				</div>

				<ButtonsContainer>
					<button className="cancel-button" type="button" onClick={handleClose}>
						Cancelar
					</button>
					<button className="save-button" type="submit">
						Salvar alterações
					</button>

					{/* Remover comentário quando o modal de confirmação tiver sido mergeado */}
					{/* <ChildModal childOpen={childOpen} setChildOpen={setChildOpen} title="Seu usuário foi editado com sucesso!">
						<span>Suas novas já informações foram salvas.</span>
					</ChildModal> */}
				</ButtonsContainer>
			</FormContainer>
		</ModalBox>
	);
};

export default ModalEditAddress;
