import { ImgBox } from "./style";
import {useContext} from "react"
import { ModalContextImg } from "../../providers/ModalImgContext";

interface IPropsGalleryCard {
  car: string;
}

const GalleryCard = ({ car }: IPropsGalleryCard) => {

  const {handleOpen, setImg} = useContext(ModalContextImg)

  const callBackModal = () => {
    handleOpen()
    setImg(car)
  }

  return (
    <ImgBox>
      <img src={car} alt="Product image" onClick={callBackModal}/>
    </ImgBox>
  );
};

export default GalleryCard;
