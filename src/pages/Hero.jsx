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
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(slider1);
  const navigate = useNavigate();

  const images = [slider1, slider2, slider3, slider4, slider5, slider6];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleContact = () => navigate("/iletisim");
  const handleSolutions = () => navigate("/cozumler");

  return (
    <section className="container bg-white dark:bg-black py-20  flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="w-full md:w-1/2 space-y-4">
        <h1 style={{ fontFamily: "Inter, sans-serif" }}
          className="text-[#af1816] text-6xl md:text-6xl font-bold">
          VESPA OTOMASYON
        </h1>

        <p style={{ fontFamily: "Poppins, sans-serif" }}
          className="text-xl md:text-xl text-[#af1816] dark:text-white">
          OTOMATİK KAPI SİSTEMLERİNDE GÜVENİLİR ÇÖZÜM ORTAĞINIZ
        </p>

        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-i">
          <span className="font-semibold text-[#af1816]">Vespa Otomasyon</span>, geçiş kontrol çözümleri, güvenlik sistemleri ve akıllı otomasyon alanlarında
          yenilikçi hizmet anlayışıyla sektörde fark yaratıyor.
        </p>

        <ul
          className="space-y-3 text-gray-800 dark:text-white text-base md:text-lg"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
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

        <div className="flex flex-wrap gap-5 pt-5">
          <button
            onClick={handleSolutions}
            style={{ fontFamily: "Inter, sans-serif" }}
            className="bg-[#af1816] hover:bg-[#c94643] text-white px-7 py-4 rounded-full font-semibold tracking-wide shadow-lg transition-all"
          >
            ÇÖZÜMLERİ İNCELE
          </button>
          <button
            onClick={handleContact}
            style={{ fontFamily: "Inter, sans-serif" }}
            className="border border-[#af1816] hover:bg-[#af1816] hover:text-white text-[#af1816] px-7 py-4 rounded-full font-semibold tracking-wide shadow-md transition-all"
          >
            İLETİŞİME GEÇ
          </button>
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-5">
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl border-4 border-[#af1816]">
          <img
            src={selectedImage}
            alt="Seçilen Görsel"
            className="w-full h-full object-cover transition-all duration-500"
          />
        </div>

        <Slider {...sliderSettings} className="mt-2">
          {images.map((img, i) => (
            <div key={i} className="px-2 cursor-pointer">
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
        }
        .slick-prev:before,
        .slick-next:before {
          color: #af1816;
          font-size: 25px;
        }
      `}</style>
    </section>
  );
};

export default Hero;