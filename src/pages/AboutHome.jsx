import React from 'react';
import hero from '../assets/foto1.jpg'

const AboutHome = () => {
    return (
        <section className="container bg-[#f3f9ff] dark:bg-black px-6 md:px-20 py-16" data-aos="fade-up">
            <div className="w-full mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div className="md:text-left">
                    <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-semibold text-[#08467e] dark:text-white mb-6 leading-tight">
                        VESPA OTOMASYON
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-gray-700 dark:text-white text-lg mb-6">
                        VESPA, güvenlik sistemleri alanında 10 yılı aşkın bir deneyime sahip olup, sektördeki bu geniş birikimi yeni bir marka altında birleştirerek hizmet vermektedir. Konya genelinde, otomatik kapı sistemleri, otomatik geçiş sistemleri, kartlı geçiş sistemleri, plaka tanıma ve turnike sistemleri gibi ileri teknoloji güvenlik çözümleri sunmaktadır.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="500" className="text-gray-700 dark:text-white text-lg">
                        Vespa, yalnızca güvenlik sistemlerinin kurulumunu değil, aynı zamanda bu sistemlerin bakım ve yönetimini de üstlenerek, her aşamada kullanıcılarına güvenilir, verimli ve teknolojik altyapılar sağlamaktadır. Konya'da, sektördeki tüm ihtiyaçlara yönelik kaliteli ve özelleştirilmiş çözümlerle hizmet vermekteyiz.
                    </p>
                </div>
                <div className="flex justify-end" data-aos="zoom-in">
                    <img
                        src={hero}
                        alt="Vespa Otomasyon Görsel"
                        className="w-full rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHome;