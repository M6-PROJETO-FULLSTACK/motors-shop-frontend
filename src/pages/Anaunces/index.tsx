import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import VehicleList from "../../components/VehicleList"
import { VehiclelContext } from "../../providers/VehicleContext"
import api from "../../services/api"
import Text from "../../styles/texts"
import { ContainerPage } from "../Login/style"
import { ProductsContainer } from "../Profile/style"
import { ContainerAnaunces, ContainerUserCard, UserCardImg, UserInfo } from "./style"

export interface IVehicleProps {
    id: string;
    advertiseType: boolean;
    cover: string;
    title: string;
    year: string;
    mileage: string;
    price: number;
    description: string;
    vehicleType: boolean;
    userName: string;
    userId: string;
    isActive: boolean;
}

interface IUserProps {
    id?: string,
	name: string,
	bio: string,
	type: true,
}

const AnauncesPage = () => {
    const [cars, setCars] = useState<IVehicleProps[]>([])
    const [motocycles, setMotocycles] = useState<IVehicleProps[]>([])
    const [existsProduct, setExistsProduct] = useState(true)
    const [user, setUser] = useState<IUserProps[]>([])

    const { response } = useContext(VehiclelContext)

    const {id} = useParams()

    useEffect(() => {
        api.get(`/vehicles/user/${id}`)
            .then(res => {
                setCars(res.data.filter((elem: IVehicleProps) => elem.vehicleType))
                setMotocycles(res.data.filter((elem: IVehicleProps) => !elem.vehicleType))

                api.get(`/users/${id}`)
                    .then(res => {
                        setUser(res.data)
                    })
                    .catch(err => err)
            })
            .catch(err => setExistsProduct(false))
    }, [response])
    
    return (
        <>  
        {
            existsProduct ? 
        <>
            <Navbar />
            <ContainerPage>
                    {
                        user.length >= 1 && <>
                        
                        <ContainerUserCard >
                            <UserInfo >
                                <UserCardImg >
                                <p>{user[0]!.name.split(" ")[0][0] + user[0]!.name.split(" ")[user[0]!.name.split(" ").length - 1][0]}</p>
                                </UserCardImg>
                                <div className="info__card--heading">
                                <Text className="heading6" weight="600">
                                    {user[0]!.name}
                                </Text>
                                {
                                    user[0]!.type === true?
                                    <span>
                                    <Text className="body2" weight="500">
                                        Anunciante
                                    </Text>
                                    </span>
                                    :
                                    <span>
                                    <Text className="body2" weight="500">
                                        Anunciante
                                    </Text>
                                    </span>
                                }
                                </div>
                                <Text className="body1" weight="400">
                                {user[0]!.bio}
                                </Text>
                            </UserInfo>
                        </ContainerUserCard>
                        </>
                    }

                <ProductsContainer>
                    <VehicleList list={cars} id="carros" />
                    <VehicleList list={motocycles} id="motos" />
                </ProductsContainer>
            </ContainerPage>
            <Footer />
        </>
        : 
        <>
            <Navbar />
            <ContainerAnaunces>
                <h1>Anunciante não existente</h1>
            </ContainerAnaunces>
        </>
        }
        </>
    )
}

export default AnauncesPage