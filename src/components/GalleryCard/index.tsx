import { ImgBox } from "./style";

interface IPropsGalleryCard {
  car: string;
}

const GalleryCard = ({ car }: IPropsGalleryCard) => {
  return (
    <ImgBox>
      <img src={car} alt="Product image" />
    </ImgBox>
  );
};

export default GalleryCard;
