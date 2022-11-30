import NaoEncontrada from "pages/unused_pages/NaoEncontrada";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeInitial from "pages/meioAmbiente/home_initial";
import Login from "pages/meioAmbiente/login";
import NewsRegister from "pages/meioAmbiente/news_register";
import Ocurrences from "pages/meioAmbiente/occurrences_page";
import DetalheOcorrencia from "pages/meioAmbiente/DetalheOcorrencia";
import Report from "pages/meioAmbiente/report";
import CadastroNoticia from "pages/meioAmbiente/cadastroNoticia/CadastroNoticia";
import Login_Semma from "pages/semma/login";
import Registration_Semma from "pages/semma/news_register/forms";
import Ocurrences_Semma from "pages/semma/occurrences_page";
import Home_initial_Semma from "pages/semma/home_initial";
import CadastroNoticia_Semma from "pages/semma/cadastroNoticia/CadastroNoticia";
import Report_Semma from "pages/semma/report";
import DetalheOcorrencia_Semma from "pages/semma/DetalheOcorrencia";
import Home from "pages/home";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="*" element={<NaoEncontrada />} />

        <Route path="/" element={<Home/>} />

        <Route path="/home" element={<HomeInitial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ocurrences" element={<Ocurrences />} />
        <Route path="/news_register" element={<CadastroNoticia />} />
        <Route path="/report" element={<Report />} />
        <Route path="/register" element={<NewsRegister />} />
        <Route path="/ocurrences/:id" component={DetalheOcorrencia} element={<DetalheOcorrencia />} />

        <Route path="/semma/home" element={<Home_initial_Semma />} />
        <Route path="/semma/login" element={<Login_Semma />} />
        <Route path="/semma/register" element={<Registration_Semma />} />
        <Route path="/semma/ocurrences" element={<Ocurrences_Semma />} />
        <Route path="/semma/news_register" element={<CadastroNoticia_Semma />} />
        <Route path="/semma/report" element={<Report_Semma/>} />
        <Route path="/semma/ocurrences/:id" component={DetalheOcorrencia_Semma} element={<DetalheOcorrencia_Semma />} />



      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;
