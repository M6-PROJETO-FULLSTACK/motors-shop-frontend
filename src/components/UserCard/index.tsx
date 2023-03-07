import { Container, UserInfo, UserCardImg } from "./style";
import Text from "../../styles/texts";
import { Button } from "../../styles/buttons";
import FormCreateAd from "../FormCreateAd";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthContext";


export interface IUserCardProps {
  profile?: boolean;
  createButton?: boolean
}

const UserCard = ({ profile, createButton }: IUserCardProps) => {
  const {user} = useContext(AuthContext)

  return (
    <Container profile={profile}>
      <UserInfo profile={profile}>
        <UserCardImg  profile={profile} >
          <p>{user!.name.split(" ")[0][0] + user!.name.split(" ")[user!.name.split(" ").length - 1][0]}</p>
        </UserCardImg>
        <div className="info__card--heading">
          <Text className="heading6" weight="600">
            {user!.name}
          </Text>
          {profile && (
            user!.type === true?
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
          )}
        </div>
        <Text className="body1" weight="400">
          {user!.bio}
        </Text>
        {createButton && <FormCreateAd />}
        {!profile && <Button className="grey">Ver todos anuncios</Button>}
      </UserInfo>
    </Container>
  );
};

export default UserCard;
