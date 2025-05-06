import { Mail, Phone } from 'lucide-react';
import React from 'react';

const NavbarUp = () => {
    return (
        <div className="bg-[#08467e] dark:bg-black flex items-center justify-center text-white">
            <div className="container mx-auto px-4 py-2 max-w-screen-lg">
                <div className="flex flex-col md:flex-row justify-around items-center gap-4 md:gap-8">
                    <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto">
                        <Phone className="text-white" size={40} />
                        <div>
                            <p className="text-white font-semibold">TELEFON:</p>
                            <p className="text-white font-normal">0332 333 00 19</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:gap-8 w-full md:w-auto">
                        <Mail className="text-white" size={40} />
                        <div>
                            <p className="text-white font-semibold">MAİL:</p>
                            <a
                                href="mailto:info@vespakapi.com"
                                className="text-white hover:underline font-normal"
                            >
                                info@vespakapi.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavbarUp;