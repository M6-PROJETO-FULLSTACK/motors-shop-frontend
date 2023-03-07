import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";
import {
  ContainerProductInfoFooter,
  ProductInfoContainer,
  SectionProductInfo,
} from "./style";

interface IPropsProductInfo {
  name: string;
  price: string;
  year: string;
  km: string;
  phone: number
}

const ProductInfo = (props: IPropsProductInfo) => {
  return (
    <ProductInfoContainer>
      <SectionProductInfo>
        <Text className="heading6" weight="600">
          {props.name}
        </Text>
        <ContainerProductInfoFooter>
          <div className="container__info--km--year">
            <Text className="body2 info__km--year" weight="500">
              {props.year}
            </Text>
            <Text className="body2 info__km--year" weight="500">
              {props.km} KM
            </Text>
          </div>
          <div className="container__info--price">
            <Text className="heading7" weight="500">
              R$ {props.price},00
            </Text>
          </div>
        </ContainerProductInfoFooter>
        <div className="container__info--button">
          <Button as="a" href={`http://wa.me/55${props.phone}?text=Olá%20tenho%20interesse%20em%20comprar%20seu%20veículo%20${props.name}`} className="brand">Comprar</Button>
        </div>
      </SectionProductInfo>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
