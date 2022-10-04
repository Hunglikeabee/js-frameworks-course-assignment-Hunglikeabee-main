import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Header from "./components/header/Header";
import { AuthProvider } from "./context/AuthContext";
import Favourites from './pages/Favourites';

export default function App() {
    return (
      <AuthProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:param" element={<Detail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>

    )
};