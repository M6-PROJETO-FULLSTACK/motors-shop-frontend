import Text from "../../styles/texts";
import ProductCard from "../ProductCard";
import { ContainerList, ContainerSection } from "./style";

interface ICardProps {
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  cover: string;
  userName: string;
  userId: string;
  isActive: boolean;
  id: string;
}

interface IListProps {
  list: ICardProps[];
  id: string;
}

const VehicleList = ({ list, id }: IListProps) => {
  return (
    <ContainerSection>
      <Text className="heading5" weight="500">
        {id[0].toUpperCase() + id.slice(1)}
      </Text>
      {list.length > 0 ? (
        <ContainerList id={id}>
          {list.map((card, index) => (
            <ProductCard
              key={index}
              title={card.title}
              year={card.year}
              mileage={card.mileage}
              price={card.price}
              description={card.description}
              cover={card.cover}
              userName={card.userName}
              userId={card.userId}
              isActive={card.isActive}
              id={card.id}
            />
          ))}
        </ContainerList>
      ) : (
        <div className="list--cards__empty">
          <Text weight="500">Ainda não existem {id} cadastrados</Text>
        </div>
      )}
    </ContainerSection>
  );
};

export default VehicleList;
