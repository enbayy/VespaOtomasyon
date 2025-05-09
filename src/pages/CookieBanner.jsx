import React, { useState, useEffect } from "react";

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!sessionStorage.getItem("cookiesAccepted")) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        sessionStorage.setItem("cookiesAccepted", "true");
        setIsVisible(false);
    };

    const handleReject = () => {
        sessionStorage.setItem("cookiesAccepted", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#2d2d2d] text-white p-6 flex justify-between items-center leading-relaxed flex-col sm:flex-row z-40 shadow-lg rounded-t-lg">
            <p className="text-base flex-1 pr-6 font-poppins">
                Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Bu çerezler, siteyi nasıl kullandığınızı analiz etmemize, size özel içerik sunmamıza ve web sitesi performansını artırmamıza olanak tanımaktadır. Çerezlerin kullanımı hakkında detaylı bilgi almak için{" "}
                <a href="/cookie-policy" className="text-blue-500 hover:underline">
                    Çerez Politikamızı
                </a>{" "}
                inceleyebilirsiniz.
            </p>
            <div className="flex space-x-4 mt-2">
                <button
                    className="bg-[#af1816] hover:bg-[#1d3b55] text-white px-6 py-2 text-base font-semibold rounded"
                    onClick={handleAccept}
                >
                    Kabul Et
                </button>
                <button
                    className="bg-[#444444] hover:bg-[#333333] text-white px-6 py-2 text-base font-semibold rounded"
                    onClick={handleReject}
                >
                    Reddet
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;