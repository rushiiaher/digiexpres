import React from 'react';

const ClientSlider = () => {
  const clients = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/150x80?text=Client+4' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/150x80?text=Client+5' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/150x80?text=Client+6' },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Trusted by Leading Businesses
        </h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSlider;
