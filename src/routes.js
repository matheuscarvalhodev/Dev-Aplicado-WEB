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
import Home_initial from "pages/home_initial";
import Login from "pages/login";
import News_register from "pages/news_register";
import Ocurrences_page from "pages/occurrences_page";
import Recover_password from "pages/recover _password";
import Report from "pages/report";
import Request_services from "pages/request_services";
import Register from "pages/news_register";

function AppRoutes() {
  return (
    <BrowserRouter>
      {/* <ScrollToTop /> */}
      {/* <Menu /> */}
      <Register/>

      {/* <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          
          <Route path="sobremim" element={<SobreMim />} />
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes> */}

      {/* <Rodape /> */}
    </BrowserRouter>
  );
}

export default AppRoutes;
