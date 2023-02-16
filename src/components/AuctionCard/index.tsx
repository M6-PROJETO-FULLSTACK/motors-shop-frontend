import { ContainerCard, ContainerMain, DivAuctionFooter, DivInfosCard, InfosFooterCard } from "./style"
import {BiTimeFive} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"
import Text from "../../styles/texts"

interface IPropsCardLeilao {
    name: string,
    description: string,
    price: string,
    owner: string,
    year: string,
    km: string,
    img: string
}

const AuctionCard = (props: IPropsCardLeilao) => {

    return (
        <>
        <ContainerMain >
            <ContainerCard img={props.img}>
                <div className="card__infos">
                    <div className="card__info--time">
                        <BiTimeFive color="#4529E6" size="20px"/>
                        <Text className="heading7" weight="500">01:58:00</Text>
                    </div>
                    
                    <DivInfosCard>
                        <Text className="heading6 card__info--name" weight="600">{props.name}</Text>
                        <Text className="body1 card__info--description" weight="400">{props.description}</Text>

                        <div className="div__info--owner">
                            <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="IconUser" className="info__owner--img"/>
                            <Text className="body2 info__owner--name" weight="500">{props.owner}</Text>
                        </div>

                        <InfosFooterCard>
                            <div className="container__footer--price--year">
                                <Text className="body2 p__footer--price--year" weight="500">{props.year}</Text>
                                <Text className="body2 p__footer--price--year" weight="500">{props.km} KM</Text>
                            </div>
                            <Text className="heading7 p__infos--price" weight="500">R$ {props.price},00</Text>
                        </InfosFooterCard>
                    </DivInfosCard>

                </div>
            </ContainerCard>
            <DivAuctionFooter>
                <button className="button__footer--card--acess">
                    Acessar página do leilão
                </button>
                <BsArrowRight size="28px" color="white"/>
            </DivAuctionFooter>
        </ContainerMain>
        </>
    )
}

export default AuctionCard