import { createContext, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export const AuthContext = createContext({} as IAuthContext);

export interface IAuthProviderProp {
    children: ReactNode;
}

export interface IAuthContext {
    login: (data: object) => object;
    logOut: () => void;
    recoverPassword: (data: object) => void;
    user: null | IUserResponse;
    loading: boolean;
}

export interface IUserResponse {
    id:string;
	name: string;
	email: string;
	cpf: string;
	phone: string;
	birthdate: Date;
	bio: string;
	type: boolean;
    created_at: string;
    updated_at:string;
	adress?: {};
    vehicles?: [];
    comments?: []
}

const AuthProvider = ({ children }:IAuthProviderProp) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const getUser = async () => {
        const token = localStorage.getItem('@MotorsShop:token');
        const id = localStorage.getItem('@MotorsShop:id');
    
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get(`/users/${id}`);
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    getUser();
  }, []);


    const login = async (data:object) => {
        const res = await api.post('/login', data);
        const { token, user: userData,} = res.data;

        api.defaults.headers.authorization = `Bearer ${token}`;

        setUser(userData);
        localStorage.setItem('@MotorsShop:token', token);
        localStorage.setItem('@MotorsShop:id', userData.id);
        
        navigate('/home', { replace: true });
    };

    const recoverPassword = async (data:object) => {
        const res = await api.post('/login/recover-password', data);
        
        navigate('/login', { replace: true });
    };

    const logOut = () => {
        localStorage.clear();
        navigate('/login', { replace: true });
    }

  return (
    <AuthContext.Provider value={{login, logOut, user, loading, recoverPassword}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
