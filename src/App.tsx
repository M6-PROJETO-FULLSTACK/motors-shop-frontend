import React from "react";
import GlobalStyle from "./styles/global";
import {ThemeProvider} from 'styled-components'
import light from "./styles/themes/light";
import {Button} from "./components/buttons";
import Text from "./styles/texts";

function App() {
  return (
    <ThemeProvider theme={light}>

      <div className="App">
          <GlobalStyle />
          <Text>Ola</Text>
          <Button className="grey1" >Botão</Button>
        </div>

    </ThemeProvider>
  );
}

export default App;
