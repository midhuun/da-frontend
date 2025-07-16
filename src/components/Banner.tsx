import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerImages = [
    {
      mobileUrl: 'https://i.ibb.co/gFdrMf1r/Gemini-Generated-Image-edibgredibgredib.png',
      desktopUrl: 'https://i.ibb.co/7JZbck7w/Gemini-Generated-Image-fetvb1fetvb1fetv.png',
      title: "Premium Men's Collection",
      subtitle: "Crafted for the modern gentleman"
    },
    {
      mobileUrl: 'https://i.ibb.co/kgHQrNWB/Gemini-Generated-Image-u3gjsiu3gjsiu3gj.png',
    
      desktopUrl: 'https://i.ibb.co/XxpDgrDn/Gemini-Generated-Image-rbvxebrbvxebrbvx.png',
      title: "Winter Collection",
      subtitle: "Modern boutique style"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [bannerImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mb-12 shadow-2xl">
      {/* Glass morphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 via-white/60 to-gray-200/80 backdrop-blur-sm"></div>
      
      <div 
        className="flex transition-transform duration-700 ease-out h-full relative z-10"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {bannerImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative group">
            <img
              src={image.mobileUrl}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 md:hidden"
            />
            <img
              src={image.desktopUrl}
              alt={image.title}
              className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105 hidden md:block"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/5"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm z-20 cursor-pointer"
      >
        <ChevronLeft className="h-6 w-6 text-black" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm z-20 cursor-pointer"
      >
        <ChevronRight className="h-6 w-6 text-black" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 cursor-pointer ${
              currentSlide === index 
                ? 'bg-white shadow-lg scale-110' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;