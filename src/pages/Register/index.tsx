import FormRegister from "../../components/FormRegister";
import { ContainerPage } from "../Login/style";
import Navbar from '../../components/navbar'
import Footer from "../../components/footer";

const Register = () => {
  return (
    <>
    <Navbar/>
    <ContainerPage>
      <FormRegister />
    </ContainerPage>
    <Footer/>
    </>
  );
};

export default Register;
