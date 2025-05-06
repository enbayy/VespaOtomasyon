import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/foto1.jpg";
import slider2 from "../assets/foto2.jpg";
import slider3 from "../assets/foto3.jpg";
import slider4 from "../assets/foto3.jpg";
import { FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const [selectedImage, setSelectedImage] = useState(slider1);
    const navigate = useNavigate();

    const images = [
        { src: slider1, label: "Resim 1" },
        { src: slider2, label: "Resim 2" },
        { src: slider3, label: "Resim 3" },
        { src: slider4, label: "Resim 4" },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
    };

    const handleClick = () => {
        navigate("/iletisim")
    }

    const handleClick1 = () => {
        navigate("/cozumler")
    }

    return (
        <section className="bg-[#f3f9ff] dark:bg-black w-full flex flex-col md:flex-row items-center justify-center px-6 sm:px-8 md:px-12 py-0 sm:py-8 md:py-10 space-y-12 md:space-y-0 container relative overflow-hidden">
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-8 p-8 bg-opacity-90 bg-[#f3f9ff] dark:bg-black rounded-lg lg:mb-16 relative z-10">
                <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl -mb-6 font-bold tracking-wide text-[#08467e] dark:text-white leading-tight drop-shadow-lg">
                    VESPA OTOMASYON
                </h1>

                <p data-aos="fade-up" data-aos-delay="200" className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#08467e] dark:text-white leading-tight drop-shadow-lg">
                    OTOMATİK KAPI SİSTEMLERİ
                </p>

                <p data-aos="fade-up" data-aos-delay="300" className="text-xl md:text-2xl text-black leading-relaxed">
                    <span className="font-semibold text-[#08467e] dark:text-white">Vespa Otomasyon</span>,
                    <span className="font-semibold text-black dark:text-white"> kapı, kepenk, bariyer ve endüstriyel otomasyon sistemleri alanlarında uzmanlaşmış,</span>
                    <span className="font-semibold text-black dark:text-white"> yüksek kaliteli ürünler</span>
                    <span className="font-semibold text-black dark:text-white"> ve yenilikçi çözümler sunan lider bir markadır.</span>
                </p>

                <ul className="text-lg md:text-xl text-black dark:text-white space-y-2">
                    <li data-aos="fade-up" data-aos-delay="400" className="flex items-start gap-2">
                        <FaCheck className="text-[#08467e] dark:text-white mt-1" />
                        Endüstriyel Otomasyon Çözümleri
                    </li>
                    <li data-aos="fade-up" data-aos-delay="500" className="flex items-start gap-2">
                        <FaCheck className="text-[#08467e] dark:text-white mt-1" />
                        Akıllı Otopark ve Kapı Sistemleri
                    </li>
                    <li data-aos="fade-up" data-aos-delay="600" className="flex items-start gap-2">
                        <FaCheck className="text-[#08467e] dark:text-white mt-1" />
                        15+ Yıllık Deneyim ve Müşteri Memnuniyeti
                    </li>
                    <li data-aos="fade-up" data-aos-delay="700" className="flex items-start gap-2">
                        <FaCheck className="text-[#08467e] dark:text-white mt-1" />
                        Gelişmiş Uzaktan İzleme ve Kontrol Sistemleri
                    </li>
                </ul>

                <div className="flex space-x-4 mt-6">
                    <button onClick={handleClick1} className="bg-[#08467e] text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-110">
                        Çözümleri İncele
                    </button>
                    <button onClick={handleClick} className="bg-[#08467e] text-white px-6 py-3 rounded-lg shadow-lg transition-all transform hover:scale-110">
                        Bizimle İletişime Geç
                    </button>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" className="w-full md:w-1/2 flex flex-col items-center space-y-6 relative z-10">
                <div className="w-full max-w-2xl aspect-video border-4 border-[#08467e] rounded-xl shadow-lg overflow-hidden">
                    <img
                        src={selectedImage}
                        alt="Selected"
                        className="w-full h-full object-cover"
                    />
                </div>

                <Slider {...sliderSettings} className="w-full max-w-2xl relative z-10">
                    {images.map((item, index) => (
                        <div key={index} className="p-2 cursor-pointer" onClick={() => setSelectedImage(item.src)}>
                            <div className="w-full aspect-video bg-[#08467e] hover:bg-[#08467e] rounded-md shadow-md overflow-hidden">
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx>{`
                .slick-prev, .slick-next {
                    color: white !important; 
                    top: 50% !important; 
                    transform: translateY(-50%) !important; 
                    z-index: 20 !important;
                }
                .slick-prev {
                    left: 10px !important; 
                }
                .slick-next {
                    right: 10px !important; 
                }
                .slick-prev:before, .slick-next:before {
                    color: white !important;
                }
            `}</style>
        </section>
    );
};

export default Hero;