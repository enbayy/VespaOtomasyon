import React from 'react';
import hero from '../assets/foto1.jpg';
import feature1 from '../assets/foto2.jpg';
import feature2 from '../assets/foto3.jpg';

const About = () => {
  return (
    <section className="bg-[#f3f9ff] text-gray-800">
      <div className="relative bg-[#f3f9ff] dark:bg-black py-8 md:py-20 px-6 md:px-20">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#08467e] dark:text-white mb-6" data-aos="fade-up">
              GÜVENLİ GELECEĞİN KAPILARINI AÇIYORUZ
            </h1>
            <p className="text-lg text-gray-700 dark:text-white mb-6 max-w-xl" data-aos="fade-up">
              VESPA Otomatik Kapı Sistemleri, 10 yılı aşkın sektör tecrübesiyle giriş güvenliği alanında
              fark yaratan çözümler sunar. Konutlardan iş yerlerine, endüstriyel tesislerden kamu binalarına kadar
              farklı alanlarda yüksek teknoloji ve kaliteyle hizmet veririz.
            </p>
            <p className="text-[#08467e] dark:text-white font-medium text-lg" data-aos="fade-up">
              Güvenliğinizi uzman ellere bırakın, biz her adımda yanınızdayız.
            </p>
          </div>
          <div data-aos="zoom-in">
            <img
              src={hero}
              alt="VESPA Giriş Sistemleri"
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </div>

      <div className="py-20 px-6 md:px-20 bg-[#f3f9ff] dark:bg-black">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#08467e] dark:text-white mb-4" data-aos="fade-up">
            Neden VESPA?
          </h2>
          <p className="text-gray-600 dark:text-white max-w-2xl mx-auto text-lg" data-aos="fade-up">
            Geliştirdiğimiz her projede sadece ürün değil, kullanıcı odaklı çözümler sunmayı hedefliyoruz.
            Uygulama öncesi analizden, satış sonrası desteğe kadar sürecin her adımında profesyonellik ve şeffaflık ilkemizdir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div data-aos="fade-up" className="bg-[#f3f9ff] dark:bg-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#08467e] dark:text-white mb-3">10+ Yıl Tecrübe</h3>
            <p className="text-gray-700 dark:text-white">
              Kurumsal ve bireysel projelerde edindiğimiz tecrübeyle, giriş güvenliği konusunda uzman bir çözüm ortağıyız.
              Sahada deneyimli ekiplerimizle projeleri zamanında ve kaliteli şekilde tamamlıyoruz.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-[#f3f9ff] dark:bg-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#08467e] dark:text-white mb-3">Yüksek Teknoloji</h3>
            <p className="text-gray-700 dark:text-white">
              Sistemlerimizde dünya standartlarına uygun yazılım ve donanımlar kullanıyoruz. Plaka tanıma, kartlı geçiş, turnike sistemleri gibi çözümlerimizde son teknolojiyi yakından takip ediyoruz.
            </p>
          </div>
          <div data-aos="fade-up" className="bg-[#f3f9ff] dark:bg-black p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-[#08467e] dark:text-white mb-3">Anahtar Teslim Çözümler</h3>
            <p className="text-gray-700 dark:text-white">
              Kurulum öncesi keşiften, sistemin devreye alınmasına kadar her aşamada sizin için buradayız. Planlama, uygulama ve teslim süreçlerini entegre şekilde yürütüyor, size sadece güvenliğin keyfini yaşamak kalıyor.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center py-20 px-6 md:px-20 bg-[#f3f9ff] dark:bg-black">
        <div data-aos="fade-right">
          <img
            src={feature1}
            alt="Geçiş Sistemleri"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <div data-aos="fade-left">
          <h3 className="text-2xl font-semibold text-[#08467e] dark:text-white mb-4">Giriş Sistemlerinde Uzmanlık</h3>
          <p className="text-lg text-gray-700 dark:text-white mb-4">
            VESPA olarak, projelerinize özel analiz yaparak ihtiyaçlarınıza en uygun giriş sistemlerini belirliyoruz.
            Yüksek güvenlikli otomatik kapılar, bariyer sistemleri, plaka ve kart okuyucu çözümler ile kapsamlı ve entegre sistemler sunuyoruz.
          </p>
          <p className="text-gray-700 dark:text-white text-lg">
            Geliştirdiğimiz sistemler uzun ömürlü, enerji verimli ve kullanıcı dostudur. Size sadece konforu ve güvenliği yaşamak kalır.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center py-20 px-6 md:px-20 bg-[#f3f9ff] dark:bg-black">
        <div className="order-2 md:order-1" data-aos="fade-right">
          <h3 className="text-2xl font-semibold text-[#08467e] dark:text-white mb-4">Vizyonumuz & Misyonumuz</h3>
          <p className="text-lg text-gray-700 dark:text-white mb-4">
            <strong>Vizyonumuz:</strong> Türkiye genelinde ve uluslararası alanda, güvenlik teknolojileri denildiğinde ilk akla gelen, inovatif çözümleriyle sektöre yön veren bir marka olmaktır.
          </p>
          <p className="text-lg text-gray-700 dark:text-white">
            <strong>Misyonumuz:</strong> Müşterilerimizin ihtiyaçlarını doğru analiz ederek, kaliteli ürün ve sürdürülebilir hizmet anlayışıyla en etkili güvenlik çözümlerini sunmak.
          </p>
        </div>
        <div className="order-1 md:order-2" data-aos="fade-left">
          <img
            src={feature2}
            alt="Misyon ve Vizyon"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;