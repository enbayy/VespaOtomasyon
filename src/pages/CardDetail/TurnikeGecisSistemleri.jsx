import React from 'react'

const TurnikeGecisSistemleri = () => {
    return (
        <div className="bg-[#f3f9ff] dark:bg-black w-full mx-auto px-6 py-12">
            <div className='container max-w-6xl'>
                <h1 className="text-5xl font-bold text-center text-[#08467e] dark:text-white mb-12 tracking-tight">
                    TURNİKE SİSTEMLERİ
                </h1>
                <div className="bg-[#f3f9ff] dark:bg-black border-b-2 border-[#08467e] shadow-md overflow-hidden mb-10">
                    <img
                        src="https://www.vespakapi.com/wp-content/uploads/2015/10/konya-turnike-sistemi.jpg"
                        alt="Turnike Geçiş 1"
                        className="w-full h-auto object-cover"
                    />
                    <div className="px-6 py-4">
                        <p className="text-gray-700 dark:text-white text-lg">
                            Konya Turnike Geçiş Sistemleri giriş çıkış kontrolü gereken yerler için oldukça önemli bir ihtiyaçtır. Özel siteler, ofisler, işyerleri, kampüs, stadyum vb girişlerin kontrol edildiği her alanda bu otomasyon sistemi uygulanabilir. Turnike sistemleri oldukça güvenli bir yapıya sahiptir. Kullanıcılara tanımlanan kartlar sayesinde insanların rahatlıkla turnike sistemini kullanmaları sağlanmıştır.
                            İsteğe göre “Kartlı, Parmak İzi Okuyuculu ya da Yüz Tanıma Sistemi” ile turnikelerin çalışması sağlanır.
                        </p>
                    </div>
                    <div className='flex flex-wrap justify-center gap-6 mb-4'>
                        <img
                            src="https://www.vespakapi.com/wp-content/uploads/2021/09/46302939_1047687182100455_7908415606741794816_n-150x150.jpg"
                            alt="Turnike Geçiş 2"
                            className="w-full sm:w-60 md:w-72 lg:w-80 h-auto object-contain"
                        />
                        <img
                            src="https://www.vespakapi.com/wp-content/uploads/2021/09/46372533_1047687072100466_280529070293254144_n-150x150.jpg"
                            alt="Turnike Geçiş 3"
                            className="w-full sm:w-60 md:w-72 lg:w-80 h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TurnikeGecisSistemleri