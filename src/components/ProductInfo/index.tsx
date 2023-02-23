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
          <Button className="brand">Comprar</Button>
        </div>
      </SectionProductInfo>
    </ProductInfoContainer>
  );
};

export default ProductInfo;
