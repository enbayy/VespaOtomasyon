import React from 'react';

const SecuritySection = () => {
    return (
        <section className="bg-[#08467e] text-white text-center py-16 px-6 md:px-20 space-y-8">
            <h3 data-aos="fade-up" data-aos-delay="100" className="text-4xl font-bold tracking-wide leading-snug text-shadow-lg">
                <span style={{ fontFamily: "Inter, sans-serif" }}>Güvenli Geçişin Anahtarı,</span><span style={{ fontFamily: "Inter, sans-serif" }} className="text-yellow-300">VESPA</span>
            </h3>
            <p style={{ fontFamily: "Poppins, sans-serif" }} data-aos="fade-up" data-aos-delay="300" className="text-lg mb-8 max-w-2xl mx-auto font-medium">
                Otomatik kapı sistemlerinden kartlı geçişe, plaka tanıma çözümlerinden bariyer sistemlerine kadar tüm ihtiyaçlarınıza
                özel güvenlik çözümleri sunuyoruz.
            </p>
            <button style={{ fontFamily: "Inter, sans-serif" }} data-aos="fade-up" data-aos-delay="500" className="bg-white text-[#08467e] font-semibold px-6 py-3 rounded-lg shadow-xl hover:bg-gray-100 transition transform hover:scale-105">
                HEMEN BİLGİ AL
            </button>
        </section>
    );
};

export default SecuritySection;
