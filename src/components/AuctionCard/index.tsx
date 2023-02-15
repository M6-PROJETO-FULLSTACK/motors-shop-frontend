import { ContainerCard, ContainerMain, DivAuctionFooter, DivInfosCard, InfosFooterCard } from "./style"
import {BiTimeFive} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"

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
                        <p className="p__info--time">01:58:00</p>
                    </div>
                    
                    <DivInfosCard>
                        <h2 className="card__info--name">{props.name}</h2>
                        <p className="card__info--description">{props.description}</p>

                        <div className="div__info--owner">
                            <img src="https://cdn-icons-png.flaticon.com/512/21/21104.png" alt="IconUser" className="info__owner--img"/>
                            <h3 className="info__owner--name">{props.owner}</h3>
                        </div>

                        <InfosFooterCard>
                            <div className="container__footer--price--year">
                                <p className="p__footer--price--year">{props.year}</p>
                                <p className="p__footer--price--year">{props.km}KM</p>
                            </div>
                            <p className="p__infos--price">R$ {props.price},00</p>
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