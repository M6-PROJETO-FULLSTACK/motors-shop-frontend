import { Container } from "./style";
import Text from "../../styles/texts";
import car from "../../assets/car.png";
import GalleryCard from "../GalleryCard";

const GalleryBox = () => {
  const gallery = [car, car, car, car, car, car];

  return (
    <Container>
      <Text weight="600">Fotos</Text>
      <div className="container__img">
        {gallery.map((elem, index) => (
          <GalleryCard car={elem} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default GalleryBox;
