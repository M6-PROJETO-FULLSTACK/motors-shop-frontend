import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import { ModalContext } from "./ModalContext";

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
  const { setChildOpen } = useContext(ModalContext);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const sucessToast = () => {
    toast.success("Usuário cadastrado com sucesso!");
  };

  const errorToast = () => {
    toast.error("Erro ao realizar cadastro, verifique os dados!");
  };

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
    
    if (data.userType === "true") {
			data.userType = true;
		} else {
			data.userType = false;
		}

    api
      .post("/users", {
        name: data.name,
        password: data.password,
        email: data.email,
        cpf: data.cpf,
        phone: data.phone,
        birthdate: data.birthdate,
        bio: data.bio,
        type: data.userType,
        adress: {
          cep: data.cep,
          city: data.city,
          complement: data.complement,
          number: data.number,
          state: data.state,
          street: data.street,
        },
      })
      .then((res) => {
        setChildOpen(true);
      })
      .catch((err) => {
        console.log(err);
        errorToast();
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
    await api
      .post("/login/recover-password", data)
      .then((res) => {
        toast.success("E-mail enviado com sucesso!");
      })
      .catch((err) => {
        toast.error("Erro ao enviar e-mail, verifique os dados!");
      });
  };

  const logOut = () => {
    localStorage.removeItem("@MotorsShop:token");
    localStorage.removeItem("@MotorsShop:id");
    navigate("/login", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{ login, logOut, user, loading, recoverPassword, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
