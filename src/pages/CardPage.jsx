import React, { useEffect } from 'react';
import Card from '../components/Card';
import { cardData } from '../Data/cardData';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-white container mx-auto px-4">
      <div className="flex flex-col items-center space-y-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          {cardData.slice(0, 3).map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(`/card/${card.path}`)}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
          {cardData.slice(3, 5).map((card, index) => (
            <div
              key={index + 3}
              onClick={() => navigate(`/card/${card.path}`)}
              className="cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
              data-aos="fade-up"
              data-aos-delay={(index + 3) * 200}
            >
              <Card
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardPage;