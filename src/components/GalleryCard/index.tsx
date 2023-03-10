import { ImgBox } from "./style";
import {useContext} from "react"
import { ModalContextImg } from "../../providers/ModalImgContext";

interface IPropsGalleryCard {
  car: string;
  name: string
}

const GalleryCard = ({ car, name }: IPropsGalleryCard) => {

  const {handleOpen, setImg} = useContext(ModalContextImg)

  const callBackModal = () => {
    handleOpen()
    setImg(car)
  }

  return (
    <ImgBox>
      <img src={car} alt={`Imagem do veiculo ${name}`} onClick={callBackModal}/>
    </ImgBox>
  );
};

export default GalleryCard;
