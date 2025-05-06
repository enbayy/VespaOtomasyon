import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/foto1.jpg";
import { Link, useNavigate } from "react-router-dom";

const CompanyInfo = () => {
    const navigate = useNavigate();

    const stats = [
        { value: 10, label: "yearsOfExperience", suffix: "+", tr: "Yıllık Deneyim" },
        { value: 100, label: "customerSatisfaction", suffix: "%", tr: "Müşteri Memnuniyeti" },
        { value: 150, label: "completedProjects", suffix: "+", tr: "Tamamlanan Projeler" }
    ];

    const [counts, setCounts] = useState(stats.map(() => 0));
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    const duration = 2000;
                    const steps = 100;
                    const intervalTime = duration / steps;

                    let currentStep = 0;
                    const interval = setInterval(() => {
                        currentStep++;
                        setCounts(stats.map(stat => Math.round((stat.value / steps) * currentStep)));
                        if (currentStep === steps) clearInterval(interval);
                    }, intervalTime);
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="container bg-[#f3f9ff] dark:bg-black py-12 px-6 md:px-16 lg:px-24">
            <div className="flex flex-col justify-center items-center max-w-6xl mx-auto text-center">
                <Link to="/" className="bg-white rounded-full">
                    <img src={logo} alt="Vespa Kapi Logo" className="w-60 h-auto" />
                </Link>
                <p className="text-black dark:text-white text-base leading-relaxed font-poppins mt-8">
                    Vespa Kapı, sektördeki 10 yılı aşkın deneyimiyle, her biri yüksek kalite standartlarına sahip kapı sistemleri üreterek,
                    müşterilerine güvenli ve estetik çözümler sunmaktadır. Yenilikçi tasarımlarımız ve üstün mühendislik becerilerimiz ile
                    sektördeki lider konumumuzu pekiştirmeye devam ediyoruz.
                </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-[#f3f9ff] p-8 rounded-2xl transform transition duration-300 hover:scale-105">
                        <h3 className="text-3xl font-bold text-[#08467e] font-sans">
                            {counts[index]}{stat.suffix}
                        </h3>
                        <p className="text-gray-800 mt-3 text-base font-poppins">
                            {stat.tr}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-6 max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-semibold text-[#08467e] dark:text-white font-sans">
                    Kalite ve Güvenilirlik
                </h3>
                <p className="text-black dark:text-white mt-5 text-base leading-relaxed font-poppins">
                    Vespa Kapı, müşteri memnuniyetini ön planda tutarak güvenilir, dayanıklı ve estetik kapı sistemleri sunar. Her projede yüksek mühendislik standartları ve son teknoloji üretim yöntemleri kullanarak, yaşam alanlarına değer katan çözümler üretiriz. Amacımız, müşterilerimizin beklentilerini aşan uzun ömürlü ve güvenilir ürünler sunmaktır.
                </p>
            </div>

            <div className="text-center mt-6">
                <button
                    onClick={() => navigate("/iletisim")}
                    className="rounded-md border-2 border-[#08467e] hover:bg-[#08467e]/80 hover:text-black dark:text-white duration-500 py-2 px-6 text-[#08467e] tracking-wider font-semibold"
                >
                    İLETİŞİME GEÇİN
                </button>
            </div>
        </section>
    );
};

export default CompanyInfo;