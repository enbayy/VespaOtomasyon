import React from 'react';

const Card = ({ icon, title, description }) => (
  <div className="flex flex-col h-full justify-start max-w-sm w-full p-4 sm:p-6 bg-white dark:bg-black border border-[#af1816] shadow-md rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl">
    <div className="flex justify-center items-center p-4 rounded-full mb-3">
      <div className=" dark:text-white text-4xl md:text-5xl animate-spin-y">
        {icon}
      </div>
    </div>
    <h2 style={{ fontFamily: "Inter, sans-serif" }} className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white text-center mb-4">
      {title.split(' Sistemleri')[0]} <br />
      {title.includes('Sistemleri') && "Sistemleri"}
    </h2>
    <p style={{ fontFamily: "Poppins, sans-serif" }} className="text-gray-700 dark:text-white text-center leading-relaxed text-base md:text-lg font-light mt-2 mb-2">
      {description}
    </p>
  </div>
);

export default Card;