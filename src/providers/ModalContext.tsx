import { createContext, ReactNode, useState } from "react";

interface IModelContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClose: () => void;
  handleOpen: () => void;
}

export const ModalContext = createContext<IModelContextProps>(
  {} as IModelContextProps
);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContext.Provider value={{ open, setOpen, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
};
