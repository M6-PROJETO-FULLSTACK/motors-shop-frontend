import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import { ModalProvider } from "./providers/ModalContext";
import AuthProvider from "./providers/AuthContext";
import { VehiclelProvider } from "./providers/VehicleContext";
import { ModalProviderImg } from "./providers/ModalImgContext";


function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <VehiclelProvider>
          <ModalProvider>
            <ModalProviderImg>
              <GlobalStyle />
              <Routes />
            </ModalProviderImg>
          </ModalProvider>
        </VehiclelProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
