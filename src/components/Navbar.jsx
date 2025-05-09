import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../assets/vespalogo.png"

export const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const [menuOpen, setMenuOpen] = useState(false);
    const [solutionsMenuOpen, setSolutionsMenuOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleClick = () => {
        navigate("/cozumler")
    }

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMouseEnter = () => {
        setSolutionsMenuOpen(true);
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };

    const handleMouseLeave = () => {
        const newTimeoutId = setTimeout(() => {
            setSolutionsMenuOpen(false);
        }, 200);
        setTimeoutId(newTimeoutId);
    };

    const linkClass = (path) =>
        `text-lg relative block transition-colors duration-300 text-[#08467e] dark:text-white hover:text-[#08467e] dark:hover:text-white 
        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
        after:bg-[#08467e] dark:after:bg-white hover:after:w-full after:transition-all after:duration-300 
        ${isActive(path) ? 'border-b-2 border-[#08467e] dark:border-white' : ''}`;

    return (
        <header className="w-full h-20 flex items-center bg-[#f3f9ff] text-white dark:bg-black dark:text-white z-50 relative">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src={logo}
                            alt="VESPA"
                            className="h-10 w-auto lg:h-12 transition-all duration-300"
                        />
                    </Link>
                </div>

                <div className="lg:hidden flex items-center gap-4 ">
                    <button onClick={toggleTheme}>
                        <BiSolidSun className="text-[#08467e] dark:text-white hidden dark:inline text-2xl cursor-pointer hover:text-yellow-400 transition-colors duration-200" />
                        <BiSolidMoon className="text-[#08467e] dark:text-white dark:hidden text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-200" />
                    </button>
                    <button onClick={toggleMenu} className="bg-[#f3f9ff] dark:bg-black text-3xl text-[#08467e] dark:text-white">
                        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>

                <ul className={`lg:flex items-center gap-8 text-base font-medium absolute lg:static top-20 left-0 w-full lg:w-auto bg-[#f3f9ff] dark:bg-black px-6 lg:px-0 transition-all duration-300 ease-in-out z-40 ${menuOpen ? 'block' : 'hidden'} lg:block`}>
                    <li className="py-2 lg:py-0">
                        <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>
                            ANASAYFA
                        </Link>
                    </li>
                    <li className="py-2 lg:py-0">
                        <Link to="/urunler" className={linkClass("/urunler")} onClick={() => setMenuOpen(false)}>
                            ÜRÜNLER
                        </Link>
                    </li>
                    <li className="py-2 lg:py-0 relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <button onClick={handleClick} className={`${linkClass("/cozum1")}`}>
                            ÇÖZÜMLER
                        </button>
                        {solutionsMenuOpen && (
                            <ul className="absolute left-0 mt-3 rounded-xl shadow-lg bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white w-64 overflow-hidden z-50 border dark:border-gray-700 animate-fadeIn">
                                <li>
                                    <Link to="/card/otomatikkapisistemleri" className={`block px-5 py-3 hover:bg-sky-100 dark:hover:bg-[#1d9bf0] dark:hover:text-white transition duration-200 ${isActive("/cozum1") ? 'font-bold text-xl' : ''}`}>
                                        OTOMATİK KAPI SİSTEMLERİ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/card/otomatikgecissistemleri" className={`block px-5 py-3 hover:bg-sky-100 dark:hover:bg-[#1d9bf0] dark:hover:text-white transition duration-200 ${isActive("/cozum2") ? 'font-bold text-xl' : ''}`}>
                                        OTOMATİK GEÇİŞ SİSTEMLERİ OGS
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/card/plakatanimasistemleri" className={`block px-5 py-3 hover:bg-sky-100 dark:hover:bg-[#1d9bf0] dark:hover:text-white transition duration-200 ${isActive("/cozum3") ? 'font-bold text-xl' : ''}`}>
                                        PLAKA TANIMA SİSTEMLERİ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/card/kartligecissistemleri" className={`block px-5 py-3 hover:bg-sky-100 dark:hover:bg-[#1d9bf0] dark:hover:text-white transition duration-200 ${isActive("/cozum4") ? 'font-bold text-xl' : ''}`}>
                                        KARTLI GEÇİŞ SİSTEMLERİ
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/card/turnikegecissistemleri" className={`block px-5 py-3 hover:bg-sky-100 dark:hover:bg-[#1d9bf0] dark:hover:text-white transition duration-200 ${isActive("/cozum5") ? 'font-bold text-xl' : ''}`}>
                                        TURNİKE SİSTEMLERİ
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="py-2 lg:py-0">
                        <Link to="/hakkimizda" className={linkClass("/about")} onClick={() => setMenuOpen(false)}>
                            HAKKIMIZDA
                        </Link>
                    </li>
                    <li className="py-2 lg:py-0">
                        <Link to="/medya" className={linkClass("/medya")} onClick={() => setMenuOpen(false)}>
                            MEDYA
                        </Link>
                    </li>
                    <li className="py-2 lg:py-0">
                        <Link to="/iletisim" className={linkClass("/contact")} onClick={() => setMenuOpen(false)}>
                            İLETİŞİM
                        </Link>
                    </li>
                </ul>

                <div className="hidden lg:block">
                    <button onClick={toggleTheme}>
                        <BiSolidSun className="text-[#08467e] hidden dark:inline text-2xl cursor-pointer hover:text-yellow-400 transition-colors duration-200" />
                        <BiSolidMoon className="text-[#08467e] dark:hidden text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-200" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;