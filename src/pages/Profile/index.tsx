import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import UserCard from "../../components/UserCard";
import VehicleList from "../../components/VehicleList";
import { ContainerPage } from "../Login/style";
import { ProductsContainer , VehicleSection} from "./style";
import AuctionCard from "../../components/AuctionCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";
import Text from "../../styles/texts";

const Profile = () => {
  const {user} = useContext(AuthContext)
  const vehicles = user?.vehicles


  const cards = [
    {
      title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200",
      year: "2019",
      mileage: "0",
      price: 110000,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      cover:
        "https://i.pinimg.com/originals/24/13/73/241373ff7d3ad9202834eb7428ba4750.jpg",
      userName: "Nome de Teste Realmente Muito Grande",
      userId: "1",
      isActive: true,
      vehicleId: "1",
    },
  ];

  for (let i = 0; i < 8; i++) {
    cards.push(cards[0]);
  }
  return (
    <>
      <Navbar />
      <ContainerPage>
        <UserCard profile />
        <ProductsContainer>
          {/* {
            vehicles!.length === 0 ?
            <VehicleSection>
              <Text className="heading1 text" weight={600}>Você ainda não possui nenhum veículo cadastrado</Text>
            </VehicleSection>
            :
            ( */}
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
              </VehicleSection>
              <VehicleList list={cards} id="carros" />
              <VehicleList list={cards} id="motos" />
          </>
           {/* )
          } */}
        </ProductsContainer>
      </ContainerPage>
      <Footer />
    </>
  );
};

export default Profile;
