import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import UserCard from "../../components/UserCard";
import VehicleList from "../../components/VehicleList";
import { ContainerPage } from "../Login/style";
import { ProductsContainer , VehicleSection} from "./style";
import AuctionCard from "../../components/AuctionCard";
import { useContext, useState, useEffect } from "react";
import Text from "../../styles/texts";
import api from "../../services/api";
import { VehiclelContext } from "../../providers/VehicleContext";

interface IVehicleProps {
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  cover: string;
  userName: string;
  userId: string;
  isActive: boolean;
  id: string;
  advertiseType:boolean;
  vehicleType:boolean; 
}


const Profile = () => {
  const userId = localStorage.getItem("@MotorsShop:id")
  const [vehicles, setVehicles] = useState<IVehicleProps[]>([])
  const cars:IVehicleProps[] = []
  const motocycle:IVehicleProps[] =[]

  const { response } = useContext(VehiclelContext)

  useEffect(()=>{
    const getVehicles = async () => {
      try {
        const { data } = await api.get(`/vehicles/user/${userId}`);
        setVehicles(data)
      } catch (error) {
        console.error(error);
				}
      };
      getVehicles();

  },[response])

  vehicles.map((vehicle:IVehicleProps) =>{
    if(vehicle.vehicleType === true){
      cars.push(vehicle)
    }else if(vehicle.vehicleType === false){
      motocycle.push(vehicle)
    }
  })

  return (
    <>
      <Navbar />
      <ContainerPage>
        <UserCard profile createButton/>
        <ProductsContainer>
          {
            vehicles!.length === 0 ?
              <Text className="heading1 text" weight={600}>Você ainda não possui nenhum veículo cadastrado</Text>
            :
            
            <>
              <VehicleSection id="leilao">
                  <AuctionCard
                    img="https://s2.glbimg.com/soQAYHwEEuJm7qRINw2oUm9Czqs=/fit-in/940x590/e.glbimg.com/og/ed/f/original/2013/03/05/laferrari1_1.jpg"
                    name="Ferrari LaFerrari 62 V12 "
                    description="O LaFerrari é o primeiro híbrido completo produzido pela marca automotiva italiana, fornecendo a maior potência de qualquer carro de estrada da Ferrari. "
                    km="19200"
                    owner="WebMotors"
                    price="14.000.000"
                    year="2014"
                  />
                  <AuctionCard
                    img="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9yc2NoZSUyMDkxMXxlbnwwfHwwfHw%3D&w=1000&q=80"
                    name="Porshe 911 Carrera"
                    description="O 911 Carrera. Quando o contato com a pista se torna mais importante. Quando a redução de cada quilo promete mais agilidade."
                    km="12000"
                    owner="WebMotors"
                    price="1.279.000"
                    year="2022"
                  />
                  <AuctionCard
                    img="https://images.unsplash.com/photo-1603553329474-99f95f35394f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bXVzdGFuZyUyMGd0fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    name="Ford Mustang GT Fastback 5.0L v8"
                    description="Esta variante GT Fastback 5.0L v8 vem com um motor que produz 396 cv a 6500 rpm e 515 Nm a 4250 rpm de potência máxima e torque máximo, respectivamente."
                    km="29020"
                    owner="WebMotors"
                    price="566.300"
                    year="2019"
                  />
                  <AuctionCard
                    img="https://autoentusiastas.com.br/ae/wp-content/uploads/2023/02/Lamborghini-Invencible-2023-1280-01.jpg"
                    name="Lamborghini Invencible"
                    description="Motor V12 6.5 com a mesma calibração do Ultimae, ou seja, um propulsor aspirado de 780 cv a 8.500 rpm, enquanto o torque máximo de 73,4 é entregue a 6.750 rpm."
                    km="0"
                    owner="WebMotors"
                    price="2.595.650"
                    year="2023"
                  />
              </VehicleSection>
              <VehicleList list={cars} id="carros" />
              <VehicleList list={motocycle} id="motos" />
          </>
            }
        </ProductsContainer>
      </ContainerPage>
      <Footer />
    </>
  );
};

export default Profile;
