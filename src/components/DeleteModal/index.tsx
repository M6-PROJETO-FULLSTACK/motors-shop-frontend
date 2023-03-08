import { Modal, Box } from "@mui/material";
import { ReactNode, useContext } from "react";
import Text from "../../styles/texts";
import { RiCloseFill } from "react-icons/ri";
import { TitleBox, Content, ContainerModal } from "../Modal/style";
import { VehiclelContext } from "../../providers/VehicleContext";

export interface IModalProps {
  children: ReactNode;
  title: string;
}

const ModalDelete = ({ children, title }: IModalProps) => {
  const { isOpenDelete, setOpenDelete } = useContext(VehiclelContext);

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    maxWidth: 500,
    maxHeight: 600,
    height: "250",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "5px",
  };

  return (
    <>
      <ContainerModal>
        <Modal open={isOpenDelete} onClose={() => setOpenDelete(false)}>
          <Box sx={style}>
            <TitleBox>
              <Text className="heading7" weight="500">
                {title}
              </Text>
              <button onClick={() => setOpenDelete(false)}>
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
export default ModalDelete;
