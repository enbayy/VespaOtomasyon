import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Media from "./pages/Media";
import NavbarUp from "./components/NavbarUp";
import { FaWhatsapp } from 'react-icons/fa';
import CookieBanner from "./pages/CookieBanner";
import SolutionsPage from "./pages/SolutionsPage";
import CardPage from "./pages/CardPage";
import OtomatikKapiSistemleri from "./pages/CardDetail/OtomatikKapiSistemleri";
import OtomatikGecisSistemleri from "./pages/CardDetail/OtomatikGecisSistemleri";
import PlakaTanimaSistemleri from "./pages/CardDetail/PlakaTanimaSistemleri";
import KartliGecisSistemleri from "./pages/CardDetail/KartliGecisSistemleri";
import TurnikeGecisSistemleri from "./pages/CardDetail/TurnikeGecisSistemleri";
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/905333179669', '_blank');
  };

  return (
    <Router>
      <ScrollToTop />
      <NavbarUp />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/urunler" element={<ProductPage />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/medya" element={<Media />} />
        <Route path="/cozumler" element={<SolutionsPage />} />
        <Route path="/card/otomatikkapisistemleri" element={<OtomatikKapiSistemleri />} />
        <Route path="/card/otomatikgecissistemleri" element={<OtomatikGecisSistemleri />} />
        <Route path="/card/plakatanimasistemleri" element={<PlakaTanimaSistemleri />} />
        <Route path="/card/kartligecissistemleri" element={<KartliGecisSistemleri />} />
        <Route path="/card/turnikegecissistemleri" element={<TurnikeGecisSistemleri />} />
      </Routes>
      <Footer />
      <div
        className="fixed bottom-1 right-1 bg-[#25D366] p-3 rounded-full shadow-lg cursor-pointer transition duration-300 hover:bg-[#128C7E] z-50"
        onClick={handleClick}
      >
        <FaWhatsapp size={40} color="white" />
      </div>

      <CookieBanner />
    </Router>
  );
};

export default App;