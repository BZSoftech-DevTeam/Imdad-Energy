import React from 'react';
import { 
  Atom, 
  Droplet, 
  Wheat 
} from 'lucide-react';

const CardsSection = () => {
  const cardData = [
    {
      icon: Atom,
      title: "Technology",
      description: "Driving innovation through cutting-edge solutions and digital transformation across global industries.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      hoverEffect: "hover:bg-green-100 hover:shadow-lg"
    },
    {
      icon: Droplet,
      title: "Oil & Gas",
      description: "Pioneering sustainable energy solutions with advanced exploration, extraction, and processing technologies.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600",
      hoverEffect: "hover:bg-emerald-100 hover:shadow-xl"
    },
    {
      icon: Wheat,
      title: "Agriculture",
      description: "Revolutionizing farming with precision agriculture, sustainable practices, and innovative crop management.",
      bgColor: "bg-lime-50",
      iconColor: "text-lime-600",
      hoverEffect: "hover:bg-lime-100 hover:shadow-2xl"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className={`
              ${card.bgColor} 
              ${card.hoverEffect} 
              rounded-2xl 
              p-6 
              transform 
              transition-all 
              duration-300 
              ease-in-out 
              border 
              border-green-100 
              group
            `}
          >
            <div className="flex flex-col items-center text-center">
              <card.icon 
                className={`
                  ${card.iconColor} 
                  w-16 
                  h-16 
                  mb-4 
                  group-hover:scale-110 
                  transition-transform 
                  duration-300
                `} 
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsSection;