import React from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";
import logo from "/vespalogo.png"

const Footer = () => {
    return (
        <footer className="bg-[#af1816] py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="bg-white p-4 rounded-2xl">
                            <img src={logo} alt="VESPA" className="w-60 md:w-60" />
                        </div>
                        <div className="flex space-x-10 mt-8">
                            <a href="https://www.facebook.com/vespakapi/?locale=tr_TR" target="_blank" rel="noopener noreferrer">
                                <SiFacebook size={35} className="text-white text-2xl hover:text-blue-500 transition-colors duration-300" />
                            </a>
                            <a href="https://www.youtube.com/@vespaotomatikkapisistemler5148/featured" target="_blank" rel="noopener noreferrer">
                                <FaYoutube size={35} className="text-white text-2xl hover:text-blue-500 transition-colors duration-300" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <SiInstagram size={35} className="text-white text-2xl hover:text-blue-500 transition-colors duration-300" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <SiTwitter size={35} className="text-white text-2xl hover:text-blue-500 transition-colors duration-300" />
                            </a>
                        </div>
                    </div>


                    <div className="flex flex-col items-center md:items-start">
                        <h4 style={{ fontFamily: "Inter, sans-serif" }} className="text-white text-2xl font-medium mb-4">HIZLI ERİŞİM</h4>
                        <ul className="space-y-2 text-center md:text-left">
                            <li>
                                <a style={{ fontFamily: "Poppins, sans-serif" }} href="#" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    ANASAYFA
                                </a>
                            </li>
                            <li>
                                <a style={{ fontFamily: "Poppins, sans-serif" }} href="#urunler" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    ÜRÜNLER
                                </a>
                            </li>
                            <li>
                                <a style={{ fontFamily: "Poppins, sans-serif" }} href="#cozumler" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    ÇÖZÜMLER
                                </a>
                            </li>
                            <li>
                                <a style={{ fontFamily: "Poppins, sans-serif" }} href="#hakkimizda" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    HAKKIMIZDA
                                </a>
                            </li>
                            <li>
                                <a style={{ fontFamily: "Poppins, sans-serif" }} href="#medya" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    MEDYA
                                </a>
                            </li>
                            <li>
                                <a style={{ fontFamily: "Poppins, sans-serif" }} href="#iletisim" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    İLETİŞİM
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 style={{ fontFamily: "Inter, sans-serif" }} className="text-white text-2xl font-semibold mb-4">İLETİŞİM</h4>
                        <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-lg text-white mb-1">info@vespakapi.com</p>
                        <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-lg text-white">0332 333 00 19</p>
                        <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-lg text-white">0533 317 96 69</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 style={{ fontFamily: "Inter, sans-serif" }} className="text-white text-2xl font-semibold mb-4">KONUM</h4>
                        <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-lg text-white leading-relaxed">
                            Fevzi çakmak mahallesi 10655. sokak
                            <br />
                            No: 65 Karatay Konya
                        </p>
                    </div>
                </div>

                <hr className="border-white my-8" />

                <div className="text-center -mb-8">
                    <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-xl text-gray-200">
                        © {new Date().getFullYear()} Tüm Hakları Saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;