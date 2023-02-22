import BoxImage from "./style"
import car from '../../assets/car.png'

const AdCoverImage = () => {
    return(
        <BoxImage>
            <img src={car} alt="imagem do veiculo" />
        </BoxImage>
    )
}

export default AdCoverImage