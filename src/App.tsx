import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import { ModalProvider } from "./providers/ModalContext";
import AuthProvider from "./providers/AuthContext";
import { VehiclelProvider } from "./providers/VehicleContext";
import { ModalProviderImg } from "./providers/ModalImgContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={light}>
      <VehiclelProvider>
        <ModalProvider>
          <AuthProvider>
            <ModalProviderImg>
              <GlobalStyle />
              <Routes />
            </ModalProviderImg>
          </AuthProvider>
        </ModalProvider>
      </VehiclelProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
