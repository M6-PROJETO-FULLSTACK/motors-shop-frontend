import { Modal, Box } from "@mui/material";
import { useContext } from "react";
import Text from "../../styles/texts";
import { RiCloseFill } from "react-icons/ri";
import { ContainerModal, Content, TitleBox } from "../Modal/style";
import { ModalContextImg } from "../../providers/ModalImgContext";
import { ContainerModalImg } from "./style";


const ModalImgVehicle = () => {

    const {handleClose, open, img} = useContext(ModalContextImg)

    const style = {
        position: "absolute" as "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        maxWidth: 500,
        maxHeight: 350,
        height: "100%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: "5px",
      };
      console.log(open);
      
      return (
        <>
        {open && <ContainerModal>
          <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
              <TitleBox>
                <Text className="heading7" weight="500">
                  Imagem do veículo
                </Text>
                <button onClick={handleClose}>
                  <RiCloseFill />
                </button>
              </TitleBox>
              <Content>
                <ContainerModalImg>
                    <img src={img} alt="image car"/>
                </ContainerModalImg>
              </Content>
            </Box>
          </Modal>
        </ContainerModal>}
        </>
      );
}

export default ModalImgVehicle