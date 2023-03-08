import Container from "./style";
import Text from "../../styles/texts";

interface IDescriptionProps {
description:string
}

const BoxDescription = (props: IDescriptionProps) => {
  return (
    <Container>
      <Text className="heading6 title" weight={600}>
        Descrição
      </Text>
      <Text className="body1 description" weight={400}>
        {props.description}
      </Text>
    </Container>
  );
};

export default BoxDescription;
