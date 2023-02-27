import { ReactNode } from "react";
import { ModalContextProvider } from "./ModalContext";

const Providers = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Providers;
