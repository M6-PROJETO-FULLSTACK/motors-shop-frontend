import { createContext, ReactNode, useState } from "react";
import api from "../services/api";

interface IModelContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  childOpen: boolean;
  setChildOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenDelete: boolean;
  setOpenDelete: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  handleOpen: () => void;
  deleteVehicle: (id: string) => void;
}

export const ModalContext = createContext<IModelContextProps>(
  {} as IModelContextProps
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [childOpen, setChildOpen] = useState(false);
  const [isOpenDelete, setOpenDelete] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteVehicle = (id: string) => {
    api
      .delete(`vehicles/${id}`)
      .then((res) => {
        console.log(res);
        setOpenDelete(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        handleOpen,
        handleClose,
        childOpen,
        setChildOpen,
        isOpenDelete,
        setOpenDelete,
        deleteVehicle,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
