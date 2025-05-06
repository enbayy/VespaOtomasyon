import React from 'react';

const SecuritySection = () => {
    return (
        <section className="bg-[#08467e] text-white text-center py-20 px-6 md:px-20" >
            <h3 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold mb-6 tracking-wide leading-snug text-shadow-lg">
                Akıllı Güvenlik, <span className="text-yellow-300">VESPA</span> ile Mümkün
            </h3>
            <p data-aos="fade-up" data-aos-delay="300" className="text-lg mb-8 max-w-2xl mx-auto font-medium">
                Vespa Otomasyon ile yaşam alanlarınıza güvenlik ve konforu entegre edin. Akıllı telefonunuzla
                kilitlerinizi yönetin, otomatik sistemlerle her zaman güvende olun.
            </p>
            <button data-aos="fade-up" data-aos-delay="500" className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-100 transition transform hover:scale-105">
                Hemen Bilgi Al
            </button>
        </section>
    );
};

export default SecuritySection;