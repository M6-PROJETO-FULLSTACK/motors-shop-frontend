import React from "react";
import GlobalStyle from "./styles/global";
import {ThemeProvider} from 'styled-components'
import light from "./styles/themes/light";

function App() {
  return (
    <ThemeProvider theme={light}>

      <div className="App">
          <GlobalStyle />
      </div>

    </ThemeProvider>
  );
}

export default App;
