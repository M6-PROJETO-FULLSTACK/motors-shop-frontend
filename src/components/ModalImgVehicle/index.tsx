import { Modal, Box } from "@mui/material";
import { useContext } from "react";
import Text from "../../styles/texts";
import { RiCloseFill } from "react-icons/ri";
import { Button } from "../../styles/buttons";
import { ContainerModal, Content, TitleBox } from "../Modal/style";
import { ModalContextImg } from "../../providers/ModalImgContext";
import GalleryCard from "../GalleryCard";
import { ContainerModalImg } from "./style";


const ModalImgVehicle = (src: any) => {

    const {handleClose, handleOpen, open, setOpen, img} = useContext(ModalContextImg)

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
          <Button onClick={handleOpen} className="brand3 medium button__modal--createad">Image</Button>
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
                    <img src={img}/>
                </ContainerModalImg>
              </Content>
            </Box>
          </Modal>
        </ContainerModal>}
        </>
      );
}

export default ModalImgVehicle