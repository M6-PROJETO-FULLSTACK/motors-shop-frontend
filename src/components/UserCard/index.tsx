import { Container, UserInfo, UserCardImg } from "./style";
import Text from "../../styles/texts";
import { Button } from "../../styles/buttons";
import FormCreateAd from "../FormCreateAd";

export interface IUserCardProps {
  profile?: boolean;
}

const UserCard = ({ profile }: IUserCardProps) => {
  const user = {
    img: "https://icon-library.com/images/anonymous-user-icon/anonymous-user-icon-2.jpg",
    name: "Samuel Leão",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  };

  return (
    <Container profile={profile}>
      <UserInfo profile={profile}>
        <UserCardImg src={user.img} alt="" profile={profile} />
        <div className="info__card--heading">
          <Text className="heading6" weight="600">
            {user.name}
          </Text>
          {profile && (
            <span>
              <Text className="body2" weight="500">
                Anunciante
              </Text>
            </span>
          )}
        </div>
        <Text className="body1" weight="400">
          {user.bio}
        </Text>
        <FormCreateAd />
        {!profile && <Button className="grey">Ver todos anuncios</Button>}
      </UserInfo>
    </Container>
  );
};

export default UserCard;
