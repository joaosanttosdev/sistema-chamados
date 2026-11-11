import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Chamados from "./pages/Chamados/Chamados.jsx";
import ChamadoForm from "./pages/ChamadoForm/ChamadoForm.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chamados" element={<Chamados />} />
          <Route path="/chamados/novo" element={<ChamadoForm />} />
          <Route path="/chamados/editar/:id" element={<ChamadoForm />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
