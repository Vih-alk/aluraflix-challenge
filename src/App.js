import { BrowserRouter, Routes  } from "react-router-dom";
import Cabecalho from "./componentes/Header";
import GlobalStyle from "./styles/global";
import Banner from "./componentes/Banner";
import Rodape from "./componentes/Footer";

function App() {
  return (
   <BrowserRouter>
      <Cabecalho />
      <Banner />
      <Routes />
      <Rodape />
      <GlobalStyle />
   </BrowserRouter>
     
  );
}

export default App;
