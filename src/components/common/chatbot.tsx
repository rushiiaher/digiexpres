import React from 'react';

const ChatBot = () => {
  // Use a generic WhatsApp redirect link. 
  // Replace the number below with the actual business WhatsApp number.
  const whatsappNumber = "1234567890"; 
  const message = encodeURIComponent("Hello! I'm interested in Digiexpres Tech Solutions.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-105 hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
      aria-label="Chat with us on WhatsApp"
    >
      <svg 
        width="28" 
        height="28" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.59 4.41C17.58 2.39 14.88 1.28 11.96 1.28c-5.83 0-10.58 4.75-10.58 10.58 0 1.87.48 3.68 1.41 5.29L1.28 22.72l5.72-1.5c1.55.85 3.3 1.3 5.09 1.3h.01c5.83 0 10.58-4.75 10.58-10.58 0-2.83-1.1-5.49-3.09-7.53zM11.96 20.65c-1.58 0-3.13-.42-4.49-1.22l-.32-.19-3.34.88.89-3.26-.21-.34A8.77 8.77 0 0 1 3.25 11.86c0-4.8 3.91-8.71 8.71-8.71 2.33 0 4.51.91 6.16 2.56 1.64 1.64 2.55 3.83 2.55 6.16 0 4.81-3.91 8.72-8.71 8.72zm4.78-6.53c-.26-.13-1.55-.77-1.79-.85-.24-.09-.42-.13-.59.13-.18.26-.68.85-.83 1.02-.15.17-.3.2-.56.07a7.28 7.28 0 0 1-2.14-1.32 8.01 8.01 0 0 1-1.48-1.84c-.16-.26-.02-.4.11-.53.11-.12.26-.31.39-.47.13-.16.18-.28.26-.47.09-.18.04-.34-.02-.47-.07-.13-.59-1.43-.81-1.95-.21-.52-.43-.45-.59-.46H7.9c-.18 0-.46.07-.7.34-.24.26-.92.9-.92 2.19 0 1.3 1.14 2.76 1.25 2.92.11.14 2 3.06 4.84 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.09 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.24-.17-.5-.3z"/>
      </svg>
    </a>
  );
};

export default ChatBot;