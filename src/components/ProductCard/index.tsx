import Text from "../../styles/texts";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardInfo,
  ProductCardBtn,
} from "./style";
import MiniProfile from "../MiniProfile";
import { Button } from "../../styles/buttons";
import { ModalContext } from "../../providers/ModalContext";
import { useContext } from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Navigate, useNavigate, useParams } from "react-router-dom";
>>>>>>> e3d9d4db9a05ae75ee97e58239ae6b719eabe932
import FormUpdateAd from "../FormUpdateAd";

interface ProductCardProps {
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  cover: string;
  userName: string;
  userId: string;
  isActive?: boolean;
  id: string;
  isOwner?: boolean;
}

const ProductCard = ({
  title,
  year,
  mileage,
  price,
  description,
  cover,
  userName,
  userId,
  isActive,
  id,
  isOwner,
}: ProductCardProps) => {
  const { handleOpenEditAd, setVehicleIdClicked } = useContext(ModalContext);
  const loggedId = localStorage.getItem("@MotorsShop:id");

  const navigate = useNavigate();

  // const { id } = useParams();

  const profileId = useParams().id;

  return (
    <>
      <ProductCardContainer>
        <div className="card__container-header">
          <img src={cover} alt={title} />
          {isActive ? (
            <span className="card--status active">Ativo</span>
          ) : (
            <span className="card--status inactive">Inativo</span>
          )}
        </div>

        <ProductCardInfo>
          <a href={`/vehicle/${id}`} className="productLink">
            <Text className="heading7" weight="600">
              {title}
            </Text>
          </a>
          <Text className="body2" weight="400">
            {description.length > 100
              ? description.slice(0, 100) + "..."
              : description}
          </Text>
          <MiniProfile />
          <ProductCardFooter>
            <Text className="body2" weight={500}>
              {mileage} KM
            </Text>
            <Text className="body2" weight={500}>
              {year}
            </Text>
            <Text className="heading7" weight={500}>
              R$ {price}
            </Text>
          </ProductCardFooter>
<<<<<<< HEAD
          {userId === loggedId && (
            <ProductCardBtn>
              <Button id={id} onClick={(e: any) => {
                setVehicleIdClicked(e.target.id)
                handleOpenEditAd()
              }}>Editar</Button>
              <Button
                onClick={() => {
                  navigate(`/vehicle/${id}`, { replace: true });
                }}
              >
                Ver como
              </Button>
              <FormUpdateAd />
            </ProductCardBtn>
=======
          {profileId && (
            <>
              {loggedId === userId && (
                <ProductCardBtn>
                  <Button onClick={handleOpen}>Editar</Button>
                  <Button
                    onClick={() => {
                      navigate(`/vehicle/${id}`, { replace: true });
                    }}
                  >
                    Ver como
                  </Button>
                </ProductCardBtn>
              )}
            </>
>>>>>>> e3d9d4db9a05ae75ee97e58239ae6b719eabe932
          )}
        </ProductCardInfo>
      </ProductCardContainer>
    </>
  );
};

export default ProductCard;
