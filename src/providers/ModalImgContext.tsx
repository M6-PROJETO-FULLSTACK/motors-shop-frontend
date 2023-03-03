import { createContext, ReactNode, useState } from "react";

interface IModelContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
  handleClose: () => void;
  handleOpen: () => void;
}

export const ModalContextImg = createContext<IModelContextProps>(
  {} as IModelContextProps
);

export const ModalProviderImg = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalContextImg.Provider value={{ open, setOpen, handleOpen, handleClose, img, setImg }}>
      {children}
    </ModalContextImg.Provider>
  );
};
