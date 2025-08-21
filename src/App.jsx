import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import NavBar from "./components/NavBar"
import MainPage from "./pages/MainPage";

import MathPage from "./pages/MathPage";
import ChemistryPage from "./pages/ChemistryPage";
import ChemistryThemesPage from "./pages/ChemistryThemesPage";

function App() {
  return (
    <div>

      <NavBar />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/subjects/math" element={<MathPage />} />
        <Route path="/subjects/chemistry" element={<ChemistryPage />} />
        <Route path="/chemistry/:id" element={<ChemistryThemesPage />} />
      </Routes>
    </div>
  );
}

export default App;