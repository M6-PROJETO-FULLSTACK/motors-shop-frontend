import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import { ModalProvider } from "./providers/ModalContext";
import AuthProvider from "./providers/AuthContext";
import { ModalProviderImg } from "./providers/ModalImgContext";

function App() {
  return (
    <ThemeProvider theme={light}>
      <AuthProvider>
        <ModalProvider>
          <ModalProviderImg>
            <GlobalStyle />
            <Routes />
          </ModalProviderImg>
        </ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
