import React from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#08467e] py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h2 className="text-white text-3xl font-bold mb-4">VESPA OTOMASYON</h2>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <SiFacebook className="text-white text-3xl hover:text-[#cbd5e1] transition-colors" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaYoutube className="text-white text-3xl hover:text-[#cbd5e1] transition-colors" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <SiInstagram className="text-white text-3xl hover:text-[#cbd5e1] transition-colors" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <SiTwitter className="text-white text-3xl hover:text-[#cbd5e1] transition-colors" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-start">
                        <h4 className="text-white text-2xl font-semibold mb-4">HIZLI ERİŞİM</h4>
                        <ul className="space-y-2 text-center md:text-left">
                            <li>
                                <a href="/" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    ANASAYFA
                                </a>
                            </li>
                            <li>
                                <a href="/urunler" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    ÜRÜNLER
                                </a>
                            </li>
                            <li>
                                <a href="/cozumler" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    ÇÖZÜMLER
                                </a>
                            </li>
                            <li>
                                <a href="/hakkimizda" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    HAKKIMIZDA
                                </a>
                            </li>
                            <li>
                                <a href="/medya" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    MEDYA
                                </a>
                            </li>
                            <li>
                                <a href="/iletisim" className="text-lg text-white hover:underline transition-colors flex items-center gap-2">
                                    <HiOutlineArrowNarrowRight className="text-white text-base" />
                                    İLETİŞİM
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-white text-2xl font-semibold mb-4">İLETİŞİM</h4>
                        <p className="text-lg text-white mb-1">info@vespakapi.com</p>
                        <p className="text-lg text-white">0332 333 00 19</p>
                        <p className="text-lg text-white">0533 317 96 69</p>
                    </div>

                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <h4 className="text-white text-2xl font-semibold mb-4">KONUM</h4>
                        <p className="text-lg text-white leading-relaxed">
                            Fevzi çakmak mahallesi 10655. sokak
                            <br />
                            No: 59 Karatay Konya
                        </p>
                    </div>
                </div>

                <hr className="border-white my-8" />

                <div className="text-center -mb-8">
                    <p className="text-sm text-gray-200">
                        © {new Date().getFullYear()} Tüm Hakları Saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;