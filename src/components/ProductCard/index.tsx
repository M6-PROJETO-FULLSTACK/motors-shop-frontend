import Text from "../../styles/texts";
import {
  ProductCardContainer,
  ProductCardFooter,
  ProductCardInfo,
} from "./style";
import MiniProfile from "../MiniProfile";

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
  return (
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
        <MiniProfile userId={userId} userName={userName} />
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
      </ProductCardInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
