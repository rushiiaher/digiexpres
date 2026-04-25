import React from 'react';

const ClientSlider = () => {
  const clients = Array.from({ length: 26 }, (_, i) => ({
    name: `Client ${i + 1}`,
    logo: `/logos/${i + 1}.png`,
  }));

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-200">
          Trusted by Leading Businesses
        </h2>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 dark:from-gray-800 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 flex items-center justify-center w-36 h-20 bg-white dark:bg-gray-700 rounded-lg shadow-sm px-3 hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-14 max-w-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
