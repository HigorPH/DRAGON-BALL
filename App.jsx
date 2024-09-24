import Personajes from "./Componentes/Personajes";
import Detalle_Personaje from "./Componentes/Detalle_Personaje";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Dragon Ball API</h1>
        <nav>
          <Link to="/personajes">
            <button>Ver Personajes</button>
          </Link>

        </nav>

        <Routes>
          <Route path="/" element={<Personajes/>}></Route>
          <Route path="/personajes" element={<Personajes/>}></Route>
          <Route path="personajes/:id" element={<Detalle_Personaje/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;