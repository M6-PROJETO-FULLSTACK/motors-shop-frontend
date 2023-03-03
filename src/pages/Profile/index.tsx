import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import UserCard from "../../components/UserCard";
import VehicleList from "../../components/VehicleList";
import { ContainerPage } from "../Login/style";
import { ProductsContainer } from "./style";

const Profile = () => {
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
      id: "1",
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
          <VehicleList list={cards} id="carros" />
          <VehicleList list={cards} id="motos" />
        </ProductsContainer>
      </ContainerPage>
      <Footer />
    </>
  );
};

export default Profile;
