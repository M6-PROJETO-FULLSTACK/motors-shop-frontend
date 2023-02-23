import Container from "./style";
import Text from "../../styles/texts";

const BoxDescription = () => {
  return (
    <Container>
      <Text className="heading6 title" weight={600}>
        Descrição
      </Text>
      <Text className="body1 description" weight={400}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo
        provident, corrupti doloribus molestiae, delectus quas id at ipsum
        repellat dignissimos, pariatur ratione eveniet dicta accusamus dolore.
        Qui, repellendus. Reprehenderit.
      </Text>
    </Container>
  );
};

export default BoxDescription;
