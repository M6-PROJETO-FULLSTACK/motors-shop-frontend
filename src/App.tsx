import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import { ModalProvider } from "./providers/ModalContext";

function App() {
  return (
    <ThemeProvider theme={light}>
      <ModalProvider>
        <GlobalStyle />
        <Routes />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
