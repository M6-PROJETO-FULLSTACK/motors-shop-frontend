import FormRegister from "../../components/FormRegister";
import ModalBox from "../../components/Modal";
import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";
import { ContainerPage } from "../Login/style";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <ContainerPage>
      <ModalBox title="Sucesso!">
        <Text className="heading7" weight="500">
          Sua conta foi criada com sucesso!
        </Text>
        <Text className="body1" weight="400">
          Agora você poderá ver seus negócios crescendo em grande escala
        </Text>
        <Button
          className="brand"
          onClick={() => {
            navigate("/login", { replace: true });
          }}
        >
          Ir para o login
        </Button>
      </ModalBox>
      <FormRegister />
    </ContainerPage>
  );
};

export default Register;
