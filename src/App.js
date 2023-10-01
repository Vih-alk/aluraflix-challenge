import { BrowserRouter, Route, Routes  } from "react-router-dom";
import GlobalStyle from "./styles/global";
import PaginaPadrao from "./pages/PaginaPadrao"
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import NovaCategoria from "./pages/NovaCategoria";
import NaoEncontrada from "./pages/NaoEncontrada";
import Player from "./pages/Player";


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element = {<PaginaPadrao/>}>
          <Route index element = { <Home/>}></Route>
          <Route path="video" element ={<NovoVideo/>}></Route>
          <Route path="categoria" element ={<NovaCategoria/>}></Route>
          <Route path=":id" element={<Player/>}></Route>
          <Route path="*" element ={<NaoEncontrada/>}></Route>
        </Route>
      </Routes>
      <GlobalStyle />
   </BrowserRouter>
     
  );
}

export default App;
