import { Modal, Box, Button } from "@mui/material";
import { ReactNode, useContext } from "react";
import { ModalContext } from "../../providers/ModalContext";
import Text from "../../styles/texts";
import { RiCloseFill } from "react-icons/ri";
import { TitleBox, Content } from "./style";

const ModalBox = ({ children }: { children: ReactNode }) => {
  const { open, handleClose, handleOpen } = useContext(ModalContext);

  console.log(handleClose);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <TitleBox>
            <Text className="heading7" weight="500">
              Sucesso!
            </Text>
            <button onClick={handleClose}>
              <RiCloseFill />
            </button>
          </TitleBox>
          <Content>{children}</Content>
        </Box>
      </Modal>
    </>
  );
};
export default ModalBox;
