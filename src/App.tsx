
import GlobalStyle from "./styles/global";
import {ThemeProvider} from 'styled-components'
import light from "./styles/themes/light";
import HomePage from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={light}>

      <div className="App">
          <GlobalStyle />
          <HomePage />
      </div>

    </ThemeProvider>

  );
}

export default App;
