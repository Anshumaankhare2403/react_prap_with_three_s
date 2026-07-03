import {Routes,Route} from "react-router-dom"
import Nav from "./components/nav/NavBar.jsx"
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login.jsx";
// import <Contact></Contact>
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
