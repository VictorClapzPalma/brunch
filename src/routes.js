import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home"
import Registrar from "./components/Registrar/registrar"
import Alterar from "./components/Alterar/alterar"
import Excluir from "./components/Excluir/excluir"
import Erro from  "./components/Erro/erro"
import Sobre from "./components/Sobre/sobre"
import Listar from "./components/Listar/listar"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/registrar" element={<Registrar/>}/>
      <Route path ="/alterar" element={<Alterar/>}/>
      <Route path ="/excluir" element={<Excluir/>}/>
      <Route path ="/listar" element={<Listar/>}/>

      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/*" element={<Erro/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
