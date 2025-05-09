import React from 'react'

const KartliGecisSistemleri = () => {
    return (
        <div className="bg-white dark:bg-black w-full mx-auto px-6 py-12">
            <div className='container max-w-6xl'>
                <h1 className="text-5xl font-bold text-center text-[#af1816] dark:text-white mb-12 tracking-tight">
                    KARTLI GEÇİŞ SİSTEMLERİ
                </h1>
                <div className="bg-white dark:bg-black  border-b-2 border-[#af1816] shadow-md overflow-hidden mb-10">
                    <img
                        src="https://www.vespakapi.com/wp-content/uploads/2015/10/kartli-gecis-sistemi-konya.jpg"
                        alt="Kartlı Geçiş 1"
                        className="w-full h-auto object-cover"
                    />
                    <div className="px-6 py-4">
                        <p className="text-gray-700 dark:text-white text-lg">
                            Otopark otomasyon sistemleri artık bir ihtiyaç haline gelmiştir. Vespa Otomatik Kapı Sistemleri olarak tüm otopark girişlerinde kart sistemi ile otomasyon sağlamaktayız. Kartlı geçiş sistemi sayesinde, kartları yetkilendirilen sürücüler, kart okuyucusuna kartlarını yaklaştırdıkları takdirde giriş yapabilmektedirler. Bu sistem sayesinde sürücüler araçtan inmeden kart okuyucuya kartlarını yaklaştırarak otoparka giriş sağlamaktadırlar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KartliGecisSistemleri