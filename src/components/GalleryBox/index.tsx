import { Container } from "./style";
import Text from "../../styles/texts";
import GalleryCard from "../GalleryCard";

interface IImageProps{
  id: string
  url:string
  vehicle_id:string
}

interface IGalleryProps{
  gallery: IImageProps[]
  name: string
}
const GalleryBox = ({gallery, name}:IGalleryProps) => {

  return (
    <Container>
      <span>
        <Text weight="600">Fotos</Text>
      </span>
      <div className="container__img">
        {gallery.map((elem) => (
          <GalleryCard car={elem.url} name={name} key={elem.id} />
        ))}
      </div>
    </Container>
  );
};

export default GalleryBox;
