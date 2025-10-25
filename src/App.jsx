import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"; // 1. Додано useLocation
import { MathJaxContext } from "better-react-mathjax";
import { useAuth } from "./context/AuthContext";

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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import SubscriptionPage from "./pages/SubscriptionPage";

function App() {
  const { isAuthenticated } = useAuth();
  const location = useLocation(); // 2. Отримуємо поточну локацію

  // 3. Список сторінок, де чат НЕ потрібен
  const hideChatOnPaths = [
    "/login",
    "/register",
    "/profile",
    "/subscriptions"
  ];

  // 4. Перевіряємо, чи поточний шлях є у списку
  const showChat = !hideChatOnPaths.includes(location.pathname);

  return (
    <MathJaxContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subjects/math" element={<MathPage />} />
          <Route path="/math/:id" element={<MathThemesPage />} />
          <Route path="/subjects/chemistry" element={<ChemistryPage />} />
          <Route path="/chemistry/:id" element={<ChemistryThemesPage />} />

          {/* Роути аутентифікації */}
          <Route path="/login" element={isAuthenticated ? <Navigate to="/profile" /> : <Login />} />
          <Route path="/register" element={isAuthenticated ? <Navigate to="/profile" /> : <Register />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/subscriptions" element={isAuthenticated ? <SubscriptionPage /> : <Navigate to="/login" />} />
        </Routes>
        
        {/* 5. Рендеримо чат, ТІЛЬКИ якщо showChat === true */}
        {showChat && <ChatBot />}
    </MathJaxContext>
  );
}

export default App;

