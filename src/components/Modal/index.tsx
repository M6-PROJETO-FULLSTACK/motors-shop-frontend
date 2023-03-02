import { Modal, Box } from "@mui/material";
import { ReactNode, useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";
import Text from "../../styles/texts";
import { RiCloseFill } from "react-icons/ri";
import { TitleBox, Content, ContainerModal } from "./style";
import { Button } from "../../styles/buttons";

export interface IModalProps {
  children: ReactNode;
  title: string;
  title_button?: string;
  small?: boolean;
}

const ModalBox = ({ children, title, title_button, small }: IModalProps) => {
  const { open, handleClose, handleOpen } = useContext(ModalContext);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 500,
    maxHeight: 600,
    height: small ? "250" : "100%",
    bgcolor: "background.paper",
    overflowY: small ? "hidden" : "scroll",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
  };

  return (
    <>
      <ContainerModal>
        <Button
          onClick={handleOpen}
          className="brand3 medium button__modal--createad"
        >
          {title_button}
        </Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <TitleBox>
              <Text className="heading7" weight="500">
                {title}
              </Text>
              <button onClick={handleClose}>
                <RiCloseFill />
              </button>
            </TitleBox>
            <Content>{children}</Content>
          </Box>
        </Modal>
      </ContainerModal>
    </>
  );
};
export default ModalBox;
