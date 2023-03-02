import { createContext, ReactNode, useState } from "react";

export interface ICommentProp {
  created_at: string;
  id: string;
  message: string;
  updated_at: string;
  user_id: string;
  vehicle_id: string;
  user: any;
}

interface IVehicleProps {
  advertiseType: boolean;
  comments: any[];
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

interface IVehicleContextProps {
  comment: any;
  setComment: React.Dispatch<React.SetStateAction<any>>;
  listComments: any[];
  setListComments: React.Dispatch<React.SetStateAction<any>>;
  vehicle: any;
  setVehicle: React.Dispatch<React.SetStateAction<any>>;
  response: boolean;
  setResponse: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VehiclelContext = createContext<IVehicleContextProps>(
  {} as IVehicleContextProps
);

export const VehiclelProvider = ({ children }: { children: ReactNode }) => {
  const [comment, setComment] = useState("");
  const [listComments, setListComments] = useState([]);
  const [vehicle, setVehicle] = useState<IVehicleProps>({} as IVehicleProps);
  const [response, setResponse] = useState(true);

  return (
    <VehiclelContext.Provider
      value={{
        comment,
        setComment,
        listComments,
        setListComments,
        vehicle,
        setVehicle,
        response,
        setResponse,
      }}
    >
      {children}
    </VehiclelContext.Provider>
  );
};
