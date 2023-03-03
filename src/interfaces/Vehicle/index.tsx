import { IComment } from "../Comments";

export interface IVehicle {
  advertiseType: boolean;
  comments: IComment[];
  cover: string;
  created_at: string;
  description: string;
  id: string;
  isActive: boolean;
  mileage: string;
  price: number;
  title: string;
  updated_at: string;
  vehicleType: boolean;
  year: string;
}
