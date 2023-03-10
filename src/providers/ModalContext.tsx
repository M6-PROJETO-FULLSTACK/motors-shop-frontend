import { createContext, ReactNode, useState } from "react";
import api from "../services/api";

interface IModelContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  childOpen: boolean;
  setChildOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  handleOpen: () => void;
  openEditUser: boolean;
  setOpenEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenEditUser: () => void;
  handleCloseEditUser: () => void;
  openEditAddress: boolean;
  setOpenEditAddress: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenEditAddress: () => void;
  handleCloseEditAddress: () => void;
  openEditAd: boolean;
  setOpenEditAd: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenEditAd: () => void;
  handleCloseEditAd: () => void;
  openCreateAd: boolean;
  setOpenCreateAd: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenCreateAd: () => void;
  handleCloseCreateAd: () => void;
  openForgotPassword: boolean;
  setOpenForgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenForgotPassword: () => void;
  handleCloseForgotPassword: () => void;
  vehicleIdClicked: string;
  setVehicleIdClicked: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalContext = createContext<IModelContextProps>(
  {} as IModelContextProps
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [vehicleIdClicked, setVehicleIdClicked] = useState<string>("")

  const [open, setOpen] = useState(false);
  const [openEditUser, setOpenEditUser] = useState(false);
  const [openEditAddress, setOpenEditAddress] = useState(false);
  const [openEditAd, setOpenEditAd] = useState(false);
  const [openCreateAd, setOpenCreateAd] = useState(false);
  const [openForgotPassword, setOpenForgotPassword] = useState(false);

  const [childOpen, setChildOpen] = useState(false);
 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenEditUser = () => setOpenEditUser(true);
  const handleCloseEditUser = () => setOpenEditUser(false);

  const handleOpenEditAddress = () => setOpenEditAddress(true);
  const handleCloseEditAddress = () => setOpenEditAddress(false);

  const handleOpenEditAd = () => setOpenEditAd(true);
  const handleCloseEditAd = () => setOpenEditAd(false);
  
  const handleOpenCreateAd= () => setOpenCreateAd(true);
  const handleCloseCreateAd= () => setOpenCreateAd(false);

  const handleOpenForgotPassword= () => setOpenForgotPassword(true);
  const handleCloseForgotPassword= () => setOpenForgotPassword(false);
  

  return (
    <ModalContext.Provider
      value={{
        open,
        setOpen,
        handleOpen,
        handleClose,
        childOpen,
        setChildOpen,
        openEditUser,
        setOpenEditUser,
        handleOpenEditUser,
        handleCloseEditUser,
        openEditAddress,
        setOpenEditAddress,
        handleOpenEditAddress,
        handleCloseEditAddress,
        openEditAd,
        setOpenEditAd,
        handleOpenEditAd,
        handleCloseEditAd,
        openCreateAd,
        setOpenCreateAd,
        handleOpenCreateAd,
        handleCloseCreateAd,
        openForgotPassword,
        setOpenForgotPassword,
        handleOpenForgotPassword,
        handleCloseForgotPassword,
        vehicleIdClicked,
        setVehicleIdClicked
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
