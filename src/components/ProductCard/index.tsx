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
import { Navigate, useNavigate } from "react-router-dom";
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
}: ProductCardProps) => {
  const { handleOpen } = useContext(ModalContext);
  const loggedId = localStorage.getItem("@MotorsShop:id");

  const navigate = useNavigate();

  return (
    <>
      <ProductCardContainer>
        <img src={cover} alt={title} />

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
          {userId === loggedId && (
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
        </ProductCardInfo>
      </ProductCardContainer>

      {/* <FormUpdateAd /> */}
    </>
  );
};

export default ProductCard;
