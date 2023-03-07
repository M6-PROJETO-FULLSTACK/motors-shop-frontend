import { IVehicle } from "../Vehicle";

export interface IAddress {
  cep: string;
  city: string;
  complement?: string;
  id: string;
  number: string;
  state: string;
  street: string;
}

export interface IUser {
  adress: IAddress;
  bio: string;
  birthdate: string;
  cpf: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  type: boolean;
  updated_at: string;
}
export interface IUserResponse {
  adress: IAddress;
  bio: string;
  birthdate: string;
  cpf: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  phone: string;
  type: boolean;
  updated_at: string;
  vehicles: IVehicle
}
