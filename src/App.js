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
import AreasFuncionales from "./pages/AreasFuncionales";
import Cursos from "./pages/Cursos";
import Diplomados from "./pages/Diplomados";
import Maestrias from "./pages/Maestrias";
import Doctorados from "./pages/Doctorados";
import Especialidades from "./pages/Especialidades";
import DetallePrograma from "./pages/DetallePrograma";
import AreaDeConocimiento from "./pages/AreaDeConocimiento";
import Skeleton from "react-loading-skeleton";
function App() {
  return (
    <div className="App">
      <RedesSociales />
      <Router>
        <Navegador />
        <Routes>
          <Route path="/" element={<Home />||<Skeleton/>} />
          <Route path="/mensajedirector" element={<MensajeDirector /> ||<Skeleton/>} />
          <Route path="/historiapostgrado" element={<Historiapostgrado /> ||<Skeleton/>} />
          <Route path="/consejoPostgrado" element={<ConsejoPostgrado /> ||<Skeleton/>} />
          <Route path="/areasfuncionales" element={<AreasFuncionales/> ||<Skeleton/>} />
          <Route path="/cursos/:id" element={<Cursos/> ||<Skeleton/>} />
          <Route path="/diplomados/:id" element={<Diplomados/> ||<Skeleton/>} />
          <Route path="/especialidades/:id" element={<Especialidades/> ||<Skeleton/>} />
          <Route path="/maestrias/:id" element={<Maestrias/> ||<Skeleton/>} />
          <Route path="/doctorados/:id" element={<Doctorados/> ||<Skeleton/>} />
          <Route path="/AreaDeConocimiento/:programa" element={<AreaDeConocimiento/> ||<Skeleton/>} />
          <Route path="/:tipoprograma/:id" element={<DetallePrograma /> ||<Skeleton/>} />
        </Routes>
        <Botones />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
