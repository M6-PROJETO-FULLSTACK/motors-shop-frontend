import { Container, UserInfo, UserCardImg } from "./style";
import Text from "../../styles/texts";
import { Button } from "../../styles/buttons";
import FormCreateAd from "../FormCreateAd";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthContext";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { VehiclelContext } from "../../providers/VehicleContext";
import { IUser } from "../../interfaces/User";

export interface IUserCardProps {
  profile?: boolean;
  createButton?: boolean
  userOwnerId?: string
}

const UserCard = ({ profile, createButton, userOwnerId }: IUserCardProps) => {
  const {user} = useContext(AuthContext)
  const {response} = useContext(VehiclelContext)
  const [userOwner, setUserOwner] = useState<IUser>()
  
  useEffect(() => {
    api.get(`/users/${userOwnerId}`)
      .then(res => {
        setUserOwner(res.data[0])
      })
      .catch(err => err)
  },[response])
  
  return (
    <Container profile={profile}>
      <UserInfo profile={profile}>
        <UserCardImg  profile={profile} >
          {
            userOwner
          ? 
            <p>{userOwner?.name?.split(" ")[0][0] + userOwner?.name?.split(" ")[userOwner?.name?.split(" ").length - 1][0]}</p>
          : 
            <p>{user!.name.split(" ")[0][0] + user!.name.split(" ")[user!.name.split(" ").length - 1][0]}</p>
          }
        </UserCardImg>
        <div className="info__card--heading">
          <Text className="heading6" weight="600">
            {userOwner ? userOwner?.name : user!.name}
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
                Comprador
              </Text>
            </span>
          )}
        </div>
        <Text className="body1" weight="400">
          {userOwner ? userOwner?.bio : user!.bio}
        </Text>
        {createButton && <FormCreateAd />}
        {!profile && <Link to={`/anaunces/${userOwner?.id}`}><Button className="grey veiw_more">Ver todos anuncios</Button></Link>}
      </UserInfo>
    </Container>
  );
};

export default UserCard;
