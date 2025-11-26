import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home"; // NOVA HOME
import { Deck } from "./pages/deck/Deck"; // ANTIGA HOME
import Register from "./pages/register/Register";
import About from "./pages/about/About";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />

            <Route
              path="/deck"
              element={
                <ProtectedRoute>
                  <Deck />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;