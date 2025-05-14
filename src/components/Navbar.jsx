import React, { useState, useEffect } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "/vespalogo.png";

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
        navigate("/cozumler");
        setMenuOpen(false);
    };

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [theme]);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [menuOpen]);

    const handleMouseEnter = () => {
        setSolutionsMenuOpen(true);
        if (timeoutId) clearTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
        const newTimeoutId = setTimeout(() => setSolutionsMenuOpen(false), 200);
        setTimeoutId(newTimeoutId);
    };

    const linkClass = (path) =>
        `text-xl relative block transition-colors duration-300 text-[#af1816] dark:text-white hover:text-[#af1816] dark:hover:text-white 
     after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] 
     after:bg-[#af1816] dark:after:bg-white hover:after:w-full after:transition-all after:duration-300 
     ${isActive(path) ? 'border-b-2 border-[#af1816] dark:border-white' : ''}`;

    return (
        <header className="w-full h-24 flex items-center bg-white text-white dark:bg-black dark:text-white z-50 relative">
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="VESPA" className="h-14 w-auto lg:h-14 transition-all duration-300" />
                    </Link>
                </div>

                <div className="lg:hidden flex items-center gap-4">
                    <button onClick={toggleTheme}>
                        <BiSolidSun className="text-[#af1816] dark:text-white hidden dark:inline text-2xl cursor-pointer hover:text-yellow-400" />
                        <BiSolidMoon className="text-[#af1816] dark:text-white dark:hidden text-2xl cursor-pointer hover:text-blue-500" />
                    </button>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="text-3xl text-[#af1816] dark:text-white">
                        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>

                <ul className="hidden lg:flex items-center gap-8 text-base font-medium">
                    <li><Link to="/" className={linkClass("/")} >ANASAYFA</Link></li>
                    <li><Link to="/urunler" className={linkClass("/urunler")} >ÜRÜNLER</Link></li>

                    <li className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <button onClick={handleClick} className={linkClass("/cozum1")}>ÇÖZÜMLER</button>
                        {solutionsMenuOpen && (
                            <ul className="absolute left-0 mt-3 rounded-xl shadow-lg bg-white dark:bg-[#1a1a1a] text-gray-800 dark:text-white w-64 z-50 border dark:border-gray-700 animate-fadeIn">
                                <li><Link to="/card/otomatikkapisistemleri" className="block px-5 py-3 hover:bg-red-100 dark:hover:bg-[#af1816] dark:hover:text-white">OTOMATİK KAPI SİSTEMLERİ</Link></li>
                                <li><Link to="/card/otomatikgecissistemleri" className="block px-5 py-3 hover:bg-red-100 dark:hover:bg-[#af1816] dark:hover:text-white">OTOMATİK GEÇİŞ SİSTEMLERİ OGS</Link></li>
                                <li><Link to="/card/plakatanimasistemleri" className="block px-5 py-3 hover:bg-red-100 dark:hover:bg-[#af1816] dark:hover:text-white">PLAKA TANIMA SİSTEMLERİ</Link></li>
                                <li><Link to="/card/kartligecissistemleri" className="block px-5 py-3 hover:bg-red-100 dark:hover:bg-[#af1816] dark:hover:text-white">KARTLI GEÇİŞ SİSTEMLERİ</Link></li>
                                <li><Link to="/card/turnikegecissistemleri" className="block px-5 py-3 hover:bg-red-100 dark:hover:bg-[#af1816] dark:hover:text-white">TURNİKE SİSTEMLERİ</Link></li>
                            </ul>
                        )}
                    </li>

                    <li><Link to="/hakkimizda" className={linkClass("/about")}>HAKKIMIZDA</Link></li>
                    <li><Link to="/medya" className={linkClass("/medya")}>MEDYA</Link></li>
                    <li><Link to="/iletisim" className={linkClass("/contact")}>İLETİŞİM</Link></li>
                </ul>

                <div className="hidden lg:block">
                    <button onClick={toggleTheme}>
                        <BiSolidSun className="text-[#af1816] hidden dark:inline text-2xl cursor-pointer hover:text-blue-500" />
                        <BiSolidMoon className="text-[#af1816] dark:hidden text-2xl cursor-pointer hover:text-blue-500" />
                    </button>
                </div>
            </nav>

            <div className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMenuOpen(false)} />

            <div className={`fixed top-0 left-0 w-4/5 max-w-xs h-full bg-white dark:bg-[#1a1a1a] z-50 shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="flex items-center justify-center py-6 border-b border-gray-200 dark:border-gray-700">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="VESPA" className="h-12 w-auto" />
                    </Link>
                </div>

                <ul className="flex flex-col px-6 py-8 gap-6 text-base font-medium">
                    <li><Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>ANASAYFA</Link></li>
                    <li><Link to="/urunler" className={linkClass("/urunler")} onClick={() => setMenuOpen(false)}>ÜRÜNLER</Link></li>
                    <li><Link to="/cozumler" className={linkClass("/cozum1")} onClick={() => setMenuOpen(false)}>ÇÖZÜMLER</Link></li>
                    <li><Link to="/hakkimizda" className={linkClass("/about")} onClick={() => setMenuOpen(false)}>HAKKIMIZDA</Link></li>
                    <li><Link to="/medya" className={linkClass("/medya")} onClick={() => setMenuOpen(false)}>MEDYA</Link></li>
                    <li><Link to="/iletisim" className={linkClass("/contact")} onClick={() => setMenuOpen(false)}>İLETİŞİM</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Navbar;