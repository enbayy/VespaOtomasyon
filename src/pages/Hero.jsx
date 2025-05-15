import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/foto3.jpg";
import slider2 from "../assets/foto4.jpg";
import slider3 from "../assets/foto7.jpg";
import slider4 from "../assets/foto9.jpg";
import slider5 from "../assets/foto10.jpg";
import slider6 from "../assets/foto11.jpg";
import slider7 from "../assets/foto5.jpg";
import slider8 from "../assets/foto6.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(slider2);
  const navigate = useNavigate();

  const images = [slider2, slider8, slider1, slider7, slider3, slider4, slider5, slider6];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    beforeChange: (current, next) => setSelectedImage(images[next % images.length]),
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleContact = () => navigate("/iletisim");
  const handleSolutions = () => navigate("/cozumler");

  return (
    <section className="container bg-white dark:bg-black py-10 md:py-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
      <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
        <h1 data-aos="fade-up" data-aos-delay="100" style={{ fontFamily: "Inter, sans-serif" }} className="text-[#af1816] text-4xl sm:text-5xl md:text-6xl font-bold">
          VESPA OTOMASYON
        </h1>

        <p data-aos="fade-up" data-aos-delay="300" style={{ fontFamily: "Poppins, sans-serif" }} className="text-lg sm:text-xl md:text-xl text-[#af1816] dark:text-white">
          OTOMATİK KAPI SİSTEMLERİNDE GÜVENİLİR ÇÖZÜM ORTAĞINIZ
        </p>

        <p data-aos="fade-up" data-aos-delay="500" className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-i">
          <span className="font-semibold text-[#af1816]">Vespa Otomasyon</span>, geçiş kontrol çözümleri, güvenlik sistemleri ve akıllı otomasyon alanlarında
          yenilikçi hizmet anlayışıyla sektörde fark yaratıyor.
        </p>

        <ul data-aos="fade-up" data-aos-delay="600" className="space-y-2 sm:space-y-3 text-gray-800 dark:text-white text-base sm:text-lg" style={{ fontFamily: "Poppins, sans-serif" }}>
          {[
            "10+ Yıllık Sektör Deneyimi ve Güvenilir Hizmet",
            "Türkiye Genelinde Yüzlerce Başarılı Proje",
            "7/24 Teknik Destek ve Hızlı Müdahale Garantisi",
            "Uzaktan Erişimli Akıllı Otomasyon Sistemleri",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <FaCheckCircle className="text-[#af1816] text-xl" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3 sm:gap-5 pt-3 md:pt-5">
          <button
            data-aos="fade-right" data-aos-delay="900"
            onClick={handleSolutions}
            style={{ fontFamily: "Inter, sans-serif" }}
            className="bg-[#af1816] hover:bg-[#c94643] text-white px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold tracking-wide shadow-lg transition-all"
          >
            ÇÖZÜMLERİ İNCELE
          </button>
          <button
            data-aos="fade-right" data-aos-delay="700"
            onClick={handleContact}
            style={{ fontFamily: "Inter, sans-serif" }}
            className="border border-[#af1816] hover:bg-[#af1816] hover:text-white text-[#af1816] px-6 sm:px-7 py-3 sm:py-4 rounded-full font-semibold tracking-wide shadow-md transition-all"
          >
            İLETİŞİME GEÇ
          </button>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="300" className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-5">
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-[#af1816]">
          <img
            src={selectedImage}
            alt="Seçilen Görsel"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        <Slider {...sliderSettings} className="mt-2">
          {images.map((img, i) => (
            <div data-aos="fade-right" data-aos-delay="400" key={i} className="px-2 cursor-pointer">
              <div
                onClick={() => setSelectedImage(img)}
                className={`overflow-hidden rounded-lg border-2 ${selectedImage === img
                  ? "border-[#af1816]"
                  : "border-transparent"} shadow hover:shadow-lg transition-all`}
              >
                <img
                  src={img}
                  alt={`Slider ${i + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx>{`
        .slick-prev,
        .slick-next {
          z-index: 10;
          font-size: 20px;
        }
        .slick-prev:before,
        .slick-next:before {
          color: #af1816;
        }
        @media (max-width: 768px) {
          .slick-prev,
          .slick-next {
            font-size: 18px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;