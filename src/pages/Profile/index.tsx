import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import UserCard from "../../components/UserCard";
import VehicleList from "../../components/VehicleList";
import { ContainerPage } from "../Login/style";
import { ProductsContainer , VehicleSection} from "./style";
import AuctionCard from "../../components/AuctionCard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Text from "../../styles/texts";
import api from "../../services/api";

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

  },[])

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
        <UserCard profile />
        <ProductsContainer>
          {
            vehicles!.length === 0 ?
              <Text className="heading1 text" weight={600}>Você ainda não possui nenhum veículo cadastrado</Text>
            :
            
            <>
              <VehicleSection id="leilao">
                  <AuctionCard 
                    img="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                    name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 "
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
                    km="0"
                    owner="Rodrigo Tavares"
                    price="110000"
                    year="2019"
                    />
                  <AuctionCard 
                    img="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                    name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 "
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
                    km="0"
                    owner="Rodrigo Tavares"
                    price="110000"
                    year="2019"
                    />
                  <AuctionCard 
                    img="https://cdn-icons-png.flaticon.com/512/21/21104.png"
                    name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 "
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem..."
                    km="0"
                    owner="Rodrigo Tavares"
                    price="110000"
                    year="2019"
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
