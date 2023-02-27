import { createContext, ReactNode, useState } from "react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }: { children: ReactNode }) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider
      value={{ open, setOpen, handleOpen, handleClose, style }}
    >
      {children}
    </ModalContext.Provider>
  );
};
