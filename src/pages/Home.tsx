
import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Star, Users, Award, CheckCircle, Lightbulb, Code2, Globe, Brain, Shield, Cloud } from 'lucide-react';
import HeroBackground from '../components/common/AnimatedBackground';
import SEO from '../components/common/SEO';
import ClientSlider from '../components/common/ClientSlider';

// ─── Real Client Testimonials ──────────────────────────────
const HOME_TESTIMONIALS = [
  {
    id: 1,
    name: 'Irfan Mohammed',
    location: 'United Kingdom',
    content: "Thanks to Digiexpres Tech Solution, our leads increased significantly. Their digital marketing strategies really work. We are extremely satisfied!",
    image: '/Photos/Irfan.jpeg',
    initials: 'IM',
  },
  {
    id: 2,
    name: 'Rajesh Shah',
    location: 'Banglore',
    content: "They created a stunning website and handled our social media marketing brilliantly. Their creativity and technical skills are impressive.",
    image: '/Photos/Rajeesh_shaha.jpeg',
    initials: 'RS',
  },
  {
    id: 3,
    name: 'Anonymous Client',
    location: 'Verified Customer',
    content: "Affordable pricing with premium quality service. Digiexpres Tech Solution gives real value and ROI for every rupee spent.",
    image: null,
    initials: 'AC',
  },
  {
    id: 4,
    name: 'Ravi Ahuja',
    location: 'Malad, Mumbai',
    content: "They helped us digitize our entire business. Now everything runs smoothly online. Great experience working with them!",
    image: '/Photos/Ravi_Ahuja.jpeg',
    initials: 'RA',
  },
  {
    id: 5,
    name: 'Rashad Mohammed',
    location: 'United Kingdom',
    content: "The team developed our iOS application exactly as per our requirements. Communication was clear, and the final product was delivered on schedule with excellent functionality.",
    image: null,
    initials: 'RM',
  },
  {
    id: 6,
    name: 'Yukar Sonju',
    location: 'Arunachal Pradesh',
    content: "Digiexpres Tech Solution built a modern and fast website for our business. The design is attractive and the performance is excellent. Highly satisfied!",
    image: '/Photos/Yukar.jpeg',
    initials: 'YS',
  }
];

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % HOME_TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // ── Mouse tracking state ─────────────────────────────────────────
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 }); // 0-100 percent within section
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });   // card rotation degrees
  const [textShift, setTextShift] = useState({ x: 0, y: 0 }); // text parallax px

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    const relX = (e.clientX - rect.left) / rect.width;  // 0–1
    const relY = (e.clientY - rect.top) / rect.height;  // 0–1

    // Spotlight: track in percent
    setMouse({ x: relX * 100, y: relY * 100 });

    // Card tilt: max ±8deg, centered around 0
    setTilt({
      rx: (relY - 0.5) * -12,  // tilt up/down
      ry: (relX - 0.5) * 12,   // tilt left/right
    });

    // Text parallax: max ±6px counter-movement
    setTextShift({
      x: (relX - 0.5) * -8,
      y: (relY - 0.5) * -6,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    // Smoothly snap back to neutral
    setMouse({ x: 50, y: 50 });
    setTilt({ rx: 0, ry: 0 });
    setTextShift({ x: 0, y: 0 });
  }, []);

  const localBusinessSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Digiexpres Tech Solution",
    "image": "https://www.digiexpres.com/digiexpres_logo%20copy%20copy%20copy.png",
    "@id": "https://www.digiexpres.com",
    "url": "https://www.digiexpres.com",
    "telephone": "+917397990245",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 16, 2nd Floor, GNP Galleria, Regency Anantam Rd",
      "addressLocality": "Dombivli",
      "postalCode": "421203",
      "addressCountry": "IN"
    } 
  });

  return (
    <div>
      <SEO 
        title="Web Development & AI Solutions Company" 
        description="Digiexpres Tech Solution provides custom web development, mobile apps, digital marketing, and AI integration services for startups and enterprises." 
        schemaMarkup={localBusinessSchema}
        canonicalUrl="https://www.digiexpres.com/"
      />
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden text-white"
        style={{ paddingTop: 60, paddingBottom: 140, cursor: 'default' }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <HeroBackground spotlightX={mouse.x} spotlightY={mouse.y} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── Left: Text Content (subtle counter-parallax) ────────── */}
            <div
              className="flex flex-col gap-7"
              style={{
                animation: 'heroFadeUp 0.7s ease both',
                transform: `translate(${textShift.x}px, ${textShift.y}px)`,
                transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-2">
                <span className="h-px w-8 bg-blue-500 block" />
                <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
                  AI-Powered Software Company
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-[3.5rem] md:text-[4rem] font-bold leading-[1.12] tracking-tight text-white">
                Build Smarter Software<br />
                With{' '}
                <span className="text-blue-400">AI-Driven</span>{' '}
                Solutions
              </h1>

              {/* Sub-copy */}
              <p className="text-lg text-white/65 leading-relaxed max-w-xl" style={{ animation: 'heroFadeUp 0.7s ease 0.15s both' }}>
                We design AI integrations, enterprise software, and cloud platforms that scale with your business — delivered by a team that understands both technology and growth.
              </p>

              {/* CTA Row */}
              <div className="flex flex-wrap gap-4 pt-2" style={{ animation: 'heroFadeUp 0.7s ease 0.3s both' }}>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: '#2563eb',
                    padding: '14px 26px',
                    fontSize: '15px',
                  }}
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-200" />
                </Link>
                <Link
                  to="/services"
                  className="flex items-center gap-2 text-white/80 font-semibold rounded-lg transition-all duration-200 hover:text-white hover:bg-white/5"
                  style={{
                    border: '1px solid rgba(255,255,255,0.18)',
                    padding: '14px 26px',
                    fontSize: '15px',
                  }}
                >
                  Explore Services
                </Link>
              </div>

              {/* Social proof line */}
              <div className="flex items-center gap-3 pt-1" style={{ animation: 'heroFadeUp 0.7s ease 0.45s both' }}>
                <div className="flex -space-x-3">
                  {['/Photos/Irfan.jpeg', '/Photos/Rajeesh_shaha.jpeg', '/Photos/Ravi_Ahuja.jpeg', '/Photos/Yukar.jpeg'].map((src, i) => (
                    <img key={i} src={src} alt="Trusted Client" className="w-9 h-9 rounded-full border-2 border-[#0b1f3a] object-cover" />
                  ))}
                </div>
                <p className="text-sm text-white/50">
                  Trusted by <span className="text-white/80 font-semibold">500+ companies</span> worldwide
                </p>
              </div>
            </div>

            {/* ── Right: Dashboard Illustration (3D tilt) ─────────────── */}
            <div
              className="relative hidden lg:block"
              style={{
                animation: 'heroFadeUp 0.7s ease 0.2s both',
                perspective: '1000px',
              }}
            >
              {/* Tilt wrapper — the whole card + badges tilt together */}
              <div
                style={{
                  transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${tilt.rx === 0 && tilt.ry === 0 ? 1 : 1.02})`,
                  transition: 'transform 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                }}
              >
                {/* Main card */}
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: `0 30px 80px rgba(0,0,0,0.4), 0 ${8 + Math.abs(tilt.rx) * 1.5}px ${40 + Math.abs(tilt.rx) * 3}px rgba(37,99,235,${0.08 + Math.abs(tilt.ry) * 0.006})`,
                    padding: '24px',
                    transition: 'box-shadow 0.25s ease',
                  }}
                >
                  {/* Window dot row */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <div className="ml-3 h-4 flex-1 rounded-md" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  </div>

                  {/* KPI row — real DigiExpres metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {[
                      { label: 'Happy Clients', value: '500+', trend: '↑ +18% YoY', up: true },
                      { label: 'Projects Done', value: '250+', trend: '↑ +30 this yr', up: true },
                      { label: 'Client Rating', value: '4.9★', trend: '↑ All 5-star', up: true },
                    ].map((kpi) => (
                      <div key={kpi.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}>
                        <p className="text-white/40 text-xs mb-1">{kpi.label}</p>
                        <p className="text-white font-bold text-xl leading-none">{kpi.value}</p>
                        <p className={`text-xs mt-1 ${kpi.up ? 'text-green-400' : 'text-red-400'}`}>{kpi.trend}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chart bars — Projects by service (DigiExpres 7 service lines) */}
                  <div className="rounded-xl p-4 mb-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    {/* Bar area */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '6px', height: '72px' }}>
                      {[
                        { h: 55, label: 'IT', color: 'rgba(255,255,255,0.18)' },
                        { h: 80, label: 'Dev', color: 'rgba(255,255,255,0.18)' },
                        { h: 70, label: 'Web', color: 'rgba(255,255,255,0.18)' },
                        { h: 95, label: 'AI', color: 'linear-gradient(to top, #2563eb, #60a5fa)' },
                        { h: 60, label: 'Sec', color: 'rgba(255,255,255,0.18)' },
                        { h: 75, label: 'Cloud', color: 'rgba(255,255,255,0.18)' },
                        { h: 88, label: 'Mktg', color: 'rgba(34,197,94,0.35)' },
                      ].map((bar) => (
                        <div
                          key={bar.label}
                          style={{
                            flex: 1,
                            height: `${bar.h}%`,
                            background: bar.color,
                            borderRadius: '3px 3px 0 0',
                          }}
                        />
                      ))}
                    </div>
                    {/* Labels row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '6px', marginTop: '6px' }}>
                      {['IT', 'Dev', 'Web', 'AI', 'Sec', 'Cloud', 'Mktg'].map((l) => (
                        <span key={l} style={{ flex: 1, textAlign: 'center', fontSize: '9px', color: 'rgba(255,255,255,0.25)' }}>{l}</span>
                      ))}
                    </div>
                    <p className="text-white/30 text-xs mt-2">Projects by Service — 2024</p>
                  </div>


                  {/* Activity feed — real DigiExpres case study outcomes */}
                  <div className="space-y-2">
                    {[
                      { msg: 'RetailCorp: 300% sales growth delivered', time: 'Case Study', ok: true },
                      { msg: 'MedTech: 99.9% uptime — 8-month build', time: 'Case Study', ok: true },
                      { msg: 'IndustrialTech: $2M annual savings via AI', time: 'Case Study', ok: true },
                    ].map((item) => (
                      <div key={item.msg} className="flex items-center gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-400" />
                        <span className="text-white/55 flex-1 truncate">{item.msg}</span>
                        <span className="text-white/20 text-[10px] flex-shrink-0 font-medium">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge — top right (moves with tilt) */}
                <div
                  className="absolute -top-4 -right-4 rounded-xl px-4 py-3"
                  style={{
                    background: '#2563eb',
                    boxShadow: '0 10px 30px rgba(37,99,235,0.45)',
                    transform: 'translateZ(20px)',
                  }}
                >
                  <p className="text-white text-xs font-semibold">4.9★ Client Satisfaction</p>
                </div>

                {/* Floating badge — bottom left (moves with tilt) */}
                <div
                  className="absolute -bottom-4 -left-4 rounded-xl px-4 py-3 flex items-center gap-2"
                  style={{
                    background: 'rgba(15,40,80,0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                    transform: 'translateZ(20px)',
                  }}
                >
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <p className="text-white text-xs font-semibold">250+ Projects · 500+ Clients</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Smooth bottom fade into dark stats section */}
        <div className="absolute bottom-0 inset-x-0 h-28 pointer-events-none" style={{ background: 'linear-gradient(to top, #0f1f3d, transparent)' }} />

        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>



      {/* ── Our Core Services ─────────────────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '96px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '14px' }}>
              What We Do
            </p>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '16px' }}>
              Services Built for <span style={{ color: '#2563eb' }}>Scale</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              From foundational IT strategy to cutting-edge AI — every service is engineered to deliver measurable business impact.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lightbulb strokeWidth={1.6} className="h-6 w-6" />,
                color: '#2563eb',
                bg: 'rgba(37,99,235,0.08)',
                title: 'IT Consultation',
                desc: 'Strategic technology planning and digital transformation guidance aligned with your business goals.',
                features: ['Digital Strategy', 'Technology Assessment', 'Cost Optimisation'],
                link: '/services',
              },
              {
                icon: <Code2 strokeWidth={1.6} className="h-6 w-6" />,
                color: '#2563eb',
                bg: 'rgba(37,99,235,0.08)',
                title: 'Software Development',
                desc: 'Custom-built software with modern tech stacks, delivered with rigorous engineering standards.',
                features: ['Web Applications', 'Mobile Apps', 'API Development'],
                link: '/services',
              },
              {
                icon: <Globe strokeWidth={1.6} className="h-6 w-6" />,
                color: '#2563eb',
                bg: 'rgba(37,99,235,0.08)',
                title: 'Web Development',
                desc: 'Responsive, performance-optimised websites that convert visitors and rank on search engines.',
                features: ['Responsive Design', 'E-commerce', 'SEO Optimisation'],
                link: '/services',
              },
              {
                icon: <Brain strokeWidth={1.6} className="h-6 w-6" />,
                color: '#2563eb',
                bg: 'rgba(37,99,235,0.08)',
                title: 'AI / ML Integration',
                desc: 'Embed intelligence into your operations — from predictive analytics to LLM-powered workflows.',
                features: ['Machine Learning', 'NLP & Computer Vision', 'Predictive Analytics'],
                link: '/ai-solutions',
              },
              {
                icon: <Shield strokeWidth={1.6} className="h-6 w-6" />,
                color: '#2563eb',
                bg: 'rgba(37,99,235,0.08)',
                title: 'Cybersecurity',
                desc: 'End-to-end protection for your digital infrastructure — proactive, compliant, and battle-tested.',
                features: ['Security Audits', 'Penetration Testing', 'Compliance & Response'],
                link: '/services',
              },
              {
                icon: <Cloud strokeWidth={1.6} className="h-6 w-6" />,
                color: '#2563eb',
                bg: 'rgba(37,99,235,0.08)',
                title: 'Cloud Solutions',
                desc: 'Scalable cloud infrastructure, DevOps pipelines, and seamless migration with zero downtime.',
                features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps & Monitoring'],
                link: '/services',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group"
                style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '16px',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.10)';
                  (e.currentTarget as HTMLDivElement).style.borderColor = service.color + '55';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.borderColor = '#e2e8f0';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Top accent line on hover — via pseudo would need CSS, use a div instead */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: service.color, borderRadius: '16px 16px 0 0', opacity: 0 }} className="group-hover:opacity-100 transition-opacity duration-200" />

                {/* Icon badge */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: service.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: service.color,
                  flexShrink: 0,
                }}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  {service.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                  {service.desc}
                </p>

                {/* Feature pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px', justifyContent: 'center' }}>
                  {service.features.map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: service.bg,
                        color: service.color,
                        letterSpacing: '0.01em',
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={service.link}
                  style={{
                    marginTop: 'auto',
                    paddingTop: '16px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: service.color,
                    textDecoration: 'none',
                    borderTop: '1px solid #f1f5f9',
                    width: '100%',
                  }}
                >
                  View Service
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div style={{ textAlign: 'center', marginTop: '56px' }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#2563eb',
                padding: '12px 28px',
                borderRadius: '8px',
                border: '1.5px solid #2563eb22',
                background: 'rgba(37,99,235,0.04)',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Explore All 7 Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>


      {/* ── Stats Band ─────────────────────────────────────────────── */}
      <section style={{ background: '#0b1f3a', padding: '72px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.10) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.3), transparent)' }} />
        <div className="max-w-5xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 lg:gap-0">
            {[
              { value: '500+', label: 'Happy Clients', icon: <Users strokeWidth={1.5} className="h-5 w-5" /> },
              { value: '250+', label: 'Projects Delivered', icon: <Award strokeWidth={1.5} className="h-5 w-5" /> },
              { value: '99.9%', label: 'Uptime Guarantee', icon: <Zap strokeWidth={1.5} className="h-5 w-5" /> },
              { value: '4.9/5', label: 'Client Rating', icon: <Star strokeWidth={1.5} className="h-5 w-5" /> },
            ].map((stat, i) => (
              <div key={stat.label} className={`text-center px-6 ${i % 2 === 0 ? 'border-r border-white/10' : ''} lg:border-r lg:last:border-r-0 lg:border-white/10`}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', color: '#60a5fa' }}>{stat.icon}</div>
                <p style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '6px' }}>{stat.value}</p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Testimonials (Custom Block Design) ──────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '70px 0', overflow: 'hidden' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '14px' }}>
              Client Stories
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.025em', marginBottom: '16px', lineHeight: 1.15 }}>
              Loved by our clients
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center">
             <div className="relative w-full max-w-3xl flex justify-center min-h-[450px] md:min-h-[340px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="w-full flex justify-center"
                  >
                    {(() => {
                      const t = HOME_TESTIMONIALS[activeTestimonial];
                      return (
                        <div className="testimonial-card">
                          <div className="testimonial-bg"></div>
                          <span className="open quote">“</span>
                          <div className="image-wrapper">
                              <div className="clip"></div>
                              {t.image ? (
                                  <img src={t.image} alt={t.name} />
                              ) : (
                                  <div className="fallback-avatar">{t.initials}</div>
                              )}
                          </div>
                          <p className="content-text">{t.content}</p>
                          <div className="source">		
                              <span>{t.name}<br/><span style={{fontSize: '0.85em', fontWeight: 500, opacity: 0.8}}>{t.location}</span></span>
                          </div>
                          <span className="close quote">”</span>
                        </div>
                      );
                    })()}
                  </motion.div>
                </AnimatePresence>
             </div>
             
             {/* Dots Navigation */}
             <div className="flex gap-3 justify-center mt-6">
               {HOME_TESTIMONIALS.map((_, idx) => (
                 <button
                   key={idx}
                   onClick={() => setActiveTestimonial(idx)}
                   className={`h-3 rounded-full transition-all duration-300 ${activeTestimonial === idx ? 'w-8 bg-blue-600' : 'w-3 bg-blue-200 hover:bg-blue-400'}`}
                   aria-label={`Go to testimonial ${idx + 1}`}
                 />
               ))}
             </div>
          </div>
        </div>
      </section>


      {/* ── Client Logo Slider ──────────────────────────────────────── */}
      <ClientSlider />

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section style={{ background: '#0b1f3a', padding: '88px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.13) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(to right, transparent, rgba(37,99,235,0.5), transparent)' }} />
        <div className="max-w-3xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(96,165,250,0.7)', marginBottom: '16px' }}>Get Started</p>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '16px', lineHeight: 1.15 }}>
            Ready to Transform<br />Your Business?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, marginBottom: '36px', maxWidth: '520px', margin: '0 auto 36px' }}>
            Let's discuss how our AI-powered solutions can help you achieve your business goals and stay ahead of the competition.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#2563eb', color: '#fff', fontWeight: 700, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', textDecoration: 'none' }}
            >
              Start Your Project <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/case-studies"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '15px', padding: '14px 28px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none' }}
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div >
  );
};

export default Home;
