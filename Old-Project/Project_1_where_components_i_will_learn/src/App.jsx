import { useState } from "react";

import { Navigate, Routes, Route } from "react-router-dom"
import Nav from "./components/nav/NavBar.jsx"
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login.jsx";
// import <Contact></Contact>
import NotFound from "./pages/NotFound";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
    <Nav onLogin={isLogin}/>
    <Routes>
      <Route path="/" element={isLogin ? <Home /> : <Login onLogin={() => setIsLogin(true)} />} />
      <Route path="/about" element={isLogin ? <About /> : <Login onLogin={() => setIsLogin(true)} />} />
      <Route
        path="/login"
        element={isLogin ? <Navigate to="/" replace /> : <Login onLogin={() => setIsLogin(true)} />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
