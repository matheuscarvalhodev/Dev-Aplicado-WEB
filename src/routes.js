import NaoEncontrada from "pages/unused_pages/NaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeInitial from "pages/home_initial";
import Login from "pages/login";
import NewsRegister from "pages/news_register";
import Ocurrences from "pages/occurrences_page";
import Report from "pages/report";
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
        <Route path="/new_register" element={<NewsRegister/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
