import React from 'react';

const PlakaTanimaSistemleri = () => {
    return (
        <div className="bg-white dark:bg-black w-full mx-auto px-6 py-12">
            <div className='container max-w-6xl'>
                <h1 className="text-5xl font-bold text-center text-[#af1816] dark:text-white mb-12 tracking-tight">
                    PLAKA TANIMA SİSTEMLERİ
                </h1>
                <div className="bg-white dark:bg-black border-b-4 border-[#af1816] shadow-md overflow-hidden mb-12">
                    <img
                        src="https://www.vespakapi.com/wp-content/uploads/2015/10/konya-plaka-tan%C4%B1ma-sistemi.jpg"
                        alt="Plaka Tanıma 1"
                        className="w-full h-auto object-cover"
                    />
                    <div className="px-8 py-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-lg text-gray-700 dark:text-white space-y-4">
                                <p>
                                    Plaka tanıma sisteminde araç kamera önünden geçtiği anda sistem tarafından plakası tespit edilir. Yetkilendirmeye bağlı olarak okunan plaka sistemde izinli olarak yapılandırılmış ise sisteme bağlı olan bariyer açılır. Sisteme kayıtlı olmayan plakalar ise (misafir araçlar) güvenlik izniyle bariyerden geçebilir.
                                </p>
                                <p>
                                    Yasaklı olarak tanımlanan araç sistem tarafından okunursa sesli ve görsel olarak alarm üretilebilir. Tanımlanan tüm araç plakalar sistemimizin veri tabanına kaydedilir. Herhangi bir zamanda araç giriş çıkışı hakkında raporlar alınabilir.
                                </p>
                            </div>
                            <div className="text-lg text-gray-700 dark:text-white space-y-4">
                                <p>
                                    <strong>Özellikler:</strong>
                                </p>
                                <ul className="list-inside list-disc space-y-2">
                                    <li>%97 oranında doğru plaka okuma</li>
                                    <li>Araç plakasını 20 milisaniye içerisinde tanımlama süresi</li>
                                    <li>İki satırlı ya da tek satırlı plakaların okuma özelliği</li>
                                    <li>Peşisıra gelen araçların plakaları hızlı bir şekilde okunur</li>
                                    <li>Gece ve gündüz farklı ışık koşullarında çalışabilme</li>
                                    <li>Sistemden geçen tüm araç plakalarını kayıt eder</li>
                                    <li>Kayıt edilen plakalar farklı zamanlarda sorgulanabilir</li>
                                    <li>Kullanıcı yetkilendirilmesi ve uzaktan yönetimi</li>
                                    <li>Otomatik bariyer kontrollü</li>
                                    <li>Abone araçların otomatik geçişini sağlama</li>
                                    <li>Her türlü veritabanı ile entegrasyon</li>
                                    <li>Kolay kullanım arayüzü, kolay kurulum</li>
                                    <li>Firma otomasyonlarına bilgi gönderme ve alma</li>
                                    <li>Kamera üzerindeki portları kullanarak, ekstra kablolama yapmadan bariyer kontrolü özelliği</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlakaTanimaSistemleri;