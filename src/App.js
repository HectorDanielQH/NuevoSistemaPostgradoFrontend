//react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegador from './components/navegador/Navegador';
import RedesSociales from "./components/navegador/RedesSociales";
import Home from './pages/Home';
import Botones from './components/buttonFooter/botones';
import Footer from "./components/footer/Footer";
import MensajeDirector from "./pages/MensajeDirector";
import Historiapostgrado from "./pages/HistoriaPostgrado";
import ConsejoPostgrado from "./pages/ConsejoPostgrado";
import Cursos from "./pages/Cursos";
import Diplomados from "./pages/Diplomados";
import Maestrias from "./pages/Maestrias";
import Doctorados from "./pages/Doctorados";
import Especialidades from "./pages/Especialidades";
import DetallePrograma from "./pages/DetallePrograma";
function App() {
  return (
    <div className="App">
      <RedesSociales />
      <Router>
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mensajedirector" element={<MensajeDirector />} />
          <Route path="/historiapostgrado" element={<Historiapostgrado />} />
          <Route path="/consejoPostgrado" element={<ConsejoPostgrado />} />
          <Route path="/cursos" element={<Cursos/>} />
          <Route path="/diplomados" element={<Diplomados/>} />
          <Route path="/especialidades" element={<Especialidades/>} />
          <Route path="/maestrias" element={<Maestrias/>} />
          <Route path="/doctorados" element={<Doctorados/>} />
          <Route path="/:tipoprograma/:id" element={<DetallePrograma />} />
        </Routes>
        <Botones />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
