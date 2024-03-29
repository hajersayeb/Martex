import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Acceuil from "./pages/Acceuil";
import About from "./pages/About";
import Features from "./pages/Features";
import Login from "./pages/Login";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Acceuil />} />
        <Route path="about" element={<About />} />
        <Route path="features" element={<Features />} />
        <Route path="login" element={<Login />} />

      </Route>
    </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
