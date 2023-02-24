import FormLogin from "../../components/FormLogin";
import { ContainerPage } from "./style";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const Login = () => {
  return (
    <>
    <Navbar/>
    <ContainerPage>
      <FormLogin />
    </ContainerPage>
    <Footer/>
    </>
  );
};

export default Login;
