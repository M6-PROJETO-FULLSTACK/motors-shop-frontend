import { Container, UserInfo, UserCardImg } from "./style";
import Text from "../../styles/texts";
import { Button } from "../../styles/buttons";

const UserCard = () => {
  const user = {
    img: "https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg",
    name: "Samuel Leão",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  };

  return (
    <Container>
      <UserInfo>
        <UserCardImg src={user.img} alt="" />
        <Text className="heading6" weight="600">
          {user.name}
        </Text>
        <Text className="body1" weight="400">
          {user.bio}
        </Text>
        <Button className="grey">Ver todos anuncios</Button>
      </UserInfo>
    </Container>
  );
};

export default UserCard;
