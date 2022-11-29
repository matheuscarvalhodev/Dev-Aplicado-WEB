import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import ScrollToTop from "componentes/ScrollToTop";
import NaoEncontrada from "pages/unused_pages/NaoEncontrada";
import Post from "pages/unused_pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from './pages/unused_pages/Inicio';
import SobreMim from './pages/unused_pages/SobreMim';
import Registration from "pages/registration";
import HomeInitial from "pages/home_initial";
import Login from "pages/login";
import NewsRegister from "pages/news_register";
import Ocurrences from "pages/occurrences_page";
import Recover_password from "pages/recover _password";
import Report from "pages/report";
import Request_services from "pages/request_services";
import CadastroNoticia from "pages/cadastroNoticia/CadastroNoticia";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeInitial />}/>
        <Route path="*" element={<NaoEncontrada />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/news_register" element={<CadastroNoticia/>}/>
        <Route path="/ocurrences" element={<Ocurrences/>}/>
        <Route path="/report" element={<Report/>}/>
      </Routes>


    </BrowserRouter>
  );
}

export default AppRoutes;
