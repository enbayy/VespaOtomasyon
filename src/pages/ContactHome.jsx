import { Globe, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
    return (
        <section>
            <div className="container p-8 rounded-xl">
                <h2 style={{ fontFamily: "Inter, sans-serif" }} data-aos="fade-up" data-aos-delay="100" className="text-3xl font-bold text-[#af1816] dark:text-white mb-6 font-sans">
                    İLETİŞİM BİLGİLERİ
                </h2>
                <div className="flex flex-col md:flex-col lg:flex-row items-start gap-8">
                    <div className="space-y-6 w-full lg:w-1/2">
                        <div data-aos="fade-up" data-aos-delay="300" className="flex items-start gap-6">
                            <MapPin className="text-[#af1816]" />
                            <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-gray-700 dark:text-white font-semibold text-lg">
                                Fevzi çakmak mahallesi 10655. sokak No: 65 Karatay Konya
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="500" className="flex items-start gap-6">
                            <Phone className="text-[#af1816]" />
                            <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-gray-700 dark:text-white font-semibold text-lg">0332 333 00 19</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="700" className="flex items-start gap-6">
                            <Phone className="text-[#af1816]" />
                            <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-gray-700 dark:text-white font-semibold text-lg">0533 317 96 69</p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="900" className="flex items-start gap-6">
                            <Globe className="text-[#af1816]" />
                            <a
                                href="https://www.vespaotomasyon.com.tr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline text-lg font-semibold"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                www.vespaotomasyon.com.tr
                            </a>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="1100" className="flex items-start gap-6">
                            <Mail className="text-[#af1816]" />
                            <a
                                href="mailto:info@vespakapi.com"
                                className="text-blue-500 hover:underline text-lg font-semibold"
                                style={{ fontFamily: "Poppins, sans-serif" }}
                            >
                                info@vespakapi.com
                            </a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg w-full lg:w-1/2 mt-4 lg:-mt-14">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6294.730824783442!2d32.547317!3d37.921893!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0902d405061f5%3A0xbd79bc307f056624!2sFevzi%C3%A7akmak%2C%2010655.%20Sk.%20No%3A59%2C%2042050%20Karatay%2FKonya!5e0!3m2!1str!2str!4v1745330913996!5m2!1str!2str"
                            width="100%"
                            height="350"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                            tabIndex="0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;