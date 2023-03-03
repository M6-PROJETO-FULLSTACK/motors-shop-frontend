import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api, { config } from "../services/api";

export const AuthContext = createContext({} as IAuthContext);

export interface IAuthProviderProp {
	children: ReactNode;
}

export interface IAuthContext {
	login: (data: object) => object;
	registerUser: (data: any) => object;
	logOut: () => void;
	recoverPassword: (data: object) => void;
	user: null | IUserResponse;
	loading: boolean;
	createVehicleAd: (data: object) => void;
	updateVehicleAd: (data: object) => void;
}
export interface IUserResponse {
	id: string;
	name: string;
	email: string;
	cpf: string;
	phone: string;
	birthdate: Date;
	bio: string;
	type: boolean;
	created_at: string;
	updated_at: string;
	adress?: {};
	vehicles?: [];
	comments?: [];
}

const AuthProvider = ({ children }: IAuthProviderProp) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const getUser = async () => {
			const token = localStorage.getItem("@MotorsShop:token");
			const id = localStorage.getItem("@MotorsShop:id");

			if (token) {
				try {
					api.defaults.headers.authorization = `Bearer ${token}`;
					const { data } = await api.get(`/users/${id}`);
					setUser(data[0]);
				} catch (error) {
					console.error(error);
				}
			}
			setLoading(false);
		};
		getUser();
	}, []);

	const registerUser = async (data: any) => {
		api.post("/users", {
			name: data.name,
			email: data.email,
			cpf: data.cpf,
			phone: data.phone,
			birthdate: data.birthdate,
			bio: data.bio,
			type: data.type,
			address: {
				cep: data.cep,
				city: data.city,
				complement: data.complement,
				number: data.number,
				state: data.state,
				street: data.street,
			},
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const login = async (data: object) => {
		const res = await api.post("/login", data);
		const { token, user: userData } = res.data;

		api.defaults.headers.authorization = `Bearer ${token}`;

		setUser(userData);
		localStorage.setItem("@MotorsShop:token", token);
		localStorage.setItem("@MotorsShop:id", userData.id);

		navigate("/home", { replace: true });
	};

	const recoverPassword = async (data: object) => {
		const res = await api.post("/login/recover-password", data);

		navigate("/login", { replace: true });
	};

	const logOut = () => {
		localStorage.removeItem("@MotorsShop:token");
		localStorage.removeItem("@MotorsShop:id");
		navigate("/login", { replace: true });
	};

	const createVehicleAd = (data: object) => {
		api.post("vehicles", data, config())
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	const updateVehicleAd = (data: object) => {
		api.patch("vehicles", data, config())
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<AuthContext.Provider
			value={{ login, logOut, user, loading, recoverPassword, createVehicleAd, updateVehicleAd, registerUser }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
