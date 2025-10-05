import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MathJaxContext } from "better-react-mathjax";

import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import NavBar from "./components/NavBar";
import ChatBot from "./components/ChatBot";
import MainPage from "./pages/MainPage";

import MathPage from "./pages/MathPage";
import MathThemesPage from "./pages/MathThemesPage";
import ChemistryPage from "./pages/ChemistryPage";
import ChemistryThemesPage from "./pages/ChemistryThemesPage";

function App() {
  return (
    <MathJaxContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subjects/math" element={<MathPage />} />
          <Route path="/math/:id" element={<MathThemesPage />} />
          <Route path="/subjects/chemistry" element={<ChemistryPage />} />
          <Route path="/chemistry/:id" element={<ChemistryThemesPage />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </MathJaxContext>
  );
}

export default App;
