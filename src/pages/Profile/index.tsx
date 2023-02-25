import Navbar from "../../components/navbar";
import ProductCard from "../../components/ProductCard";
import UserCard from "../../components/UserCard";
import { ContainerPage } from "../Login/style";
import { ProfileSection, ProductsContainer } from "./style";

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
          <ProfileSection id="carros">
            {cards.map((card) => (
              <ProductCard
                title={card.title}
                year={card.year}
                mileage={card.mileage}
                price={card.price}
                description={card.description}
                cover={card.cover}
                userName={card.userName}
                userId={card.userId}
                isActive={card.isActive}
                vehicleId={card.vehicleId}
              />
            ))}
          </ProfileSection>
        </ProductsContainer>
      </ContainerPage>
    </>
  );
};

export default Profile;
