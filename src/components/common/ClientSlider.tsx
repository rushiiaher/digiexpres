import React from 'react';

const ClientSlider = () => {
  const clients = Array.from({ length: 26 }, (_, i) => ({
    name: `Client ${i + 1}`,
    logo: `/logos/${i + 1}.png`,
  }));

  return (
    <section style={{ background: '#f1f5f9', padding: '60px 0', overflow: 'hidden', position: 'relative' }}>
      {/* Top & bottom subtle dividers */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #cbd5e1, transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, #cbd5e1, transparent)' }} />

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '8px' }}>
          Our Clients
        </p>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
          Trusted by <span style={{ color: '#2563eb' }}>500+</span> Businesses Worldwide
        </h2>
      </div>

      {/* Marquee wrapper with fade edges */}
      <div style={{ position: 'relative' }}>
        {/* Left fade */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to right, #f1f5f9, transparent)',
        }} />
        {/* Right fade */}
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2, pointerEvents: 'none',
          background: 'linear-gradient(to left, #f1f5f9, transparent)',
        }} />

        {/* Scrolling track */}
        <div style={{ overflow: 'hidden' }}>
          <div className="logo-marquee">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="logo-item">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="logo-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .logo-marquee {
          display: flex;
          align-items: center;
          width: max-content;
          animation: logoScroll 40s linear infinite;
          gap: 0;
        }
        .logo-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes logoScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 100px;
          margin: 0 16px;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          padding: 14px 24px;
          flex-shrink: 0;
          transition: box-shadow 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .logo-item:hover {
          box-shadow: 0 6px 24px rgba(0,0,0,0.09);
          border-color: #bfdbfe;
          transform: translateY(-3px);
        }
        .logo-img {
          max-width: 100%;
          max-height: 68px;
          width: auto;
          height: auto;
          object-fit: contain;
          mix-blend-mode: multiply;
          filter: grayscale(30%);
          transition: filter 0.25s ease;
        }
        .logo-item:hover .logo-img {
          filter: grayscale(0%);
          mix-blend-mode: multiply;
        }
      `}</style>
    </section>
  );
};

export default ClientSlider;
