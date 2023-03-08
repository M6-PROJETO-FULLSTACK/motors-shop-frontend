import BoxImage from "./style"
import car from '../../assets/car.png'

export interface IImageProps {
    img: string;
    name: string
  }
const AdCoverImage = (props : IImageProps) => {
    return(
        <BoxImage>
            <img src={props.img} alt={props.name} />
        </BoxImage>
    )
}

export default AdCoverImage