import React from 'react';

const OtomatikGecisSistemleri = () => {
    return (
        <div className="bg-[#f3f9ff] dark:bg-black w-full mx-auto px-6 py-12">
            <div className='container max-w-6xl'>
                <h1 className="text-4xl font-bold text-center text-[#08467e] dark:text-white mb-10">
                    OTOMATİK GEÇİŞ SİSTEMLERİ
                </h1>
                <div className="bg-[#f3f9ff] dark:bg-black border-b-2 border-[#08467e] shadow-md overflow-hidden mb-10">
                    <img
                        src="https://www.vespakapi.com/wp-content/uploads/2015/10/otomatik-gecis-sistemi-konya.jpg"
                        alt="Otomatik Geçiş 1"
                        className="w-full h-auto object-cover"
                    />
                    <div className="px-6 py-4">
                        <p className="text-gray-700 dark:text-white text-lg">
                            Otomatik geçiş sistemleri araç tanıma sistemi ile entegre çalışır. Araçlara yapıştırılan elektronik etiket sayesinde araçlar yetkilendirilir. Bu etiketin elektronik sistemlerimiz tarafından okunmasıyla sistem devreye girer. Bu sistemde kumandayı unuttum problemi ortadan kalkmaktadır. Otomatik geçiş sistemi sayesinde araçlar pratik ve hızlı bir şekilde yığılma olmadan sistemden geçiş yaparlar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtomatikGecisSistemleri;