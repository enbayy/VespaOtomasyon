import React from 'react';
import logo from "/vespalogo.png"

const AboutHome = () => {
    return (
        <section className="container bg-white dark:bg-black py-16" data-aos="fade-up">
            <div className="w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className="md:text-left space-y-6">
                    <h2
                        style={{ fontFamily: "Inter, sans-serif" }}
                        className="text-4xl md:text-5xl font-bold text-[#af1816] dark:text-white leading-tight relative inline-block"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        VESPA OTOMASYON
                    </h2>
                    <span className="block w-16 h-1 bg-[#af1816] dark:bg-white mt-2 rounded"></span>
                    <p
                        style={{ fontFamily: "Poppins, sans-serif" }}
                        className="text-gray-700 dark:text-gray-300 text-lg md:text-xl"
                        data-aos="fade-up"
                        data-aos-delay="300">
                        VESPA, güvenlik sistemleri alanında 10 yılı aşkın bir deneyime sahip olup, sektördeki bu geniş birikimi yeni bir marka altında birleştirerek hizmet vermektedir. Konya genelinde, otomatik kapı sistemleri, otomatik geçiş sistemleri, kartlı geçiş sistemleri, plaka tanıma ve turnike sistemleri gibi ileri teknoloji güvenlik çözümleri sunmaktadır.
                    </p>
                    <p
                        style={{ fontFamily: "Poppins, sans-serif" }}
                        className="text-gray-700 dark:text-gray-300 text-lg md:text-xl"
                        data-aos="fade-up"
                        data-aos-delay="500"
                    >
                        Vespa, yalnızca güvenlik sistemlerinin kurulumunu değil, aynı zamanda bu sistemlerin bakım ve yönetimini de üstlenerek, her aşamada kullanıcılarına güvenilir, verimli ve teknolojik altyapılar sağlamaktadır. Konya'da, sektördeki tüm ihtiyaçlara yönelik kaliteli ve özelleştirilmiş çözümlerle hizmet vermekteyiz.
                    </p>
                </div>
                <div
                    className="flex justify-center md:justify-end"
                    data-aos="zoom-in"
                >
                    <div className="bg-white p-6 rounded-full shadow-lg hover:scale-105 transition duration-300">
                        <img
                            src={logo}
                            alt="Vespa Otomasyon Logo"
                            className="w-80 h-80 object-contain"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default AboutHome;