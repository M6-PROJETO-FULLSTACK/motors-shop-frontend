import { IUser } from "../User";

export interface IComment {
  created_at: string;
  id: string;
  message: string;
  updated_at: string;
  user_id: string;
  vehicle_id: string;
  user: IUser;
}
