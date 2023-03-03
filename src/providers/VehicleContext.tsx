import { createContext, ReactNode, useState } from "react";
import { IComment } from "../interfaces/Comments";
import { IVehicle } from "../interfaces/Vehicle";
import api from "../services/api";

interface IVehicleContextProps {
  comment: string;
  setComment: React.Dispatch<React.SetStateAction<string>>;
  listComments: IComment[];
  setListComments: React.Dispatch<React.SetStateAction<IComment[]>>;
  vehicle: IVehicle;
  setVehicle: React.Dispatch<React.SetStateAction<IVehicle>>;
  response: boolean;
  setResponse: React.Dispatch<React.SetStateAction<boolean>>;
  getDate: (data: string) => string;
  postComment: (comment: string, id: string | undefined) => void;
  deleteComment: (id: string) => void;
  userId: string | null;
}

export const VehiclelContext = createContext<IVehicleContextProps>(
  {} as IVehicleContextProps
);

export const VehiclelProvider = ({ children }: { children: ReactNode }) => {
  const [comment, setComment] = useState<string>("");
  const [listComments, setListComments] = useState<IComment[]>([]);
  const [vehicle, setVehicle] = useState<IVehicle>({} as IVehicle);
  const [response, setResponse] = useState<boolean>(true);

  const token = localStorage.getItem("@MotorsShop:token");
  const userId = localStorage.getItem("@MotorsShop:id");

  const getDate = (data: string) => {
    const date = Date.now();
    const commentDate = Date.parse(data.split("T")[0].split("-").join(" "));

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const total = Math.floor((date - commentDate) / day);

    if (total > 0) {
      if (total === 1) {
        return `Há ${total} dia`;
      }
      return `Há ${total} dias`;
    } else {
      return "Hoje";
    }
  };

  const postComment = async (comment: string, id: string | undefined) => {
    const data = {
      message: comment,
    };
    api.defaults.headers.authorization = `Bearer ${token}`;
    const res = await api.post(`/comments/${id}`, data);

    setResponse(!response);
  };

  const deleteComment = async (id: string) => {
    api.defaults.headers.authorization = `Bearer ${token}`;
    const res = await api.delete(`/comments/${id}`);

    console.log(res);
    setResponse(!response);
  };

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
        getDate,
        postComment,
        deleteComment,
        userId,
      }}
    >
      {children}
    </VehiclelContext.Provider>
  );
};
