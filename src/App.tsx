import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import { ModalProvider } from "./providers/ModalContext";
import AuthProvider from "./providers/AuthContext";
import { VehiclelProvider } from "./providers/VehicleContext";

function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <VehiclelProvider>
          <ModalProvider>
            <GlobalStyle />
            <Routes />
          </ModalProvider>
        </VehiclelProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
