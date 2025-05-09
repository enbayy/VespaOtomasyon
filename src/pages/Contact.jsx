import React from "react";
import { MapPin, Phone, Globe, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#f3f9ff] dark:bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 py-0 md:py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 bg-[#f3f9ff] dark:bg-black rounded-xl p-10">
            <h3 style={{ fontFamily: "Inter, sans-serif" }} className="text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-start font-sans">İLETİŞİM FORMU</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-gray-700 dark:text-white text-sm font-medium">Adınız</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Adınızı girin"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08467e] transition duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="text-gray-700 dark:text-white text-sm font-medium">Soyadınız</label>
                  <input
                    type="text"
                    id="surname"
                    placeholder="Soyadınızı girin"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08467e] transition duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-gray-700 dark:text-white text-sm font-medium">E-posta Adresiniz</label>
                <input
                  type="email"
                  id="email"
                  placeholder="E-posta adresinizi girin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08467e] transition duration-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-gray-700 dark:text-white text-sm font-medium">Mesajınız</label>
                <textarea
                  id="message"
                  placeholder="Mesajınızı buraya yazın"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#08467e] transition duration-300"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#08467e] text-white font-medium px-8 py-3 rounded-lg hover:bg-[#1b364e] transition duration-100 shadow-md"
                >
                  Gönder
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-1/2 space-y-2">
            <div className="bg-[#f3f9ff] dark:bg-black rounded-xl py-10 space-y-6">
              <h3 style={{ fontFamily: "Inter, sans-serif" }} className="text-3xl font-semibold text-gray-800 dark:text-white mb-8 text-start font-sans">İRTİBAT BİLGİLERİ</h3>
              <div className="flex items-start gap-6">
                <MapPin className="text-[#08467e] dark:text-white" />
                <p style={{ fontFamily: "Inter, sans-serif" }} className="text-gray-700 dark:text-white font-semibold">
                  Fevzi çakmak mahallesi 10655. sokak No: 59 Karatay Konya
                </p>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="text-[#08467e] dark:text-white" />
                <p style={{ fontFamily: "Inter, sans-serif" }} className="text-gray-700 dark:text-white font-semibold">0332 333 00 19</p>
              </div>
              <div className="flex items-start gap-6">
                <Phone className="text-[#08467e] dark:text-white" />
                <p style={{ fontFamily: "Inter, sans-serif" }} className="text-gray-700 dark:text-white font-semibold">0533 317 96 69</p>
              </div>
              <div className="flex items-start gap-6">
                <Globe className="text-[#08467e] dark:text-white" />
                <a
                  href="https://www.vespaotomasyon.com.tr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#08467e] dark:text-white hover:underline font-semibold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  www.vespaotomasyon.com.tr
                </a>
              </div>
              <div className="flex items-start gap-6">
                <Mail className="text-[#08467e] dark:text-white" />
                <a
                  href="mailto:info@vespakapi.com"
                  className="text-[#08467e] dark:text-white hover:underline font-semibold"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  info@vespakapi.com
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6294.730824783442!2d32.547317!3d37.921893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0902d405061f5%3A0xbd79bc307f056624!2sFevzi%C3%A7akmak%2C%2010655.%20Sk.%20No%3A59%2C%2042050%20Karatay%2FKonya!5e0!3m2!1str!2str!4v1745330913996!5m2!1str!2str"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;